"use client";
import { motion } from "framer-motion";
import { Target, Cpu, TrendingUp } from "lucide-react";

const items = [
  { icon: Target, number: "01", title: "Business First", desc: "Technology designed around real business needs. Every decision maps back to outcomes.", accent: "#6366f1" },
  { icon: Cpu, number: "02", title: "Modern Engineering", desc: "Clean, scalable, and maintainable solutions. No shortcuts, no technical debt.", accent: "#8b5cf6" },
  { icon: TrendingUp, number: "03", title: "Built to Grow", desc: "Products designed with the future in mind. Architecture that scales with your ambitions.", accent: "#06b6d4" },
];

export function About() {
  return (
    <section className="py-28 md:py-40 border-t border-brand-border/50 bg-brand-bg relative overflow-hidden noise">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/[0.03] rounded-full blur-[140px] pointer-events-none" style={{ opacity: "var(--glow-opacity)" }} />

      <div className="section-wrapper relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-20 max-w-2xl">
          <span className="text-[10px] font-display font-medium tracking-[0.3em] uppercase text-brand-subtle mb-4 block">03 / Purpose</span>
          <h2 className="font-display text-brand-text leading-[0.95] mb-5" style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", letterSpacing: "-0.04em", fontWeight: 700 }}>
            Built with purpose.
          </h2>
          <p className="text-brand-muted leading-relaxed text-[15px] max-w-lg">
            We believe in building technology that serves real business goals, not just impressive demos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl border border-brand-border/30 bg-brand-surface/60 backdrop-blur-sm p-8 md:p-9 hover:border-brand-accent/20 transition-all duration-500 overflow-hidden"
              >
                {/* Large number watermark */}
                <span className="absolute -top-3 -right-1 font-display text-[88px] font-bold leading-none text-brand-border/8 select-none group-hover:text-brand-border/15 transition-colors duration-700">
                  {p.number}
                </span>

                {/* Accent line that extends on hover */}
                <motion.div
                  className="h-px rounded-full mb-8"
                  style={{ backgroundColor: p.accent, width: 28 }}
                  whileHover={{ width: 56 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{ backgroundColor: `${p.accent}10`, borderColor: `${p.accent}20` }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color: p.accent }} />
                  </div>
                  <h3 className="font-display text-brand-text font-semibold text-lg tracking-tight">{p.title}</h3>
                </div>

                <p className="text-sm text-brand-muted leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
