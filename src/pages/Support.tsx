import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Heart, Users, TrendingUp, CheckCircle } from "lucide-react";

const donationTiers = [
  {
    name: "Sponsor a Competition",
    amount: "$45",
    frequency: "One-time",
    description: "Fund a complete bi-weekly competition including prizes and supplies",
    impact: [
      "Prize money for 3 winners",
      "School supplies for all participants",
      "Evaluation and feedback for all essays",
      "Recognition certificates",
    ],
    variant: "outline" as const,
  },
  {
    name: "Monthly Champion",
    amount: "$90",
    frequency: "Monthly",
    description: "Support two competitions per month for sustained impact",
    impact: [
      "Everything in Competition tier x2",
      "Monthly progress reports",
      "Direct updates from students",
      "Recognition on our website",
    ],
    variant: "hero" as const,
    featured: true,
  },
  {
    name: "Annual Partner",
    amount: "$1,175",
    frequency: "Yearly",
    description: "Fund an entire year of transformative competitions",
    impact: [
      "26 competitions throughout the year",
      "Publication of winning essays",
      "Annual impact report with student stories",
      "Featured partnership recognition",
      "Invitation to virtual celebration event",
    ],
    variant: "accent" as const,
  },
];

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Support Our Mission</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Your contribution directly empowers marginalized students to discover their voices and transform
            their futures
          </p>
        </div>
      </section>

      {/* Budget Transparency */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Where Your Money <span className="text-primary">Goes</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Complete transparency in how we use every dollar
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="shadow-medium text-center">
                <CardHeader>
                  <div className="text-4xl mb-3">🏆</div>
                  <CardTitle className="font-heading text-xl">Bi-Weekly</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">$45</div>
                  <CardDescription className="text-sm">NPR 6,000</CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-medium text-center border-2 border-primary">
                <CardHeader>
                  <div className="text-4xl mb-3">📅</div>
                  <CardTitle className="font-heading text-xl">Monthly</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">$90</div>
                  <CardDescription className="text-sm">NPR 12,000</CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-medium text-center">
                <CardHeader>
                  <div className="text-4xl mb-3">🎯</div>
                  <CardTitle className="font-heading text-xl">Yearly</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">$1,175</div>
                  <CardDescription className="text-sm">NPR 156,000</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="shadow-large border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Budget Breakdown per Competition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Prize Money</div>
                      <div className="text-sm text-muted-foreground">1st: NPR 1,500 | 2nd: NPR 1,000 | 3rd: NPR 500</div>
                    </div>
                  </div>
                  <div className="font-bold text-primary">NPR 3,000</div>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium">School Supplies</div>
                      <div className="text-sm text-muted-foreground">For all participants</div>
                    </div>
                  </div>
                  <div className="font-bold text-accent">NPR 2,000</div>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium">Operations & Materials</div>
                      <div className="text-sm text-muted-foreground">Printing, certificates, coordination</div>
                    </div>
                  </div>
                  <div className="font-bold text-secondary">NPR 1,000</div>
                </div>

                <div className="flex justify-between items-center pt-3 border-t-2 border-primary">
                  <div className="font-heading font-bold text-lg">Total per Competition</div>
                  <div className="font-heading font-bold text-2xl text-primary">NPR 6,000</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="text-primary">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every level of support creates meaningful change in students' lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {donationTiers.map((tier, index) => (
              <Card
                key={index}
                className={`shadow-medium hover:shadow-large transition-smooth ${
                  tier.featured ? "border-2 border-primary ring-4 ring-primary/20 scale-105" : ""
                }`}
              >
                {tier.featured && (
                  <div className="bg-primary text-primary-foreground text-center py-2 font-semibold text-sm">
                    ⭐ Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{tier.name}</CardTitle>
                  <div className="flex items-baseline gap-2 mt-4">
                    <span className="text-4xl font-bold text-primary">{tier.amount}</span>
                    <span className="text-muted-foreground">/ {tier.frequency}</span>
                  </div>
                  <CardDescription className="text-base mt-3">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {tier.impact.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant={tier.variant} className="w-full mt-6">
                    <Heart className="mr-2 h-5 w-5" />
                    Choose {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Or donate a custom amount</p>
            <Button variant="outline" size="lg">
              Custom Donation
            </Button>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Other Ways to <span className="text-primary">Help</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Financial support isn't the only way to make a difference
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-medium hover:shadow-large transition-smooth">
                <CardHeader>
                  <div className="text-4xl mb-3">✍️</div>
                  <CardTitle className="font-heading text-xl">Volunteer as Evaluator</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Join our evaluation panel to review student essays and provide constructive feedback. Commitment:
                    2-3 hours every two weeks.
                  </CardDescription>
                  <Button variant="outline" className="w-full">Apply to Volunteer</Button>
                </CardContent>
              </Card>

              <Card className="shadow-medium hover:shadow-large transition-smooth">
                <CardHeader>
                  <div className="text-4xl mb-3">🤝</div>
                  <CardTitle className="font-heading text-xl">Partner With Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    NGOs, literary organizations, and educational institutions can partner with us to expand our
                    reach and impact.
                  </CardDescription>
                  <Button variant="outline" className="w-full">Explore Partnership</Button>
                </CardContent>
              </Card>

              <Card className="shadow-medium hover:shadow-large transition-smooth">
                <CardHeader>
                  <div className="text-4xl mb-3">📢</div>
                  <CardTitle className="font-heading text-xl">Spread the Word</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Share our mission on social media, tell friends and family, or host a fundraiser in your
                    community.
                  </CardDescription>
                  <Button variant="outline" className="w-full">Get Social Kit</Button>
                </CardContent>
              </Card>

              <Card className="shadow-medium hover:shadow-large transition-smooth">
                <CardHeader>
                  <div className="text-4xl mb-3">👨‍🏫</div>
                  <CardTitle className="font-heading text-xl">Become a Mentor</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Offer virtual mentorship to students, helping them develop writing skills and explore their
                    potential.
                  </CardDescription>
                  <Button variant="outline" className="w-full">Join Mentorship</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Current Supporters */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
            Our <span className="text-primary">Supporters</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're grateful to our current supporters who believe in our mission
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Card className="shadow-medium px-8 py-6">
              <CardTitle className="font-heading text-xl">Chakraviu Nepal</CardTitle>
              <CardDescription className="text-sm mt-2">Organizational Partner</CardDescription>
            </Card>
            <Card className="shadow-medium px-8 py-6">
              <CardTitle className="font-heading text-xl">AMOUR SEWA Nepal</CardTitle>
              <CardDescription className="text-sm mt-2">School Partnership</CardDescription>
            </Card>
            <Card className="shadow-medium px-8 py-6">
              <CardTitle className="font-heading text-xl">Individual Donors</CardTitle>
              <CardDescription className="text-sm mt-2">Community Champions</CardDescription>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
