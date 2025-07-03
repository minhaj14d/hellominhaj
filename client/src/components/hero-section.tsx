import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Calculator, TrendingUp, Code, Palette } from "lucide-react";

export function HeroSection() {
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-accent">Minhaj</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Turning Equations, Code, and Creativity into Impact
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2 bg-white bg-opacity-20 text-white backdrop-blur-sm">
                <Calculator className="w-4 h-4 mr-2" />
                Applied Mathematics
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-white bg-opacity-20 text-white backdrop-blur-sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                Data Science
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-white bg-opacity-20 text-white backdrop-blur-sm">
                <Code className="w-4 h-4 mr-2" />
                Web Development
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-white bg-opacity-20 text-white backdrop-blur-sm">
                <Palette className="w-4 h-4 mr-2" />
                Graphic Design
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleScrollToProjects}
                className="px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold"
              >
                View My Work
              </Button>
              <Button 
                onClick={handleScrollToContact}
                variant="outline"
                className="px-8 py-3 bg-white bg-opacity-20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 font-semibold"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white text-2xl" />
      </div>
    </section>
  );
}
