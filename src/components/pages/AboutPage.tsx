"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function AboutPage() {
  return (
    <div className="bg-[#09090f] min-h-screen">
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(99,102,241,0.14) 0%, transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6"><div className="w-5 h-px bg-brand" /><span className="text-xs font-semibold tracking-widest uppercase text-brand-light">About</span></div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">Built with <span className="gradient-text">purpose.</span></h1>
            <p className="text-lg text-white/50 max-w-2xl leading-relaxed">CrestSoft is a modern software development studio. We design and build digital products for businesses that are serious about growth.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-white/[0.06] bg-[#0b0b12]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/[0.06]">
            {[{ label: "Founded", value: "2024", color: "text-brand" }, { label: "Projects", value: "10+", color: "text-purple-400" }, { label: "Services", value: "5", color: "text-cyan-400" }, { label: "Focus", value: "Quality", color: "text-emerald-400" }].map((v, i) => (
              <motion.div key={v.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.09 }} className="px-8 py-10 text-center">
                <div className={`text-3xl md:text-4xl font-extrabold mb-1.5 tracking-tight ${v.color}`}>{v.value}</div>
                <div className="text-xs text-white/35 font-medium uppercase tracking-wider">{v.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Technology that moves businesses forward.</h2>
            <p className="text-white/45 mb-5 leading-relaxed">We started CrestSoft because we believed most businesses deserved better software — faster agencies, better quality, fair pricing.</p>
            <p className="text-white/45 leading-relaxed">We build lean, modern, maintainable products. No bloat. No shortcuts. Just great software.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.65 }}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8">
            <h3 className="text-lg font-bold text-white mb-6">What makes us different</h3>
            <div className="space-y-4">
              {["We think about your business, not just your code", "We use modern tools and best practices", "We keep you involved through the entire build", "We document and hand over everything cleanly", "We design for the long term, not just the launch"].map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-brand/15 border border-brand/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                  </div>
                  <span className="text-sm text-white/55 leading-relaxed">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 border-t border-white/[0.06] bg-[#0b0b12]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 tracking-tight">How we think.</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Business First", desc: "Every decision maps back to outcomes that matter.", border: "border-brand/20", bg: "from-brand/20 to-brand/5" },
              { num: "02", title: "Modern Engineering", desc: "Clean, scalable code. No shortcuts, no technical debt.", border: "border-purple-500/20", bg: "from-purple-500/20 to-purple-500/5" },
              { num: "03", title: "Built to Grow", desc: "Architecture that scales alongside your ambitions.", border: "border-cyan-500/20", bg: "from-cyan-500/20 to-cyan-500/5" },
            ].map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className={`relative rounded-2xl border ${p.border} bg-gradient-to-br ${p.bg} p-8 overflow-hidden`}>
                <span className="absolute top-4 right-5 text-[4.5rem] font-black leading-none text-white/[0.04] pointer-events-none select-none">{p.num}</span>
                <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Ready to work together?</h2>
          <p className="text-white/45 mb-8 max-w-md mx-auto">Tell us what you&apos;re building and we&apos;ll take it from there.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand text-white font-semibold hover:bg-brand-light transition-colors shadow-lg shadow-brand/25">
            Get in touch <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
