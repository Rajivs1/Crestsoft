"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Pen, Code2, Rocket } from "lucide-react";

const steps = [
  { n: "01", label: "Discover", title: "Understand the idea.", desc: "We deeply understand your goals, constraints, and users.", icon: Search, accent: "#6366f1" },
  { n: "02", label: "Design", title: "Shape the experience.", desc: "Wireframes, flows, and visual direction \u2014 turning concepts into form.", icon: Pen, accent: "#8b5cf6" },
  { n: "03", label: "Build", title: "Turn it into reality.", desc: "Clean code, modern architecture, and relentless attention to quality.", icon: Code2, accent: "#06b6d4" },
  { n: "04", label: "Launch", title: "Deploy and grow.", desc: "Ship with confidence. Then iterate, improve, and scale together.", icon: Rocket, accent: "#10b981" },
];

function Step({ s, i }: { s: typeof steps[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = s.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.14, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {/* Connector */}
      {i < steps.length - 1 && (
        <motion.div
          className="absolute hidden lg:block top-7 left-[calc(100%+4px)] w-[calc(100%-16px)] h-px"
          style={{ backgroundColor: `${s.accent}15` }}
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: i * 0.14 + 0.4, duration: 0.8 }}
        />
      )}

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center border mb-6 transition-all duration-300 group-hover:scale-105"
        style={{ backgroundColor: `${s.accent}10`, borderColor: `${s.accent}20` }}
      >
        <Icon className="w-5 h-5" style={{ color: s.accent }} />
      </div>

      {/* Label */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-display text-xs font-bold" style={{ color: s.accent }}>{s.n}</span>
        <span className="text-[9px] font-semibold tracking-[0.2em] uppercase px-2 py-0.5 rounded-full" style={{ color: s.accent, backgroundColor: `${s.accent}10` }}>
          {s.label}
        </span>
      </div>

      <h3 className="font-display text-brand-text font-semibold text-[17px] tracking-tight mb-2">{s.title}</h3>
      <p className="text-sm text-brand-muted leading-relaxed">{s.desc}</p>
    </motion.div>
  );
}

export function Process() {
  return (
    <section className="py-28 md:py-40 border-t border-brand-border/50 bg-brand-surface noise">
      <div className="section-wrapper">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-20">
          <span className="text-[10px] font-display font-medium tracking-[0.3em] uppercase text-brand-subtle mb-4 block">04 / Process</span>
          <h2 className="font-display text-brand-text leading-[0.95]" style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", letterSpacing: "-0.04em", fontWeight: 700 }}>
            From idea to launch.
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((s, i) => <Step key={s.n} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
