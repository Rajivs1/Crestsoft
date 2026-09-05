"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Pen, Code2, Rocket } from "lucide-react";

const steps = [
  { n: "01", label: "Discover", title: "Understand the idea.", desc: "We deeply understand your goals, constraints, and users.", icon: Search, cls: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
  { n: "02", label: "Design", title: "Shape the experience.", desc: "Wireframes, flows, and visual direction — turning concepts into form.", icon: Pen, cls: "text-violet-400 bg-violet-500/10 border-violet-500/20" },
  { n: "03", label: "Build", title: "Turn it into reality.", desc: "Clean code, modern architecture, and relentless attention to quality.", icon: Code2, cls: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
  { n: "04", label: "Launch", title: "Deploy and grow.", desc: "Ship with confidence. Then iterate, improve, and scale together.", icon: Rocket, cls: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
];

function Step({ s, i }: { s: typeof steps[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = s.icon;
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.12, duration: 0.6 }} className="relative">
      {i < steps.length - 1 && <div className="absolute hidden lg:block top-8 left-[calc(100%+2px)] w-full h-px bg-brand-border/40" />}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-5 ${s.cls}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-mono font-bold ${s.cls.split(" ")[0]}`}>{s.n}</span>
        <span className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full ${s.cls}`}>{s.label}</span>
      </div>
      <h3 className="text-lg font-bold text-brand-text mb-2">{s.title}</h3>
      <p className="text-sm text-brand-muted leading-relaxed">{s.desc}</p>
    </motion.div>
  );
}

export function Process() {
  return (
    <section className="py-24 md:py-32 border-t border-brand-border/50 bg-brand-bg">
      <div className="section-wrapper">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-brand-accent" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-indigo-400">How We Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text">From idea to launch.</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((s, i) => <Step key={s.n} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
