import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  const stats = [
    { label: "Active Members", value: "200+", icon: Users },
    { label: "Events/Year", value: "50+", icon: Calendar },
    { label: "Resources", value: "100+", icon: BookOpen },
  ];

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Architecture
                <span className="block bg-accent-gradient bg-clip-text text-transparent">
                  Student Association
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Building tomorrow's architects through collaboration, learning, and innovation. 
                Join our community of passionate design thinkers.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-hero-gradient hover:opacity-90 text-lg px-8 py-3 group"
              >
                Join Our Community
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-3 border-2"
              >
                Explore Events
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center space-y-2">
                    <div className="flex justify-center">
                      <div className="w-12 h-12 bg-accent-soft rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elevation-lg">
              <img
                src={heroImage}
                alt="Architecture students working on designs"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-elevation-lg border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Active Community</div>
                  <div className="text-sm text-muted-foreground">Join 200+ students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;