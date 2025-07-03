import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Play, FileText } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Student Performance Analytics",
    description: "Predictive model analyzing student performance patterns using machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "data",
    tags: ["Python", "Pandas", "Scikit-learn"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    id: 2,
    title: "Campus Event Management",
    description: "Full-stack web application for managing campus events with real-time updates and notifications.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "web",
    tags: ["React", "Node.js", "MongoDB"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    id: 3,
    title: "University Brand Identity",
    description: "Complete brand identity redesign for university debate society including logo, materials, and digital assets.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "design",
    tags: ["Adobe Suite", "Figma", "Branding"],
    links: {
      behance: "#",
      case: "#"
    }
  },
  {
    id: 4,
    title: "Mathematical Modeling",
    description: "Complex mathematical models for predicting population dynamics using differential equations.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "data",
    tags: ["MATLAB", "Python", "NumPy"],
    links: {
      github: "#",
      paper: "#"
    }
  },
  {
    id: 5,
    title: "Study Buddy Mobile App",
    description: "Cross-platform mobile application connecting students for collaborative study sessions.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "web",
    tags: ["React Native", "Firebase", "Socket.io"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    id: 6,
    title: "E-learning Platform UI",
    description: "User interface design for innovative e-learning platform with interactive features and gamification.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "design",
    tags: ["Figma", "Prototyping", "User Research"],
    links: {
      figma: "#",
      prototype: "#"
    }
  }
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "data", label: "Data Science" },
  { id: "web", label: "Web Development" },
  { id: "design", label: "Design" }
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projectsData.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "data": return "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400";
      case "web": return "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400";
      case "design": return "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400";
      default: return "bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "data": return "Data Science";
      case "web": return "Web App";
      case "design": return "Design";
      default: return category;
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Featured Projects
          </h2>
          
          {/* Project Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="rounded-full"
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="project-card bg-card overflow-hidden shadow-lg"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <Badge className={`${getCategoryColor(project.category)} text-sm`}>
                      {getCategoryLabel(project.category)}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    {project.links.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.github} className="flex items-center">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.demo} className="flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.links.paper && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.paper} className="flex items-center">
                          <FileText className="w-4 h-4 mr-2" />
                          Paper
                        </a>
                      </Button>
                    )}
                    {project.links.behance && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.behance} className="flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Behance
                        </a>
                      </Button>
                    )}
                    {project.links.figma && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.figma} className="flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Figma
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
