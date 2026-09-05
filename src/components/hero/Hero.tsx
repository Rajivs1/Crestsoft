"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { HeroVisual } from "./HeroVisual";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-bg noise">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(99,102,241,0.17), transparent 68%)", opacity: "var(--glow-opacity)" }} />
      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(rgba(128,128,128,1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="section-wrapper w-full pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-xl">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-accent/25 bg-brand-accent/10 text-[11px] font-semibold tracking-widest uppercase text-indigo-300 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Software Development Studio
              </span>
            </motion.div>

            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-brand-text leading-[1.05] mb-6">
              Build. <span className="gradient-text">Scale.</span><br />Move Forward.
            </motion.h1>

            <motion.p variants={item} className="text-lg text-brand-muted leading-relaxed mb-10 max-w-md">
              We build modern digital products for businesses ready to grow.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="btn-gradient px-7 py-3.5 text-[15px] shadow-lg shadow-indigo-500/30">
                  Start a Project <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/work" className="btn-outline px-7 py-3.5 text-[15px]">
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={item} className="mt-16 hidden md:flex items-center gap-2 text-brand-subtle">
              <ChevronDown className="w-4 h-4 animate-bounce" />
              <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll to explore</span>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.85 }} className="hidden lg:block">
            <HeroVisual />
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }} className="mt-14 lg:hidden">
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
