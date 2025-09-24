import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, BookOpen, Users, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About ASAB", href: "#about", icon: Users },
    { name: "Events & Culture", href: "#events", icon: Calendar },
    { name: "Alumni Network", href: "#alumni", icon: Users },
    { name: "Resources", href: "#resources", icon: BookOpen },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-hero-gradient rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-base sm:text-lg">A</span>
            </div>
            <span className="font-heading font-semibold text-lg sm:text-xl">ASAB</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button variant="default" size="sm" className="bg-hero-gradient hover:opacity-90 transition-opacity text-sm xl:text-base">
              Join ASAB
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.name}</span>
                  </a>
                );
              })}
              <div className="px-4 pt-4">
                <Button 
                  variant="default" 
                  className="w-full bg-hero-gradient hover:opacity-90 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join ASAB
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;