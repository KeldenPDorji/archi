import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, User, ArrowRight, Eye, Download } from "lucide-react";

const Publications = () => {
  const currentIssue = {
    title: "Sustainable Futures: Architecture for Climate Action",
    issue: "Vol. 12, Issue 2",
    date: "October 2024",
    coverImage: "/api/placeholder/400/500",
    description: "This issue explores innovative approaches to sustainable architecture and climate-responsive design.",
    articles: 8,
    pages: 64,
    downloads: 1250,
  };

  const recentArticles = [
    {
      title: "Biomimetic Architecture: Learning from Nature's Designs",
      author: "Sarah Chen",
      category: "Research",
      date: "Oct 12, 2024",
      readTime: "8 min read",
      views: 340,
    },
    {
      title: "Digital Fabrication in Modern Construction",
      author: "Marcus Williams",
      category: "Technology",
      date: "Oct 8, 2024",
      readTime: "6 min read",
      views: 285,
    },
    {
      title: "Preserving Heritage in Urban Development",
      author: "Aisha Patel",
      category: "Conservation",
      date: "Oct 5, 2024",
      readTime: "10 min read",
      views: 420,
    },
    {
      title: "Student Spotlight: Award-Winning Thesis Projects",
      author: "Jordan Kim",
      category: "Student Work",
      date: "Oct 1, 2024",
      readTime: "12 min read",
      views: 680,
    },
  ];

  const pastIssues = [
    {
      title: "The Future of Urban Living",
      issue: "Vol. 12, Issue 1",
      date: "July 2024",
      downloads: 980,
    },
    {
      title: "Innovation in Construction Materials",
      issue: "Vol. 11, Issue 4",
      date: "April 2024",
      downloads: 1150,
    },
    {
      title: "Architecture and Social Impact",
      issue: "Vol. 11, Issue 3", 
      date: "January 2024",
      downloads: 890,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Research": return "bg-blue-100 text-blue-800";
      case "Technology": return "bg-green-100 text-green-800";
      case "Conservation": return "bg-purple-100 text-purple-800";
      case "Student Work": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Publications & Magazine
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover cutting-edge research, student showcases, and industry insights 
            in our quarterly digital magazine and ongoing article publications.
          </p>
        </div>

        {/* Current Issue Highlight */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-bold mb-8">Current Issue</h3>
          <Card className="shadow-elevation-lg overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Cover Image */}
              <div className="lg:col-span-1">
                <div className="h-64 lg:h-full bg-hero-gradient flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-8">
                    <BookOpen className="h-16 w-16 mx-auto mb-4" />
                    <div className="text-sm opacity-90">ASA MAGAZINE</div>
                    <div className="text-lg font-bold">{currentIssue.issue}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-accent text-accent-foreground">Latest Issue</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {currentIssue.date}
                    </div>
                  </div>

                  <h4 className="font-heading text-2xl font-bold mb-4">
                    {currentIssue.title}
                  </h4>

                  <p className="text-muted-foreground mb-6">
                    {currentIssue.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">{currentIssue.articles}</div>
                      <div className="text-sm text-muted-foreground">Articles</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">{currentIssue.pages}</div>
                      <div className="text-sm text-muted-foreground">Pages</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">{currentIssue.downloads}</div>
                      <div className="text-sm text-muted-foreground">Downloads</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-hero-gradient hover:opacity-90">
                      <Eye className="mr-2 h-4 w-4" />
                      Read Online
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Articles */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-heading text-2xl font-bold">Recent Articles</h3>
            <Button variant="outline">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {recentArticles.map((article, index) => (
              <Card key={index} className="shadow-elevation hover:shadow-elevation-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Eye className="h-3 w-3 mr-1" />
                      {article.views}
                    </div>
                  </div>

                  <h4 className="font-heading text-lg font-semibold mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h4>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent hover:bg-accent-soft">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Issues */}
        <div className="mb-12">
          <h3 className="font-heading text-2xl font-bold mb-8">Past Issues</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {pastIssues.map((issue, index) => (
              <Card key={index} className="shadow-elevation hover:shadow-elevation-lg transition-all duration-300 cursor-pointer group">
                <CardContent className="p-4">
                  <h5 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                    {issue.title}
                  </h5>
                  <div className="text-sm text-muted-foreground mb-2">
                    {issue.issue} • {issue.date}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {issue.downloads} downloads
                    </span>
                    <Button variant="ghost" size="sm" className="text-accent p-0 h-auto">
                      <Download className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contribute CTA */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-elevation">
          <h3 className="font-heading text-xl font-semibold mb-4">Contribute to Our Magazine</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Share your research, projects, or insights with the ASA community. 
            We welcome submissions from students, faculty, and industry professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent-gradient hover:opacity-90">
              Submit Article
            </Button>
            <Button variant="outline">
              Submission Guidelines
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;