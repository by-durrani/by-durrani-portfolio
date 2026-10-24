// ============================================================================
//  EDIT EVERYTHING HERE.
//  Single source of truth for the whole portfolio / résumé.
//  Sourced from github.com/by-durrani (profile README, repos, live deploys).
//  Anything marked  // CONFIRM  is a best guess from public data — check it.
//  In headings, wrap a word in *asterisks* to set it in the italic accent face.
// ============================================================================

export const resume = {
  // ---- IDENTITY -----------------------------------------------------------
  name: "Abdur Rehman Durrani", // CONFIRM: GitHub shows "Abd Ur Rehman Durrani"
  firstName: "Abdur",
  initials: "AD",
  title: "Full-Stack & AI Engineer",
  roles: ["Full-stack engineer", "AI builder", "Founder, Durrani Arts"],
  tagline:
    "I build fast, considered web products with React, Next.js and Node — and I'm going deep on AI engineering: RAG, agents and ML.",
  heroLine: "Crafting *digital* + *physical* experiences.",
  location: "Pakistan",
  timezone: "Asia/Karachi",
  timezoneLabel: "PKT",
  availability: "Available for full-time roles & freelance",

  // ---- CONTACT + LINKS ----------------------------------------------------
  email: "abdurrehmandurrani1215@gmail.com",
  links: {
    github: "https://github.com/by-durrani",
    linkedin: "https://www.linkedin.com/in/abd-ur-rehman-khan-555a50247/",
    x: "https://x.com/DurraniKnuggets",
    website: "https://by-durrani.xyz",
    leetcode: "", // add your profile URL to show a LeetCode link in Practice
  },

  // ---- TOP-LINE STATS (animated counters) ---------------------------------
  // `from` is where the counter starts; `pad` zero-pads (1 → "01").
  stats: [
    { value: 44, label: "Public repositories on GitHub" },
    { value: 14, suffix: "+", label: "Projects live in production" },
    { value: 2022, from: 2000, label: "Shipping code since" },
    { value: 1, pad: 2, label: "Studio founded — Durrani Arts" },
  ],

  // ---- ABOUT --------------------------------------------------------------
  statement:
    "I'm a developer and founder from Pakistan who bridges physical business and software — building products, AI tools and developer-first systems that are fast, considered and built to last.",
  about: [
    "I live in the JavaScript ecosystem — React, Next.js, Node and Bun — and care about the whole pipeline: clean interfaces, solid APIs and infrastructure that stays up.",
    "I also run Durrani Arts, a custom signage, acrylic fabrication and branding studio. Running a real business keeps my software grounded: I build things people actually use, then automate the boring parts.",
    "Right now I'm going deep on AI engineering — RAG systems, LLM agents and ML fundamentals — while documenting the journey on LinkedIn and X.",
  ],
  facts: [
    { k: "Based in", v: "Pakistan · UTC+5" },
    { k: "Focus", v: "Full-stack · AI engineering" },
    { k: "Founder", v: "Durrani Arts" },
    { k: "Open to", v: "Full-time & freelance" },
  ],
  motto: "Slow down if you wanna last long.",

  // ---- WHAT I DO ----------------------------------------------------------
  services: [
    {
      title: "Full-stack web apps",
      body: "Product-grade apps with Next.js, React and Node — from schema and auth to a deployed, monitored release.",
      tools: ["Next.js", "React", "Node.js", "PostgreSQL"],
    },
    {
      title: "AI features & RAG",
      body: "Retrieval-augmented chat, classifiers and agent workflows wired into real products — with answers you can trace.",
      tools: ["Python", "Vercel AI SDK", "Embeddings", "Flask"],
    },
    {
      title: "Business & brand systems",
      body: "Websites, storefronts and automation for real-world businesses — the same playbook I run at Durrani Arts.",
      tools: ["Medusa", "Stripe", "Figma", "Illustrator"],
    },
  ],

  // ---- SKILLS (grouped) ---------------------------------------------------
  // Order = priority on the page.
  skills: [
    {
      group: "Frontend",
      items: ["React", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "shadcn/ui", "Material UI", "Framer Motion", "GSAP", "Three.js", "Zustand", "SWR", "TanStack Query"],
    },
    {
      group: "Backend & APIs",
      items: ["Node.js", "Bun", "Express", "Hono", "tRPC", "REST", "Flask", "Django", "NextAuth / JWT", "Zod", "Appwrite"],
    },
    {
      group: "AI & Data",
      items: ["Python", "NumPy", "Pandas", "Matplotlib", "CNNs & classification", "RAG systems", "LLM agents", "Vercel AI SDK"],
    },
    {
      group: "Databases & ORMs",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Drizzle ORM", "Prisma", "Firebase", "Appwrite DB"],
    },
    {
      group: "DevOps & Cloud",
      items: ["Docker", "Kubernetes", "Google Cloud", "Cloud SQL", "CI/CD", "Vercel", "Sentry", "Linux"],
    },
    {
      group: "Mobile & Desktop",
      items: ["React Native (CLI & Expo)", "NativeWind", "Electron", "Tkinter"],
    },
    {
      group: "Design & Media",
      items: ["Figma", "Adobe Illustrator", "Premiere Pro"],
    },
    {
      group: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "SQL", "R", "C"],
    },
  ],

  // ---- EXPERIENCE ---------------------------------------------------------
  experience: [
    {
      role: "Founder",
      company: "Durrani Arts",
      period: "2022 — Present", // CONFIRM start year
      location: "Pakistan",
      bullets: [
        "Run a custom signage, acrylic fabrication and branding studio — owning clients, production and delivery end-to-end.",
        "Built the studio's digital presence: a React + Framer Motion brand site and a headless Medusa + Next.js storefront with Stripe checkout.",
        "Bring software thinking to day-to-day operations — workflows, automation and online growth.",
      ],
    },
    {
      role: "Freelance Full-Stack Developer",
      company: "Independent",
      period: "2024 — Present", // CONFIRM start year
      location: "Remote",
      bullets: [
        "Designed and shipped the portfolio & enquiry site for BIN LADIN Constructions (Islamabad) on Next.js 16, React 19 and Tailwind CSS 4, with a Nodemailer enquiry flow.",
        "Deliver full-stack builds end-to-end — auth (NextAuth, JWT, Appwrite), data (PostgreSQL, MongoDB, MySQL) and Vercel deployments.",
        "Built production-style backends such as a Bun + Express subscription API with Zod validation, Arcjet rate-limiting and email reminders.",
      ],
    },
    {
      role: "AI & Product Builds",
      company: "Self-directed",
      period: "2023 — Present",
      location: "Remote",
      bullets: [
        "Built AskMe, a RAG chat app that answers questions over your own documents and cites its sources, using the Vercel AI SDK.",
        "Trained a CNN traffic-sign classifier and served it through a Flask API behind a React + TypeScript front-end.",
        "Shipped 40+ public repos across web, mobile (React Native), desktop (Electron) and Python — from clones to production tools.",
      ],
    },
  ],

  // ---- PROJECTS -----------------------------------------------------------
  // The first four become large featured cards; the rest form the index list.
  // `hue` (0–360) tints the generated cover art.
  projects: [
    {
      name: "AskMe — RAG Q&A",
      short: "AskMe",
      year: 2025,
      tag: "AI / ML",
      hue: 125,
      blurb: "Retrieval-augmented chat that answers questions over your own documents — and cites its sources.",
      stack: ["Next.js", "TypeScript", "Vercel AI SDK", "Embeddings", "Vector search"],
      links: {
        live: "https://askme-rag.vercel.app",
        code: "https://github.com/by-durrani/ASKME-RAG",
      },
    },
    {
      name: "BIN LADIN Constructions",
      short: "BIN LADIN",
      year: 2026,
      tag: "CLIENT",
      hue: 55,
      blurb: "Portfolio & enquiry site for an Islamabad construction firm — project pages, Cache Components and a working enquiry inbox.",
      stack: ["Next.js 16", "React 19", "Tailwind CSS 4", "Nodemailer"],
      links: {
        live: "https://binladin-constructions.vercel.app",
        code: "https://github.com/by-durrani/binladin-constructions",
      },
    },
    {
      name: "Traffic Sign Classifier",
      short: "Signs CNN",
      year: 2024,
      tag: "AI / ML",
      hue: 25,
      blurb: "CNN that recognises road signs, served through a Flask API behind a React + TypeScript front-end.",
      stack: ["Python", "CNN", "Flask", "React", "TypeScript"],
      links: {
        live: "https://traffic-sign-classifier.vercel.app",
        code: "https://github.com/by-durrani/Traffic_sign_classifier",
        model: "https://github.com/by-durrani/Traffic_sign_classifier_flask",
      },
    },
    {
      name: "Apple 3D Landing",
      short: "Apple 3D",
      year: 2025,
      tag: "FRONTEND",
      hue: 250,
      blurb: "Product landing page with scroll-driven 3D, real-time material swaps and GSAP choreography.",
      stack: ["Three.js", "GSAP", "React", "Bun"],
      links: {
        live: "https://apple-s-landing-page.vercel.app",
        code: "https://github.com/by-durrani/apple-s-landing-page",
      },
    },
    {
      name: "Travel Agency Dashboard",
      year: 2025,
      tag: "FULL-STACK",
      blurb: "Admin dashboard for trips, bookings and analytics — Appwrite auth & data, Sentry monitoring.",
      stack: ["React Router v7", "Appwrite", "Syncfusion", "Sentry"],
      links: { code: "https://github.com/by-durrani/travel-dashboard" },
    },
    {
      name: "Netflix Clone",
      year: 2025,
      tag: "FULL-STACK",
      blurb: "Streaming UI with TMDb data, trailers and NextAuth sign-in backed by Prisma.",
      stack: ["Next.js", "NextAuth", "Prisma", "Zustand", "SWR"],
      links: {
        live: "https://netflix-clone-beta-one-61.vercel.app",
        code: "https://github.com/by-durrani/netflix-clone",
      },
    },
    {
      name: "Subscription API",
      year: 2025,
      tag: "BACKEND",
      blurb: "REST API with JWT auth, subscription tracking, email reminders and Arcjet rate-limiting.",
      stack: ["Bun", "Express", "MongoDB", "Zod", "Arcjet"],
      links: { code: "https://github.com/by-durrani/express-subscription-api" },
    },
    {
      name: "Durrani Arts Storefront",
      year: 2025,
      tag: "COMMERCE",
      blurb: "Headless storefront for my studio on Medusa + Next.js, with Stripe payments.",
      stack: ["Next.js", "Medusa", "Stripe", "PostgreSQL"],
      links: { code: "https://github.com/by-durrani/durrani-arts-down" },
    },
    {
      name: "Snapgram",
      year: 2024,
      tag: "FULL-STACK",
      blurb: "Instagram-style social app with auth, image uploads and feeds on Appwrite, cached with TanStack Query.",
      stack: ["React", "Vite", "Appwrite", "TanStack Query", "Zod"],
      links: { code: "https://github.com/by-durrani/instagram_clone" },
    },
    {
      name: "DealGuru",
      year: 2024,
      tag: "FULL-STACK",
      blurb: "Product deal tracker that monitors prices over time and surfaces the best buys.",
      stack: ["Next.js", "TypeScript", "MongoDB", "Cron jobs"],
      links: {
        live: "https://deal-guru-new.vercel.app",
        code: "https://github.com/by-durrani/dealguru",
      },
    },
    {
      name: "Kicks Store",
      year: 2024,
      tag: "FRONTEND",
      blurb: "Responsive sneaker-store front-end built on the Next.js App Router.",
      stack: ["Next.js", "React", "Lucide"],
      links: {
        live: "https://kicks-three.vercel.app",
        code: "https://github.com/by-durrani/kicks_shoe_store",
      },
    },
    {
      name: "Promptopia",
      year: 2023,
      tag: "FULL-STACK",
      blurb: "Prompt-sharing community app with NextAuth sign-in and MongoDB.",
      stack: ["Next.js", "NextAuth", "MongoDB", "Tailwind CSS"],
      links: {
        live: "https://promptopia-next-app-five.vercel.app",
        code: "https://github.com/by-durrani/promptopia_Next_app",
      },
    },
  ],

  // ---- PRACTICE / DSA -----------------------------------------------------
  practice: {
    intro:
      "I practise data structures, algorithms and maths in Python notebooks — and keep all of it public.",
    tracks: [
      {
        name: "Data Structures & Algorithms",
        detail: "Hashing, recursion, patterns and maths — worked in Jupyter.",
        href: "https://github.com/by-durrani/DSA",
      },
      {
        name: "HackerRank Mathematics",
        detail: "Matrix arithmetic and maths problem sets.",
        href: "https://github.com/by-durrani/hackerRank-mathematics",
      },
      {
        name: "Data Science & Maths",
        detail: "NumPy, Pandas and Matplotlib notebooks.",
        href: "https://github.com/by-durrani/data_science_and_mathematics",
      },
      {
        name: "OOP, revisited",
        detail: "Object-oriented design in JS/TS and Python, side by side.",
        href: "https://github.com/by-durrani/OOP-JS",
      },
    ],
    focus: ["Hash maps", "Frequency counting", "Recursion", "Patterns", "Matrix maths", "OOP"],
  },

  // ---- LEARNING / BUILDING NOW -------------------------------------------
  learning: [
    "AI engineering & system thinking",
    "LLM agents & RAG systems",
    "System design",
    "Real-time data pipelines",
  ],
  nowBuilding:
    "An AI-integrated development starter system on Next.js, Bun, Hono, tRPC and Drizzle, running on Google Cloud.",

  // ---- FOOTER -------------------------------------------------------------
  footerNote: "Designed & built from scratch.",
};

export default resume;
