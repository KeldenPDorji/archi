import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "About ASAB", href: "#about" },
    { name: "Events & Culture", href: "#events" },
    { name: "Alumni Network", href: "#alumni" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ];

  const resourceLinks = [
    { name: "Resource Library", href: "#" },
    { name: "Past Question Papers", href: "#" },
    { name: "Thesis Archive", href: "#" },
    { name: "Design Sheet Samples", href: "#" },
    { name: "Portfolio Templates", href: "#" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* ASA Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-accent-gradient rounded-sm flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">A</span>
                </div>
                <span className="font-heading font-semibold text-xl">ASAB</span>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Cultivating an architecture community in Bhutan where students, alumni, and professionals 
                collaborate to design with wisdom, purpose, and balance, aligned with Gross National Happiness (GNH).
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-sm text-primary-foreground/80">College of Science & Technology, Thimphu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-accent" />
                  <span className="text-sm text-primary-foreground/80">info@asab.bt</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="text-sm text-primary-foreground/80">+975 2 351 004</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">Resources</h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">Stay Connected</h4>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Join ASAB community - get updates on workshops, exhibitions, and networking events.
                </p>
                <div className="flex flex-col space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-3 py-2 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm"
                  />
                  <Button 
                    size="sm" 
                    className="bg-accent-gradient hover:opacity-90 text-accent-foreground"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-primary-foreground/80 mb-4">Follow us on social media</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors group"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2025 Architecture Student Association of Bhutan (ASAB). All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors group"
              >
                <span>Back to Top</span>
                <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;