export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    id: "timeline",
    question: "How long does a typical project take from start to launch?",
    answer:
      "A focused MVP typically takes between 2 to 6 weeks from initial discovery to production launch. Larger enterprise or multi-platform systems typically range from 2 to 4 months. We work in rapid 2-week sprints with staging previews deployed every Friday.",
    category: "Timeline & Process",
  },
  {
    id: "pricing",
    question: "What is your pricing model — fixed-price or sprint-based?",
    answer:
      "We offer both options based on your project requirements. For clearly scoped MVPs and redesigns, we provide transparent fixed-price milestones with guaranteed deliverables. For evolving products, we provide dedicated sprint teams on flexible monthly retainer agreements.",
    category: "Pricing & Scope",
  },
  {
    id: "ip-ownership",
    question: "Who owns the code and intellectual property once launched?",
    answer:
      "You own 100% of all intellectual property, source code, design assets (Figma), and infrastructure setups. Upon project completion and final milestone sign-off, full repository access and cloud credentials are transferred directly to your team.",
    category: "Ownership & Legal",
  },
  {
    id: "support-maintenance",
    question: "Do you provide post-launch support and ongoing maintenance?",
    answer:
      "Yes. Every build includes a 30-day post-launch warranty with zero-cost bug fixes and performance monitoring. Following launch, we offer dedicated monthly SLA maintenance packages covering feature additions, cloud optimization, and security audits.",
    category: "Maintenance",
  },
  {
    id: "tech-stack",
    question: "What technology stack do you specialize in?",
    answer:
      "We specialize in modern, high-performance tech stacks: Next.js, React, TypeScript, Tailwind CSS, Node.js, Python, PostgreSQL, and cross-platform mobile with React Native / Flutter. Our cloud deployments utilize AWS, Vercel, Supabase, and Docker.",
    category: "Technology",
  },
];
