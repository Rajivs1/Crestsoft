"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 md:py-44 z-10 overflow-hidden">
      {/* Cosmic horizon glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(99,102,241,0.12), rgba(139,92,246,0.06) 40%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(236,72,153,0.05), transparent 70%)" }} />

      {/* Floating geometric */}
      <motion.div
        className="absolute right-[10%] bottom-[15%] w-24 h-24 pointer-events-none hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full rounded-2xl border border-indigo-500/15 rotate-45"
          style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08), transparent)" }} />
      </motion.div>

      <div className="section-wrapper relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <h2 className="font-display text-brand-text max-w-3xl mx-auto mb-6 leading-[1]" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.04em", fontWeight: 700 }}>
            Have an idea worth building?
          </h2>
          <p className="text-base text-brand-muted mb-12 max-w-md mx-auto leading-relaxed">
            Let&apos;s turn it into something real.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="btn-gradient px-8 py-4 text-[15px]">
                Start a Project <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/work" className="btn-outline px-8 py-4 text-[15px]">
                View Our Work
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
