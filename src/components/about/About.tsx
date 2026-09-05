"use client";
import { motion } from "framer-motion";
import { Target, Cpu, TrendingUp } from "lucide-react";

const items = [
  { icon: Target, title: "Business First", desc: "Technology designed around real business needs.", accent: "#6366f1" },
  { icon: Cpu, title: "Modern Engineering", desc: "Clean, scalable and maintainable solutions.", accent: "#8b5cf6" },
  { icon: TrendingUp, title: "Built to Grow", desc: "Products designed with the future in mind.", accent: "#06b6d4" },
];

export function About() {
  return (
    <section className="relative py-28 md:py-40 z-10">
      <div className="section-wrapper">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[10px] font-display font-medium tracking-[0.3em] uppercase text-brand-subtle mb-4 block">03 / Why CrestSoft</span>
            <h2 className="font-display text-brand-text leading-[0.95]" style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", letterSpacing: "-0.04em", fontWeight: 700 }}>
              Built with purpose.
            </h2>
          </div>
          <p className="text-sm text-brand-muted max-w-xs leading-relaxed">More than development. A partner in your growth.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="group glow-card p-7"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border"
                  style={{ backgroundColor: `${p.accent}10`, borderColor: `${p.accent}20` }}>
                  <Icon className="w-5 h-5" style={{ color: p.accent }} />
                </div>
                <h3 className="font-display text-brand-text font-semibold text-lg tracking-tight mb-2">{p.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
