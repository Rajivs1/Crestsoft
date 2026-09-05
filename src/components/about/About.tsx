"use client";
import { motion } from "framer-motion";
import { Target, Cpu, TrendingUp } from "lucide-react";

const items = [
  { icon: Target, number: "01", title: "Business First", desc: "Technology designed around real business needs. Every decision maps back to outcomes.", gradient: "from-indigo-500 to-violet-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-400" },
  { icon: Cpu, number: "02", title: "Modern Engineering", desc: "Clean, scalable, and maintainable solutions. No shortcuts, no technical debt.", gradient: "from-violet-500 to-fuchsia-500", bg: "bg-violet-500/10", border: "border-violet-500/20", text: "text-violet-400" },
  { icon: TrendingUp, number: "03", title: "Built to Grow", desc: "Products designed with the future in mind. Architecture that scales with your ambitions.", gradient: "from-cyan-500 to-blue-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400" },
];

export function About() {
  return (
    <section className="py-28 md:py-36 border-t border-brand-border/50 bg-brand-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-wrapper relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-brand-accent" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-indigo-400">Why CrestSoft</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Built with purpose.</h2>
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
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative rounded-2xl border border-brand-border/40 bg-brand-bg/80 p-8 hover:border-brand-accent/25 transition-all duration-300 overflow-hidden"
              >
                {/* Background number */}
                <span className="absolute -top-2 -right-2 text-[100px] font-black leading-none text-white/[0.02] select-none group-hover:text-white/[0.04] transition-colors duration-500">{p.number}</span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${p.bg} ${p.border}`}>
                  <Icon className={`w-5 h-5 ${p.text}`} />
                </div>

                {/* Gradient accent line */}
                <div className={`w-10 h-0.5 rounded-full bg-gradient-to-r ${p.gradient} mb-6 group-hover:w-16 transition-all duration-500`} />

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{p.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
