"use client";
import { motion } from "framer-motion";

const items = [
  { number: "01", title: "Business First", desc: "Technology designed around real business needs.", accent: "border-indigo-500/20 text-indigo-400" },
  { number: "02", title: "Modern Engineering", desc: "Clean, scalable, and maintainable solutions.", accent: "border-violet-500/20 text-violet-400" },
  { number: "03", title: "Built to Grow", desc: "Products designed with the future in mind.", accent: "border-cyan-500/20 text-cyan-400" },
];

export function About() {
  return (
    <section className="py-24 md:py-32 border-t border-brand-border/50 bg-brand-surface">
      <div className="section-wrapper">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-brand-accent" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-indigo-400">Why CrestSoft</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Built with purpose.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {items.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative rounded-2xl border border-brand-border/50 bg-brand-bg p-8 hover:border-brand-border hover:bg-brand-card transition-all duration-300 overflow-hidden">
              <span className="absolute top-4 right-5 text-[72px] font-black leading-none text-white/[0.03] select-none">{p.number}</span>
              <div className={`w-8 h-0.5 rounded-full mb-7 ${p.accent.split(" ")[0].replace("border-", "bg-")}`} />
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
