import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Portfolio Review Workshop",
      date: "Oct 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Design Studio A",
      type: "Workshop",
      attendees: 45,
      description: "Get expert feedback on your portfolio from industry professionals and prepare for internship applications.",
    },
    {
      title: "Sustainable Architecture Symposium",
      date: "Oct 22, 2024", 
      time: "9:00 AM - 4:00 PM",
      location: "Main Auditorium",
      type: "Symposium",
      attendees: 120,
      description: "Exploring the future of sustainable design with renowned architects and environmental experts.",
    },
    {
      title: "Student Design Competition",
      date: "Nov 3, 2024",
      time: "10:00 AM - 6:00 PM", 
      location: "Exhibition Hall",
      type: "Competition",
      attendees: 80,
      description: "Annual design competition showcasing innovative student projects across all year levels.",
    },
  ];

  const pastEvents = [
    {
      title: "Industry Networking Night",
      date: "Sep 18, 2024",
      attendees: 95,
      type: "Networking",
    },
    {
      title: "3D Modeling Masterclass", 
      date: "Sep 10, 2024",
      attendees: 60,
      type: "Workshop",
    },
    {
      title: "Architecture Firm Visit - Foster + Partners",
      date: "Aug 28, 2024",
      attendees: 30,
      type: "Site Visit",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Workshop": return "bg-blue-100 text-blue-800";
      case "Symposium": return "bg-purple-100 text-purple-800";
      case "Competition": return "bg-green-100 text-green-800";
      case "Networking": return "bg-orange-100 text-orange-800";
      case "Site Visit": return "bg-indigo-100 text-indigo-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="events" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Events & Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us for workshops, lectures, competitions, and networking events designed 
            to enhance your architectural education and professional development.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-heading text-2xl font-bold">Upcoming Events</h3>
            <Button variant="outline">
              View Calendar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="shadow-elevation hover:shadow-elevation-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className={`${getTypeColor(event.type)} border-0`}>
                      {event.type}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {event.attendees}
                    </div>
                  </div>

                  <h4 className="font-heading text-lg font-semibold mb-3 group-hover:text-accent transition-colors">
                    {event.title}
                  </h4>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {event.description}
                  </p>

                  <Button className="w-full bg-hero-gradient hover:opacity-90">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="font-heading text-2xl font-bold mb-8">Recent Events</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {pastEvents.map((event, index) => (
              <Card key={index} className="shadow-elevation">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {event.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{event.attendees} attended</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">{event.title}</h5>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-card rounded-2xl p-8 shadow-elevation">
          <h3 className="font-heading text-xl font-semibold mb-4">Never Miss an Event</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified about upcoming workshops, lectures, and networking opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-accent focus:border-accent outline-none"
            />
            <Button className="bg-accent-gradient hover:opacity-90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;