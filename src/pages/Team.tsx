import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Heart, Target } from "lucide-react";

const teamMembers = [
  {
    name: "Kailash Pariyar",
    role: "Co-Founder",
    education: "Soka University of America '27",
    description:
      "Kailash is passionate about educational equity and social justice. As a student from a marginalized community himself, he understands firsthand the transformative power of education and opportunities. He leads the strategic vision and partnerships for Project Panash.",
    gradient: "gradient-hero",
  },
  {
    name: "Prashant Panta",
    role: "Co-Founder",
    education: "Texas State University '27",
    description:
      "Prashant brings expertise in program design and community engagement. His commitment to rural education reform drives the operational excellence of the essay competitions. He manages the evaluation process and student outreach.",
    gradient: "gradient-accent",
  },
  {
    name: "Megha Prasai",
    role: "Co-Founder",
    education: "Soka University of America '28",
    description:
      "Megha specializes in educational program development and student mentorship. Her creative approach to fostering critical thinking shapes the essay prompts and feedback system. She coordinates the publication of winning essays.",
    gradient: "bg-secondary",
  },
  {
    name: "Bhim Bahadur Gurung",
    role: "Mentor",
    education: "Former Scholarship Supervisor, Brishramko Chautari",
    description:
      "Bhim brings decades of experience in educational development in rural Nepal. His deep understanding of the challenges faced by marginalized communities and his extensive network guide Project Panash's expansion strategy.",
    gradient: "bg-primary-light",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Youth leaders and mentors united by a vision of educational equity
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We are a youth-led initiative proving that age is no barrier to creating meaningful change. As
              current students ourselves, we bring fresh perspectives, deep empathy, and unwavering commitment to
              empowering the next generation of marginalized voices in Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-medium hover:shadow-large transition-smooth overflow-hidden">
                <div className={`h-3 ${member.gradient}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="font-heading text-2xl mb-2">{member.name}</CardTitle>
                      <div className="flex items-center gap-2 text-primary font-medium mb-2">
                        <Heart className="h-4 w-4" />
                        <span>{member.role}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <GraduationCap className="h-4 w-4" />
                        <span>{member.education}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Principles that guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-medium text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-hero flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="font-heading text-xl">Dignity First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We treat every student as capable individuals with inherent worth, not as recipients of charity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-medium text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-accent flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="font-heading text-xl">Student-Centered</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Students' voices, experiences, and aspirations drive our program design and evolution.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-medium text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-secondary-foreground" />
                </div>
                <CardTitle className="font-heading text-xl">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We maintain open communication about our funding, decisions, and impact with all stakeholders.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals to volunteer as essay evaluators, mentors, or
            partners. Together, we can create more opportunities for marginalized youth.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;