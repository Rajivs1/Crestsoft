import type { Metadata } from "next";
import { WorkPage } from "@/components/pages/WorkPage";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects by CrestSoft.",
};

export default function Page() {
  return <WorkPage />;
}
