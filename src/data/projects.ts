export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
  accentColor: string;
  bgColor: string;
}

export const projects: Project[] = [
  {
    id: "daksh-cargo",
    number: "01",
    name: "Daksh Cargo",
    category: "Logistics Platform",
    description: "A modern digital platform for a packers & movers business.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "#",
    accentColor: "#f59e0b",
    bgColor: "#111014",
  },
  {
    id: "cafebliss",
    number: "02",
    name: "CafeBliss",
    category: "Restaurant / Café Platform",
    description: "A modern digital experience designed for a café business.",
    tags: ["React", "Node.js", "Tailwind CSS", "Stripe"],
    url: "#",
    accentColor: "#10b981",
    bgColor: "#0c1410",
  },
  {
    id: "cyphernaut",
    number: "03",
    name: "Cyphernaut.in",
    category: "Digital Platform",
    description: "A modern digital platform with a clean and engaging user experience.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
    url: "#",
    accentColor: "#6366f1",
    bgColor: "#0d0c14",
  },
];
