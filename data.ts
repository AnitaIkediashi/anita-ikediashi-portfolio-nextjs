import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLink} from '@fortawesome/free-solid-svg-icons'

type ExperienceProps = {
  id: number
  date: string
  company: string
  jobTitle: string
  role1: string
  role2?: string
  role3?: string
  role4?: string
}

export const navLinks = [
    {
        'title': 'home',
        'hash': '#'
    },
    {
        'title': 'about',
        'hash': '#about'
    },
    {
        'title': 'experience',
        'hash': '#experience'
    },
    {
        'title': 'project',
        'hash': '#project'
    },
]

export const skills = [
    {
        "skill": "/icons8-html5-96.png",
        "alt": "html"
    },
    {
        "skill": "/icons8-css3-96.png",
        "alt": "css"
    },
    {
        "skill": "/icons8-javascript-96.png",
        "alt": "javascript"
    },
    {
        "skill": "/icons8-sass-96.png",
        "alt": "sass"
    },
    {
        "skill": "/icons8-bootstrap-logo-96.png",
        "alt": "bootstrap"
    },
    {
        "skill": "/icons8-tailwindcss-96.png",
        "alt": "tailwind css"
    },
    {
        "skill": "/icons8-react-100.png",
        "alt": "react"
    },
    {
        "skill": "/icons8-nextjs-96.png",
        "alt": "next js"
    },
    {
        "skill": "/icons8-typescript-96.png",
        "alt": "typescript"
    },
    {
        "skill": "/icons8-figma-96.png",
        "alt": "figma"
    },
    {
        "skill": "/icons8-git-96.png",
        "alt": "git"
    },
    {
        "skill": "/prisma.png",
        "alt": "prisma",
    },
    {
        "skill": "/postgre.png",
        "alt": "postgres",
    },
    {
        "skill": "/icons8-firebase-96.png",
        "alt": "firebase",
    },
    {
        "skill": "/postman.png",
        "alt": "postman",
    },
] as const;

export const experience: ExperienceProps[] = [
  {
    id: 1,
    date: "January 2023 - present",
    company: "huawei",
    jobTitle: "UI Designer | Software Engineer 🔹 ",
    role1:
      "Led the end-to-end design and development of a team shift management dashboard for employees, enabling managers to monitor work hours, assign shifts, and track attendance in real time — reducing scheduling conflicts through automation and agile iteration.",
    role2:
      "Designed and implemented a Human Resource Management System (HRMS) dashboard using Vue.js and Huawei Cloud integration, replacing manual HR processes with automated workflows and speeding up manager approvals from days to hours.",
    role3:
      "Developed real-time monitoring tools with JavaScript and automated email alert systems, enabling instant notifications to relevant teams when issues were detected — achieving near-perfect uptime and reducing resolution time from hours to minutes.",
    role4:
      "Mentored junior developers, establishing coding standards, reusable component guidelines, and test coverage strategies for long-term scalability.",
  },
  {
    id: 2,
    date: "March 2022 - present",
    company: "freelance",
    jobTitle: "frontend developer 🔹 ",
    role1:
      "Developed a React/Next.js property listing platform with advanced search, map integration, and mobile-first design, resulting in higher lead conversions for the client.",
    role2:
      "Built a secure, responsive booking system with JWT/OAuth authentication, payment integration, and real-time availability updates — launched with zero post-release security issues.",
    role3:
      "Developed an automated talent acquisition form system that synced submissions to Google Sheets and sent instant email notifications to HR, eliminating manual data entry and accelerating candidate onboarding.",
  },
] as const;

export const projects = [
  {
    idx: 1,
    image: "/projects/peter_ibeabuchi_portfolio.png",
    desc: "Designed and developed a professional portfolio for a data analyst.",
    title: "Peter Ibeabuchi portfolio",
    icons: [
      {
        id: 1,
        linkIcon: faLink,
        url: "https://peter-ibeabuchi-portfolio.vercel.app/",
      },
    ],
    tools: [
      "/icons8-nextjs-96.png",
      "/icons8-tailwindcss-96.png",
    ],
  },
  {
    idx: 2,
    image: "/projects/talentpoel.png",
    desc: "Embedded Google Sheets into form pages, integrated a YouTube player, and optimized website images.",
    title: "Talentpoel website",
    icons: [
      {
        id: 2,
        linkIcon: faLink,
        url: "https://talentpoel.com/",
      },
    ],
    tools: [
      "/icons8-nextjs-96.png",
      "/icons8-tailwindcss-96.png",
      "/swiperjs_logo.png",
    ],
  },
  {
    idx: 3,
    image: "/image1.PNG",
    desc: "Contributed to the development of law firm landing page ensuring a responsive design and optimal user experience.",
    title: "Morgan & Associates",
    icons: [
      {
        id: 3,
        linkIcon: faLink,
        url: "https://morgan-associate-design.vercel.app/",
      },
    ],
    tools: [
      "/icons8-react-100.png",
      "/icons8-tailwindcss-96.png",
      "/aos_logo.png",
    ],
  },
  {
    idx: 4,
    image: "/imag3.png",
    desc: "A real time blog application built with react, firebase storage, authentication and firestore.",
    title: "MyBlog",
    icons: [
      {
        id: 4,
        linkIcon: faLink,
        url: "http://blog-crud-app.vercel.app/",
      },
    ],
    tools: [
      "/icons8-react-100.png",
      "/icons8-tailwindcss-96.png",
      "/icons8-firebase-96.png",
    ],
  },
  {
    idx: 5,
    image: "/image2.PNG",
    desc: "A dashboard built with react and react hooks to monitor a user income and expenses.",
    title: "Budget",
    icons: [
      {
        id: 5,
        linkIcon: faLink,
        url: "https://budget-app-red.vercel.app/",
      },
    ],
    tools: [
      "/icons8-react-100.png",
      "/icons8-tailwindcss-96.png",
      "/icons8-firebase-96.png",
    ],
  },
] as const;