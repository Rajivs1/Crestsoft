import type { Metadata } from "next";
import { HowWeWorkPage } from "@/components/pages/HowWeWorkPage";

export const metadata: Metadata = {
  title: "How We Work — CrestSoft Engineering Methodology",
  description:
    "Explore CrestSoft's 5-phase delivery lifecycle, agile sprint cadence, zero technical debt guarantee, and direct client collaboration standards.",
};

export default function Page() {
  return <HowWeWorkPage />;
}
