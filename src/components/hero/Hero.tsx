"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { HeroVisual } from "./HeroVisual";

const wordVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (d: number) => ({
    opacity: 1, y: 0,
    transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden z-10">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(99,102,241,0.14), transparent 68%)", opacity: "var(--glow-opacity)" }} />
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(128,128,128,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,0.3) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      {/* Crest motif — intersecting lines */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none" viewBox="0 0 600 600">
        <circle cx="300" cy="300" r="200" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-brand-accent" />
        <circle cx="300" cy="300" r="280" stroke="currentColor" fill="none" strokeWidth="0.3" className="text-brand-accent" />
        <line x1="100" y1="300" x2="500" y2="300" stroke="currentColor" strokeWidth="0.3" className="text-brand-accent" />
        <line x1="300" y1="100" x2="300" y2="500" stroke="currentColor" strokeWidth="0.3" className="text-brand-accent" />
      </svg>

      <div className="section-wrapper w-full pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <motion.div variants={fade} custom={0.15} initial="hidden" animate="show">
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/8 text-[10px] font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Software Development Studio
              </span>
            </motion.div>

            {/* Headline — word by word */}
            <h1 className="font-display mb-8" style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)", lineHeight: 1, letterSpacing: "-0.045em", fontWeight: 700 }}>
              {["Build.", "Scale.", "Move", "Forward."].map((word, i) => (
                <motion.span
                  key={word}
                  className={`inline-block mr-[0.25em] ${i === 1 ? "gradient-text" : "text-brand-text"}`}
                  variants={wordVariants}
                  custom={i}
                  initial="hidden"
                  animate="show"
                >
                  {word}
                  {i === 1 && <br className="hidden sm:block" />}
                </motion.span>
              ))}
            </h1>

            {/* Subtext */}
            <motion.p
              variants={fade} custom={1.0} initial="hidden" animate="show"
              className="text-base md:text-lg text-brand-muted leading-relaxed mb-12 max-w-md font-sans"
              style={{ letterSpacing: "-0.01em" }}
            >
              We build modern digital products for businesses ready to grow.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fade} custom={1.15} initial="hidden" animate="show" className="flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="btn-gradient px-7 py-3.5 text-[15px] shadow-lg shadow-indigo-500/25">
                  Start a Project
                  <motion.span className="inline-block" whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/work" className="btn-outline px-7 py-3.5 text-[15px]">
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div variants={fade} custom={1.4} initial="hidden" animate="show" className="mt-20 hidden md:flex items-center gap-3 text-brand-subtle">
              <div className="w-px h-8 bg-brand-border" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-medium font-display">Scroll</span>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="hidden lg:block">
            <HeroVisual />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.7 }} className="mt-16 lg:hidden">
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
