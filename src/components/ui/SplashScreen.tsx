"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CrestSoftLogo from "@/assets/CrestsoftNewLogo.png";

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  // Initial splash on first load
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Page transition splash on navigation
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Initial splash screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ background: "#FCFAF6" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Warm ambient glow */}
            <div
              className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(232,93,63,0.08) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />

            <div className="relative flex flex-col items-center gap-6">
              {/* Logo animation */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
              >
                <Image
                  src={CrestSoftLogo}
                  alt="CrestSoft"
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                  priority
                />
              </motion.div>

              {/* Text */}
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-2xl font-display font-bold tracking-tight text-[#151515]">
                  CrestSoft
                </span>
              </motion.div>

              {/* Animated loading line */}
              <motion.div
                className="w-32 h-[2px] rounded-full overflow-hidden bg-[#E7DED3]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #E85D3F, #C9472D)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    delay: 0.7,
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </motion.div>

              {/* Tagline */}
              <motion.p
                className="text-xs text-[#a89a8a] tracking-widest uppercase font-display"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Technology Built With Purpose
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page transition overlay */}
      <AnimatePresence>
        {isNavigating && !showSplash && (
          <motion.div
            className="fixed inset-0 z-[9998] pointer-events-none flex items-center justify-center"
            style={{ background: "#FCFAF6" }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={CrestSoftLogo}
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content — hidden during splash */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.5, delay: showSplash ? 0 : 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
}
