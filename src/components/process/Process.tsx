"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, PenTool, Code2, Rocket, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { TiltCard } from "@/components/ui/TiltCard";

const steps = [
  {
    n: "01",
    label: "Discover & Strategy",
    shortLabel: "Discover",
    desc: "We analyze your user workflows, benchmark competitors, and map out technical requirements.",
    deliverable: "Product Requirement Spec & Architecture Blueprint",
    timeline: "Week 1",
    accent: "#E85D3F",
    Icon: Search,
  },
  {
    n: "02",
    label: "Design & Experience",
    shortLabel: "Design",
    desc: "Crafting bespoke design systems, high-fidelity responsive UI, and fluid interactive prototypes.",
    deliverable: "Clickable High-Fi Prototype & Design System",
    timeline: "Week 2",
    accent: "#f97316",
    Icon: PenTool,
  },
  {
    n: "03",
    label: "Build & Architecture",
    shortLabel: "Build",
    desc: "Writing scalable, clean, type-safe code with modern frameworks, edge APIs, and rigorous tests.",
    deliverable: "Production-Grade Codebase & Automated CI/CD",
    timeline: "Week 3-4",
    accent: "#8b5cf6",
    Icon: Code2,
  },
  {
    n: "04",
    label: "Launch & Scale",
    shortLabel: "Launch",
    desc: "Deploying to globally distributed edge networks with 99.99% uptime monitoring and performance audits.",
    deliverable: "Live Cloud Deployment & Telemetry Dashboard",
    timeline: "Week 5+",
    accent: "#10b981",
    Icon: Rocket,
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const current = steps[activeStep];

  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-36 z-10 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full pointer-events-none -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(232,93,63,0.05) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="section-wrapper relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E85D3F]" />
            <span className="text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F] px-3 py-1 rounded-full border border-[#E85D3F]/20 bg-[#E85D3F]/5">
              Engineering Lifecycle
            </span>
          </div>
          <h2
            className="font-display text-[#151515] leading-[1.04]"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              letterSpacing: "-0.035em",
              fontWeight: 700,
            }}
          >
            From idea to impact.<br />
            <span className="gradient-text-shimmer inline-block">A proven 4-phase pipeline.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#68645F] leading-relaxed mt-4">
            Every product we engineer follows a disciplined, transparent execution cycle designed to eliminate risk and ship high-converting software on schedule.
          </p>
        </div>

        {/* Dual Column Layout: Interactive Stage Selector + 3D Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Step Selectors (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              const Icon = step.Icon;

              return (
                <div
                  key={step.n}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`group relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-white border-[#E85D3F]/40 shadow-[0_8px_30px_rgba(232,93,63,0.12)] scale-[1.01]"
                      : "bg-white/60 hover:bg-white border-[#E7DED3]/80 hover:border-[#E7DED3] shadow-xs"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Step Icon Badge */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isSelected
                          ? "bg-[#E85D3F] text-white border-[#E85D3F] shadow-sm shadow-[#E85D3F]/30"
                          : "bg-[#FBF8F2] text-[#68645F] border-[#E7DED3] group-hover:text-[#151515]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Step Text Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-mono font-bold ${
                              isSelected ? "text-[#E85D3F]" : "text-[#a89a8a]"
                            }`}
                          >
                            PHASE {step.n}
                          </span>
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#FCFAF6] border border-[#E7DED3] text-[#68645F]">
                            {step.timeline}
                          </span>
                        </div>
                        {isSelected && (
                          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-emerald-600 font-semibold uppercase tracking-wider">
                            <CheckCircle2 className="w-3 h-3" />
                            Active
                          </span>
                        )}
                      </div>

                      <h3
                        className={`font-display text-base sm:text-lg font-bold transition-colors ${
                          isSelected
                            ? "text-[#151515]"
                            : "text-[#3a3734] group-hover:text-[#151515]"
                        }`}
                      >
                        {step.label}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed mt-1 line-clamp-2">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Active bottom highlight bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeProcessIndicator"
                      className="absolute bottom-0 left-5 right-5 h-[2px] bg-gradient-to-r from-[#E85D3F] to-[#C9472D]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: 3D Visual Card & Active Deliverables (7 cols) */}
          <div className="lg:col-span-7">
            <TiltCard
              maxTilt={5}
              glareOpacity={0.12}
              scaleOnHover={1.01}
              liftY={-4}
              className="card-light rounded-3xl overflow-hidden border border-[#E7DED3] bg-white/95 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
            >
              {/* Header Bar */}
              <div className="px-5 py-3.5 bg-[#FBF8F2] border-b border-[#E7DED3]/70 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#68645F] ml-2">
                    pipeline_architecture.3d
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#E85D3F]">
                  <span className="w-2 h-2 rounded-full bg-[#E85D3F] animate-ping" />
                  <span>Phase {current.n} In Focus</span>
                </div>
              </div>

              {/* 3D Workflow Image Container with sheen and overlays */}
              <div className="relative aspect-[16/10] overflow-hidden sheen-overlay bg-[#F5F0E8]/40">
                <Image
                  src="/images/process/process_workflow_3d.png"
                  alt="CrestSoft 4-Phase 3D Software Engineering Lifecycle"
                  fill
                  quality={92}
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                {/* Floating HUD Badge overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-white text-xs font-semibold shadow-lg border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E85D3F]" />
                    <span>Focus: {current.shortLabel}</span>
                  </div>
                </div>

                {/* Subtle vignette gradient */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, rgba(21,21,21,0.2) 100%)",
                  }}
                />
              </div>

              {/* Deliverable Footer Highlight */}
              <div className="p-5 sm:p-6 bg-gradient-to-b from-white to-[#FAF6F0] border-t border-[#E7DED3]/70">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.n}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#a89a8a] block mb-1">
                        Key Deliverable & Milestone
                      </span>
                      <p className="font-display font-bold text-sm sm:text-base text-[#151515]">
                        {current.deliverable}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E7DED3] text-xs font-semibold text-[#151515] shadow-xs shrink-0">
                      <span>Timeline: {current.timeline}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E85D3F]" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
