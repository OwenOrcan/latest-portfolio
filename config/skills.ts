export type SkillCategory = {
  id: string
  label: string
  icon: string
  skills: {
    name: string
    level: number
  }[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    label: "Backend",
    icon: "Server",
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 85 },
      { name: "Django", level: 90 },
      { name: "Flask", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "Redis", level: 75 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    icon: "Workflow",
    skills: [
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 85 },
      { name: "Security & Compliance", level: 90 },
      { name: "Monitoring & Logging", level: 90 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: "Cloud",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Google CLoud", level: 65 },
      { name: "Serverless", level: 80 },
      { name: "Networking", level: 75 },
      { name: "Linode", level: 90 },
      { name: "Cloudflare", level: 90 },

    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: "Terminal",
    skills: [
      { name: "Git", level: 95 },
      { name: "Linux", level: 90 },
      { name: "Unix", level: 90 },
      { name: "Bash", level: 85 },
      { name: "Nginx", level: 80 },
      { name: "Apache", level: 75 },
    ],
  },
]

