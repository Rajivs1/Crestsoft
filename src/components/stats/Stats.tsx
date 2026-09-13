"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats, StatItem } from "@/data/stats";

function CounterItem({ item, index }: { item: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = item.value;
    const duration = 1600; // ms
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(item.value % 1 !== 0 ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, item.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="card-light p-6 sm:p-7 relative flex flex-col justify-between overflow-hidden group"
    >
      {/* Top subtle highlight */}
      <div className="flex items-baseline gap-1 mb-2">
        <span
          className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#151515] tracking-tight group-hover:text-[#E85D3F] transition-colors"
        >
          {count}
        </span>
        <span className="font-display font-bold text-2xl sm:text-3xl text-[#E85D3F]">
          {item.suffix}
        </span>
      </div>

      <div>
        <h4 className="font-display font-semibold text-sm sm:text-[15px] text-[#151515] mb-1">
          {item.label}
        </h4>
        <p className="text-xs text-[#68645F] leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Decorative subtle corner bar */}
      <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#E85D3F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative py-14 sm:py-18 lg:py-24 z-10 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[35vw] max-w-[800px] max-h-[350px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(232,93,63,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="section-wrapper relative">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F] mb-3 px-3 py-1 rounded-full border border-[#E85D3F]/20 bg-[#E85D3F]/5">
            Proven Track Record
          </span>
          <h2
            className="font-display text-[#151515] leading-[1.08]"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              letterSpacing: "-0.03em",
              fontWeight: 700,
            }}
          >
            Engineered for reliability.<br />Built for tangible results.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((item, i) => (
            <CounterItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
