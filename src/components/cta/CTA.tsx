"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-28 md:py-36 border-t border-brand-border/50 bg-brand-surface relative overflow-hidden">
      {/* Glows */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-violet-500/8 rounded-full blur-[100px] pointer-events-none" />
      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />

      <div className="section-wrapper relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/25 bg-brand-accent/10 text-[11px] font-semibold tracking-widest uppercase text-indigo-300 mb-10">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Let&apos;s Build Together
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.05]">
            Have an idea worth{" "}
            <span className="gradient-text">building?</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-muted mb-12 max-w-lg mx-auto leading-relaxed">
            Let&apos;s turn it into something real.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-accent text-white font-semibold hover:bg-brand-glow transition shadow-2xl shadow-brand-accent/30 text-base">
                Start a Project <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <Link href="/work" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-brand-border text-zinc-300 font-semibold hover:border-brand-accent/40 hover:bg-brand-accent/5 transition text-base">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
