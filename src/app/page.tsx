import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { Projects } from "@/components/projects/Projects";
import { Process } from "@/components/process/Process";
import { CTA } from "@/components/cta/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Process />
      <CTA />
    </>
  );
}
