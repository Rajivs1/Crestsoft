import type { Metadata } from "next";
import { TechInnovationPage } from "@/components/pages/TechInnovationPage";

export const metadata: Metadata = {
  title: "Tech & Innovation Radar — CrestSoft Engineering",
  description:
    "Explore CrestSoft's 2026 Technology Radar. Modern architecture principles, applied Agentic AI, edge runtimes, and engineering benchmarks.",
};

export default function Page() {
  return <TechInnovationPage />;
}
