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
          <div className="rounded-2xl overflow-hidden bg-brand-surface shadow-2xl">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 h-11 bg-brand-border/10 border-b border-brand-border/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 mx-4 h-6 rounded-lg bg-brand-border/20 flex items-center px-3 gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                <span className="text-[10px] font-mono text-brand-subtle tracking-wide">app.crestsoft.in</span>
              </div>
            </div>
            {/* Screenshot */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=750&fit=crop&q=85"
                alt="CrestSoft dashboard preview"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
