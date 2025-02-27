"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Server, Database, Cloud, Terminal, Workflow } from "lucide-react"
import { skillCategories } from "@/config/skills"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("backend")

  // Map icon strings to actual components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return <Server className="h-4 w-4" />
      case "Database":
        return <Database className="h-4 w-4" />
      case "Workflow":
        return <Workflow className="h-4 w-4" />
      case "Cloud":
        return <Cloud className="h-4 w-4" />
      case "Terminal":
        return <Terminal className="h-4 w-4" />
      default:
        return <Server className="h-4 w-4" />
    }
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse set of technical skills throughout my journey as a backend developer and DevOps
            specialist.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="backend" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {skillCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    {getIcon(category.icon)}
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{skill.name}</h4>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

