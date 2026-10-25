export type WorkCategoryKey =
  | "all"
  | "web-app"
  | "mobile-app"
  | "devops"
  | "ui-design"
  | "social-media";

export interface WorkCategoryMeta {
  id: WorkCategoryKey;
  label: string;
  tagline: string;
  description: string;
  accentColor: string;
  iconName: string;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  categoryKey: WorkCategoryKey;
  filter: string; // compatibility with existing homepage tabs
  domain: string;
  client?: string;
  year?: string;
  description: string;
  longDescription?: string;
  metrics: string;
  metricLabel?: string;
  tags: string[];
  url: string;
  accentColor: string;
  image: string;
  featured?: boolean;
  challenge?: string;
  solution?: string;
  deliverables?: string[];
}

export const workCategories: WorkCategoryMeta[] = [
  {
    id: "all",
    label: "All Work",
    tagline: "Multidisciplinary Engineering & Digital Craft",
    description: "Explore our cross-disciplinary portfolio spanning web apps, mobile apps, cloud infrastructure, bespoke UI, and social growth.",
    accentColor: "#E85D3F",
    iconName: "Layers",
  },
  {
    id: "web-app",
    label: "Web Application",
    tagline: "High-Throughput Web Platforms & SaaS Architectures",
    description: "Production-grade, sub-second web applications built with Next.js 16, TypeScript, real-time WebSockets, and resilient backend pipelines.",
    accentColor: "#E85D3F",
    iconName: "Globe",
  },
  {
    id: "mobile-app",
    label: "Mobile App Development",
    tagline: "Fluid iOS & Android Native Digital Products",
    description: "Frictionless mobile experiences developed with React Native and Flutter, boasting 60fps gesture interactions and hardware-accelerated performance.",
    accentColor: "#f97316",
    iconName: "Smartphone",
  },
  {
    id: "devops",
    label: "DevOps",
    tagline: "Cloud Resilience, Kubernetes & Zero-Downtime CI/CD",
    description: "Automated infrastructure as code (IaC), multi-region Kubernetes clusters, security posture auditing, and sub-minute rollout automation.",
    accentColor: "#8b5cf6",
    iconName: "Server",
  },
  {
    id: "ui-design",
    label: "UI Design",
    tagline: "Luxury Design Systems & Emotion-Driven Interfaces",
    description: "Pixel-perfect Figma design tokens, WCAG AAA accessibility, micro-animations, and conversion-optimized user flows.",
    accentColor: "#0ea5e9",
    iconName: "Palette",
  },
  {
    id: "social-media",
    label: "Social Media Management",
    tagline: "Omnichannel Viral Growth & Brand Storytelling",
    description: "Data-driven creative strategy, high-converting social campaigns, creator partnerships, and multi-platform audience growth engines.",
    accentColor: "#ec4899",
    iconName: "TrendingUp",
  },
];

export const projects: Project[] = [
  // 1. Web Application
  {
    id: "daksh-cargo",
    number: "01",
    name: "Daksh Cargo",
    category: "Web Application",
    categoryKey: "web-app",
    filter: "Logistics",
    domain: "dakshcargo.in",
    client: "Daksh Relocations & Logistics",
    year: "2024–2025",
    description: "A high-performance digital platform for on-demand relocation and freight bookings with dynamic quote calculations.",
    longDescription: "Architected an enterprise freight booking engine that digitizes manual quotes, manages driver dispatch, and provides customers with real-time GPS freight tracking and instant payment processing.",
    metrics: "⚡ -65% Booking Latency",
    metricLabel: "Quoting Speedup",
    tags: ["Next.js 16", "Tailwind CSS", "TypeScript", "Realtime API", "Route Optimization"],
    url: "https://dakshcargo.vercel.app/",
    accentColor: "#E85D3F",
    image: "/images/projects/daksh_cargo_ui.png",
    featured: true,
    challenge: "Manual quoting workflows took hours per inquiry, resulting in a 42% customer drop-off before contract finalization.",
    solution: "Built a sub-second instant algorithmic calculator and interactive multi-stop booking stepper with automated SMS and WhatsApp confirmation.",
    deliverables: ["Full-Stack Next.js 16 App", "Algorithmic Pricing Engine", "Real-Time Tracking Gateway", "Driver Dispatch CRM"],
  },
  {
    id: "zenith-saas",
    number: "02",
    name: "Zenith Cloud ERP",
    category: "Web Application",
    categoryKey: "web-app",
    filter: "SaaS",
    domain: "zenithcloud.io",
    client: "Zenith Financial Technologies",
    year: "2024",
    description: "Enterprise SaaS financial telemetry and real-time revenue analytics dashboard handling millions of events daily.",
    longDescription: "An ultra-sleek financial operations and subscription forecasting suite with live WebSocket updates, cohort retention matrices, and automated revenue reconciliation.",
    metrics: "📊 $248K+ MRR Monitored",
    metricLabel: "Real-time Telemetry",
    tags: ["React 19", "Next.js", "TypeScript", "WebSockets", "Highcharts", "Tailwind CSS"],
    url: "https://www.cyphernaut.in/",
    accentColor: "#d97706",
    image: "/images/projects/zenith_erp_ui.jpg",
    featured: true,
    challenge: "Fragmented revenue streams across multiple payment providers created blind spots and 3-week reporting lags for executive leadership.",
    solution: "Consolidated all telemetry into a low-latency WebSockets dashboard featuring optimistic UI updates and sub-50ms data queries.",
    deliverables: ["Executive Telemetry Suite", "Predictive Churn Engine", "Automated Stripe/PayPal Sync", "Role-Based Access Control"],
  },
  {
    id: "cafebliss",
    number: "03",
    name: "CafeBliss Experience",
    category: "Web Application",
    categoryKey: "web-app",
    filter: "Hospitality",
    domain: "cafebliss.co",
    client: "Bliss Hospitality Group",
    year: "2024",
    description: "An interactive digital dining and online ordering experience crafted for a luxury café and bakery chain.",
    longDescription: "Seamless web ordering engine with table-side QR ordering, synchronized kitchen display systems, and automated loyalty redemption.",
    metrics: "📈 +140% Online Orders",
    metricLabel: "Order Velocity",
    tags: ["React 18", "Node.js", "Framer Motion", "Stripe API", "PWA"],
    url: "https://cafe-bliss-phi.vercel.app/",
    accentColor: "#f97316",
    image: "/images/projects/cafebliss_ui.png",
    featured: false,
    challenge: "Long counter queues during peak hours overwhelmed staff and reduced table turnover by over 30%.",
    solution: "Designed and engineered an ultra-fast web ordering flow with instant Apple Pay and Google Pay integration that needs no app install.",
    deliverables: ["Digital Dining Web App", "Kitchen Display System (KDS)", "Dynamic Modifier Engine", "Loyalty Wallet Integration"],
  },

  // 2. Mobile App Development
  {
    id: "bliss-mobile",
    number: "04",
    name: "Bean & Bloom Mobile",
    category: "Mobile App Development",
    categoryKey: "mobile-app",
    filter: "Mobile",
    domain: "apps.apple.com/bean-bloom",
    client: "Bean & Bloom Specialty Roasters",
    year: "2025",
    description: "Native iOS & Android mobile application featuring one-tap quick reorder, live barista GPS tracking, and gamified loyalty rewards.",
    longDescription: "Engineered from scratch using React Native and Swift native modules to deliver silky 60fps animations, biometric authentication, and lock screen Live Activities for order delivery.",
    metrics: "📱 4.9★ App Store Rating",
    metricLabel: "Customer Rating",
    tags: ["React Native", "iOS / Swift", "Android", "Apple Pay", "Live Activities", "Expo"],
    url: "https://cafe-bliss-phi.vercel.app/",
    accentColor: "#ea580c",
    image: "/images/projects/bliss_mobile_ui.jpg",
    featured: true,
    challenge: "Retail coffee patrons wanted reordering to take fewer than 3 taps with instantaneous pickup confirmation and real-time barista status.",
    solution: "Developed an offline-first mobile app featuring one-touch repeat order widgets, push-notification state machines, and Apple Wallet pass integration.",
    deliverables: ["iOS & Android Store Releases", "One-Tap Reorder Engine", "Interactive Live Activities", "Customer Loyalty Stamp System"],
  },
  {
    id: "foodie-gourmet-app",
    number: "05",
    name: "Foodie Gourmet Driver & Eater",
    category: "Mobile App Development",
    categoryKey: "mobile-app",
    filter: "Mobile",
    domain: "foodiegourmet.app",
    client: "Foodie Gourmet Logistics",
    year: "2024",
    description: "Dual-sided on-demand food delivery mobile ecosystem with sub-meter location tracking, dynamic route batches, and instant tip payouts.",
    longDescription: "High-concurrency mobile application connecting diners with premium gourmet restaurants, featuring interactive dish previews and real-time bike courier telemetry.",
    metrics: "⚡ 14 min Average ETA",
    metricLabel: "Fulfillment Speed",
    tags: ["Flutter", "Dart", "Firebase", "Google Maps SDK", "WebSockets", "Push Kit"],
    url: "https://cafe-bliss-phi.vercel.app/",
    accentColor: "#f59e0b",
    image: "/images/projects/bliss_mobile_ui.jpg",
    featured: false,
    challenge: "Couriers suffered from battery drain and delayed dispatch notifications when operating in weak network zones.",
    solution: "Built a background telemetry daemon with local sqlite queue caching and intelligent battery-optimized GPS polling.",
    deliverables: ["Customer & Courier Apps", "Real-time Telemetry Gateway", "In-App VoIP & Chat", "Automated Fleet Payouts"],
  },

  // 3. DevOps
  {
    id: "cyphernaut",
    number: "06",
    name: "Cyphernaut Cloud Security",
    category: "DevOps",
    categoryKey: "devops",
    filter: "SaaS",
    domain: "cyphernaut.in",
    client: "Cyphernaut Security Labs",
    year: "2024",
    description: "Enterprise cloud security posture management platform with continuous IAM auditing, Kubernetes compliance, and live threat detection.",
    longDescription: "An automated cloud infrastructure security system scanning AWS, Azure, and Google Cloud environments every 60 seconds with zero runtime agent overhead.",
    metrics: "🔒 99.99% Uptime Verified",
    metricLabel: "Platform Reliability",
    tags: ["DevOps", "AWS / GCP", "Terraform", "Docker", "Kubernetes", "Next.js"],
    url: "https://www.cyphernaut.in/",
    accentColor: "#8b5cf6",
    image: "/images/projects/cyphernaut_ui.png",
    featured: true,
    challenge: "Enterprise clients needed unified compliance visibility across 40+ heterogeneous cloud accounts without manual audit spreadsheets.",
    solution: "Created an automated Terraform-provisioned agentless scanner that benchmarks configurations against SOC2 and ISO27001 continuously.",
    deliverables: ["Cloud Security Scanner", "SOC2 Automation Engine", "Multi-Cloud IAM Auditor", "Automated Remediation Webhooks"],
  },
  {
    id: "terrascale-infra",
    number: "07",
    name: "CloudVerse Kubernetes DevOps",
    category: "DevOps",
    categoryKey: "devops",
    filter: "DevOps",
    domain: "cloudverse.infra",
    client: "CloudVerse Technologies",
    year: "2024–2025",
    description: "Automated Kubernetes multi-cluster topology orchestration, self-healing pod controllers, and zero-downtime GitOps deployment pipelines.",
    longDescription: "Architected production-grade infrastructure as code (IaC) powering 50+ microservices with automated canary rollouts, Prometheus metric collection, and instant fallback guarantees.",
    metrics: "🚀 12x Faster Rollouts",
    metricLabel: "CI/CD Deployment Speed",
    tags: ["Kubernetes", "Docker", "Terraform", "ArgoCD", "Prometheus & Grafana", "GitHub Actions"],
    url: "https://www.cyphernaut.in/",
    accentColor: "#06b6d4",
    image: "/images/projects/terrascale_devops_ui.jpg",
    featured: true,
    challenge: "Releases required 4 hours of manual downtime windows with high risk of human error during database schema migrations.",
    solution: "Implemented declarative GitOps via ArgoCD with automated canary testing and synthetic health probes that trigger instant rollbacks if latency spikes.",
    deliverables: ["Declarative Kubernetes Setup", "Zero-Downtime Blue/Green Pipeline", "Grafana Observability Stack", "Infrastructure as Code (IaC)"],
  },

  // 4. UI Design
  {
    id: "aris-design-system",
    number: "08",
    name: "Aris Premium Design System",
    category: "UI Design",
    categoryKey: "ui-design",
    filter: "UI/UX",
    domain: "aris.design",
    client: "Aris Design Labs",
    year: "2024",
    description: "A luxury design system with multi-tier typography scales, glassmorphism card paradigms, dark/warm color tokens, and 180+ Figma components.",
    longDescription: "Conceived and crafted a comprehensive design foundation unifying web, mobile, and marketing channels with WCAG AAA accessibility, design token automation, and fluid micro-interaction guidelines.",
    metrics: "🎨 180+ Design Tokens",
    metricLabel: "Figma Component Suite",
    tags: ["Figma", "Design Systems", "UI/UX Research", "Design Tokens", "WCAG 2.1 AAA", "Micro-Interactions"],
    url: "https://dakshcargo.vercel.app/",
    accentColor: "#0284c7",
    image: "/images/projects/aurora_design_ui.jpg",
    featured: true,
    challenge: "Design inconsistencies across product squads resulted in fragmented branding and doubled frontend implementation times.",
    solution: "Engineered a systematic token pipeline connecting Figma variables directly to Tailwind CSS configuration and React components.",
    deliverables: ["Complete Figma Component Library", "Token Sync Pipeline", "Accessible Color Palette System", "Interaction Specification Book"],
  },
  {
    id: "aris-mobile-ux",
    number: "09",
    name: "Aris Mobile & Dashboard UX",
    category: "UI Design",
    categoryKey: "ui-design",
    filter: "UI/UX",
    domain: "aris.ux",
    client: "NextGen Ventures",
    year: "2025",
    description: "High-fidelity interactive prototype for a neo-financial platform with biometric gestures, haptic feedback triggers, and contextual cards.",
    longDescription: "User research, wireframing, usability benchmarking, and interactive prototyping for next-generation mobile banking and wealth management.",
    metrics: "✨ +42% Usability Score",
    metricLabel: "SUS Benchmark",
    tags: ["UI Prototyping", "UX Strategy", "Figma", "Interaction Design", "User Testing", "Usability Audit"],
    url: "https://dakshcargo.vercel.app/",
    accentColor: "#38bdf8",
    image: "/images/projects/aurora_design_ui.jpg",
    featured: false,
    challenge: "Existing financial apps caused cognitive overload due to cluttered dashboard tables and convoluted transaction approval flows.",
    solution: "Introduced a cards-first navigation model with glanceable summary bubbles and natural swipe gestures for funds approval.",
    deliverables: ["User Journey Blueprints", "High-Fidelity Figma Prototypes", "Usability Testing Report", "Animation Curve Tokens"],
  },

  // 5. Social Media Management
  {
    id: "social-growth-engine",
    number: "10",
    name: "SocialGrowth Omnichannel Engine",
    category: "Social Media Management",
    categoryKey: "social-media",
    filter: "Social Media",
    domain: "socialgrowth.io",
    client: "Apex Consumer Brands",
    year: "2024–2025",
    description: "End-to-end viral growth strategy, cross-platform video production, content scheduling, and live influencer campaign analytics.",
    longDescription: "Scaled brand visibility across Instagram, TikTok, LinkedIn, and YouTube Shorts through high-converting creative carousels, algorithmic hook testing, and automated creator collaboration tracking.",
    metrics: "🚀 4.5M+ Monthly Impressions",
    metricLabel: "Total Reach",
    tags: ["Social Strategy", "Viral Short-Form", "Content Scheduling", "Creator Partnerships", "Attribution Analytics"],
    url: "https://cafe-bliss-phi.vercel.app/",
    accentColor: "#ec4899",
    image: "/images/projects/social_media_ui.jpg",
    featured: true,
    challenge: "Brand had zero organic reach and relied entirely on unsustainable paid customer acquisition costs (CAC) above $110.",
    solution: "Implemented an agile short-form video sprint model, posting 24 high-hook clips per month and building an engaged organic follower community of 450K+.",
    deliverables: ["Social Media Playbook", "30 High-Performing Monthly Videos", "Influencer Collab Pipeline", "Real-Time Attribution Dashboard"],
  },
  {
    id: "omnipulse-creative",
    number: "11",
    name: "OmniPulse Viral Brand Campaign",
    category: "Social Media Management",
    categoryKey: "social-media",
    filter: "Social Media",
    domain: "omnipulse.agency",
    client: "Lumina Lifestyle",
    year: "2025",
    description: "Creative direction overhaul, viral reel frameworks, community management, and audience conversion funnels for a lifestyle DTC brand.",
    longDescription: "Transformed stagnant social profiles into profitable conversion funnels through hyper-curated visual storytelling, aesthetic carousel grids, and real-time follower conversation handling.",
    metrics: "📈 +280% Follower Surge",
    metricLabel: "Organic Community Growth",
    tags: ["Creative Direction", "Community Management", "Reels & TikTok", "Conversion Funnels", "Brand Identity"],
    url: "https://cafe-bliss-phi.vercel.app/",
    accentColor: "#f43f5e",
    image: "/images/projects/social_media_ui.jpg",
    featured: false,
    challenge: "Low follower retention and an engagement rate of less than 0.7% on legacy Instagram feed posts.",
    solution: "Overhauled the aesthetic grid with warm editorial typography, behind-the-scenes founder storytelling, and dynamic comment-to-DM automated sales triggers.",
    deliverables: ["Visual Aesthetic Style Guide", "Automated DM Sales Funnels", "Daily Community Moderation", "Bi-Weekly Analytics Briefings"],
  },
];
