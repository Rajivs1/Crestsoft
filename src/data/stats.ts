export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const stats: StatItem[] = [
  {
    id: "products-shipped",
    value: 50,
    suffix: "+",
    label: "Digital Products Shipped",
    description: "From seed-stage MVPs to enterprise platforms.",
  },
  {
    id: "uptime-sla",
    value: 99.9,
    suffix: "%",
    label: "System Reliability SLA",
    description: "Cloud architectures engineered for fault tolerance.",
  },
  {
    id: "client-rating",
    value: 4.9,
    suffix: " / 5",
    label: "Client Satisfaction Rating",
    description: "Based on post-launch client reviews and Net Promoter Scores.",
  },
  {
    id: "mvp-speed",
    value: 14,
    suffix: " Days",
    label: "Rapid MVP Turnaround",
    description: "Fast-track design to high-fidelity clickable prototype.",
  },
];
