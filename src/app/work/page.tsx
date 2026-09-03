import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { WorkPage } from "@/components/pages/WorkPage";

export const metadata: Metadata = { title: "Work" };

export default function Page() {
  return (<><Navbar /><main className="pt-16"><WorkPage /></main><Footer /></>);
}
