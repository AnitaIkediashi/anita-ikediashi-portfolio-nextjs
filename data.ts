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
  role5?: string
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
    jobTitle: "System Software Engineer 🔹 ",
    role1:
      "Led the design and development of a team shift management dashboard enabling managers to monitor work hours, assign shifts, and track attendance in real time, improving scheduling efficiency and reducing manual coordination.",
    role2:
      "Built a Human Resource Management System (HRMS) dashboard using Vue.js and Huawei Cloud services to automate employee management workflows and streamline approval processes",
    role3:
      "Developed real time monitoring tools using JavaScript that triggered automated email alerts when system issues were detected, significantly reducing incident response time.",
    role4:
      "Implemented reusable UI components and scalable frontend architecture to support long term application growth and maintainability.",
    role5:
      "Mentored junior developers and introduced coding standards, component reuse strategies, and improved collaboration across the engineering team.",
  },
  {
    id: 2,
    date: "March 2022 - present",
    company: "freelance",
    jobTitle: "frontend developer 🔹 ",
    role1:
      "Enhanced a property listing platform using React and Next.js with advanced search functionality, map integration, and mobile first responsive design.",
    role2:
      "Structured a secure booking platform with JWT authentication, payment integration, and real time availability features while optimizing application performance and SEO using Next.js.",
    role3:
      "Implemented REST API integrations with Axios to support dynamic data loading and improve user experience across applications.",
    role4:
      "Deployed an automated talent acquisition platform that synchronizes candidate submissions to Google Sheets and triggers real time email notifications to HR teams.",
    role5: "Collaborated with clients across multiple time zones, delivering production ready web applications while maintaining clear technical documentation and version control using Git."
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