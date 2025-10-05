import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Award, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">About Project Panash</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Illuminating paths through education and empowering marginalized voices in rural Nepal
          </p>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-center">
              Why This <span className="text-primary">Matters</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                In Nepal, Dalit and marginalized communities face systemic barriers that limit their access to
                quality education and opportunities for self-expression. These students often come from families
                where they are the first generation to attend school, carrying the weight of breaking cycles of
                poverty and discrimination.
              </p>
              <p>
                Educational gaps persist not because of lack of talent or ambition, but due to limited resources,
                social stigma, and lack of platforms to showcase their abilities. Many brilliant minds remain
                unheard simply because they lack the opportunity to be seen and valued.
              </p>
              <p>
                <strong className="text-foreground">Project Panash exists to change this narrative.</strong> We
                believe that every student deserves the chance to discover their voice, develop their skills, and
                demonstrate their potential. Through structured essay competitions, we create a space where
                marginalized students can shine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-center">
              How It <span className="text-primary">Works</span>
            </h2>

            <div className="space-y-8">
              <Card className="shadow-medium border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      1
                    </div>
                    Bi-Weekly Competitions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Every two weeks, students receive thought-provoking essay prompts that encourage critical
                    thinking, creativity, and personal reflection. Topics range from social issues to personal
                    experiences, giving students freedom to express their unique perspectives.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                      2
                    </div>
                    Expert Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    A dedicated evaluation panel of educators and mentors reviews each submission with care,
                    providing constructive feedback that helps students grow. Essays are judged on creativity,
                    expression, and thoughtfulness rather than perfect grammar.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-l-4 border-l-secondary">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                      3
                    </div>
                    Meaningful Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Winners receive cash prizes (NPR 1,500 for 1st place, 1,000 for 2nd, 500 for 3rd) and
                    certificates. All participants receive school supplies and encouragement. Winning essays are
                    published, giving students a platform and building their confidence.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-l-4 border-l-primary-light">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-light text-primary-foreground flex items-center justify-center font-bold">
                      4
                    </div>
                    Continuous Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Through repeated participation, students develop their English and Nepali writing skills,
                    build confidence in self-expression, and learn to think critically about the world around
                    them. Each competition is a step toward discovering their full potential.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Impact Goals</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four interconnected pillars guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-medium hover:shadow-large transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="font-heading text-2xl">Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-2">
                  <p>Building confidence in self-expression and helping students discover their unique voice.</p>
                  <ul className="space-y-1 mt-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Overcoming fear of public expression</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Developing personal agency and pride</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Recognition as capable individuals</span>
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="font-heading text-2xl">Literacy Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-2">
                  <p>Enhancing English and Nepali language skills through practical application.</p>
                  <ul className="space-y-1 mt-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Improved writing and communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Expanded vocabulary and expression</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Better academic performance</span>
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-secondary-foreground" />
                </div>
                <CardTitle className="font-heading text-2xl">Critical Thinking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-2">
                  <p>Fostering creativity, reflection, and analytical problem-solving abilities.</p>
                  <ul className="space-y-1 mt-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Analyzing complex social issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Developing unique perspectives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Creative problem-solving skills</span>
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-smooth">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mb-4">
                  <span className="text-3xl">⚖️</span>
                </div>
                <CardTitle className="font-heading text-2xl">Equity in Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base space-y-2">
                  <p>Creating meaningful opportunities specifically for marginalized students.</p>
                  <ul className="space-y-1 mt-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                      <span>Leveling the playing field</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                      <span>Breaking cycles of exclusion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                      <span>Building inclusive communities</span>
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;