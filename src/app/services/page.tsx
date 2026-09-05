import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description: "CrestSoft builds web apps, mobile applications, custom software, and cloud infrastructure.",
};

export default function Page() {
  return <ServicesPage />;
}
