import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLink} from '@fortawesome/free-solid-svg-icons'


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
        "skill": "/icons8-database-80.png",
        "alt": "sql",
    },
    {
        "skill": "/icons8-firebase-96.png",
        "alt": "firebase",
    },
] as const;

export const experience = [
  {
    date: "january 2023 - present",
    company: "huawei",
    jobTitle: "system software engineer 🔹 ",
    role1:
      "Utilized JavaScript, SQL, custom HTML, CSS, and Python to develop custom scripts, dashboards, and tools, automating tasks such as ticketing and reporting. This led to a 20% reduction in manual labor and resource utilization for clients.",
    role2:
      "Collaborated closely with cross-functional teams to pinpoint automation opportunities, elicit requirements, and deliver tailored solutions that met their specific needs.",
    role3:
      "Integrated monitoring and logging tools seamlessly into existing systems, enabling proactive identification and resolution of operational issues.",
    role4:
      "Played a pivotal role in the migration of web applications and infrastructure to cloud platforms like OWS (Huawei Cloud), strategically enhancing scalability and cost efficiency.",
  },
  {
    date: "february 2022 - present",
    company: "freelance",
    jobTitle: "frontend engineer 🔹 ",
    role1:
      "Led the development of 10+ responsive web applications such as housing, booking, portfolios etc. using modern frontend frameworks like React, ensuring optimal performance and a seamless user experience.",
    role2:
      "Worked closely with UX/UI designers to transform wireframes and prototypes, including those from platforms like Figma, into functional and visually captivating interfaces.",
    role3:
      "Enhanced website performance by optimizing tools like ESLint and Webpack, adeptly identifying and resolving performance bottlenecks to minimize load times and enhance overall responsiveness.",
    role4:
      "Fostered collaboration with the backend team to seamlessly integrate frontend applications with REST API integrations such as Axios, ensuring smooth data flow and synchronization.",
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