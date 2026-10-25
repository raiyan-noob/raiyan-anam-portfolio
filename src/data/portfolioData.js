import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaTerminal,
  FaTrophy,
  FaAward,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaBug,
  FaRocket,
  FaGamepad,
  FaBook,
  FaNewspaper,
  FaDumbbell,
  FaShoppingCart,
  FaCertificate,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiFirebase,
  SiPostgresql,
  SiRedux,
  SiFramer,
  SiVercel,
  SiGithub,
  SiCplusplus,
  SiLeetcode,
  SiCodeforces,
  SiPrisma,
  SiDart,
} from "react-icons/si";

export const personalInfo = {
  name: "Raiyan Anam",
  handle: "anamraiyan",
  githubHandle: "raiyan-noob",
  designation: "Full Stack Developer & Competitive Programmer",
  tagline: "Engineering Scalable Web Apps & Solving Algorithmic Puzzles",
  heroDescription:
    "Passionate about building software that solves real-world problems. Computer Science & Engineering student at AUST with deep interest in Competitive Programming, Full-Stack Development, and AI/ML.",
  email: "anamraiyan@gmail.com",
  phone: "+880 1770-372491",
  whatsapp: "+880 1770-372491",
  location: "Dhaka, Bangladesh",
  resumeLink: "/Resume.pdf",
  profileImage: "/profile.jpeg",
  socialLinks: {
    github: "https://github.com/raiyan-noob",
    linkedin: "https://www.linkedin.com/in/anamraiyan/",
    codeforces: "https://codeforces.com/profile/anamraiyan",
    leetcode: "https://leetcode.com/anamraiyan",
    facebook: "https://www.facebook.com/profile.php?id=61570802732912",
  },
  cpStats: {
    handle: "anamraiyan",
    rating: 1315,
    maxRating: 1375,
    rank: "Pupil",
    problemsSolved: "600+",
  },
};

export const aboutMe = {
  description: [
    "Hey there! I'm Raiyan Anam. I'm a passionate Full Stack Software Developer and Competitive Programmer studying Computer Science & Engineering (CSE) at Ahsanullah University of Science and Technology (AUST) in Dhaka, Bangladesh.",
    "I love building applications that solve real-world problems. My primary web development stack revolves around Next.js, React 19, TypeScript, and the MERN stack (MongoDB, Express.js, React, Node.js), complemented by modern styling with Tailwind CSS and state management.",
    "On the algorithmic side, I am an active competitive programmer on Codeforces (Max Rating: 1375) and LeetCode. I solve problems primarily using C++, mastering Data Structure & Algorithms under contest time pressure.",
    "Beyond software engineering, I am an active sports enthusiast who has proudly represented my school, college, and university teams in cricket and football. I harbor a deep passion for Artificial Intelligence & Machine Learning (AI/ML), enjoy crafting creative visuals with Adobe Photoshop and Canva.",
  ],
  stats: [
    { label: "Problems Solved", value: "600+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Codeforces Rating", value: "1375 Max" },
    { label: "Stacks Learned", value: "15+" },
  ],
};

export const skills = {
  frontend: [
    {
      name: "React.js",
      proficiency: "Core Stack",
      icon: "FaReact",
      highlight: "Hooks, Context, Zustand, Server Actions",
    },
    {
      name: "Next.js",
      proficiency: "Core Stack",
      icon: "SiNextdotjs",
      highlight: "App Router, SSR/SSG, Turbopack, SEO",
    },
    {
      name: "JavaScript",
      proficiency: "Advanced",
      icon: "SiJavascript",
      highlight: "ES2024+, Async/Await, Closures, DOM",
    },
    {
      name: "TypeScript",
      proficiency: "Advanced",
      icon: "SiTypescript",
      highlight: "Strict Typing, Generics, Interfaces",
    },
    {
      name: "Tailwind CSS",
      proficiency: "Core Stack",
      icon: "SiTailwindcss",
      highlight: "Responsive Design, Tailwind v4, DaisyUI",
    },
    {
      name: "Dart",
      proficiency: "Proficient",
      icon: "SiDart",
      highlight: "Flutter & Mobile Apps, OOP, Asynchronous Code",
    },
    {
      name: "Flutter",
      proficiency: "Proficient",
      icon: "SiFlutter",
      highlight: "Cross-Platform Mobile Apps, Dart, State Management, Custom UI",
    },
    {
      name: "HTML5 & CSS3",
      proficiency: "Expert",
      icon: "FaHtml5",
      highlight: "Semantic Markup, Modern CSS, Flex/Grid",
    },
  ],
  backend: [
    {
      name: "Node.js",
      proficiency: "Core Stack",
      icon: "FaNodeJs",
      highlight: "Event-driven runtime, Streams, REST Architecture",
    },
    {
      name: "Express.js",
      proficiency: "Core Stack",
      icon: "SiExpress",
      highlight: "Middleware, Routing, JWT Auth, Security",
    },
    {
      name: "MongoDB",
      proficiency: "Advanced",
      icon: "SiMongodb",
      highlight: "Aggregation Pipelines, Mongoose, Indexing",
    },
    {
      name: "Firebase",
      proficiency: "Proficient",
      icon: "SiFirebase",
      highlight: "Firestore, Realtime DB, Auth, Hosting",
    },
    {
      name: "Better Auth",
      proficiency: "Advanced",
      icon: "FaShieldAlt",
      highlight: "TypeScript-first Auth, Session Management, OAuth, Security",
    },
  ],
  problemSolving: [
    {
      name: "C++ (Competitive)",
      proficiency: "Competitive",
      icon: "SiCplusplus",
      highlight: "STL, Fast I/O, Memory Management",
    },
    {
      name: "C",
      proficiency: "Advanced",
      icon: "SiC",
      highlight: "Pointers, Memory Allocation, Structures, Systems Logic",
    },
    {
      name: "Java",
      proficiency: "Proficient",
      icon: "FaJava",
      highlight: "OOP Architecture, Multithreading, DSA, Collections",
    },
    {
      name: "Data Structures",
      proficiency: "Competitive",
      icon: "FaTerminal",
      highlight: "Trees, Graphs, Disjoint Sets, Heaps",
    },
    {
      name: "Algorithms & Math",
      proficiency: "Competitive",
      icon: "FaTrophy",
      highlight: "Dynamic Programming, Number Theory, Greedy, Combinatorics",
    },
  ],
  tools: [
    {
      name: "Git & GitHub",
      proficiency: "Advanced",
      icon: "FaGitAlt",
      highlight: "Branching workflows, Pull Requests, CI/CD",
    },
    {
      name: "Vercel & Netlify",
      proficiency: "Advanced",
      icon: "SiVercel",
      highlight: "Edge Deployments, Serverless Functions",
    },
    {
      name: "Figma",
      proficiency: "Proficient",
      icon: "FaFigma",
      highlight: "UI/UX Wireframing, Interactive Prototypes",
    },
    {
      name: "Adobe Photoshop",
      proficiency: "Proficient",
      icon: "TbBrandAdobePhotoshop",
      highlight: "Photo Editing, Banners, Digital Visuals, Mockups",
    },
    {
      name: "Canva",
      proficiency: "Expert",
      icon: "FaPalette",
      highlight: "Social Media Graphics, Presentations, UI Wireframes, Branding",
    },
  ],
};

export const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Ahsanullah University of Science and Technology (AUST)",
    year: "2024 - Present",
    description:
      "Pursuing BSc in CSE with strong foundations in algorithms, data structures, software engineering, operating systems, and database management. Active in competitive programming and university projects.",
    gpa: "3.22 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Government Laboratory High School",
    year: "2021 - 2023",
    description:
      "Completed HSC in Science group. Developed advanced foundation in mathematics, ICT, and physics.",
    gpa: "5.00 / 5.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Government Laboratory High School",
    year: "2013 - 2021",
    description:
      "Completed SSC in Science group with distinction. Participated in national competitions.",
    gpa: "5.00 / 5.00",
  },
];

export const experience = [
 
  {
    role: "Competitive Programmer & Algorithmic Problem Solver",
    company: "Codeforces & LeetCode",
    duration: "2024 - Present",
    description: [
      "Regularly compete in Codeforces rated rounds, achieving Pupil rank with a max rating of 1375.",
      "Solved 600+ algorithmic challenges encompassing graphs, dynamic programming, number theory, and data structures in C++.",
      "Participated in national, inter, and intra-university contests.",
    ],
  },
  {
    role: "AI Trainer",
    company: "Outlier",
    duration: "Dec 2025 - June 2026",
    description: [
  "Evaluated and refined AI-generated responses to improve accuracy, relevance, and overall quality.",
  "Applied critical thinking and domain-specific knowledge to identify errors, inconsistencies, and reasoning gaps in AI outputs.",
  "Provided structured feedback to support model training, instruction following, and continuous AI performance improvement.",
],
  },
];

export const achievements = [
  {
    title: "Codeforces Pupil & Competitive Problem Solver",
    subheading: "Codeforces • Competitive Programming | Verified Rank: Pupil (Max Rating: 1375)",
    badge: "Official Rank",
    category: "Competitive Programming",
    icon: "SiCodeforces",
    description:
      "Active competitive programmer on Codeforces with official Pupil rank. Regularly competing in Div. 2 and Div. 3 contests, with over 600 problems solved in C++.",
    credentialsUrl: "https://codeforces.com/profile/anamraiyan",
  },
  {
    title: "Intra AUST Programming Contest (IAPC)",
    subheading: "AUST CSE Department • Competitive Programming",
    badge: "Contest",
    category: "Competitive Programming",
    icon: "SiCodeforces",
    description: (
  <>
    2x Champion (Junior Category)
    <br />
    1x 2nd Runners Up (Senior Category)
  </>
),
    credentialsUrl: "https://drive.google.com/drive/folders/1mESet140KVLgZt8fPPFC5BvUHYeXdla3?usp=sharing",
  },
  {
    title: "YCPC by Phitron",
    subheading: "Phitron • Competitive Programming",
    badge: "Contest",
    category: "Competitive Programming",
    icon: "SiCodeforces",
    description: "Ranked 10th nationally in the YCPC Grand Finale contest.",
    credentialsUrl: "https://drive.google.com/file/d/1S8ge8NOlW-yeYQdVUxBv_4zbenA8du-W/view?usp=sharing",
  },
  {
    title: "C# & Responsive Web Design Certificate",
    subheading: "FreeCodeCamp | Microsoft",
    badge: "Certified",
    category: "Development",
    icon: "FaAward",
    description:
      "Completed rigorous certification in C#, .NET object-oriented architecture, and Responsive Web Design from FreeCodeCamp & Microsoft.",
    credentialsUrl: "https://www.linkedin.com/in/anamraiyan/details/certifications/",
  },
 {
    title: "DUET National Project Showcasing",
    subheading: "DUET | Project Showcasing",
    badge: "Certified",
    category: "Project Showcasing",
    icon: "FaAward",
    description:
      "Participated in the final round of the DUET CSE Carnival project showcasing competition. Was selected among the top 26 teams out of 65 teams.",
    credentialsUrl: "https://drive.google.com/file/d/10PLVQs-fqXVDooAs5tSlGYmggU34-OmE/view?usp=sharing",
  },
];

export const services = [
  {
    title: "Full-Stack Web Development",
    icon: "FaLaptopCode",
    description:
      "End-to-end web applications built with Next.js, React 19, Node.js, and MongoDB. Fast, secure, and production-ready.",
    features: ["Custom Web Applications", "MERN Stack Solutions", "Next.js App Router & SSR", "API Integrations & Auth"],
  },
  {
    title: "Frontend Engineering & UI/UX",
    icon: "FaReact",
    description:
      "Pixel-perfect, fluidly responsive interfaces crafted using modern Tailwind CSS v4, DaisyUI, and Framer Motion interactive animations.",
    features: ["Responsive Mobile-First UI", "Modern Glassmorphism Design", "Micro-Interactions & Motion", "Cross-Browser Compatibility"],
  },
  {
    title: "Backend & Database Architecture",
    icon: "FaServer",
    description:
      "Robust RESTful microservices, scalable schema designs with Prisma, indexing, authentication, and secure data handling.",
    features: ["REST & GraphQL Endpoints", "MongoDB Aggregations", "BetterAuth Safe Authentication", "JWT & OAuth Security"],
  },
  {
    title: "AI / ML Integration & Intelligent Systems",
    icon: "FaRocket",
    description:
      "Integrating machine learning models and intelligent data processing to add smart automation and predictive features to modern web applications.",
    features: ["AI API Integrations", "Python Data Processing", "Intelligent Automations", "Data Modeling & Logic"],
  },
  {
    title: "Performance & SEO Optimization",
    icon: "FaRocket",
    description:
      "Auditing and upgrading slow web apps with code splitting, dynamic caching, asset compression, and lighthouse performance optimization.",
    features: ["Core Web Vitals Boost", "SEO Metadata Structuring", "Bundle Size Reduction", "Fast First Contentful Paint"],
  },
  {
    title: "Bug Fixing & Code Refactoring",
    icon: "FaBug",
    description:
      "Debugging complex full-stack issues, refactoring messy codebases into clean architecture, and modernizing legacy apps.",
    features: ["Troubleshooting & Fixes", "TypeScript Migration", "Codebase Cleanups", "CI/CD & Deployment Help"],
  },
];

export const projects = [
  {
    id: "mindease",
    title: "MindEase - A Flutter-based mental wellness app",
    shortDescription:
      "A Flutter-based mental wellness app designed to help users manage stress and emotions through personalized calming activities, breathing exercises, and curated content.",
    image: "/projects/Mindease.jpg",
    techStack: ["Flutter", "Dart", "Firebase"],
    description:
      "MindEase is a mobile application that lets users select how they are feeling and explore suitable calming content. Users can choose a mood such as sad, anxious, stressed, or calm, then select a preferred healing method such as entertainment, spiritual/religious content, poetry, or stories. The app also includes authentication, cloud-backed data storage, a breathing exercise, and a clean light/dark themed interface.",
    githubLink: "https://github.com/raiyan-noob/MindEase",
    challenges: [
  "Designing an intuitive and calming user interface to support users experiencing different emotional states.",
  "Organizing mood-based healing content across entertainment, spirituality, poetry, and stories.",
  "Implementing interactive breathing exercises and smooth navigation between emotional wellness features.",
],
improvements: [
  "Add anonymous community posts and comments to encourage emotional support and shared experiences.",
  "Expand the library of mood-based healing resources, including guided breathing exercises and mindfulness activities.",
  "Implement user profiles and personalized wellness progress tracking to support consistent emotional self-care.",
],
  },
  {
    id: "HarborCFO",
    title: "HarborCFO - SME Finance Copilot",
    shortDescription:
      "HarborCFO is an autonomous, deterministic, and fiduciary-grade SME finance copilot.",
    image: "/projects/harbor.png",
    techStack: ["Next.js", "React", "MongoDB", "BetterAuth"],
    description:
      "HarborCFO is an autonomous, deterministic, and fiduciary-grade SME finance copilot. It combines 91-day deterministic cash flow forecasting, multi-factor financing remedy matching, role-based access control (RBAC), and an AI copilot with real-time tool execution telemetry.",
    liveLink: "https://harborcfo.vercel.app/",
    githubLink: "https://github.com/azmaeenmahtab/Shenzen-Fintechathon",
    challenges: [
  "Ensuring accurate financial transaction categorization and validation across diverse accounting data sources.",
  "Maintaining consistency between bank transactions, accounts receivable, and accounts payable records.",
  "Implementing reliable financial audit trails and evidence-based validation for transparent financial operations.",
],
improvements: [
  "Integrate more banking APIs to enable automated transaction synchronization and real-time financial monitoring.",
  "Enhance AI-powered financial insights with cash flow forecasting, anomaly detection, and expense analysis.",
  "Expand reporting capabilities with customizable financial dashboards, automated reconciliation, and downloadable audit reports.",
],
  },
  {
    id: "castle-design",
    title: "Castle Design - A React-based portfolio website",
    shortDescription:
      "Castle Design is a responsive interior design website for showcasing residential and commercial spaces.",
    image: "/projects/castle.png",
    techStack: ["React","JavaScript", "Tailwind CSS", "LocalStorage"],
    description:
      "Castle Design is a responsive interior design website for showcasing residential and commercial spaces. The site presents the brand's design philosophy, services, portfolio, and contact options in a warm editorial interface inspired by the company's slogan.",
    liveLink: "https://castledesign.vercel.app/",
    githubLink: "https://github.com/raiyan-noob/Castle-design",
    challenges: [
  "Creating a visually appealing and responsive portfolio layout that showcases design projects across different screen sizes.",
  "Optimizing image-heavy project galleries for faster loading and a smooth browsing experience.",
  "Maintaining consistent branding, typography, and visual hierarchy across all website sections.",
],
improvements: [
  "Add a content management system to simplify portfolio updates and project management.",
  "Integrate a contact form with email notifications to streamline client inquiries.",
  "Enhance project galleries with interactive animations, category filters, and detailed case studies.",
],
  },
  {
    id: "dispatch-bd",
    title: "Dispatch BD - News & Media Portal",
    shortDescription:
      "A modern news and media web application built with Next.js delivering categorized journalism, breaking news tickers, and rich editorial layouts.",
    image: "/projects/dispatch.png",
    techStack: ["Next.js", "JavaScript", "Tailwind CSS", "BetterAuth"],
    description:
      "Dispatch BD is a dynamic journalism portal designed for fast reading on mobile and desktop. It features breaking news banners, article categorization (Tech, National, International, Sports), clean typography, and server-side rendering for optimal SEO and social media sharing.",
    liveLink: "https://dispatch-bd.vercel.app/",
    githubLink: "https://github.com/raiyan-noob/Dispatch-BD",
    challenges: [
      "Achieving sub-second First Contentful Paint times for breaking news readers.",
      "Implementing structured metadata for social card unfurling across Twitter/Facebook.",
    ],
    improvements: [
      "Add audio narration for articles using text-to-speech.",
      "Implement a bookmarking system for offline reading.",
    ],
  },
  {
    id: "debugging-aust",
    title: "Debugging AUST - 2D Platformer Game",
    shortDescription:
      "A 2D platformer game developed in C++ using the iGraphics library featuring custom collision detection, sprite physics, and university-themed challenges.",
    image: "/projects/debugging.png",
    techStack: ["C++", "iGraphics Library", "Game Physics", "Data Structures"],
    description:
      "Debugging AUST is a creative 2D platformer game built as a key university project. Players navigate character sprites through obstacle courses, dodging bugs and collecting academic tokens, powered by custom collision math and C++ memory management.",
    githubLink: "https://github.com/raiyan-noob/2D-Platformer-Game",
    challenges: [
      "Implementing custom pixel-perfect bounding box collision detection and gravity physics without an external game engine.",
      "Maintaining smooth 60 FPS frame rates using the low-level iGraphics rendering cycle.",
    ],
    improvements: [
      "Port the game to modern SDL2 or WebAssembly for in-browser gameplay.",
      "Add custom level editor with player-generated stages.",
    ],
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
