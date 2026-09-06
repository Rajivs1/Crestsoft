"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import HeroImg from "@/assets/HeroSection/01_crestsoft-hero-3d.png";
import NewSphere from "@/assets/NewSphere.png";

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imgParallax = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textParallax = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const springCfg = { damping: 50, stiffness: 100 };
  const imgMoveX = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), springCfg);
  const imgMoveY = useSpring(useTransform(mouseY, [-1, 1], [-6, 6]), springCfg);

  const handleMouse = useCallback((e: MouseEvent) => {
    if (!isDesktop) return;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    mouseX.set((e.clientX - cx) / cx);
    mouseY.set((e.clientY - cy) / cy);
  }, [isDesktop, mouseX, mouseY]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const h = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [isDesktop, handleMouse]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden z-10 pt-20 lg:pt-0">
      {/* Warm background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "#F5F0E8" }} />

      {/* Animated warm glow orbs */}
      <motion.div
        className="absolute pointer-events-none hidden md:block"
        style={{ top: "5%", right: "15%", width: "40vw", height: "40vw", maxWidth: 500, maxHeight: 500 }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, rgba(232,93,63,0.15) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </motion.div>

      {/* ── Desktop: Hero image full-bleed right ── */}
      <motion.div className="absolute inset-0 pointer-events-none hidden lg:block" style={{ y: imgParallax }}>
        <motion.div className="absolute top-0 right-0 bottom-0 w-[62%]" style={{ x: imgMoveX, y: imgMoveY }}>
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-full"
          >
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="relative w-full h-full">
              <Image src={HeroImg} alt="" fill className="object-contain object-right-bottom" priority placeholder="blur" sizes="62vw" aria-hidden="true" />
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="absolute top-0 bottom-0 right-[30%] w-[35%]" style={{ background: "linear-gradient(90deg, #F5F0E8 0%, #F5F0E8 20%, transparent 100%)" }} />
      </motion.div>

      {/* Handwriting top-right */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-24 right-[18%] hidden xl:block z-20 pointer-events-none"
      >
        <p className="text-base text-[#151515]/60 leading-snug text-right" style={{ fontFamily: "var(--font-hand), cursive", fontStyle: "italic" }}>
          Turning<br />Ideas into<br />Real Products
        </p>
        <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="mt-1 ml-auto">
          <motion.path d="M2 2c10 8 25 10 35 5" stroke="#151515" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.5, duration: 0.8 }} />
          <motion.path d="M33 3l5 4-6 2" stroke="#151515" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.35"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2, duration: 0.4 }} />
        </svg>
      </motion.div>

      {/* ── Desktop content ── */}
      <motion.div className="section-wrapper relative z-10 hidden lg:flex items-center min-h-screen" style={{ y: textParallax }}>
        <div className="w-full max-w-[45%] py-32">
          <motion.div variants={fade} custom={0.1} initial="hidden" animate="show">
            <span className="text-[10px] font-display font-medium tracking-[0.25em] uppercase mb-7 block text-[#a89a8a]">
              Technology Built With Purpose
            </span>
          </motion.div>

          <motion.h1 variants={fade} custom={0.25} initial="hidden" animate="show"
            className="font-display mb-6 leading-[1.02]"
            style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)", letterSpacing: "-0.04em", fontWeight: 700, color: "#151515" }}>
            Build. Scale.<br /><span className="gradient-text">Move Forward.</span>
          </motion.h1>

          <motion.p variants={fade} custom={0.4} initial="hidden" animate="show"
            className="text-[17px] leading-relaxed mb-10 max-w-sm text-[#68645F]">
            We build modern digital products for businesses ready to grow.
          </motion.p>

          <motion.div variants={fade} custom={0.55} initial="hidden" animate="show" className="flex flex-wrap gap-3.5 mb-10">
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="btn-primary px-7 py-3.5 text-sm group">
                Start a Project
                <motion.span className="inline-block" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/work" className="btn-outline-dark px-7 py-3.5 text-sm inline-flex items-center gap-2">
                <Play className="w-3.5 h-3.5 fill-current" /> View Our Work
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={fade} custom={0.65} initial="hidden" animate="show" className="flex items-center gap-3 text-xs text-[#a89a8a] mb-12">
            {["Web", "Mobile", "Cloud", "Custom Software"].map((s, i) => (
              <motion.span key={s} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}>
                {i > 0 && <span className="inline-block w-px h-3 bg-[#E7DED3] mr-3" />}{s}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={fade} custom={0.8} initial="hidden" animate="show" className="flex items-center gap-3">
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
              <Image src={NewSphere} alt="" width={40} height={40} className="w-10 h-10 object-contain" aria-hidden="true" />
            </motion.div>
            <p className="text-sm text-[#151515]/50 leading-snug" style={{ fontFamily: "var(--font-hand), cursive", fontStyle: "italic" }}>
              Ideas<br />Products<br />Progress
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Mobile / Tablet layout ── */}
      <div className="lg:hidden relative z-10">
        <div className="section-wrapper pt-6 pb-4 md:pt-4 md:pb-2">
          {/* Tablet: side-by-side */}
          <div className="md:grid md:grid-cols-[1fr_1.1fr] md:gap-6 md:items-center md:min-h-[calc(100vh-5rem)]">
            <div>
              <motion.div variants={fade} custom={0.1} initial="hidden" animate="show">
                <span className="text-[9px] sm:text-[10px] font-display font-medium tracking-[0.25em] uppercase mb-4 md:mb-5 block text-[#a89a8a]">
                  Technology Built With Purpose
                </span>
              </motion.div>

              <motion.h1 variants={fade} custom={0.2} initial="hidden" animate="show"
                className="font-display mb-3 md:mb-4 leading-[1.05]"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", fontWeight: 700, color: "#151515" }}>
                Build. Scale.<br /><span className="gradient-text">Move Forward.</span>
              </motion.h1>

              <motion.p variants={fade} custom={0.3} initial="hidden" animate="show"
                className="text-sm sm:text-base leading-relaxed mb-5 max-w-sm text-[#68645F]">
                We build modern digital products for businesses ready to grow.
              </motion.p>

              <motion.div variants={fade} custom={0.4} initial="hidden" animate="show" className="flex flex-wrap gap-3 mb-5">
                <Link href="/contact" className="btn-primary px-5 sm:px-6 py-2.5 sm:py-3 text-sm">
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/work" className="btn-outline-dark px-5 sm:px-6 py-2.5 sm:py-3 text-sm inline-flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 fill-current" /> View Our Work
                </Link>
              </motion.div>

              <motion.div variants={fade} custom={0.45} initial="hidden" animate="show" className="flex items-center gap-2 text-[10px] text-[#a89a8a]">
                <span>Web</span><span className="w-px h-2.5 bg-[#E7DED3]" />
                <span>Mobile</span><span className="w-px h-2.5 bg-[#E7DED3]" />
                <span>Cloud</span><span className="w-px h-2.5 bg-[#E7DED3]" />
                <span>Custom Software</span>
              </motion.div>
            </div>

            {/* Tablet: image in right column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden md:block"
            >
              <Image
                src={HeroImg}
                alt="CrestSoft platform"
                className="w-full h-auto object-contain"
                priority
                placeholder="blur"
                sizes="55vw"
              />
            </motion.div>
          </div>
        </div>

        {/* Mobile-only: full-width hero image below text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full overflow-hidden md:hidden mt-2"
        >
          <Image
            src={HeroImg}
            alt="CrestSoft platform"
            className="w-full h-auto object-contain"
            priority
            placeholder="blur"
            sizes="100vw"
          />
        </motion.div>
      </div>

      {/* Bottom-right text — desktop only */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute bottom-6 right-8 z-20 hidden lg:block">
        <span className="text-[9px] font-display font-medium tracking-[0.2em] uppercase text-[#a89a8a] leading-relaxed block text-right">
          Simple Ideas<br />Powerful Solutions
        </span>
      </motion.div>
    </section>
  );
}
