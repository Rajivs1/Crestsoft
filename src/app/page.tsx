import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { Projects } from "@/components/projects/Projects";
import { About } from "@/components/about/About";
import { Process } from "@/components/process/Process";
import { CTA } from "@/components/cta/CTA";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
