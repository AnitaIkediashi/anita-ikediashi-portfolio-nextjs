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
        "date": "january 2023 - present",
        "company": "huawei",
        "jobTitle": "software engineer 🔹 ",
        "role1": "Collaborated with cross-functional teams to identify automation opportunities, gather requirements, create custom scripts and tools to automate repetitive tasks, leading to a notable 10% savings in time and resources.",
        "role2": "Integrated monitoring and logging tools into existing systems and cloud platforms, enabling proactive identification and resolution of issues."
    },
    {
        "date": "december 2021 - present",
        "company": "freelance",
        "jobTitle": "frontend engineer 🔹 ",
        "role1": "Developed and styled over 10 interactive web applications utilizing modern frontend frameworks like React and Next.JS to ensure optimal performance and a seamless user experience.",
        "role2": "Collaborated with UX/UI designers and backend engineers to translate wireframes and prototypes into functional, visually appealing interfaces for organizations in the community."
    },
] as const

export const projects = [
  {
    idx: 1,
    image: "/image4.png",
    desc: "A restaurant web page built with smooth animations, seamless navigation, checkout session.",
    title: "AfriDishes",
    icons: [
      {
        id: 1,
        githubIcon: faGithub,
        repoLink: "https://github.com/AnitaIkediashi/AfriDishes-frontend.git",
        linkIcon: faLink,
        url: "https://fullstack-app-tvcb.vercel.app/",
      },
    ],
    tools: [
      "/icons8-react-100.png",
      "/icons8-tailwindcss-96.png",
      "/icons8-stripe-logo-96.png",
    ],
  },
  {
    idx: 2,
    image: "/image1.PNG",
    desc: "Contributed to the development of law firm landing page ensuring a responsive design and optimal user experience.",
    title: "Morgan & Associates",
    icons: [
      {
        id: 2,
        githubIcon: faGithub,
        repoLink:
          "https://github.com/AnitaIkediashi/morgan---associate-design.git",
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
    idx: 3,
    image: "/imag3.png",
    desc: "A real time blog application built with react, firebase storage, authentication and firestore.",
    title: "MyBlog",
    icons: [
      {
        id: 3,
        githubIcon: faGithub,
        repoLink: "https://github.com/AnitaIkediashi/blog-crud-app.git",
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
    idx: 4,
    image: "/image2.PNG",
    desc: "A dashboard built with react and react hooks to monitor a user income and expenses.",
    title: "Budget",
    icons: [
      {
        id: 4,
        githubIcon: faGithub,
        repoLink: "https://github.com/AnitaIkediashi/budget-app.git",
        linkIcon: faLink,
        url: "https://budget-app-silk.vercel.app/",
      },
    ],
    tools: [
      "/icons8-react-100.png",
      "/icons8-tailwindcss-96.png",
      "/icons8-firebase-96.png",
    ],
  },
] as const;