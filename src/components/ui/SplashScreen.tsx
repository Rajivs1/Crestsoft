"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CrestSoftLogo from "@/assets/CrestsoftNewLogo.png";
import Splash3DCrest from "@/assets/Splash3DCrest.jpg";

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  // High-precision smooth progress counter from 0 to 100
  useEffect(() => {
    const start = performance.now();
    const duration = 2200; // 2.2s duration

    const frame = (now: number) => {
      const elapsed = now - start;
      const current = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(current);

      if (elapsed < duration) {
        requestAnimationFrame(frame);
      } else {
        setTimeout(() => setShowSplash(false), 260);
      }
    };

    const anim = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(anim);
  }, []);

  // Quick elegant transition overlay on internal route changes
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  const statusText =
    progress < 30
      ? "BOOTING QUANTUM ARCHITECTURE"
      : progress < 70
      ? "SYNCHRONIZING 60FPS EXPERIENCES"
      : "ALL SYSTEMS ONLINE";

  return (
    <>
      {/* ── 1. Cinematic 3D Splash Screen ── */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#07070A] text-white select-none"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.08,
              filter: "blur(14px)",
              transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
            }}
          >
            {/* Ambient Volumetric Coral / Amber Glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] pointer-events-none rounded-full"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(232,93,63,0.32) 0%, rgba(245,158,11,0.12) 35%, rgba(7,7,10,0) 70%)",
                filter: "blur(70px)",
              }}
            />

            {/* Subtle Starfield & Precision Grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Circular Radar Scan Wave behind the 3D Crest */}
            <motion.div
              animate={{ scale: [0.9, 1.4, 1.8], opacity: [0.6, 0.2, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
              className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-[#E85D3F]/40 pointer-events-none"
            />
            <motion.div
              animate={{ scale: [0.9, 1.5, 1.9], opacity: [0.5, 0.15, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 0.9 }}
              className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-[#F59E0B]/30 pointer-events-none"
            />

            {/* Central Animated 3D Masterpiece Composition */}
            <div className="relative z-10 flex flex-col items-center">
              {/* 3D Crest Holographic Display Frame */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0, y: 30 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  scale: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.7, ease: "easeOut" },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.9,
                  },
                }}
                className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-3xl p-1.5 bg-gradient-to-b from-white/25 via-white/10 to-[#E85D3F]/20 border border-white/20 shadow-[0_0_80px_rgba(232,93,63,0.45)] group"
              >
                {/* 3D Image Canvas */}
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-black/60 shadow-inner">
                  <Image
                    src={Splash3DCrest}
                    alt="CrestSoft 3D Emblem"
                    fill
                    className="object-cover scale-105"
                    priority
                  />

                  {/* Laser Scan Sweep Beam */}
                  <motion.div
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF7A59] to-transparent shadow-[0_0_12px_#FF7A59] pointer-events-none"
                  />

                  {/* Surface Glass Refraction Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                </div>

                {/* Floating Micro Status Pill */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#121217]/90 backdrop-blur-md border border-[#E85D3F]/40 shadow-lg flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-mono tracking-widest uppercase text-white/90">
                    CORE 3D ACTIVE
                  </span>
                </motion.div>
              </motion.div>

              {/* Brand Title with Official CrestSoft Logo & Glowing Shimmer */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-center mt-6"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E85D3F]" />
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/50">
                    DIGITAL PRODUCT STUDIO
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E85D3F]" />
                </div>

                <div className="flex items-center justify-center gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 relative rounded-lg p-1 bg-white/10 border border-white/20 shadow-md">
                    <Image
                      src={CrestSoftLogo}
                      alt="CrestSoft"
                      width={36}
                      height={36}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
                    CrestSoft
                  </h1>
                </div>
              </motion.div>

              {/* Laser Telemetry Progress Bar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col items-center gap-2 mt-6"
              >
                {/* Glowing Laser Progress Line */}
                <div className="w-56 sm:w-72 h-[3px] rounded-full bg-white/10 overflow-hidden relative shadow-inner">
                  <motion.div
                    className="h-full rounded-full relative"
                    style={{
                      width: `${progress}%`,
                      background:
                        "linear-gradient(90deg, #E85D3F 0%, #FF7A59 50%, #F59E0B 100%)",
                      boxShadow: "0 0 16px rgba(232, 93, 63, 0.8)",
                    }}
                    transition={{ ease: "linear" }}
                  >
                    {/* Glowing Leading Head Flare */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#ffffff]" />
                  </motion.div>
                </div>

                {/* Technical Telemetry Readout */}
                <div className="flex items-center justify-between w-56 sm:w-72 text-[10px] font-mono pt-1">
                  <span className="tracking-[0.15em] text-[9px] uppercase font-semibold text-white/45">
                    {statusText}
                  </span>
                  <span className="font-bold text-[#FF7A59] text-[11px] tabular-nums">
                    {progress}%
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Bottom Accreditation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none"
            >
              <p className="text-[10px] text-white/30 font-display tracking-[0.25em] uppercase">
                ENGINEERED FOR SPEED • CRAFTED FOR SCALE
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 2. Route Transition Overlay (when navigating pages) ── */}
      <AnimatePresence>
        {isNavigating && !showSplash && (
          <motion.div
            className="fixed inset-0 z-[9998] pointer-events-none flex items-center justify-center bg-[#07070A]/95 backdrop-blur-md"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: [0.9, 1.05, 1], opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-20 h-20 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full border border-[#E85D3F]/40 animate-ping pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl p-2 bg-white/10 border border-white/20 shadow-xl flex items-center justify-center">
                <Image
                  src={CrestSoftLogo}
                  alt=""
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 3. Main Application Content ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.6, delay: showSplash ? 0 : 0.05 }}
      >
        {children}
      </motion.div>
    </>
  );
}
