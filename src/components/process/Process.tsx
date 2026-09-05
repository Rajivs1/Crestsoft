"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Pen, Code2, Rocket } from "lucide-react";

const steps = [
  { n: "01", label: "Discover", title: "Understand the idea.", desc: "We deeply understand your goals, constraints, and users.", icon: Search, accent: "#6366f1" },
  { n: "02", label: "Design", title: "Shape the experience.", desc: "Wireframes, flows, and visual direction.", icon: Pen, accent: "#8b5cf6" },
  { n: "03", label: "Build", title: "Turn it into reality.", desc: "Clean code, modern architecture, and quality.", icon: Code2, accent: "#06b6d4" },
  { n: "04", label: "Launch", title: "Deploy and grow.", desc: "Ship with confidence. Then iterate and scale.", icon: Rocket, accent: "#10b981" },
];

function Step({ s, i }: { s: typeof steps[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = s.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {/* Connector line */}
      {i < steps.length - 1 && (
        <motion.div
          className="absolute hidden lg:block top-6 left-[calc(100%+4px)] w-[calc(100%-20px)] h-px"
          style={{ background: `linear-gradient(90deg, ${s.accent}30, transparent)` }}
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: i * 0.12 + 0.5, duration: 0.8 }}
        />
      )}

      <div className="flex items-center gap-3 mb-4">
        <span className="font-display text-xl font-bold" style={{ color: s.accent }}>{s.n}</span>
        <span className="font-display text-sm font-semibold text-brand-text">{s.label}</span>
      </div>
      <p className="text-sm text-brand-muted leading-relaxed">{s.desc}</p>
    </motion.div>
  );
}

export function Process() {
  return (
    <section className="relative py-28 md:py-36 z-10">
      <div className="section-wrapper">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16">
          <span className="text-[10px] font-display font-medium tracking-[0.3em] uppercase text-brand-subtle mb-4 block">04 / Process</span>
          <h2 className="font-display text-brand-text leading-[0.95]" style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", letterSpacing: "-0.04em", fontWeight: 700 }}>
            From idea to launch.
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((s, i) => <Step key={s.n} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
