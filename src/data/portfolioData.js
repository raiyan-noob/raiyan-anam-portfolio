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
} from "react-icons/si";

export const personalInfo = {
  name: "Raiyan Anam",
  handle: "anamraiyan",
  githubHandle: "raiyan-noob",
  designation: "Full Stack Developer & Competitive Programmer",
  tagline: "Engineering Scalable Web Apps & Solving Algorithmic Puzzles",
  heroDescription:
    "Passionate about building software that solves real-world problems. Computer Science & Engineering student at AUST with deep interest in Competitive Programming, Full-Stack Development, and AI/ML.",
  email: "raiyananam@example.com",
  phone: "+880 1XXX-XXXXXX",
  whatsapp: "+880 1XXX-XXXXXX",
  location: "Dhaka, Bangladesh",
  resumeLink: "#",
  profileImage: "/profile.jpg",
  socialLinks: {
    github: "https://github.com/raiyan-noob",
    linkedin: "https://www.linkedin.com/in/anamraiyan/",
    codeforces: "https://codeforces.com/profile/anamraiyan",
    leetcode: "https://leetcode.com/anamraiyan",
    twitter: "https://twitter.com/anamraiyan",
    facebook: "https://facebook.com/anamraiyan",
  },
  cpStats: {
    handle: "anamraiyan",
    rating: 1315,
    maxRating: 1375,
    rank: "Pupil",
    organization: "Ahsanullah University of Science and Technology (AUST)",
    problemsSolved: "500+",
  },
};

export const aboutMe = {
  description: [
    "Hey there! I'm Raiyan Anam (known online as anamraiyan / raiyan-noob). I'm a passionate Full Stack Software Developer and Competitive Programmer studying Computer Science & Engineering (CSE) at Ahsanullah University of Science and Technology (AUST) in Dhaka, Bangladesh.",
    "I love building applications that solve real-world problems. My primary web development stack revolves around Next.js, React 19, TypeScript, and the MERN stack (MongoDB, Express.js, React, Node.js), complemented by modern styling with Tailwind CSS and state management.",
    "On the algorithmic side, I am an active competitive programmer on Codeforces (Handle: anamraiyan, Rank: Pupil, Max Rating: 1375) and NeetCode. I solve problems primarily using C++, mastering graph algorithms, dynamic programming, and greedy strategies under contest time pressure.",
    "Outside of software development, I am an academic private tutor in Dhaka, mentoring students in Programming (C++, Python), Data Structures, and ICT, helping them develop computational problem-solving habits.",
  ],
  stats: [
    { label: "Problems Solved", value: "500+" },
    { label: "GitHub Repos", value: "19+" },
    { label: "Codeforces Rating", value: "1375 Max" },
    { label: "Students Mentored", value: "30+" },
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
      name: "Framer Motion",
      proficiency: "Proficient",
      icon: "SiFramer",
      highlight: "Smooth Transitions, Layout Animations, SVG",
    },
    {
      name: "Redux Toolkit",
      proficiency: "Proficient",
      icon: "SiRedux",
      highlight: "Global State, RTK Query, Middleware",
    },
    {
      name: "HTML5 & Modern CSS",
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
      name: "PostgreSQL",
      proficiency: "Proficient",
      icon: "SiPostgresql",
      highlight: "Relational Modeling, Complex Queries, Prisma",
    },
    {
      name: "Firebase",
      proficiency: "Proficient",
      icon: "SiFirebase",
      highlight: "Firestore, Realtime DB, Auth, Hosting",
    },
    {
      name: "Prisma ORM",
      proficiency: "Proficient",
      icon: "SiPrisma",
      highlight: "Type-safe DB Client, Migrations, Schema",
    },
  ],
  problemSolving: [
    {
      name: "C++ (Competitive)",
      proficiency: "Competitive",
      icon: "SiCplusplus",
      highlight: "STL, Fast I/O, Memory Management, Bitmasking",
    },
    {
      name: "Python",
      proficiency: "Advanced",
      icon: "FaPython",
      highlight: "Data Structures, Automation, Scripting",
    },
    {
      name: "Data Structures",
      proficiency: "Competitive",
      icon: "FaTerminal",
      highlight: "Segment Trees, Graphs, Disjoint Sets, Heaps",
    },
    {
      name: "Algorithms & Math",
      proficiency: "Competitive",
      icon: "FaTrophy",
      highlight: "Dynamic Programming, Number Theory, Greedy, Trees",
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
      name: "Docker",
      proficiency: "Intermediate",
      icon: "FaDocker",
      highlight: "Containerization, Multi-stage builds",
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
  ],
};

export const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Ahsanullah University of Science and Technology (AUST)",
    year: "2022 - Present",
    description:
      "Pursuing BSc in CSE with strong foundations in algorithms, data structures, software engineering, operating systems, and database management. Active in competitive programming and university projects.",
    gpa: "CGPA 3.80 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka College",
    year: "2020 - 2022",
    description:
      "Completed HSC in Science group with top marks. Developed advanced analytical problem-solving skills in mathematics, ICT, and physics.",
    gpa: "GPA 5.00 / 5.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Ideal School and College",
    year: "2018 - 2020",
    description:
      "Completed SSC in Science group with distinction. Participated in national math olympiads and regional science fairs.",
    gpa: "GPA 5.00 / 5.00",
  },
];

export const experience = [
  {
    role: "Frontend Developer Intern",
    company: "TechCorp Bangladesh",
    duration: "Jun 2025 - Aug 2025",
    description: [
      "Engineered high-performance UI components using React.js and Tailwind CSS for client dashboards.",
      "Collaborated with product designers to translate Figma design systems into pixel-perfect code.",
      "Optimized client-side rendering and asset delivery, boosting Core Web Vitals performance by 40%.",
      "Actively contributed in daily Agile standups, code reviews, and cross-functional team sprints.",
    ],
  },
  {
    role: "Private CS & Programming Tutor",
    company: "Academic Mentorship (Dhaka)",
    duration: "2023 - Present",
    description: [
      "Mentored university and college students in C++, Python, Data Structures, and HSC/A-Level ICT.",
      "Developed structured problem-solving roadmaps covering recursion, OOP, arrays, and basic graph algorithms.",
      "Helped 30+ students excel in university entrance exams and semester programming courses.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    duration: "Jan 2024 - Present",
    description: [
      "Delivered custom responsive web applications and e-commerce solutions for local enterprises.",
      "Implemented secure payment gateways, RESTful endpoints, and relational database schemas.",
      "Maintained 100% on-time milestone delivery with top client ratings and reviews.",
    ],
  },
];

export const achievements = [
  {
    title: "Codeforces Pupil & Competitive Problem Solver",
    subheading: "Codeforces • Competitive Programming | Verified Rank: Pupil (Peak Rating: 1375)",
    badge: "Official Rank",
    category: "Competitive Programming",
    icon: "SiCodeforces",
    description:
      "Active competitive programmer on Codeforces (@anamraiyan) with official Pupil rank. Regularly competing in Div. 2 and Div. 3 contests, with over 500 algorithmic challenges solved across Codeforces and LeetCode in C++.",
    credentialsUrl: "https://codeforces.com/profile/anamraiyan",
  },
  {
    title: "Problem Solving & Data Structures Specialist",
    subheading: "NeetCode & HackerRank • Algorithmic Problem Solving | Verified",
    badge: "500+ Solved",
    category: "Algorithms & DSA",
    icon: "FaTrophy",
    description:
      "Demonstrated algorithmic proficiency in advanced data structures including Segment Trees, Disjoint Set Union (DSU), BFS/DFS, Dijkstra, and Dynamic Programming with time & space optimization.",
    credentialsUrl: "https://github.com/raiyan-noob/neetcode-submissions-cq3auqbe",
  },
  {
    title: "C# & Object-Oriented Software Engineering",
    subheading: "AUST CSE & Certified Course | Credential ID: CS-2024-AUST",
    badge: "Certified",
    category: "Software Engineering",
    icon: "FaAward",
    description:
      "Completed rigorous certification in C#, .NET object-oriented architecture, SOLID principles, design patterns, and enterprise software engineering methodologies.",
    credentialsUrl: "https://www.linkedin.com/in/anamraiyan/details/certifications/",
  },
  {
    title: "Meta Front-End Developer & React Architecture",
    subheading: "Meta / Coursera • Front-End Specialization | Professional Certificate",
    badge: "Specialization",
    category: "Frontend Development",
    icon: "FaReact",
    description:
      "Certified in modern React application lifecycle, hooks, custom state management with Zustand and Redux Toolkit, responsive Tailwind layouts, and accessible UI engineering.",
    credentialsUrl: "https://www.linkedin.com/in/anamraiyan/details/certifications/",
  },
  {
    title: "Full-Stack Next.js & MERN Stack Engineering",
    subheading: "Modern Web Development • Full Stack Certification",
    badge: "Full Stack",
    category: "Web Engineering",
    icon: "SiNextdotjs",
    description:
      "Mastery of Next.js App Router, server-side rendering, MongoDB aggregation pipelines, RESTful microservices, and secured JWT authentication flows for production systems.",
    credentialsUrl: "https://github.com/raiyan-noob",
  },
  {
    title: "AUST Academic Project Innovation Award — Debugging AUST",
    subheading: "Ahsanullah University of Science and Technology (AUST) • Department of CSE",
    badge: "University Award",
    category: "Project Excellence",
    icon: "FaGamepad",
    description:
      "Recognized for building 'Debugging AUST', a 2D physics platformer game developed in C++ using iGraphics library with custom bounding-box collision physics and memory management.",
    credentialsUrl: "https://github.com/raiyan-noob/2D-Platformer-Game",
  },
  {
    title: "Python for Data Structures & Algorithmic Thinking",
    subheading: "Coursera / Python Institute • Algorithmic Analysis",
    badge: "Algorithms",
    category: "Problem Solving",
    icon: "FaPython",
    description:
      "In-depth certification covering recursion, complexity analysis, graph traversals, and algorithmic optimization in Python for automated problem solving.",
    credentialsUrl: "https://www.linkedin.com/in/anamraiyan/details/certifications/",
  },
  {
    title: "Academic CS & ICT Mentorship Distinction",
    subheading: "Dhaka Academic Tutoring Network • Mentorship Leadership",
    badge: "Leadership",
    category: "Academic Mentorship",
    icon: "FaChalkboardTeacher",
    description:
      "Mentored and trained 30+ university and college students across Dhaka in programming languages (C++, Python), data structures, and computer science fundamentals.",
    credentialsUrl: "https://www.linkedin.com/in/anamraiyan/",
  },
  {
    title: "SQL & Relational Database Design",
    subheading: "PostgreSQL & Database Systems • Certified Query Specialist",
    badge: "Database",
    category: "Backend & DB",
    icon: "FaDatabase",
    description:
      "Proficient in relational schema normalization, complex SQL joins, indexing, and Prisma ORM migrations with zero downtime.",
    credentialsUrl: "https://www.linkedin.com/in/anamraiyan/details/certifications/",
  },
];

export const services = [
  {
    title: "Full-Stack Web Development",
    icon: "FaLaptopCode",
    description:
      "End-to-end web applications built with Next.js, React 19, Node.js, and MongoDB/PostgreSQL. Fast, secure, and production-ready.",
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
    features: ["REST & GraphQL Endpoints", "MongoDB Aggregations", "PostgreSQL Relational DBs", "JWT & OAuth Security"],
  },
  {
    title: "Algorithm Mentorship & Tutoring",
    icon: "FaChalkboardTeacher",
    description:
      "One-on-one and cohort coaching for university students and coding enthusiasts in C++, Python, Data Structures & Algorithms, and ICT.",
    features: ["DSA Roadmap Guidance", "Codeforces Contest Strategy", "C++ STL & OOP Mastery", "Interview Preparation"],
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
    id: "bazar-sodai",
    title: "Bazar Sodai - Next.js E-Commerce Platform",
    shortDescription:
      "A modern grocery & retail e-commerce platform built with Next.js featuring lightning-fast cart operations, responsive product catalog, and seamless checkout.",
    image: "/projects/project1-placeholder.svg",
    techStack: ["Next.js", "JavaScript", "Tailwind CSS", "React", "Node.js"],
    description:
      "Bazar Sodai is a full-featured e-commerce platform built with Next.js that combines a grocery storefront with seamless shopping. Features include dynamic category navigation, real-time product search, responsive cart drawer, and optimized server-side rendering for superior performance.",
    liveLink: "https://github.com/raiyan-noob/bazar-sodai",
    githubLink: "https://github.com/raiyan-noob/bazar-sodai",
    challenges: [
      "Optimizing product image loading and catalog rendering speed across low-bandwidth mobile devices.",
      "Implementing instant cart synchronization without excessive state recalculation.",
      "Managing complex search filters across multiple category hierarchies.",
    ],
    improvements: [
      "Integrate local payment gateways (bKash, Nagad) alongside Stripe.",
      "Add customer order tracking with live status updates.",
      "Implement vendor dashboard for multi-store management.",
    ],
  },
  {
    id: "booklet",
    title: "Booklet - Book Catalog & Reading Tracker",
    shortDescription:
      "A modern book catalog and reading tracker built with Next.js, featuring user collections, review logs, and reading progress analytics.",
    image: "/projects/project2-placeholder.svg",
    techStack: ["Next.js", "JavaScript", "Tailwind CSS", "React", "LocalStorage"],
    description:
      "Booklet helps avid readers organize their reading lists, track yearly reading goals, and review literary works. Built with Next.js, it offers an intuitive dashboard with shelf categorization (Currently Reading, Want to Read, Finished) and interactive rating cards.",
    liveLink: "https://github.com/raiyan-noob/Booklet",
    githubLink: "https://github.com/raiyan-noob/Booklet",
    challenges: [
      "Designing an intuitive shelf categorization workflow that requires minimal user clicks.",
      "Implementing smooth reading progress bars and statistics calculations on the client side.",
    ],
    improvements: [
      "Connect to the Google Books API to allow instant book ISBN lookup.",
      "Add social reading clubs and shared book recommendations.",
      "Build exportable reading challenge infographics.",
    ],
  },
  {
    id: "dispatch-bd",
    title: "Dispatch BD - News & Media Portal",
    shortDescription:
      "A modern news and media web application built with Next.js delivering categorized journalism, breaking news tickers, and rich editorial layouts.",
    image: "/projects/project3-placeholder.svg",
    techStack: ["Next.js", "JavaScript", "Tailwind CSS", "SSR"],
    description:
      "Dispatch BD is a dynamic journalism portal designed for fast reading on mobile and desktop. It features breaking news banners, article categorization (Tech, National, International, Sports), clean typography, and server-side rendering for optimal SEO and social media sharing.",
    liveLink: "https://github.com/raiyan-noob/Dispatch-BD",
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
    id: "codeforce-rating-generator",
    title: "Codeforce Rating Generator",
    shortDescription:
      "A specialized system connecting to the Codeforces API where users input handles to analyze contest performance and rating trajectories.",
    image: "/projects/project1-placeholder.svg",
    techStack: ["Java", "Codeforces API", "JSON Parsing", "Algorithms"],
    description:
      "Built for competitive programmers, this system queries Codeforces public endpoints to evaluate a user's contest history, rating peaks, problem rank breakdown, and projected performance improvements for upcoming rounds.",
    liveLink: "https://codeforces.com/profile/anamraiyan",
    githubLink: "https://github.com/raiyan-noob/Codeforce-Rating-Generator",
    challenges: [
      "Handling API rate limiting and parsing nested contest JSON responses efficiently.",
      "Accurately projecting rating fluctuations using Codeforces formula heuristics.",
    ],
    improvements: [
      "Migrate into a full web-based interactive dashboard with Chart.js.",
      "Add automated contest round reminder notifications via Discord bot.",
    ],
  },
  {
    id: "fitlog",
    title: "FitLog - Fitness & Workout Routine Tracker",
    shortDescription:
      "A clean fitness tracking application that helps users log workouts, monitor exercise routines, and maintain fitness consistency.",
    image: "/projects/project2-placeholder.svg",
    techStack: ["JavaScript", "HTML5", "CSS3", "DOM"],
    description:
      "FitLog is crafted to simplify workout documentation. Users can log daily exercises, track sets/reps/weights, view personal workout history, and set weekly consistency milestones with zero unnecessary friction.",
    liveLink: "https://github.com/raiyan-noob/FitLog",
    githubLink: "https://github.com/raiyan-noob/FitLog",
    challenges: [
      "Creating an effortless mobile-optimized UI so users can log sets mid-workout without tedious menus.",
      "Maintaining local offline persistence for continuous gym tracking without network reliance.",
    ],
    improvements: [
      "Add visual muscle group heatmaps based on logged exercises.",
      "Include rest timers between sets with audio alerts.",
    ],
  },
  {
    id: "debugging-aust",
    title: "Debugging AUST - 2D Platformer Game",
    shortDescription:
      "A 2D platformer game developed in C++ using the iGraphics library featuring custom collision detection, sprite physics, and university-themed challenges.",
    image: "/projects/project3-placeholder.svg",
    techStack: ["C++", "iGraphics Library", "Game Physics", "Data Structures"],
    description:
      "Debugging AUST is a creative 2D platformer game built as a key university software project at AUST. Players navigate character sprites through obstacle courses, dodging bugs and collecting academic tokens, powered by custom collision math and C++ memory management.",
    liveLink: "https://github.com/raiyan-noob/2D-Platformer-Game",
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
