import { Hero } from "@/components/hero/Hero";
import { LogoMarquee } from "@/components/social-proof/LogoMarquee";
import { Services } from "@/components/services/Services";
import { Stats } from "@/components/stats/Stats";
import { Projects } from "@/components/projects/Projects";
import { Process } from "@/components/process/Process";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { FAQ } from "@/components/faq/FAQ";
import { CTA } from "@/components/cta/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Services />
      <Stats />
      <Projects />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

