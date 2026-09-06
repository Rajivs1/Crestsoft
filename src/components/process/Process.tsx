"use client";
import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { n: "01", label: "Discover", desc: "Understand the idea.", accent: "#E85D3F", Icon: Search },
  { n: "02", label: "Design", desc: "Shape the experience.", accent: "#E85D3F", Icon: PenTool },
  { n: "03", label: "Build", desc: "Turn it into reality.", accent: "#E85D3F", Icon: Code2 },
  { n: "04", label: "Launch", desc: "Deploy and grow.", accent: "#E85D3F", Icon: Rocket },
];

function ProcessStep({ s, i, isActive }: { s: (typeof steps)[0]; i: number; isActive: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = s.Icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      {/* Animated icon circle */}
      <div className="flex justify-center mb-4">
        <motion.div
          className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500"
          style={{
            borderColor: isActive ? `${s.accent}30` : "#E7DED3",
            background: isActive ? `${s.accent}08` : "white",
            boxShadow: isActive ? `0 0 24px ${s.accent}20` : "0 2px 8px rgba(0,0,0,0.04)",
          }}
          animate={isActive ? { scale: [1, 1.08, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.12, rotate: 5 }}
        >
          <Icon className="w-5 h-5 transition-colors duration-500" style={{ color: isActive ? s.accent : "#a89a8a" }} />
        </motion.div>
      </div>

      <motion.span
        className="text-xl font-display font-bold mb-1 block"
        animate={{ color: isActive ? s.accent : "#d6cbbf" }}
        transition={{ duration: 0.5 }}
      >
        {s.n}
      </motion.span>
      <h3 className="font-display text-[#151515] font-semibold text-sm tracking-tight mb-1">{s.label}</h3>
      <p className="text-xs text-[#68645F] leading-relaxed">{s.desc}</p>
    </motion.div>
  );
}

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const mapped = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);
  useMotionValueEvent(mapped, "change", (v) => setProgress(v));

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 lg:py-32 z-10">
      <div className="section-wrapper">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F] mb-4 px-3 py-1 rounded-full border border-[#E85D3F]/20 bg-[#E85D3F]/5">
              Our Process
            </span>
            <h2 className="font-display text-[#151515] leading-[1.05] mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "-0.03em", fontWeight: 700 }}>
              From idea<br />to impact.
            </h2>
            <p className="text-sm text-[#68645F] max-w-xs leading-relaxed mt-4">A clear and collaborative journey from concept to launch.</p>
          </motion.div>

          <div className="flex-1 max-w-2xl">
            <div className="relative pt-4">
              {/* Animated progress line */}
              <div className="hidden lg:block absolute top-[34px] left-[calc(12.5%)] right-[calc(12.5%)] h-[3px] rounded-full bg-[#E7DED3]/50 overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #E85D3F, #C9472D)",
                    width: `${Math.min(progress * 100, 100)}%`,
                    boxShadow: "0 0 12px rgba(232,93,63,0.4)",
                  }}
                />
                {/* Animated glow dot traveling along the line */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#E85D3F]"
                  style={{
                    left: `${Math.min(progress * 100, 100)}%`,
                    boxShadow: "0 0 12px rgba(232,93,63,0.6), 0 0 24px rgba(232,93,63,0.3)",
                  }}
                />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
                {steps.map((s, i) => (
                  <ProcessStep key={s.n} s={s} i={i} isActive={progress > i / steps.length} />
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, rotate: -8 }}
            whileInView={{ opacity: 1, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden xl:block"
          >
            <p className="text-lg text-[#E85D3F]/40 leading-snug text-right" style={{ fontFamily: "var(--font-hand), cursive", fontStyle: "italic" }}>
              Better<br />Ideas<br />Brighter<br />Futures
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
