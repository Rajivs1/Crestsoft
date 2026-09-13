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
    url: "#",
    accentColor: "#E85D3F",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&q=80",
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
    url: "#",
    accentColor: "#f97316",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=800&fit=crop&q=80",
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
    url: "#",
    accentColor: "#8b5cf6",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
    featured: false,
  },
];

