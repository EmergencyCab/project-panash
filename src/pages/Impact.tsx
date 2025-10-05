import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Heart, Users } from "lucide-react";
import schoolImage from "@/assets/school-building.jpg";
import awardImage from "@/assets/award-ceremony.jpg";

const schools = [
  {
    name: "Rastriya Secondary School",
    location: "Tanahu District",
    focus: "First-Generation Students",
    description:
      "Serving students who are breaking new ground as the first in their families to pursue formal education. These students carry the dreams of entire families and communities.",
    students: 15,
    icon: "🎓",
  },
  {
    name: "Damgad Secondary School",
    location: "Syanja District",
    focus: "AMOUR SEWA Nepal Partnership",
    description:
      "Through our partnership with AMOUR SEWA Nepal, we reach students in remote areas with limited educational resources, providing them with opportunities to develop their voices.",
    students: 18,
    icon: "🤝",
  },
  {
    name: "Ama Dablam Secondary School",
    location: "Kathmandu",
    focus: "Immigrant Families",
    description:
      "Supporting children from immigrant families who face unique challenges of adaptation, language barriers, and economic hardship while striving for education.",
    students: 12,
    icon: "🏔️",
  },
];

const Impact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={schoolImage}
            alt="Rural school in Nepal"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Impact</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Transforming lives and communities, one essay at a time
          </p>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Schools We Serve */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Schools We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three partner schools across Nepal, each with unique communities and shared aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {schools.map((school, index) => (
              <Card key={index} className="shadow-medium hover:shadow-large transition-smooth">
                <CardHeader>
                  <div className="text-6xl mb-4 text-center">{school.icon}</div>
                  <CardTitle className="font-heading text-2xl text-center">{school.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{school.location}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      <Heart className="h-4 w-4" />
                      {school.focus}
                    </div>
                  </div>
                  <CardDescription className="text-base text-center leading-relaxed">
                    {school.description}
                  </CardDescription>
                  <div className="flex items-center justify-center gap-2 pt-4 border-t border-border">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">{school.students} Students</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Real <span className="text-primary">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The transformative power of giving students a voice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <Card className="shadow-medium border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Building Confidence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base italic">
                    "At first, I was scared to write in English. But after participating in three competitions,
                    I feel proud to share my thoughts. Now my classmates ask me for help with their essays too."
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-3">
                    — Student, Rastriya Secondary School
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Family Pride</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base italic">
                    "When my daughter won second place and brought home the prize, my whole family celebrated.
                    It showed us that education can change our future."
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-3">
                    — Parent, Damgad Secondary School
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-l-4 border-l-secondary">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Dreams Taking Shape</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base italic">
                    "Through these competitions, I discovered I want to become a journalist. I want to tell
                    stories about my community and create change."
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-3">
                    — Student, Ama Dablam Secondary School
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-large">
                <img
                  src={awardImage}
                  alt="Students at award ceremony"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 gradient-hero rounded-2xl opacity-20 blur-3xl" />
              <div className="absolute -top-8 -right-8 w-40 h-40 gradient-accent rounded-2xl opacity-20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Looking <span className="text-primary">Forward</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our vision extends beyond essay competitions. We're building toward an annual anthology of student
              work, partnerships with literary organizations, mentorship workshops, and expansion to reach more
              marginalized groups across Nepal.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { label: "Annual Anthology", icon: "📖" },
                { label: "NGO Partnerships", icon: "🤝" },
                { label: "Mentorship Workshops", icon: "👥" },
                { label: "Regional Expansion", icon: "🗺️" },
              ].map((goal, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth"
                >
                  <div className="text-4xl mb-3">{goal.icon}</div>
                  <div className="font-medium text-foreground">{goal.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;