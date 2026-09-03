"use client";
import { motion } from "framer-motion";

const lines = [
  { tokens: [{ t: "const ", c: "text-indigo-400" }, { t: "app", c: "text-zinc-200" }, { t: " = ", c: "text-zinc-500" }, { t: "await ", c: "text-indigo-400" }, { t: "CrestSoft", c: "text-indigo-300" }, { t: ".build({", c: "text-zinc-300" }] },
  { tokens: [{ t: "  stack", c: "text-sky-300" }, { t: ": ", c: "text-zinc-500" }, { t: '["Next.js", "TypeScript"]', c: "text-emerald-300" }, { t: ",", c: "text-zinc-400" }] },
  { tokens: [{ t: "  deploy", c: "text-sky-300" }, { t: ": ", c: "text-zinc-500" }, { t: '"edge"', c: "text-emerald-300" }, { t: ",", c: "text-zinc-400" }] },
  { tokens: [{ t: "  scale", c: "text-sky-300" }, { t: ": ", c: "text-zinc-500" }, { t: "true", c: "text-pink-300" }] },
  { tokens: [{ t: "});", c: "text-zinc-300" }] },
  { tokens: [] },
  { tokens: [{ t: "// ✓ ", c: "text-emerald-400" }, { t: "Deployed to production", c: "text-emerald-300/70" }] },
  { tokens: [{ t: "// ✓ ", c: "text-emerald-400" }, { t: "99.9% uptime guaranteed", c: "text-emerald-300/70" }] },
];

export function HeroVisual() {
  return (
    <div className="relative w-full min-h-[420px] flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-accent/15 via-transparent to-transparent rounded-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 55% 50%, rgba(99,102,241,0.15), transparent 70%)" }} />

      {/* Terminal window */}
      <motion.div
        className="relative z-10 w-full animate-float"
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl shadow-black/60">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-5 h-11 bg-white/[0.03] border-b border-white/[0.06]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="flex-1 text-center text-[11px] font-mono text-white/20">crestsoft — build.ts</span>
          </div>
          {/* Code */}
          <div className="p-5 sm:p-6 font-mono text-[13px] leading-7">
            {lines.map((line, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.07, duration: 0.35 }}>
                <span className="inline-block w-6 text-right mr-5 text-[11px] text-white/15 select-none">{i + 1}</span>
                {line.tokens.map((tk, j) => (
                  <span key={j} className={tk.c}>{tk.t}</span>
                ))}
                {line.tokens.length === 0 && <span>&nbsp;</span>}
              </motion.div>
            ))}
            <div className="flex items-center mt-1">
              <span className="inline-block w-6 mr-5" />
              <motion.span
                className="w-2 h-5 rounded-sm bg-indigo-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.1, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stat cards */}
      <motion.div
        className="absolute -bottom-3 -right-2 z-20 flex flex-col gap-2 animate-float-slow"
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.6 }}
      >
        {[
          { label: "Build time", value: "1.2s", color: "bg-indigo-500" },
          { label: "Lighthouse", value: "100", color: "bg-emerald-500" },
          { label: "Uptime", value: "99.9%", color: "bg-amber-500" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-zinc-950/95 border border-white/10 shadow-lg backdrop-blur-sm">
            <div className={`w-2 h-2 rounded-full ${s.color} animate-pulse`} />
            <span className="text-[11px] font-medium text-zinc-500">{s.label}</span>
            <span className="text-[13px] font-bold text-zinc-200 ml-auto">{s.value}</span>
          </div>
        ))}
      </motion.div>

      {/* Deploy badge */}
      <motion.div
        className="absolute top-6 -left-3 z-20"
        initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, duration: 0.5 }}
      >
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-950/95 border border-brand-accent/30 shadow-lg backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-semibold text-zinc-400">Production live</span>
        </div>
      </motion.div>
    </div>
  );
}
