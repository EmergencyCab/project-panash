import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("form-name", "contact");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try email directly.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Questions, ideas, or want to get involved? We'd love to hear from
            you
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Let's <span className="text-primary">Connect</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Whether you want to support our mission, volunteer, partner
                  with us, or simply learn more about our work, we're here to
                  talk.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="shadow-medium hover:shadow-large transition-smooth">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="font-heading text-xl mb-2">
                          Email Us
                        </CardTitle>
                        <CardDescription className="text-base">
                          <a
                            href="mailto:kailashpariyar57@gmail.com"
                            className="text-primary hover:underline"
                          >
                            kailashpariyar57@gmail.com
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="shadow-medium hover:shadow-large transition-smooth">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <CardTitle className="font-heading text-xl mb-2">
                          WhatsApp
                        </CardTitle>
                        <CardDescription className="text-base">
                          <a
                            href="https://wa.me/19492047365"
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            +1 949-204-7365
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="shadow-medium hover:shadow-large transition-smooth">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="font-heading text-xl mb-2">
                          Response Time
                        </CardTitle>
                        <CardDescription className="text-base">
                          We typically respond within 24-48 hours. Thank you for
                          your patience!
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              <Card className="shadow-medium border-2 border-primary">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">
                    Stay Updated
                  </CardTitle>
                  <CardDescription className="text-base">
                    Subscribe to our newsletter for student stories, impact
                    updates, and ways to get involved
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1"
                    />
                    <Button variant="hero">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-large">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy and will never share your
                    information
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Common <span className="text-primary">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to questions we hear most often
              </p>
            </div>

            <div className="space-y-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">
                    How can I donate?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Visit our Support Us page to see donation options. We accept
                    one-time and recurring contributions at various levels.
                    Every dollar goes directly to supporting student
                    competitions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">
                    Can I volunteer remotely?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Yes! Essay evaluation and mentorship can be done completely
                    remotely. We welcome volunteers from anywhere in the world
                    who can commit 2-3 hours every two weeks.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">
                    How do you ensure funds reach students?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We maintain complete transparency with detailed budget
                    breakdowns and regular impact reports. Our founders
                    personally coordinate with schools to ensure direct delivery
                    of prizes and supplies.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">
                    Can organizations partner with you?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Absolutely! We welcome partnerships with NGOs, educational
                    institutions, and literary organizations. Contact us to
                    discuss how we can collaborate to expand our impact.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="subject" />
        <textarea name="message"></textarea>
      </form>
    </div>
  );
};

export default Contact;
