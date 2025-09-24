import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Target, Eye, Download } from "lucide-react";

const About = () => {
  const executives = [
    {
      name: "Sarah Chen",
      role: "President",
      year: "5th Year",
      specialty: "Sustainable Design",
    },
    {
      name: "Marcus Williams",
      role: "Vice President",
      year: "4th Year", 
      specialty: "Urban Planning",
    },
    {
      name: "Aisha Patel",
      role: "Events Coordinator",
      year: "3rd Year",
      specialty: "Digital Architecture",
    },
    {
      name: "Jordan Kim",
      role: "Resources Manager",
      year: "4th Year",
      specialty: "Heritage Conservation",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Community",
      description: "Building connections between students, faculty, and industry professionals."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Fostering academic and professional growth through high-quality programs."
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "Embracing new technologies and sustainable design practices."
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About ASA
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Architecture Student Association is the voice of architecture students, 
            dedicated to enhancing the academic experience and building professional networks.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-elevation">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent-soft rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To create a vibrant community that supports academic excellence, 
                professional development, and innovative thinking in architecture and design.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elevation">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent-soft rounded-lg flex items-center justify-center">
                  <Eye className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading student organization that bridges academia and practice, 
                fostering the next generation of visionary architects and designers.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-bold text-center mb-8">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-accent-gradient rounded-2xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                  </div>
                  <h4 className="font-heading text-lg font-semibold">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Executive Team */}
        <div className="mb-12">
          <h3 className="font-heading text-2xl font-bold text-center mb-8">Executive Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {executives.map((exec) => (
              <Card key={exec.name} className="shadow-elevation hover:shadow-elevation-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-hero-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {exec.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{exec.name}</h4>
                  <Badge variant="secondary" className="mb-2">{exec.role}</Badge>
                  <p className="text-sm text-muted-foreground mb-1">{exec.year}</p>
                  <p className="text-xs text-accent font-medium">{exec.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Constitution Download */}
        <div className="text-center bg-secondary rounded-2xl p-8">
          <h3 className="font-heading text-xl font-semibold mb-4">ASA Constitution</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Learn more about our governance, policies, and organizational structure by downloading our official constitution.
          </p>
          <Button variant="outline" className="border-2">
            <Download className="mr-2 h-4 w-4" />
            Download Constitution (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;