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
    date: "august 2024 - present",
    company: "huawei",
    jobTitle: "UI Designer 🔹 ",
    role1:
      "Created user-friendly and aesthetically pleasing interfaces for web applications, prioritizing responsive design, consistency, and user centered principles to enhance the overall experience. Worked closely with development teams to ensure smooth integration and optimized performance, while consistently refining the design based on user feedback and testing",
  },
  {
    id: 2,
    date: "april 2024 - present",
    company: "huawei",
    jobTitle: "technical team lead 🔹 ",
    role1:
      "Directed cross-functional teams in executing complex technical projects, ensuring timely delivery, staying within budget, and maintaining high-quality standards, all while effectively managing risks and meeting stakeholder expectations. ",
    role2:
      "Took ownership of solution delivery, from identifying opportunities for automation to overseeing the deployment of cloud infrastructure.",
  },
  {
    id: 3,
    date: "january 2023 - present",
    company: "huawei",
    jobTitle: "cloud engineer 🔹 ",
    role1:
      "Created and deployed custom scripts, dashboards, and tools using JavaScript, SQL, HTML, CSS, and Python to automate processes like ticketing and reporting, cutting manual labor and resource use by 20% for clients.",
    role2:
      "Worked closely with cross-functional teams to identify automation opportunities, gather requirements, and deliver tailored solutions that met business objectives.",
    role3:
      "Integrated advanced monitoring and logging tools into systems, enabling proactive issue detection and resolution to maintain operational stability and performance.",
    role4:
      "Led the migration of web applications and infrastructure to cloud platforms such as OWS (Huawei Cloud), improving scalability and driving cost efficiency.",
  },
  {
    id: 4,
    date: "september 2022 - present",
    company: "freelance",
    jobTitle: "frontend developer 🔹 ",
    role1:
      "Developed and led the creation of 10+ responsive web applications, including housing, booking, and portfolio projects, using React, Next.js, and modern front-end frameworks to ensure seamless performance across devices.",
    role2:
      "Optimized web performance using Chrome Developer Tools, implementing lazy loading, code splitting, and asset optimization to reduce load times and enhance responsiveness while ensuring accessibility compliance with ARIA roles and semantic HTML.",
    role3:
      "Strengthened security by mitigating Cross-Site Scripting (XSS), CORS issues, and implementing secure authentication practices, while also integrating front-end applications with REST APIs using Axios for real-time data synchronization.",
    role4:
      "Built scalable, modular UI components following modern frontend modularity principles, ensuring clear separation of concerns between UI and business logic to enhance maintainability and collaboration across teams.",
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