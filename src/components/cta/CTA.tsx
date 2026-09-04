"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 md:py-32 border-t border-brand-border/50 bg-brand-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 65% 65% at 50% 110%, rgba(99,102,241,0.15), transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />

      <div className="section-wrapper relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-accent/25 bg-brand-accent/10 text-[11px] font-semibold tracking-widest uppercase text-indigo-300 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Let&apos;s Build Together
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-3xl mx-auto leading-tight">
            Have an idea worth <span className="gradient-text">building?</span>
          </h2>
          <p className="text-lg text-brand-muted mb-12 max-w-lg mx-auto">Let&apos;s turn it into something real.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-accent text-white font-semibold hover:bg-brand-glow transition shadow-xl shadow-brand-accent/30 text-base">
              Start a Project <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/work" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-brand-border text-zinc-300 font-semibold hover:border-brand-accent/40 hover:bg-brand-accent/5 transition text-base">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
