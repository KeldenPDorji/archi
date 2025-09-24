import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, Video, FileText, Search, Filter, ExternalLink } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Software Tutorials",
      count: 25,
      icon: Video,
      color: "bg-blue-100 text-blue-800",
      items: [
        { name: "AutoCAD Fundamentals", type: "Video", downloads: 340 },
        { name: "Revit for Beginners", type: "PDF", downloads: 280 },
        { name: "SketchUp Advanced Techniques", type: "Video", downloads: 195 },
      ]
    },
    {
      title: "Design Templates",
      count: 18,
      icon: FileText,
      color: "bg-green-100 text-green-800",
      items: [
        { name: "Portfolio Layout Templates", type: "PDF", downloads: 450 },
        { name: "Presentation Board Formats", type: "Template", downloads: 380 },
        { name: "Technical Drawing Standards", type: "PDF", downloads: 290 },
      ]
    },
    {
      title: "Thesis Archive",
      count: 42,
      icon: BookOpen,
      color: "bg-purple-100 text-purple-800",
      items: [
        { name: "Sustainable Housing Projects", type: "Research", downloads: 120 },
        { name: "Urban Planning Studies", type: "Research", downloads: 95 },
        { name: "Heritage Conservation Papers", type: "Research", downloads: 85 },
      ]
    },
    {
      title: "Career Resources",
      count: 15,
      icon: ExternalLink,
      color: "bg-orange-100 text-orange-800",
      items: [
        { name: "Architecture CV Templates", type: "Template", downloads: 520 },
        { name: "Interview Preparation Guide", type: "PDF", downloads: 380 },
        { name: "Internship Application Tips", type: "PDF", downloads: 310 },
      ]
    }
  ];

  const featuredResources = [
    {
      title: "Complete Guide to Architectural Photography",
      description: "Master the art of photographing buildings and spaces with this comprehensive guide.",
      type: "PDF Guide",
      size: "15 MB",
      downloads: 680,
      featured: true,
    },
    {
      title: "Building Information Modeling (BIM) Workflow",
      description: "Step-by-step workflow for implementing BIM in your design process.",
      type: "Video Series",
      size: "2.5 GB",
      downloads: 420,
      featured: true,
    },
    {
      title: "Sustainable Design Checklist",
      description: "Essential checklist for incorporating sustainability in architectural projects.",
      type: "Checklist",
      size: "2 MB",
      downloads: 750,
      featured: true,
    },
  ];

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Resource Library
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive collection of tutorials, templates, research papers, 
            and professional development resources curated for architecture students.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
            />
          </div>
          <Button variant="outline" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-bold mb-8">Featured Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="shadow-elevation hover:shadow-elevation-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{resource.downloads} downloads</div>
                      <div>{resource.size}</div>
                    </div>
                  </div>

                  <h4 className="font-heading text-lg font-semibold mb-3 group-hover:text-accent transition-colors">
                    {resource.title}
                  </h4>

                  <p className="text-sm text-muted-foreground mb-4">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{resource.type}</Badge>
                    <Button size="sm" className="bg-hero-gradient hover:opacity-90">
                      <Download className="mr-2 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resourceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="shadow-elevation hover:shadow-elevation-lg transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-accent-soft rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge className={category.color}>
                      {category.count} items
                    </Badge>
                  </div>

                  <h4 className="font-heading text-lg font-semibold mb-4 group-hover:text-accent transition-colors">
                    {category.title}
                  </h4>

                  <div className="space-y-2">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground truncate">{item.name}</span>
                        <span className="text-xs text-muted-foreground ml-2">{item.downloads}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full mt-4 text-accent hover:text-accent hover:bg-accent-soft">
                    View All
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Member Access CTA */}
        <div className="text-center bg-hero-gradient text-primary-foreground rounded-2xl p-8">
          <h3 className="font-heading text-xl font-semibold mb-4">Access Premium Resources</h3>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Become an ASA member to unlock exclusive tutorials, advanced templates, 
            and our complete thesis archive from past students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-secondary">
              Sign Up for Membership
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;