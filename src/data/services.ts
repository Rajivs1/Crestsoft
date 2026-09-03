export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  detail: string;
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Modern websites that perform.",
    icon: "Globe",
    detail:
      "Fast, accessible, and beautifully crafted websites built with cutting-edge technology.",
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description: "Scalable digital platforms.",
    icon: "LayoutDashboard",
    detail:
      "Complex web apps designed for real workflows, with clean architecture and intuitive UX.",
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description: "Apps designed for real users.",
    icon: "Smartphone",
    detail:
      "Cross-platform mobile experiences that feel native, performant, and purposeful.",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description: "Solutions built around your business.",
    icon: "Code2",
    detail:
      "Bespoke software engineered to fit your exact business logic and long-term goals.",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Reliable infrastructure and deployment.",
    icon: "Cloud",
    detail:
      "Scalable cloud architecture, CI/CD pipelines, and infrastructure that grows with you.",
  },
];
