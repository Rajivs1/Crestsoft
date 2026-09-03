import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ServicesPage } from "@/components/pages/ServicesPage";

export const metadata: Metadata = { title: "Services" };

export default function Page() {
  return (<><Navbar /><main className="pt-16"><ServicesPage /></main><Footer /></>);
}
