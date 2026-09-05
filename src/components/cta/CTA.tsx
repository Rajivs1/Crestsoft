"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 md:py-44 border-t border-brand-border/50 bg-brand-bg relative overflow-hidden noise">
      {/* Glows */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[160px] pointer-events-none" style={{ opacity: "var(--glow-opacity)" }} />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-violet-500/6 rounded-full blur-[120px] pointer-events-none" style={{ opacity: "var(--glow-opacity)" }} />

      {/* Crest motif */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.025] pointer-events-none" viewBox="0 0 500 500">
        <circle cx="250" cy="250" r="180" stroke="currentColor" fill="none" strokeWidth="0.4" className="text-brand-accent" />
        <circle cx="250" cy="250" r="120" stroke="currentColor" fill="none" strokeWidth="0.3" className="text-brand-accent" />
        <line x1="70" y1="250" x2="430" y2="250" stroke="currentColor" strokeWidth="0.3" className="text-brand-accent" />
        <line x1="250" y1="70" x2="250" y2="430" stroke="currentColor" strokeWidth="0.3" className="text-brand-accent" />
      </svg>

      <div className="section-wrapper relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span className="text-[10px] font-display font-medium tracking-[0.3em] uppercase text-brand-subtle mb-6 block">05 / Contact</span>

          <h2 className="font-display text-brand-text max-w-4xl mx-auto mb-6 leading-[0.98]" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.04em", fontWeight: 700 }}>
            Have an idea worth{" "}
            <span className="gradient-text">building?</span>
          </h2>

          <p className="text-base md:text-lg text-brand-muted mb-14 max-w-md mx-auto leading-relaxed">
            Let&apos;s turn it into something real.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="btn-gradient px-8 py-4 text-base shadow-2xl shadow-indigo-500/25">
                Start a Project <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/work" className="btn-outline px-8 py-4 text-base">
                View Our Work
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
