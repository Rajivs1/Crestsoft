export interface CareerOpening {
  id: string;
  title: string;
  department: "Engineering" | "AI & Cloud" | "Design" | "Product";
  location: string;
  type: string;
  experience: string;
  badge?: string;
  shortDesc: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  techStack: string[];
}

export interface TechItem {
  name: string;
  category: "frontend" | "backend" | "ai" | "cloud";
  status: "Core Standard" | "Adopted" | "Assessing";
  role: string;
  whyChosen: string;
  metrics: string;
}

export interface CulturePillar {
  title: string;
  tagline: string;
  desc: string;
  iconName: string;
  stats: string;
}

export interface WorkflowStep {
  step: string;
  phase: string;
  timeline: string;
  headline: string;
  description: string;
  deliverables: string[];
}

export const studioMilestones = [
  {
    year: "2026 Q1",
    title: "Founded in Gurugram",
    description: "CrestSoft was founded in Gurugram, Haryana with a clear mission: to bring obsessive engineering craft, sub-100ms speed, and AI-native architecture to modern web and mobile software.",
    tag: "Studio Inception",
  },
  {
    year: "2026 Q2",
    title: "15+ High-Impact Deployments",
    description: "Shipped 15+ mission-critical web applications, SaaS dashboards, and mobile products for ambitious startups and growing businesses with zero post-launch regression.",
    tag: "Milestone",
  },
  {
    year: "2026 Q3",
    title: "Applied AI & Edge Lab",
    description: "Launched internal R&D focused on production-grade Agentic workflows, Google Gemini / OpenAI integrations, and zero-cold-start edge runtimes.",
    tag: "AI & Edge Lab",
  },
  {
    year: "2026 & Beyond",
    title: "Rapid Global Delivery",
    description: "Expanding our engineering footprint globally, delivering bespoke digital products, mobile applications, and resilient cloud architectures.",
    tag: "Global Reach",
  },
];

export const studioStats = [
  { value: "2026", label: "Founded", sub: "Gurugram, Haryana" },
  { value: "15+", label: "Products Launched", sub: "Web, Mobile & AI Platforms" },
  { value: "99.98%", label: "Uptime Reliability", sub: "Enterprise SLA Maintained" },
  { value: "<85ms", label: "Average P95 Latency", sub: "Optimized Edge Delivery" },
];

export const perksAndCulture: CulturePillar[] = [
  {
    title: "Freshers & Early Career Fast-Track",
    tagline: "Accelerated learning with 1-on-1 mentorship.",
    desc: "We believe talent beats years on a resume. Freshers and early engineers work directly on production features, not mock internal tools.",
    iconName: "GraduationCap",
    stats: "Accelerated Growth",
  },
  {
    title: "Remote-First & Async Freedom",
    tagline: "Work where and when you produce your best thinking.",
    desc: "We prioritize deep focus blocks over endless meetings. Clear written specs, async updates, and respect for your uninterrupted creative flow.",
    iconName: "Globe",
    stats: "Flexible Hours",
  },
  {
    title: "Competitive Compensation & Early Equity",
    tagline: "Top-of-market compensation for hungry makers.",
    desc: "Transparent salary bands, performance bonuses, and meaningful growth trajectories for high-agency junior & mid-level contributors.",
    iconName: "TrendingUp",
    stats: "Top Tier Bands",
  },
  {
    title: "Premium Hardware & Workspace Setup",
    tagline: "Tools built for elite execution.",
    desc: "Every new teammate receives top-spec Apple Silicon or workstation hardware of choice, plus dedicated workspace support.",
    iconName: "Laptop",
    stats: "Modern Workstation",
  },
  {
    title: "Continuous Learning & Upskilling Budget",
    tagline: "Never stop sharpening your engineering skills.",
    desc: "Dedicated annual budget for books, technical courses, masterclasses, and attending global developer/design summits.",
    iconName: "GraduationCap",
    stats: "Continuous Upskilling",
  },
  {
    title: "Health, Wellness & Team Offsites",
    tagline: "Sustainable pace, holistic well-being.",
    desc: "Comprehensive health insurance, mental health support sessions, generous PTO, and team hackathons in inspiring locations.",
    iconName: "HeartPulse",
    stats: "Full Health Coverage",
  },
];

export const hiringSteps = [
  {
    step: "01",
    title: "Application & Project Review",
    duration: "Within 48 Hours",
    desc: "We look at your GitHub, live demo links, or college projects. We care about curiosity, passion for code, and clarity of thought.",
  },
  {
    step: "02",
    title: "Friendly Technical Discussion",
    duration: "30-45 Minutes",
    desc: "A casual video chat discussing your favorite projects, challenges you enjoyed solving, and how you learn new frameworks.",
  },
  {
    step: "03",
    title: "Practical Mini-Sprint (Paid)",
    duration: "2-3 Days Window",
    desc: "No high-pressure whiteboard riddles. A small, realistic take-home task representative of actual CrestSoft client projects.",
  },
  {
    step: "04",
    title: "Direct Offer & Welcome",
    duration: "Within 24 Hours",
    desc: "Transparent offer with clear stipend/salary, learning roadmap, and direct start date with structured onboarding.",
  },
];

// Openings specifically for Freshers to 4 Years Experience Only
export const careerOpenings: CareerOpening[] = [
  {
    id: "junior-fullstack-engineer",
    title: "Junior / Associate Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (India / Global) or Gurugram",
    type: "Full-Time",
    experience: "Freshers to 2 Years",
    badge: "Freshers Welcome",
    shortDesc: "Build modern web applications with Next.js, React, TypeScript, and Node.js. Ideal for hungry freshers and early-career developers.",
    overview: "We are looking for energetic, passionate Junior Full-Stack Engineers who want to level up fast. You will write production React and Node.js code, build reactive user interfaces, and learn directly from senior architects.",
    responsibilities: [
      "Develop responsive user interfaces using Next.js App Router, React, and TailwindCSS.",
      "Write clean REST and GraphQL API routes using Node.js, Express, or TypeScript.",
      "Work with databases like PostgreSQL and MongoDB, writing safe queries and migrations.",
      "Participate in daily code reviews, pair-programming sessions, and architectural discussions.",
      "Debug frontend and backend issues, optimizing bundle sizes and page load times.",
    ],
    requirements: [
      "0 to 2 years of experience (Freshers with strong personal projects/GitHub are warmly encouraged!).",
      "Solid understanding of JavaScript / TypeScript, React, and HTML/CSS fundamentals.",
      "Familiarity with Git, GitHub workflows, and modern web developer tools.",
      "Eagerness to learn new technologies quickly and take ownership of user-facing features.",
      "Clear written and verbal communication.",
    ],
    niceToHave: [
      "Personal portfolio or open-source contributions on GitHub.",
      "Familiarity with Next.js, TailwindCSS, or Prisma ORM.",
      "Basic understanding of SQL or database schemas.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "TailwindCSS", "PostgreSQL", "Git"],
  },
  {
    id: "frontend-developer",
    title: "Frontend Engineer (React / Next.js)",
    department: "Engineering",
    location: "Remote (India / Global) or Gurugram",
    type: "Full-Time",
    experience: "1 to 3 Years",
    badge: "Urgent",
    shortDesc: "Craft buttery-smooth user interfaces, fluid Framer Motion micro-interactions, and accessible Tailwind components.",
    overview: "Join our frontend craft team to turn Figma designs into pixel-perfect, 60fps web applications that users love using. You will obsess over typography, spacing, responsive layouts, and performance.",
    responsibilities: [
      "Translate high-fidelity Figma mockups into reusable, type-safe React components.",
      "Implement smooth scroll triggers and interactive animations with Framer Motion and CSS.",
      "Optimize web vital metrics (LCP, CLS, INP) for mobile and desktop viewports.",
      "Integrate frontend client code with backend REST / tRPC APIs cleanly.",
      "Ensure cross-browser compatibility and responsive layout consistency across devices.",
    ],
    requirements: [
      "1 to 3 years of hands-on frontend web development experience in React or Next.js.",
      "Strong command of modern CSS, TailwindCSS, flexbox, and grid layouts.",
      "Experience with state management and consuming asynchronous APIs.",
      "A sharp eye for visual details, typography, and micro-interactions.",
    ],
    niceToHave: [
      "Experience with Framer Motion, GSAP, or Three.js.",
      "Understanding of Server Components and SSR in Next.js.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Figma"],
  },
  {
    id: "junior-ai-python-dev",
    title: "Junior AI & Python Developer",
    department: "AI & Cloud",
    location: "Remote (India / Global)",
    type: "Full-Time",
    experience: "Freshers to 2 Years",
    badge: "Emerging Tech",
    shortDesc: "Work on LLM integrations, prompt engineering, Google Gemini/OpenAI APIs, and Python data pipelines.",
    overview: "CrestSoft's Applied AI lab is looking for an early-career AI engineer who is obsessed with the future of generative intelligence. You will build prompt chains, test RAG pipelines, and integrate AI into customer applications.",
    responsibilities: [
      "Build Python microservices using FastAPI to interface with LLMs (Google Gemini, OpenAI).",
      "Implement retrieval-augmented generation (RAG) using vector databases like Pinecone and pgvector.",
      "Test, benchmark, and evaluate prompt performance, token costs, and response latency.",
      "Clean, format, and preprocess unstructured datasets for model context windows.",
      "Collaborate with web developers to surface AI responses in real-time streaming interfaces.",
    ],
    requirements: [
      "0 to 2 years of experience with Python programming (Freshers with AI projects or certifications welcome).",
      "Familiarity with LLM APIs (OpenAI, Gemini, Anthropic) or frameworks like LangChain / LlamaIndex.",
      "Basic understanding of vectors, embeddings, and semantic search.",
      "Curious mindset and excitement to experiment with cutting-edge AI breakthroughs.",
    ],
    niceToHave: [
      "Experience building small AI apps or bots deployed on Vercel, Hugging Face, or Streamlit.",
      "Knowledge of FastAPI or Flask.",
    ],
    techStack: ["Python", "FastAPI", "Google Gemini", "OpenAI", "LangChain", "Vector DBs", "Git"],
  },
  {
    id: "associate-uiux-designer",
    title: "Associate UI/UX & Product Designer",
    department: "Design",
    location: "Remote (India / Global) or Gurugram",
    type: "Full-Time",
    experience: "0 to 2 Years",
    badge: "Portfolio First",
    shortDesc: "Design intuitive web and mobile app screens, interactive Figma prototypes, and sleek design system components.",
    overview: "We are seeking a creative Associate Product Designer who loves modern aesthetics, dark/light themes, clean typography, and thoughtful user flows. Portfolio of UI designs is required (Figma link or Behance/Dribbble).",
    responsibilities: [
      "Design wireframes, user journeys, and high-fidelity screens in Figma.",
      "Build interactive click-through prototypes to test interactions with teammates and clients.",
      "Contribute to our internal component design systems and design tokens.",
      "Collaborate closely with developers to make sure the final coded product matches the design.",
      "Conduct visual reviews and polish responsive breakpoints for mobile screens.",
    ],
    requirements: [
      "0 to 2 years of UI/UX design experience (Fresh design school graduates or self-taught designers welcome).",
      "Strong proficiency in Figma (auto-layout, components, styles).",
      "A portfolio showcasing web or mobile UI design projects (case studies or design concepts).",
      "Understanding of fundamental design principles: visual hierarchy, typography, and color theory.",
    ],
    niceToHave: [
      "Basic knowledge of HTML/CSS or how Tailwind works.",
      "Experience creating motion prototypes or animations.",
    ],
    techStack: ["Figma", "UI/UX", "Design Systems", "Prototyping", "Design Tokens"],
  },
  {
    id: "cloud-devops-associate",
    title: "Cloud & DevOps Associate",
    department: "AI & Cloud",
    location: "Remote (India / Global)",
    type: "Full-Time",
    experience: "1 to 4 Years",
    badge: "High Demand",
    shortDesc: "Manage Docker containers, automated GitHub Actions CI/CD workflows, AWS cloud hosting, and server health monitoring.",
    overview: "Help us keep client applications fast, reliable, and continuously deployed. You will configure automated pipelines, manage cloud environments, and learn modern site reliability engineering practices.",
    responsibilities: [
      "Maintain and improve automated GitHub Actions workflows for continuous integration and testing.",
      "Deploy and manage containerized services using Docker on AWS or digital cloud platforms.",
      "Monitor application performance, uptime metrics, and server resource utilization.",
      "Configure domain records, SSL/TLS certificates, and Cloudflare CDN caching rules.",
      "Assist with database backups, environment variables, and security access controls.",
    ],
    requirements: [
      "1 to 4 years of experience in DevOps, Cloud Engineering, or Linux Systems Administration.",
      "Hands-on experience with Docker, Git, and Linux command-line tools.",
      "Familiarity with at least one cloud provider (AWS, Google Cloud, or DigitalOcean).",
      "Basic scripting ability in Bash or Python for routine automation.",
    ],
    niceToHave: [
      "Experience with Kubernetes, Terraform, or Cloudflare Workers.",
      "Understanding of database replication and automated snapshotting.",
    ],
    techStack: ["AWS", "Docker", "Linux", "GitHub Actions", "Cloudflare", "Bash", "PostgreSQL"],
  },
  {
    id: "graduate-engineering-trainee",
    title: "Graduate Engineering Trainee (GET) / Intern",
    department: "Engineering",
    location: "Remote or Gurugram Office",
    type: "Full-Time / Internship",
    experience: "Freshers / Final Year Students",
    badge: "Paid Internship",
    shortDesc: "A structured, fast-track engineering internship program for ambitious 2024/2025/2026 graduates. Full-time placement opportunity upon completion.",
    overview: "Looking to kickstart your software engineering career by writing real code that millions of users see? Our Graduate Engineering Trainee program immerses you in modern web stacks, agile workflows, and direct architectural mentorship.",
    responsibilities: [
      "Complete guided engineering sprints covering React, TypeScript, and modern APIs.",
      "Work alongside experienced mentors on real client modules and internal tooling.",
      "Write unit tests and learn industry-standard code review practices.",
      "Present project demos during weekly team show-and-tells.",
    ],
    requirements: [
      "Recent graduate or final year student in Computer Science, IT, or related fields (or self-taught programmers with strong code skills).",
      "Strong foundation in any programming language (JavaScript/TypeScript, Python, C++, or Java).",
      "Basic knowledge of web technologies (HTML, CSS, Git).",
      "High curiosity, self-driven discipline, and hunger to become a world-class engineer.",
    ],
    niceToHave: [
      "Any project hosted on GitHub, Vercel, or Netlify.",
      "Participation in coding competitions, hackathons, or tech clubs.",
    ],
    techStack: ["TypeScript", "React", "Next.js", "Git", "Node.js", "CSS"],
  },
];

export const techRadarItems: TechItem[] = [
  // Frontend
  {
    name: "Next.js 16 (App Router)",
    category: "frontend",
    status: "Core Standard",
    role: "Full-Stack Web & Server Components",
    whyChosen: "Zero-bundle server components, instant edge rendering, and granular incremental static regeneration.",
    metrics: "Sub-50ms TTFB on Edge",
  },
  {
    name: "TypeScript (Strict Mode)",
    category: "frontend",
    status: "Core Standard",
    role: "End-to-End Type Safety",
    whyChosen: "Guarantees zero-runtime type errors, self-documenting codebases, and seamless refactoring across monorepos.",
    metrics: "100% Strict Coverage",
  },
  {
    name: "Framer Motion & Three.js",
    category: "frontend",
    status: "Core Standard",
    role: "Tactile Motion & 3D Canvas",
    whyChosen: "Unlocks jaw-dropping visual interaction, fluid spring physics, and immersive spatial canvas experiences.",
    metrics: "Consistent 60–120 FPS",
  },
  {
    name: "TailwindCSS & Design Tokens",
    category: "frontend",
    status: "Core Standard",
    role: "Utility-First Design System",
    whyChosen: "Zero runtime CSS overhead, standardized typography scales, and effortless dark/light adaptive theming.",
    metrics: "Under 14KB Gzipped CSS",
  },

  // Backend
  {
    name: "Node.js & Go Microservices",
    category: "backend",
    status: "Core Standard",
    role: "High-Concurrency Backend Services",
    whyChosen: "Go handles high-throughput computation and streaming, while Node/TypeScript orchestrates business workflows.",
    metrics: "25k+ Req/sec Concurrency",
  },
  {
    name: "PostgreSQL & Prisma / Drizzle",
    category: "backend",
    status: "Core Standard",
    role: "Relational Data Backbone",
    whyChosen: "Rock-solid ACID guarantees, advanced JSONB indexing, and pgvector extension for AI similarity search.",
    metrics: "99.999% Data Durability",
  },
  {
    name: "Redis & Upstash Edge",
    category: "backend",
    status: "Core Standard",
    role: "Distributed Caching & Rate Limiting",
    whyChosen: "Sub-millisecond latency for in-memory session stores, pub/sub communication, and token-bucket rate limiters.",
    metrics: "<2ms Response Time",
  },
  {
    name: "GraphQL & tRPC",
    category: "backend",
    status: "Adopted",
    role: "Client-Server Contract",
    whyChosen: "Eliminates API contract drift, guarantees typed query inputs/outputs, and prevents over-fetching on mobile.",
    metrics: "Zero Manual API DTOs",
  },

  // AI
  {
    name: "Google Gemini & Anthropic Claude",
    category: "ai",
    status: "Core Standard",
    role: "Multimodal & Long-Context Intelligence",
    whyChosen: "Gemini Pro offers unparalleled 2M+ token contexts and multimodal understanding at ultra-fast speeds.",
    metrics: "2M Context Window",
  },
  {
    name: "LangChain & LlamaIndex",
    category: "ai",
    status: "Core Standard",
    role: "Orchestration & Agent Workflows",
    whyChosen: "Industry standard for structured tool-calling, agent state graphs, and hybrid retrieval-augmented generation.",
    metrics: "Multi-Agent Coordination",
  },
  {
    name: "Pinecone & pgvector",
    category: "ai",
    status: "Core Standard",
    role: "Vector Embeddings & Semantic Search",
    whyChosen: "Blazing fast approximate nearest neighbor (HNSW) search with metadata filtering for enterprise context.",
    metrics: "Sub-25ms Vector Query",
  },
  {
    name: "OpenAI GPT-4o & Whisper",
    category: "ai",
    status: "Adopted",
    role: "Structured Reasoning & Audio AI",
    whyChosen: "State-of-the-art code generation, deterministic JSON schema output, and high-accuracy speech transcription.",
    metrics: "99.4% Extraction Precision",
  },

  // Cloud & DevOps
  {
    name: "AWS & Google Cloud Platform",
    category: "cloud",
    status: "Core Standard",
    role: "Multi-Region Cloud Hosting",
    whyChosen: "Enterprise-grade compliance, scalable managed databases, and global compute availability.",
    metrics: "99.98% Service Uptime",
  },
  {
    name: "Docker & Kubernetes",
    category: "cloud",
    status: "Core Standard",
    role: "Container Orchestration",
    whyChosen: "Predictable, reproducible environments from local development all the way to multi-cluster production.",
    metrics: "Self-Healing Pods",
  },
  {
    name: "Cloudflare Workers & Edge Network",
    category: "cloud",
    status: "Core Standard",
    role: "Global Edge Compute & CDN",
    whyChosen: "Executes serverless logic within 15ms of 95% of the world's population with zero cold start penalty.",
    metrics: "0ms Cold Starts",
  },
  {
    name: "Terraform (IaC)",
    category: "cloud",
    status: "Core Standard",
    role: "Declarative Infrastructure as Code",
    whyChosen: "Version-controlled cloud provisioning, automated drift detection, and reproducible staging environments.",
    metrics: "100% Automated Infra",
  },
];

// Replaces Leadership: "How We Work / Studio Workflow & Standards"
export const studioWorkflow: WorkflowStep[] = [
  {
    step: "01",
    phase: "Discovery & Blueprint",
    timeline: "Week 1",
    headline: "De-risking architecture before writing a line of code.",
    description: "We analyze your user personas, business goals, and data models to create an exhaustive Technical Design Document (TDD) and clickable Figma wireframe.",
    deliverables: ["Technical Specification (RFC)", "Data Schema Architecture", "Interactive Wireframes", "Milestone Roadmap"],
  },
  {
    step: "02",
    phase: "Design System & UI Prototyping",
    timeline: "Week 2",
    headline: "Tactile, responsive design that feels unmistakably premium.",
    description: "We build your bespoke design system with typography tokens, responsive layouts, micro-interactions, and accessible states in Figma and Tailwind.",
    deliverables: ["Full Design System Tokens", "High-Fidelity Component Library", "60fps Interactive Prototypes", "Asset Handoff"],
  },
  {
    step: "03",
    phase: "Agile Engineering Sprints",
    timeline: "Weeks 3–6",
    headline: "Clean TypeScript, continuous staging builds, and daily commits.",
    description: "We work in rapid 1-week sprints. Every Friday, you receive a working preview staging URL with full changelogs. You have direct access to our Slack channel.",
    deliverables: ["Live Staging URL", "Continuous Automated Testing", "Direct Slack / Discord Sync", "Weekly Demo Walkthrough"],
  },
  {
    step: "04",
    phase: "QA, Security & Performance Hardening",
    timeline: "Week 7",
    headline: "Sub-100ms P95 audits and zero-defect quality assurance.",
    description: "Rigorous load testing, mobile responsive checks, cross-browser audits, accessibility WCAG validation, and security vulnerability scans.",
    deliverables: ["Lighthouse 98+ Report", "Security Vulnerability Scan", "End-to-End Test Suite", "Load & Stress Benchmark"],
  },
  {
    step: "05",
    phase: "Zero-Downtime Launch & Clean Handover",
    timeline: "Week 8 & Ongoing",
    headline: "100% intellectual property ownership and continuous peace of mind.",
    description: "We configure your custom domains, CDN edge caching, and server monitoring, followed by a clean repository handover with full documentation.",
    deliverables: ["Production Deployment", "Full Source Code & Git History", "Architecture Documentation", "30-Day Post-Launch SLA"],
  },
];

export const clientCollaborationPillars = [
  {
    title: "Direct Slack & Async Updates",
    desc: "No middlemen or account manager telephone games. You speak directly with the engineers and designers building your product.",
  },
  {
    title: "100% Clean Code Ownership",
    desc: "From Day 1, all repositories, design tokens, and infrastructure assets are 100% owned by your company. Zero lock-in.",
  },
  {
    title: "Weekly Friday Staging Demos",
    desc: "You test working features every week on preview deployments, ensuring complete alignment and zero surprises at launch.",
  },
  {
    title: "Zero Technical Debt Guarantee",
    desc: "Type-safe architectures, modular component design, and automated test coverage engineered to scale with your business.",
  },
];
