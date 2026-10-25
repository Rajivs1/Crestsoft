import type { Metadata } from "next";
import { CareersPage } from "@/components/pages/CareersPage";

export const metadata: Metadata = {
  title: "Careers — Join the CrestSoft Collective",
  description:
    "Explore open engineering, AI research, and design positions at CrestSoft. Remote-first freedom, top-of-market compensation, and obsessive craft.",
};

export default function Page() {
  return <CareersPage />;
}
