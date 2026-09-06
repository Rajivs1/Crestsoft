"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import HeroImg from "@/assets/HeroSection/01_crestsoft-hero-3d.png";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 40, stiffness: 90 };
  const imgX = useSpring(
    useTransform(mouseX, [-1, 1], [-10, 10]),
    springConfig
  );
  const imgY = useSpring(
    useTransform(mouseY, [-1, 1], [-8, 8]),
    springConfig
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isMobile || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX.set((e.clientX - cx) / (rect.width / 2));
      mouseY.set((e.clientY - cy) / (rect.height / 2));
    },
    [isMobile, mouseX, mouseY]
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, handleMouseMove]);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center lg:justify-end"
    >
      <motion.div
        className="relative z-10 w-full lg:w-[115%] lg:-mr-[15%]"
        style={isMobile ? {} : { x: imgX, y: imgY }}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          animate={
            prefersReducedMotion ? {} : { y: [0, -6, 0] }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={HeroImg}
            alt="CrestSoft platform — laptop and smartphone with modern digital experience, floating UI cards, glass cube, and warm copper lighting"
            className="w-full h-auto object-contain"
            priority
            placeholder="blur"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
