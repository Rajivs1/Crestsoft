export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  metrics?: string;
  rating: number;
  tags: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: "daksh-quote",
    name: "Ajay Srivastava",
    role: "Founder & CEO",
    company: "Daksh Cargo",
    quote:
      "CrestSoft took our logistics workflow from scattered spreadsheets into an ultra-fast, automated platform. Our booking turnaround dropped by 65% in the first 60 days.",
    metrics: "-65% Booking Latency",
    rating: 5,
    tags: ["Logistics", "Web Platform", "ReactJs"],
  },
  {
    id: "bliss-quote",
    name: "Cafe Bliss ",
    role: "Head of Operations",
    company: "CafeBliss",
    quote:
      "The visual design and attention to micro-interactions blew our team away. Our customer engagement surged, and the digital menu and reservation flow has been seamless.",
    metrics: "+140% Online Orders",
    rating: 5,
    tags: ["Hospitality", "Digital Experience", "React"],
  },
  {
    id: "cyphernaut-quote",
    name: "Cyphernaut",
    role: "Chief Technology Officer",
    company: "Cyphernaut Technologies",
    quote:
      "Finding an agency that truly understands modern frontend architecture and clean scalable code is rare. CrestSoft delivered our product two weeks ahead of schedule.",
    metrics: "Shipped 2 Weeks Early",
    rating: 5,
    tags: ["SaaS", "Custom Software", "Cloud"],
  },
];
