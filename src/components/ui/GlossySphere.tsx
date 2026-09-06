"use client";
import { motion } from "framer-motion";

/**
 * Iridescent glossy sphere using layered CSS radial-gradients.
 * Mimics a chrome/glass marble with purple–blue–pink reflections,
 * a bright specular highlight, and a subtle animated rotation.
 */
export function GlossySphere({
  size = 80,
  className = "",
  /** Primary deep color (bottom / core) */
  color1 = "#5b21b6",
  /** Secondary highlight color (right / top) */
  color2 = "#3b82f6",
  /** Tertiary reflection color (rim / left) */
  color3 = "#ec4899",
  speed = 12,
}: {
  size?: number;
  className?: string;
  color1?: string;
  color2?: string;
  color3?: string;
  /** Rotation cycle duration in seconds */
  speed?: number;
}) {
  return (
    <motion.div
      className={`rounded-full pointer-events-none relative ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: [0, 360] }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Base iridescent gradient */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            radial-gradient(ellipse 55% 45% at 35% 30%,
              rgba(255,255,255,0.85) 0%,
              rgba(255,255,255,0.3) 20%,
              transparent 50%),
            radial-gradient(ellipse 70% 60% at 65% 70%,
              ${color1}ee 0%,
              ${color1}88 40%,
              transparent 75%),
            radial-gradient(ellipse 80% 80% at 70% 25%,
              ${color2}cc 0%,
              ${color2}44 50%,
              transparent 80%),
            radial-gradient(ellipse 60% 70% at 25% 75%,
              ${color3}aa 0%,
              ${color3}33 50%,
              transparent 75%),
            radial-gradient(ellipse 90% 90% at 50% 50%,
              ${color1} 0%,
              ${color2} 50%,
              ${color3} 100%)
          `,
          boxShadow: `
            inset 0 ${size * 0.04}px ${size * 0.1}px rgba(255,255,255,0.4),
            inset 0 -${size * 0.06}px ${size * 0.15}px rgba(0,0,0,0.25),
            0 ${size * 0.08}px ${size * 0.3}px ${color1}40,
            0 ${size * 0.04}px ${size * 0.12}px rgba(0,0,0,0.1)
          `,
        }}
      />

      {/* Specular highlight — bright spot */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.35,
          height: size * 0.22,
          top: size * 0.12,
          left: size * 0.18,
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
          filter: `blur(${size * 0.02}px)`,
        }}
      />

      {/* Secondary highlight — bottom-right cyan shimmer */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.3,
          height: size * 0.18,
          bottom: size * 0.18,
          right: size * 0.12,
          background: `radial-gradient(ellipse, ${color2}55 0%, transparent 70%)`,
          filter: `blur(${size * 0.03}px)`,
        }}
      />

      {/* Rim light — edge glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            radial-gradient(ellipse 100% 100% at 20% 80%,
              ${color3}30 0%, transparent 50%),
            radial-gradient(ellipse 100% 100% at 80% 20%,
              ${color2}25 0%, transparent 50%)
          `,
        }}
      />
    </motion.div>
  );
}
