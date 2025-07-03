import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Machine Learning in Student Assessment",
    excerpt: "Exploring how machine learning algorithms can revolutionize educational assessment and provide personalized learning experiences.",
    date: "Dec 15, 2023",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
    link: "#"
  },
  {
    title: "Building Responsive Web Apps with React",
    excerpt: "A comprehensive guide to creating responsive, accessible web applications using React and modern CSS techniques.",
    date: "Dec 8, 2023",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
    link: "#"
  },
  {
    title: "Leading Student Organizations in Digital Age",
    excerpt: "Insights on effective leadership strategies for student organizations, leveraging technology for better engagement and outcomes.",
    date: "Nov 28, 2023",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
    link: "#"
  }
];

export function BlogSection() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Data Science": return "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400";
      case "Web Development": return "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400";
      case "Leadership": return "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400";
      default: return "bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Latest Blog Posts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-card overflow-hidden shadow-lg card-hover">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`${getCategoryColor(post.category)} text-sm`}>
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80" asChild>
                    <a href={post.link} className="flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <a href="#" className="inline-flex items-center">
                View All Posts
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
