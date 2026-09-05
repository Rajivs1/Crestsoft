import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about CrestSoft — a modern software development studio.",
};

export default function Page() {
  return <AboutPage />;
}
