import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock, Instagram, Twitter, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: "Architecture Building, Room 205\nUniversity Campus\nCity, State 12345"
    },
    {
      icon: Mail,
      title: "Email Address", 
      details: "info@architecturestudents.org\nevents@architecturestudents.org"
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: "+1 (555) 123-4567\nOffice Hours Only"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday: 9:00 AM - 5:00 PM\nWeekends: By Appointment"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@asa_architecture", color: "hover:text-pink-500" },
    { icon: Twitter, name: "Twitter", handle: "@ASA_Design", color: "hover:text-blue-500" },
    { icon: Linkedin, name: "LinkedIn", handle: "Architecture Student Association", color: "hover:text-blue-600" },
  ];

  const inquiryTypes = [
    "General Inquiry",
    "Event Information", 
    "Membership Question",
    "Resource Request",
    "Partnership Opportunity",
    "Media Inquiry",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions about ASA, our events, or want to get involved? 
            We'd love to hear from you. Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-elevation">
              <CardContent className="p-8">
                <h3 className="font-heading text-xl font-semibold mb-6">Send us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-foreground mb-2">
                      Year Level
                    </label>
                    <select
                      id="year"
                      className="w-full px-3 py-2 border border-border rounded-md focus:ring-2 focus:ring-accent focus:border-accent outline-none bg-background"
                    >
                      <option value="">Select your year level</option>
                      <option value="1st">1st Year</option>
                      <option value="2nd">2nd Year</option>
                      <option value="3rd">3rd Year</option>
                      <option value="4th">4th Year</option>
                      <option value="5th">5th Year</option>
                      <option value="graduate">Graduate Student</option>
                      <option value="faculty">Faculty</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-foreground mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      className="w-full px-3 py-2 border border-border rounded-md focus:ring-2 focus:ring-accent focus:border-accent outline-none bg-background"
                      required
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-hero-gradient hover:opacity-90">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="shadow-elevation">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-accent-soft rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                          <p className="text-sm text-muted-foreground whitespace-pre-line">
                            {info.details}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Media */}
            <Card className="shadow-elevation">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href="#"
                        className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors group ${social.color}`}
                      >
                        <Icon className="h-5 w-5 text-muted-foreground group-hover:text-current" />
                        <div>
                          <div className="font-medium text-foreground">{social.name}</div>
                          <div className="text-sm text-muted-foreground">{social.handle}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-elevation bg-hero-gradient text-primary-foreground">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <Button 
                    variant="secondary" 
                    className="w-full justify-start bg-primary-foreground text-primary hover:bg-secondary"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Join Our Newsletter
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="w-full justify-start bg-primary-foreground text-primary hover:bg-secondary"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Find Our Office
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="font-heading text-xl font-semibold mb-4">Frequently Asked Questions</h3>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Check out our FAQ section for quick answers to common questions.
          </p>
          <Button variant="outline">
            View FAQ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;