// ============================================================================
//  EDIT EVERYTHING HERE.
//  This is the single source of truth for your whole portfolio/resume.
//  Replace the placeholder values (names, links, companies, numbers) with
//  your real data. Anything marked  // TODO  is a placeholder to swap out.
// ============================================================================

export const resume = {
  // ---- IDENTITY -----------------------------------------------------------
  name: "Abdur Rehman Durrani", // TODO: confirm spelling
  initials: "AD",
  title: "Senior Full-Stack Engineer",
  tagline:
    "I ship fast, scalable web apps with JavaScript frameworks — and I'm going deep on AI/ML, system design & DevOps.",
  location: "Remote-First · Open to Relocation", // TODO
  availability: "Open to senior / lead roles & high-impact contracts",

  // ---- CONTACT + LINKS ----------------------------------------------------
  email: "abdurrehmandurrani1215@gmail.com",
  links: {
    github: "https://github.com/by-durrani",
    linkedin: "https://linkedin.com/in/your-handle", // TODO: your real LinkedIn
    leetcode: "https://leetcode.com/u/your-handle", // TODO: your real LeetCode
    website: "", // TODO (optional): live site once you redeploy
  },

  // ---- TOP-LINE STATS (the big number blocks) -----------------------------
  stats: [
    { value: "5+", label: "Years shipping production code" },
    { value: "30+", label: "Projects delivered end-to-end" },
    { value: "450+", label: "LeetCode problems solved" },
    { value: "99.9%", label: "Uptime on services I've owned" },
  ],

  // ---- ABOUT --------------------------------------------------------------
  about: [
    "I'm a full-stack engineer who lives in the JavaScript ecosystem — React, Next.js and Node — and I care about the whole pipeline: clean UI, solid APIs, and infrastructure that doesn't fall over at 3am.",
    "Lately I've been pushing past 'just building features': studying AI/ML in depth, drilling system design, and tightening my DevOps so I can take an idea from a blank repo to a deployed, observable, scalable product on my own.",
    "Daily LeetCode keeps my data-structures & algorithms sharp. I learn loudly, ship often, and document as I go.",
  ],

  // ---- SKILLS (grouped) ---------------------------------------------------
  // Reorder groups / pills freely. Order = priority on the page.
  skills: [
    {
      group: "Frontend",
      tag: "01",
      items: [
        "React",
        "Next.js (App Router / RSC)",
        "TypeScript",
        "JavaScript (ES2024)",
        "Tailwind CSS",
        "Zustand / Redux",
        "TanStack Query",
        "Vite",
      ],
    },
    {
      group: "Backend",
      tag: "02",
      items: [
        "Node.js",
        "Express",
        "NestJS",
        "REST / GraphQL",
        "tRPC",
        "WebSockets",
        "Prisma / Drizzle",
        "Auth (JWT / OAuth)",
      ],
    },
    {
      group: "Databases",
      tag: "03",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "MySQL",
        "pgvector",
        "Pinecone",
      ],
    },
    {
      group: "AI / ML",
      tag: "04",
      items: [
        "Python",
        "PyTorch",
        "scikit-learn",
        "Pandas / NumPy",
        "LLMs & RAG",
        "LangChain",
        "Hugging Face",
        "Embeddings / Vector search",
      ],
    },
    {
      group: "DevOps / Cloud",
      tag: "05",
      items: [
        "Docker",
        "Kubernetes",
        "GitHub Actions (CI/CD)",
        "AWS (EC2 / S3 / Lambda)",
        "Nginx",
        "Terraform",
        "Grafana / Prometheus",
      ],
    },
    {
      group: "System Design",
      tag: "06",
      items: [
        "Caching & CDNs",
        "Load balancing",
        "Message queues (Kafka / RabbitMQ)",
        "Microservices",
        "Sharding & replication",
        "Rate limiting",
        "Observability",
      ],
    },
  ],

  // ---- EXPERIENCE ---------------------------------------------------------
  // TODO: replace companies / dates / bullets with your real history.
  experience: [
    {
      role: "Senior Full-Stack Engineer",
      company: "Freelance / Contract",
      period: "2022 — Present",
      location: "Remote",
      bullets: [
        "Architected and shipped 10+ production web apps with Next.js, Node and PostgreSQL, owning everything from schema design to deployment.",
        "Cut p95 API latency ~40% by introducing Redis caching, query tuning and a CDN layer.",
        "Built CI/CD with GitHub Actions + Docker, taking deploys from manual & error-prone to one-click and automated.",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "[Company Name]", // TODO
      period: "2020 — 2022",
      location: "Remote",
      bullets: [
        "Led the React/Next.js front-end for a multi-tenant SaaS used by thousands of daily users.",
        "Designed REST & GraphQL APIs in Node/Express backed by PostgreSQL and Redis.",
        "Drove the migration to TypeScript across the codebase, reducing runtime bugs significantly.",
      ],
    },
    {
      role: "Software Engineer",
      company: "[Company Name]", // TODO
      period: "2019 — 2020",
      location: "On-site / Hybrid",
      bullets: [
        "Built and maintained customer-facing features across the full stack in a fast-moving Agile team.",
        "Wrote automated tests and participated in code reviews to keep quality high as the team scaled.",
      ],
    },
  ],

  // ---- PROJECTS -----------------------------------------------------------
  // TODO: swap for your real projects + repo/live links.
  projects: [
    // ---- Real projects pulled from github.com/by-durrani ----
    {
      name: "AskMe — RAG Q&A",
      blurb:
        "Retrieval-augmented chat that answers questions over your own documents and cites its sources.",
      stack: ["Next.js", "TypeScript", "RAG", "Embeddings", "Vector search"],
      tag: "AI / ML",
      links: {
        live: "https://askme-rag.vercel.app",
        code: "https://github.com/by-durrani/ASKME-RAG",
      },
    },
    {
      name: "Traffic Sign Classifier",
      blurb:
        "CNN that classifies road signs, served through a Flask API behind a React front-end.",
      stack: ["Python", "CNN", "Flask", "React", "TypeScript"],
      tag: "AI / ML",
      links: {
        live: "https://traffic-sign-classifier.vercel.app",
        code: "https://github.com/by-durrani/Traffic_sign_classifier",
      },
    },
    {
      name: "Travel Agency Dashboard",
      blurb:
        "Admin dashboard for a travel agency — trip management, bookings and analytics, with error monitoring.",
      stack: ["React Router v7", "Appwrite", "Syncfusion", "Sentry", "TypeScript"],
      tag: "FULL-STACK",
      links: {
        live: "#",
        code: "https://github.com/by-durrani/travel-dashboard",
      },
    },
    {
      name: "Subscription API",
      blurb:
        "Production-style REST API: JWT auth, subscription tracking, email reminders and rate-limiting.",
      stack: ["Bun", "Express", "MongoDB", "Zod", "Arcjet"],
      tag: "BACKEND",
      links: {
        live: "#",
        code: "https://github.com/by-durrani/express-subscription-api",
      },
    },
    {
      name: "Apple 3D Landing",
      blurb:
        "Pixel-faithful product landing page with scroll-driven 3D and motion.",
      stack: ["Three.js", "GSAP", "React", "Bun"],
      tag: "FRONTEND",
      links: {
        live: "https://apple-s-landing-page.vercel.app",
        code: "https://github.com/by-durrani/apple-s-landing-page",
      },
    },
    {
      name: "DealGuru",
      blurb:
        "Product deal tracker that monitors prices over time and surfaces the best buys.",
      stack: ["Next.js", "TypeScript", "MongoDB", "Cron jobs"],
      tag: "FULL-STACK",
      links: {
        live: "https://deal-guru-new.vercel.app",
        code: "https://github.com/by-durrani/dealguru",
      },
    },
    // ---- Original template projects (kept) ----
    {
      name: "RealtimeDocs",
      blurb:
        "Collaborative document editor with live cursors and conflict-free editing.",
      stack: ["Next.js", "WebSockets", "CRDT", "Redis", "PostgreSQL"],
      tag: "FULL-STACK",
      links: { live: "#", code: "#" }, // TODO
    },
    {
      name: "NeuralSearch",
      blurb:
        "RAG-powered semantic search over private docs — ask questions, get cited answers.",
      stack: ["Python", "LangChain", "pgvector", "Next.js", "OpenAI / Anthropic"],
      tag: "AI / ML",
      links: { live: "#", code: "#" }, // TODO
    },
    {
      name: "ShipKit",
      blurb:
        "Self-hostable DevOps dashboard: deploys, logs and metrics for container apps.",
      stack: ["Docker", "Kubernetes", "GitHub Actions", "Grafana", "Node.js"],
      tag: "DEVOPS",
      links: { live: "#", code: "#" }, // TODO
    },
    {
      name: "AlgoTrack",
      blurb:
        "LeetCode progress tracker with spaced-repetition review and pattern tagging.",
      stack: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"],
      tag: "FULL-STACK",
      links: { live: "#", code: "#" }, // TODO
    },
  ],

  // ---- LEETCODE / DSA -----------------------------------------------------
  // TODO: update with your real LeetCode numbers.
  leetcode: {
    handle: "your-handle", // TODO
    total: 452,
    breakdown: [
      // Wise-green steps on the dark LeetCode band.
      { level: "Easy", solved: 180, of: 880, color: "rgba(159, 232, 112, 0.5)" },
      { level: "Medium", solved: 220, of: 1850, color: "rgba(159, 232, 112, 0.78)" },
      { level: "Hard", solved: 52, of: 820, color: "#9fe870" },
    ],
    extra: [
      { value: "1850+", label: "Contest rating" },
      { value: "120", label: "Day streak" },
      { value: "Knight", label: "Contest badge" },
    ],
    focus: [
      "Dynamic Programming",
      "Graphs & BFS/DFS",
      "Binary Search",
      "Sliding Window",
      "Heaps",
      "Tries",
    ],
  },

  // ---- LEARNING / FOCUS NOW ----------------------------------------------
  learning: [
    "Distributed systems & consensus (Raft, Paxos)",
    "Deep learning internals (transformers, attention)",
    "Kubernetes operators & platform engineering",
    "High-throughput backend design",
  ],

  // ---- FOOTER -------------------------------------------------------------
  footerNote: "Designed & built from scratch. No templates harmed.",
};

export default resume;
