"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroVisual } from "./HeroVisual";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { delay: d, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden z-10 pt-20">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.12), transparent 65%)", opacity: "var(--glow-opacity)" }} />

      <div className="section-wrapper w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Left - Text */}
          <div className="max-w-xl">
            <motion.div variants={fade} custom={0.1} initial="hidden" animate="show">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/8 text-[10px] font-display font-medium tracking-[0.2em] uppercase text-indigo-300 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Technology Built to Move You Forward
              </span>
            </motion.div>

            <motion.h1 variants={fade} custom={0.2} initial="hidden" animate="show"
              className="font-display text-brand-text mb-6 leading-[1.02]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", letterSpacing: "-0.04em", fontWeight: 700 }}>
              Build. Scale.<br />
              <span className="gradient-text">Move Forward.</span>
            </motion.h1>

            <motion.p variants={fade} custom={0.4} initial="hidden" animate="show"
              className="text-base text-brand-muted leading-relaxed mb-8 max-w-md">
              We build modern digital products for businesses ready to grow.
            </motion.p>

            <motion.div variants={fade} custom={0.5} initial="hidden" animate="show" className="flex flex-wrap gap-3 mb-10">
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="btn-gradient px-6 py-3 text-sm">
                  Start a Project <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/work" className="btn-outline px-6 py-3 text-sm">
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={fade} custom={0.7} initial="hidden" animate="show"
              className="hidden md:flex items-center gap-3 text-brand-subtle">
              <div className="w-px h-6 bg-brand-border" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-display font-medium">Scroll to explore</span>
            </motion.div>
          </div>

          {/* Right - Laptop Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Mobile visual */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }} className="mt-10 lg:hidden">
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
