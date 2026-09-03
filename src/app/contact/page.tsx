import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (<><Navbar /><main className="pt-16"><ContactPage /></main><Footer /></>);
}
