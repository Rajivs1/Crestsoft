"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import LaptopImg from "@/assets/LaptopImage.png";

export function HeroVisual() {
  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Ambient glow behind laptop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-60 h-60 bg-violet-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Laptop image */}
      <motion.div
        className="relative z-10 w-full"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={LaptopImg}
          alt="CrestSoft platform preview on laptop"
          className="w-full h-auto object-contain drop-shadow-2xl"
          priority
          placeholder="blur"
        />
      </motion.div>
    </div>
  );
}
