import { Card, CardContent } from "@/components/ui/card";
import { Award, Code, Palette, Trophy } from "lucide-react";

const certificationsData = [
  {
    title: "Google Data Analytics Certificate",
    description: "Completed comprehensive data analytics program covering data cleaning, analysis, and visualization.",
    issueDate: "March 2023",
    icon: Award,
    color: "blue"
  },
  {
    title: "React Developer Certification",
    description: "Advanced React certification covering hooks, context API, and modern development practices.",
    issueDate: "January 2023",
    icon: Code,
    color: "green"
  },
  {
    title: "Adobe Certified Expert",
    description: "Expert-level certification in Adobe Creative Suite including Photoshop, Illustrator, and InDesign.",
    issueDate: "November 2022",
    icon: Palette,
    color: "purple"
  },
  {
    title: "Dean's List Recognition",
    description: "Academic excellence recognition for maintaining GPA above 3.8 for three consecutive semesters.",
    issueDate: "Fall 2023",
    icon: Trophy,
    color: "orange"
  }
];

export function CertificationsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Certifications & Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certificationsData.map((cert, index) => (
              <Card key={index} className="bg-muted/50 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 bg-${cert.color}-100 dark:bg-${cert.color}-900 rounded-full flex items-center justify-center`}>
                        <cert.icon className={`text-${cert.color}-600 dark:text-${cert.color}-400`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {cert.description}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        Issued: {cert.issueDate}
                      </span>
                    </div>
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
