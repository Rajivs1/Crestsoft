import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = { title: "About" };

export default function Page() {
  return (<><Navbar /><main className="pt-16"><AboutPage /></main><Footer /></>);
}
