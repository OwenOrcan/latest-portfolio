// Project data for the portfolio
export type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
  demoLabel?: string
  featured: boolean
}


export const projects: Project[] = [
  {
    id: 1,
    title: "FollowBuddy",
    description:
     "FollowBuddy is a tool designed to help Instagram users identify accounts that don't follow them back or have recently unfollowed them, all without requiring access to their Instagram password",
    image: "/projects/fb.png",
    tags: ["MongoDB", "Nginx", "RestAPI","AWS", "Oauth2", "Stripe",],
    github: "",
    demo: "https://followbuddy.com",
    demoLabel: "Visit",
    featured: true,
  },
  {
    id: 2,
    title: "Pixel Punch Out",
    description:
    "Pixel Punch-Out is a dynamic multiplayer pixel art fighting game where players compete using customizable pixel characters.\n",
    image: "/projects/ppo.png",
    tags: ["Express.js", "Socket.io", "MySQL"],
    github: "https://github.com/yigitocak/Pixel-Punch-Out",
    demo: "https://ppo-online.com",
    demoLabel: "Visit",
    featured: false,
  },
  {
    id: 3,
    title: "Yirabot",
    description:
    "YiraBot is a Python-based web scraping tool tailored for fast, automated data extraction from websites., YiraBot makes it easy to gather and structure online data for analytics, research, and content creation",
    image: "/projects/yirabot.png",
    tags: ["Python", "CLI", "bs4", "PyPi"],
    github: "https://github.com/OwenOrcan/YiraBot-Crawler",
    demo: "https://pypi.org/project/YiraBot/#description",
    demoLabel: "Visit PyPi Page",
    featured: false,
  },
  {
    id: 4,
    title: "AutoFlask",
    description:
    "A simple python package to automate the creation of flask projects.",
    image: "/projects/autoflask.png",
    tags: ["Python", "Flask", "Automation", "PyPi"],
    github: "https://github.com/OwenOrcan/AutoFlask?tab=readme-ov-file",
    demo: "https://pypi.org/project/AutoFL/",
    demoLabel: "Visit PyPi Page",
    featured: false,
  },
]

