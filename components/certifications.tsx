import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { certifications } from "@/config/certifications"

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my technical expertise and knowledge.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {certifications.map((cert) => (
            <Card key={cert.id} className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-60 md:h-full">
                  <Image src={cert.image || "/placeholder.svg"} alt={cert.title} fill className="object-cover" />
                </div>
                <div className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{cert.description}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="text-sm font-medium">Issued:</div>
                      <div className="text-sm text-muted-foreground">{cert.date}</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link
                        href={cert.url}
                        className="flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

