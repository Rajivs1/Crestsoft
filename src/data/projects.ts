export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  filter: string;
  domain: string;
  description: string;
  metrics: string;
  tags: string[];
  url: string;
  accentColor: string;
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "daksh-cargo",
    number: "01",
    name: "Daksh Cargo",
    category: "Logistics & Moving Platform",
    filter: "Logistics",
    domain: "dakshcargo.in",
    description: "A high-performance digital platform for on-demand relocation and freight bookings.",
    metrics: "⚡ -65% Booking Latency",
    tags: ["Next.js 16", "Tailwind CSS", "TypeScript", "Realtime API"],
    url: "https://dakshcargo.vercel.app/",
    accentColor: "#E85D3F",
    image: "/images/projects/daksh_cargo_ui.png",
    featured: true,
  },
  {
    id: "cafebliss",
    number: "02",
    name: "CafeBliss",
    category: "Hospitality & Digital Experience",
    filter: "Hospitality",
    domain: "cafebliss.co",
    description: "An interactive digital dining and online ordering experience crafted for a luxury café chain.",
    metrics: "📈 +140% Online Orders",
    tags: ["React 18", "Node.js", "Framer Motion", "Stripe API"],
    url: "https://cafe-bliss-phi.vercel.app/",
    accentColor: "#f97316",
    image: "/images/projects/cafebliss_ui.png",
    featured: false,
  },
  {
    id: "cyphernaut",
    number: "03",
    name: "Cyphernaut.in",
    category: "Cloud Security & SaaS Platform",
    filter: "SaaS",
    domain: "cyphernaut.in",
    description: "An enterprise cloud security posture platform with live threat monitoring and auditing.",
    metrics: "🔒 99.99% Uptime Verified",
    tags: ["Next.js", "TypeScript", "Tailwind", "Cloud Infrastructure"],
    url: "https://www.cyphernaut.in/",
    accentColor: "#8b5cf6",
    image: "/images/projects/cyphernaut_ui.png",
    featured: false,
  },
];

