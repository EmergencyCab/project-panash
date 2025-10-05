-- Create storage bucket for competition photos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'competition-photos',
  'competition-photos',
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
);

-- Create RLS policies for competition photos
CREATE POLICY "Competition photos are publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'competition-photos');

CREATE POLICY "Authenticated users can upload competition photos"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'competition-photos' 
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated users can update competition photos"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'competition-photos' 
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated users can delete competition photos"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'competition-photos' 
  AND auth.role() = 'authenticated'
);