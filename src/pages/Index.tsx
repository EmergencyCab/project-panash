import { Link } from "react-router-dom";
import { ArrowRight, Heart, BookOpen, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-students.jpg";
import studentEssayImage from "@/assets/student-essay.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Students writing essays in rural Nepal"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Youth-Led Initiative</span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Empowering Marginalized Youth Through the{" "}
              <span className="text-primary">Power of Writing</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Project Panash creates opportunities for Dalit and marginalized students in rural Nepal through
              bi-weekly English essay competitions, fostering confidence, literacy, and critical thinking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/support">
                  Support the Project <Heart className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground italic">
              "Voices of Change" - Illuminating paths through education
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Mission Highlight */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Why This <span className="text-primary">Matters</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Dalit and marginalized communities in Nepal face systemic barriers that limit educational
                opportunities and self-expression. Many students are first-generation learners with dreams but
                limited resources.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Project Panash bridges this gap by providing a platform for students to develop their voices,
                build confidence, and demonstrate their capabilities through writing competitions with meaningful
                prizes and recognition.
              </p>
              <Button variant="accent" asChild>
                <Link to="/about">
                  Discover Our Approach <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-large">
                <img
                  src={studentEssayImage}
                  alt="Student proudly displaying their essay"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 gradient-accent rounded-2xl opacity-20 blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 gradient-hero rounded-2xl opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Impact Goals</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four pillars that guide our mission to create lasting change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Empowerment",
                description: "Building confidence in self-expression and personal voice",
                icon: "✨",
              },
              {
                title: "Literacy",
                description: "Enhancing English and Nepali language skills",
                icon: "📚",
              },
              {
                title: "Critical Thinking",
                description: "Fostering creativity, reflection, and problem-solving",
                icon: "💡",
              },
              {
                title: "Equity in Education",
                description: "Creating opportunities for marginalized students",
                icon: "⚖️",
              },
            ].map((goal, index) => (
              <Card key={index} className="shadow-medium hover:shadow-large transition-smooth border-border">
                <CardHeader>
                  <div className="text-5xl mb-3">{goal.icon}</div>
                  <CardTitle className="font-heading text-xl">{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{goal.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Join Us in Creating <span className="text-primary">Voices of Change</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Your support empowers students to discover their potential and transform their communities. Every
            contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/support">Donate Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;