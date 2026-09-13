export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  detail: string;
  tags: string[];
  deliverables: string[];
  badge?: string;
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Modern, blazing-fast websites engineered with cutting-edge architecture.",
    icon: "Globe",
    badge: "Flagship",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "SEO Engine"],
    deliverables: ["Sub-second load times", "Fluid micro-animations", "Mobile-first responsive layout"],
    detail:
      "Fast, accessible, and beautifully crafted websites built with cutting-edge technology.",
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description: "Scalable SaaS platforms designed for complex real-world workflows.",
    icon: "LayoutDashboard",
    badge: "High Demand",
    tags: ["Full-Stack", "PostgreSQL", "REST & GraphQL", "Auth & Roles"],
    deliverables: ["Multi-tenant architecture", "Real-time analytics dashboards", "Secure payment integrations"],
    detail:
      "Complex web apps designed for real workflows, with clean architecture and intuitive UX.",
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description: "Cross-platform mobile apps with native feel and buttery 60fps performance.",
    icon: "Smartphone",
    badge: "iOS & Android",
    tags: ["React Native", "Flutter", "Offline Sync", "Push Notifications"],
    deliverables: ["App Store & Play Store ready", "Biometric authentication", "Smooth gesture navigation"],
    detail:
      "Cross-platform mobile experiences that feel native, performant, and purposeful.",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description: "Bespoke digital systems engineered around your exact business logic.",
    icon: "Code2",
    badge: "Tailored",
    tags: ["Custom Logic", "Microservices", "API Integrations", "Database Design"],
    deliverables: ["Automated operational workflows", "Custom CRM & ERP portals", "Zero technical debt"],
    detail:
      "Bespoke software engineered to fit your exact business logic and long-term goals.",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Rock-solid cloud infrastructure and automated CI/CD pipelines.",
    icon: "Cloud",
    badge: "99.9% Uptime",
    tags: ["AWS", "Vercel", "Docker", "CI/CD Automations"],
    deliverables: ["Auto-scaling container clusters", "Zero-downtime deployment pipelines", "Continuous security auditing"],
    detail:
      "Scalable cloud architecture, CI/CD pipelines, and infrastructure that grows with you.",
  },
];
