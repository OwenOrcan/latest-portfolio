// Site configuration and feature toggles
export const siteConfig = {
  name: "Owen Orcan",
  title: "Owen Orcan | Backend Developer & DevOps Specialist",
  description: "Portfolio of Owen Orcan - Backend Developer, DevOps Specialist, College Student, and Kids Coding Coach",
  url: "https://owenorcan.com",
  ogImage: "/og-image.png",

  // Contact information
  contact: {
    email: "owenorcan@gmail.com",
    location: "New Jersey",
    availability: "Part-time / Freelance",
  },

  // Social media links
  socials: {
    github: "https://github.com/owenorcan",
    linkedin: "https://www.linkedin.com/in/owenorcan/",
    twitter: "https://x.com/OwenOrcan",
  },

  // Feature toggles
  features: {
    openToWork: false, // Controls the "Open for Work" badge
    downloadResume: false, // Controls the resume download button
    blogSection: false, // Future feature: blog section
    darkMode: false, // Future feature: dark mode toggle
  },

  // Navigation links
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ],
}

