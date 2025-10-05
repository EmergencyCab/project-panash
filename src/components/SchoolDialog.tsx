import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SchoolDialogProps {
  school: {
    name: string;
    location: string;
    focus: string;
    description: string;
    students: number;
    icon: string;
  };
  children: React.ReactNode;
}

const SchoolDialog = ({ school, children }: SchoolDialogProps) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    const uploadedUrls: string[] = [];

    try {
      for (const file of Array.from(files)) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${school.name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('competition-photos')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('competition-photos')
          .getPublicUrl(filePath);

        uploadedUrls.push(publicUrl);
      }

      setPhotos([...photos, ...uploadedUrls]);
      toast({
        title: "Photos uploaded successfully",
        description: `${uploadedUrls.length} photo(s) added to the gallery`,
      });
    } catch (error) {
      console.error('Error uploading files:', error);
      toast({
        title: "Upload failed",
        description: "Please try again or contact support",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const removePhoto = (index: number) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-heading flex items-center gap-3">
            <span className="text-4xl">{school.icon}</span>
            {school.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Location</h3>
            <p className="text-muted-foreground">{school.location}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Focus Area</h3>
            <p className="text-primary font-medium">{school.focus}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">About</h3>
            <p className="text-muted-foreground leading-relaxed">{school.description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Students Impacted</h3>
            <p className="text-2xl font-bold text-primary">{school.students} Students</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Competition Photos</h3>
              <label htmlFor={`file-upload-${school.name}`}>
                <Button variant="outline" size="sm" disabled={uploading} asChild>
                  <span className="cursor-pointer">
                    <Upload className="h-4 w-4 mr-2" />
                    {uploading ? "Uploading..." : "Upload Photos"}
                  </span>
                </Button>
                <Input
                  id={`file-upload-${school.name}`}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
            </div>

            {photos.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={photo}
                      alt={`Competition photo ${index + 1}`}
                      className="w-full h-40 object-cover rounded-lg shadow-medium"
                    />
                    <button
                      onClick={() => removePhoto(index)}
                      className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border-2 border-dashed border-border rounded-lg">
                <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                <p className="text-muted-foreground">No photos yet. Upload competition photos to showcase this school's journey.</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SchoolDialog;
