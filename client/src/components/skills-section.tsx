import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Code, Palette, Users } from "lucide-react";

const skillsData = [
  {
    title: "Data Science",
    icon: TrendingUp,
    color: "blue",
    skills: [
      { name: "Python", level: 90 },
      { name: "Machine Learning", level: 85 },
      { name: "Statistics", level: 95 },
    ],
  },
  {
    title: "Web Development",
    icon: Code,
    color: "green",
    skills: [
      { name: "React", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "Node.js", level: 80 },
    ],
  },
  {
    title: "Graphic Design",
    icon: Palette,
    color: "purple",
    skills: [
      { name: "Adobe Creative Suite", level: 87 },
      { name: "UI/UX Design", level: 85 },
      { name: "Figma", level: 90 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "orange",
    skills: [
      { name: "Leadership", level: 93 },
      { name: "Communication", level: 95 },
      { name: "Problem Solving", level: 97 },
    ],
  },
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#skills");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((category, index) => (
              <Card key={index} className="card-hover bg-card">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-${category.color}-100 dark:bg-${category.color}-900 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <category.icon className={`text-2xl text-${category.color}-600 dark:text-${category.color}-400`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-muted-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`bg-${category.color}-600 h-2 rounded-full skill-bar`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transition: 'width 1s ease-in-out'
                            }}
                          />
                        </div>
                      </div>
                    ))}
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
