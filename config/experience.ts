// Experience data for the portfolio
export type Experience = {
  id: number
  role: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Backend & Devops Engineer",
    company: "FollowBuddy",
    period: "December 2024 - Present",
    description:
     "Building and optimizing backend systems that power FollowBuddy, ensuring seamless data processing and high-performance service delivery. Implementing secure and efficient API integrations while maintaining system scalability and reliability. Leveraging modern backend technologies to enhance user experience and streamline operations.",
    achievements: [
      "Designed algorithms to compare current and previous follower lists, accurately identifying unfollowers and providing users with timely insights.",
      "Created data processing workflows that accurately analyze Instagram follower data, providing users with real-time insights into their unfollowers.",
      "Worked closely with frontend developers and UX/UI designers to ensure that backend functionalities align with user needs, resulting in a cohesive and intuitive user experience",
      "Developed backend solutions that align with Instagram's guidelines, preventing account bans or restrictions for users by using only approved data access methods.",
      "Utilized cloud services to build a scalable infrastructure, allowing the application to efficiently manage increasing user bases and data loads.",
    ],
    technologies: ["Node.js", "MongoDB", "AWS", "Nginx", "Google Oauth2", "Stripe", "+12"],
  },
  {
    id: 2,
    role: "Kids Coding Coach",
    company: "CodeWiz Rutherford",
    period: "April 2024 - Present",
    description:
      "Teaching programming fundamentals to children aged 8-14 using Python Scratch, Roblox, Minecraft, etc. Developing curriculum and creating engaging projects to foster interest in computer science.",
    achievements: [
      "Mentored over 30 students",
      "Developed a project-based curriculum that increased student retention by 25%",
      "Created interactive learning materials that improved concept understanding",
    ],
    technologies: ["Python", "Scratch", "HTML/CSS", "Teaching", "Project Management", "+5"],
  },
]

