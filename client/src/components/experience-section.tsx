import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experienceData = [
  {
    title: "Mathematics Tutor",
    company: "University Learning Center",
    period: "Sept 2023 - Present",
    description: "Providing one-on-one and group tutoring sessions for calculus, linear algebra, and statistics. Developed innovative teaching methods that improved student comprehension by 25%.",
    tags: ["Teaching", "Mathematics", "Mentoring"],
    color: "blue"
  },
  {
    title: "President, Debate Society",
    company: "University Debate Society",
    period: "Jan 2023 - Present",
    description: "Leading a team of 50+ members, organizing inter-collegiate debate tournaments, and securing sponsorships worth $15,000. Increased participation by 40% through strategic outreach programs.",
    tags: ["Leadership", "Event Management", "Public Speaking"],
    color: "green"
  },
  {
    title: "Data Analysis Intern",
    company: "Local Tech Startup",
    period: "June 2023 - Aug 2023",
    description: "Analyzed customer behavior data using Python and SQL, created interactive dashboards, and presented insights that led to a 20% increase in customer retention.",
    tags: ["Data Analysis", "Python", "Visualization"],
    color: "purple"
  },
  {
    title: "Volunteer Coordinator",
    company: "Community Outreach Program",
    period: "Sep 2022 - Dec 2022",
    description: "Coordinated volunteer activities for 100+ students, organized educational workshops for underprivileged children, and managed logistics for multiple community events.",
    tags: ["Coordination", "Community Service", "Project Management"],
    color: "orange"
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Experience & Leadership
          </h2>
          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <div key={index} className="timeline-item relative pl-8 border-l-2 border-primary">
                <Card className="bg-card shadow-lg card-hover">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-primary font-medium">{item.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-2 sm:mt-0">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
