"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative w-full min-h-[460px] flex items-center justify-center">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-violet-500/15 rounded-full blur-[80px] pointer-events-none animate-glow" style={{ animationDelay: "1.5s" }} />

      {/* Main dashboard image */}
      <motion.div
        className="relative z-10 w-full animate-float"
        initial={{ opacity: 0, y: 32, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="gradient-border glow-accent">
          <div className="rounded-2xl overflow-hidden bg-brand-surface">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 h-11 bg-white/[0.03] border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 mx-4 h-6 rounded-lg bg-white/[0.05] flex items-center px-3 gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                <span className="text-[10px] font-mono text-white/25 tracking-wide">app.crestsoft.in</span>
              </div>
            </div>
            {/* Screenshot */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=750&fit=crop&q=85"
                alt="CrestSoft dashboard preview"
                fill
                className="object-cover opacity-80"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay for dark feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/10 to-transparent" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating stat cards */}
      <motion.div
        className="absolute -bottom-4 -right-4 z-20 flex flex-col gap-2.5 animate-float-slow"
        initial={{ opacity: 0, x: 24, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        {[
          { label: "Build time", value: "1.2s", dot: "bg-indigo-500" },
          { label: "Lighthouse", value: "100", dot: "bg-emerald-500" },
          { label: "Uptime", value: "99.9%", dot: "bg-amber-500" },
        ].map((s) => (
          <div key={s.label} className="glass-card px-4 py-2.5 flex items-center gap-3 shadow-2xl shadow-black/40">
            <div className={`w-2 h-2 rounded-full ${s.dot} animate-pulse`} />
            <span className="text-[11px] font-medium text-zinc-500">{s.label}</span>
            <span className="text-[13px] font-bold text-white ml-auto">{s.value}</span>
          </div>
        ))}
      </motion.div>

      {/* Deploy badge */}
      <motion.div
        className="absolute top-8 -left-4 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <div className="glass-card px-4 py-2 flex items-center gap-2 shadow-xl shadow-black/30">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-semibold text-zinc-400">Production live</span>
        </div>
      </motion.div>

      {/* Tech badge */}
      <motion.div
        className="absolute top-24 -right-2 z-20"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="glass-card px-3 py-1.5 flex items-center gap-2 shadow-lg">
          <span className="text-[10px] font-mono text-indigo-400">Next.js + TypeScript</span>
        </div>
      </motion.div>
    </div>
  );
}
