import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import { siteConfig } from "@/config/site-config"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Backend Developer & DevOps Specialist</h3>
            <p className="text-muted-foreground">
              I'm a passionate backend developer and DevOps specialist currently pursuing my degree in Computer Science.
              With a strong foundation in building robust server-side applications and optimizing deployment workflows,
              I enjoy solving complex problems and creating efficient systems.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding or studying, I work as a coding coach for kids, sharing my knowledge and inspiring the
              next generation of developers. I believe in the power of technology to transform lives and am committed to
              continuous learning and growth in this ever-evolving field.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Name:</h4>
                <p className="text-muted-foreground">{siteConfig.name}</p>
              </div>
              <div>
                <h4 className="font-semibold">Location:</h4>
                <p className="text-muted-foreground">{siteConfig.contact.location}</p>
              </div>
              <div>
                <h4 className="font-semibold">Availability:</h4>
                <p className="text-muted-foreground">{siteConfig.contact.availability}</p>
              </div>
            </div>
            {siteConfig.features.downloadResume && (
              <Button className="gap-2">
                <FileDown className="h-4 w-4" />
                Download Resume
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

