import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/config/experience"

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the valuable experience I've gained along the way.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-muted-foreground/20"></div>
              )}

              <Card>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-border">
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <CardDescription className="mt-1">{exp.company}</CardDescription>
                    <div className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      {exp.period}
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

