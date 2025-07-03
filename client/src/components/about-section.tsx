import { GraduationCap, Users, Presentation, Brain } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="animate-slide-up">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm an undergraduate student majoring in <strong className="text-primary">Applied Mathematics</strong> 
                  with a passion for turning complex problems into elegant solutions. My journey spans across 
                  data science, web development, and creative design.
                </p>
              </div>
              <div className="animate-slide-up">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond academics, I'm actively involved in campus leadership, debate competitions, and 
                  organizing events that bring together diverse minds. I believe in the power of technology 
                  to create positive social impact.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-primary">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-muted-foreground">Applied Mathematics Student</span>
                </div>
                <div className="flex items-center space-x-2 text-primary">
                  <Presentation className="w-5 h-5" />
                  <span className="text-muted-foreground">Teaching Experience</span>
                </div>
                <div className="flex items-center space-x-2 text-primary">
                  <Users className="w-5 h-5" />
                  <span className="text-muted-foreground">Campus Leader</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Professional student workspace" 
                className="rounded-2xl shadow-2xl w-full h-auto animate-float"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center">
                <Brain className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
