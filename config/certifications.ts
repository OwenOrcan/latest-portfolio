// Certification data for the portfolio
export type Certification = {
  id: number
  title: string
  issuer: string
  description: string
  image: string
  date: string
  url: string
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "CS50's Introduction to Programming with Python",
    issuer: "Harvard University via edX",
    description:
      "This certification validates proficiency in Python programming fundamentals, including syntax, data structures, object-oriented programming, and application development. The course covers algorithmic thinking, problem-solving, and best practices for writing clean, efficient code.",
    image: "/certifications/cs50-python.png",
    date: "January 2024",
    url: "https://cs50.harvard.edu/certificates/ff86f2fb-ddc3-4485-8ab0-59d3e3804862",
  },
  {
    id: 2,
    title: "IBM Z Xplore - Concepts",
    issuer: "IBM",
    description:
     "This badge earner has learned and displayed both fundamental IBM Z skills and understands IBM Z concepts. This individual is able to perform everyday tasks in an IBM Z environment, including administering data sets, formulating commands, managing JCL, scripting actions in USS (Unix System Services), writing and debugging Python, and orchestrating actions through IBM Z Open Automation Utilities.",
    image: "/certifications/IBM-badge.png",
    date: "December 2024",
    url: "https://www.credly.com/badges/66f999e5-a9a0-41be-9fcf-4cae236c9760/linked_in_profile",
  },
      {
    id: 3,
    title: "Rest API (Intermediate)",
    issuer: "Hackerrank",
    description:
     "The HackerRank REST API Intermediate Certification validates your ability to design, implement, and optimize RESTful APIs. It tests knowledge of HTTP methods, status codes, authentication, pagination, and best practices for API security and performance.",
    image: "/certifications/int-rest.png",
    date: "October 2024",
    url: "https://www.hackerrank.com/certificates/e03a2dfe1216",
  },
]

