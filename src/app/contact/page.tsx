import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us — CrestSoft Studio | Gurugram, Haryana",
  description:
    "Get in touch with CrestSoft. Located in Sector 55, Phase 2, Gurugram, Haryana. Phone: +91 8521982915, +91 8581982915. Email: rajeev04632@gmail.com.",
};

export default function Page() {
  return <ContactPage />;
}
