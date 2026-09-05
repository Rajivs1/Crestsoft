export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
  accentColor: string;
  image: string;
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
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&q=80",
  },
  {
    id: "cafebliss",
    number: "02",
    name: "CafeBliss",
    category: "Restaurant / Caf\u00e9 Platform",
    description: "A modern digital experience designed for a caf\u00e9 business.",
    tags: ["React", "Node.js", "Tailwind CSS", "Stripe"],
    url: "#",
    accentColor: "#10b981",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=800&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
  },
];
