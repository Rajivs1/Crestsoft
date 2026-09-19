"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, ShieldCheck, Zap, Activity } from "lucide-react";
import Image from "next/image";
import { stats, StatItem } from "@/data/stats";
import { TiltCard } from "@/components/ui/TiltCard";

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
        setCount(
          item.value % 1 !== 0 ? parseFloat(start.toFixed(1)) : Math.floor(start)
        );
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, item.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="card-light p-5 sm:p-6 relative flex flex-col justify-between overflow-hidden group bg-white/80 border border-[#E7DED3]/80 rounded-2xl shadow-xs hover:border-[#E85D3F]/30 hover:shadow-md transition-all"
    >
      {/* Top Value & Suffix */}
      <div className="flex items-baseline gap-1 mb-2">
        <span className="font-display font-bold text-3xl sm:text-4xl text-[#151515] tracking-tight group-hover:text-[#E85D3F] transition-colors">
          {count}
        </span>
        <span className="font-display font-bold text-xl sm:text-2xl text-[#E85D3F]">
          {item.suffix}
        </span>
      </div>

      <div>
        <h4 className="font-display font-semibold text-sm text-[#151515] mb-1">
          {item.label}
        </h4>
        <p className="text-xs text-[#68645F] leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Subtle bottom line on hover */}
      <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#E85D3F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 z-10 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 right-10 w-[600px] h-[400px] pointer-events-none -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(232,93,63,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="section-wrapper relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#E85D3F]" />
              <span className="text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F] px-3 py-1 rounded-full border border-[#E85D3F]/20 bg-[#E85D3F]/5">
                Architecture & Performance
              </span>
            </div>
            <h2
              className="font-display text-[#151515] leading-[1.05]"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "-0.03em",
                fontWeight: 700,
              }}
            >
              Engineered for reliability.<br />
              <span className="gradient-text-shimmer inline-block">Built for tangible results.</span>
            </h2>
          </motion.div>

          <p className="text-sm text-[#68645F] max-w-sm leading-relaxed">
            Every digital product is backed by fault-tolerant microservice topologies, sub-50ms edge routing, and continuous automated verification.
          </p>
        </div>

        {/* Elevated Split Layout: 3D Architecture Spotlight + Enterprise Counters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Architecture 3D Spotlight (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <TiltCard
              maxTilt={4}
              glareOpacity={0.1}
              scaleOnHover={1.01}
              liftY={-4}
              className="card-light h-full rounded-3xl overflow-hidden border border-[#E7DED3] bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.05)] flex flex-col justify-between"
            >
              {/* Console Header Bar */}
              <div className="px-4 py-3 bg-[#FBF8F2] border-b border-[#E7DED3]/70 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#68645F] ml-1.5">
                    sys_architecture_topology.3d
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>99.99% Uptime Verified</span>
                </div>
              </div>

              {/* 3D Visual Preview */}
              <div className="relative aspect-[16/10] overflow-hidden sheen-overlay bg-[#F5F0E8]/40">
                <Image
                  src="/images/stats/stats_architecture_visual.png"
                  alt="CrestSoft High-Performance Cloud Architecture Topology"
                  fill
                  quality={92}
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />

                {/* Floating telemetry badge */}
                <div className="absolute bottom-4 left-4 z-10 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold shadow-md border border-white/10">
                    <Zap className="w-3 h-3 text-[#E85D3F]" />
                    <span>&lt;50ms Edge Routing</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold shadow-md border border-white/10">
                    <Activity className="w-3 h-3 text-emerald-400" />
                    <span>Realtime Telemetry</span>
                  </div>
                </div>

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 65%, rgba(21,21,21,0.25) 100%)",
                  }}
                />
              </div>

              {/* Architecture Infrastructure Footer Bar */}
              <div className="p-4 sm:p-5 bg-[#FAF7F2] border-t border-[#E7DED3]/70 flex flex-wrap items-center justify-between gap-3 text-xs text-[#68645F]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E85D3F]" />
                  <span className="font-semibold text-[#151515]">Enterprise Grade SLA</span>
                  <span className="hidden sm:inline text-[#a89a8a]">•</span>
                  <span className="hidden sm:inline">Multi-Zone Edge Deployment</span>
                </div>
                <span className="text-[11px] font-mono text-[#E85D3F] bg-white px-2.5 py-1 rounded-lg border border-[#E7DED3]">
                  Sub-second Cache Hit: 98.4%
                </span>
              </div>
            </TiltCard>
          </div>

          {/* 4 Verified Metric Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-4">
            {stats.map((item, i) => (
              <CounterItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
