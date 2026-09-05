"use client";
import { motion } from "framer-motion";
import Image from "next/image";

/* Floating service label badges around the main visual */
const floatingLabels = [
  { text: "Web Apps", sub: "Scalable platforms", x: "right-0 top-4", delay: 0.8 },
  { text: "Mobile Apps", sub: "Real experiences", x: "left-8 top-1/3", delay: 1.0 },
  { text: "Cloud & DevOps", sub: "Reliable infrastructure", x: "left-0 bottom-16", delay: 1.2 },
  { text: "Web Development", sub: "High performance", x: "right-4 bottom-8", delay: 1.4 },
];

export function HeroVisual() {
  return (
    <div className="relative w-full min-h-[480px] flex items-center justify-center">
      {/* Ambient glow orbs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Main laptop mockup */}
      <motion.div
        className="relative z-10 w-full max-w-lg"
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ perspective: "1200px" }}
      >
        {/* Laptop frame */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10"
          style={{ border: "1px solid rgba(99,102,241,0.15)", background: "linear-gradient(135deg, rgba(10,10,30,0.9), rgba(15,15,40,0.95))" }}>
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 h-10 border-b border-white/[0.06]" style={{ background: "rgba(255,255,255,0.02)" }}>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-3 h-5 rounded-md flex items-center px-2.5 gap-1.5" style={{ background: "rgba(255,255,255,0.04)" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
              <span className="text-[9px] font-mono text-white/20">app.crestsoft.in</span>
            </div>
          </div>
          {/* Dashboard image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=750&fit=crop&q=85"
              alt="CrestSoft dashboard preview"
              fill
              className="object-cover opacity-90"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08), transparent 50%)" }} />
          </div>
        </div>

        {/* Laptop base/reflection */}
        <div className="h-3 mx-8 rounded-b-xl" style={{ background: "linear-gradient(180deg, rgba(99,102,241,0.1), transparent)" }} />
      </motion.div>

      {/* Floating glass label cards */}
      {floatingLabels.map((label, i) => (
        <motion.div
          key={label.text}
          className={`absolute ${label.x} z-20 hidden lg:block`}
          initial={{ opacity: 0, scale: 0.9, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: label.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass px-4 py-2.5 shadow-xl shadow-black/20"
            style={{ animation: `floatLabel ${6 + i}s ease-in-out ${i * 0.5}s infinite` }}>
            <p className="text-[11px] font-display font-semibold text-brand-text">{label.text}</p>
            <p className="text-[9px] text-brand-muted">{label.sub}</p>
          </div>
        </motion.div>
      ))}

      {/* CrestSoft glass cube - brand element */}
      <motion.div
        className="absolute top-2 right-16 z-20 hidden lg:block"
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.15))",
            border: "1px solid rgba(99,102,241,0.3)",
            backdropFilter: "blur(12px)",
            animation: "floatLabel 8s ease-in-out infinite",
          }}>
          <span className="text-white font-display font-bold text-lg">C</span>
        </div>
      </motion.div>

      {/* Orbital ring */}
      <motion.div
        className="absolute inset-0 z-0 hidden lg:flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <div className="w-[500px] h-[500px] rounded-full border border-indigo-400/30" style={{ animation: "spin 40s linear infinite" }} />
        <div className="absolute w-[380px] h-[380px] rounded-full border border-violet-400/20" style={{ animation: "spin 30s linear infinite reverse" }} />
      </motion.div>

      <style>{`
        @keyframes floatLabel {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
