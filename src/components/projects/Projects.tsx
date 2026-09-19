"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Globe, Lock, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { TiltCard } from "@/components/ui/TiltCard";

const filterTabs = [
  { id: "all", label: "All Projects" },
  { id: "Logistics", label: "Logistics Platform" },
  { id: "Hospitality", label: "Hospitality & Dining" },
  { id: "SaaS", label: "Cloud & SaaS" },
];

function ProjectCard({ proj, index }: { proj: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="h-full"
    >
      <a href={proj.url} className="group block h-full">
        <TiltCard
          maxTilt={7}
          glareOpacity={0.15}
          scaleOnHover={1.02}
          liftY={-8}
          className="card-light rounded-3xl overflow-hidden border border-[#E7DED3]/80 bg-white/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] group-hover:shadow-[0_24px_60px_rgba(232,93,63,0.14)] group-hover:border-[#E85D3F]/40 transition-all duration-300"
        >
          {/* Browser Mockup Window Container */}
          <div className="p-3 sm:p-4 pb-0">
            <div
              style={{ transform: "translateZ(20px)" }}
              className="rounded-xl sm:rounded-2xl overflow-hidden border border-[#E7DED3] bg-[#F5F0E8]/60 shadow-sm"
            >
              {/* macOS Browser Window Header */}
              <div className="px-3.5 py-2.5 bg-[#FBF8F2] border-b border-[#E7DED3]/70 flex items-center justify-between gap-2">
                {/* Traffic Light Dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/90 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/90 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/90 inline-block" />
                </div>

                {/* URL Address Bar Pill */}
                <div className="px-3 py-0.5 rounded-full bg-white/80 border border-[#E7DED3]/60 text-[10px] text-[#68645F] flex items-center gap-1.5 font-mono shadow-xs max-w-[180px] sm:max-w-[220px] truncate">
                  <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                  <span className="truncate">https://{proj.domain}</span>
                </div>

                {/* Status pill */}
                <div className="hidden sm:flex items-center gap-1 text-[10px] text-[#a89a8a] font-display uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Active</span>
                </div>
              </div>

              {/* Project Image Preview with sheen sweep */}
              <div className="relative aspect-[16/10] overflow-hidden sheen-overlay bg-[#e7ded3]/30">
                {/* Key Metric Highlight Badge with high Z-depth */}
                <div
                  style={{ transform: "translateZ(35px)" }}
                  className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151515]/85 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide shadow-md border border-white/10"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E85D3F] animate-pulse" />
                  <span>{proj.metrics}</span>
                </div>

                {/* External link hover indicator with Z-depth */}
                <div
                  style={{ transform: "translateZ(30px)" }}
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md text-[#151515]"
                >
                  <ExternalLink className="w-4 h-4" />
                </div>

                <Image
                  src={proj.image}
                  alt={`${proj.name} live application preview`}
                  fill
                  quality={92}
                  priority={index === 0}
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 65%, rgba(21,21,21,0.2) 100%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Card Content & Details with Z-depth */}
          <div style={{ transform: "translateZ(18px)" }} className="p-5 sm:p-6 pt-4 sm:pt-5">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <span className="text-[10px] font-display font-semibold uppercase tracking-widest text-[#E85D3F] block mb-1">
                  {proj.category}
                </span>
                <h3 className="font-display text-[#151515] font-bold text-lg sm:text-xl tracking-tight group-hover:text-[#E85D3F] transition-colors duration-300">
                  {proj.name}
                </h3>
              </div>
              <div className="w-9 h-9 rounded-full flex items-center justify-center border border-[#E7DED3] group-hover:border-[#E85D3F] group-hover:bg-[#E85D3F] group-hover:text-white transition-all duration-300 shrink-0 text-[#151515] shadow-xs">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed mb-4">
              {proj.description}
            </p>

            {/* Technology Pills */}
            {proj.tags && proj.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E7DED3]/60">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[10px] font-medium text-[#5c5750] bg-[#FCFAF6] border border-[#E7DED3]/80 group-hover:border-[#E85D3F]/30 group-hover:bg-white transition-all shadow-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </TiltCard>
      </a>
    </motion.div>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.filter === activeFilter);

  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-36 z-10 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,93,63,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="section-wrapper relative z-10">
        {/* Section Header with Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-lg"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#E85D3F]" />
              <span className="text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F] px-3 py-1 rounded-full border border-[#E85D3F]/20 bg-[#E85D3F]/5">
                Case Studies
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
              Proven Work.<br />
              <span className="gradient-text-shimmer inline-block">Real Impact.</span>
            </h2>
          </motion.div>

          {/* Interactive Filter Pills with animated layoutId */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/80 border border-[#E7DED3] backdrop-blur-md shadow-xs">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive ? "text-white" : "text-[#68645F] hover:text-[#151515]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E85D3F] to-[#C9472D] shadow-sm shadow-[#E85D3F]/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with Smooth Layout Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, i) => (
              <ProjectCard key={proj.id} proj={proj} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA to Work archive */}
        <div className="mt-14 text-center">
          <Link
            href="/work"
            className="btn-outline-dark px-8 py-3.5 text-xs font-semibold inline-flex items-center gap-2.5 group"
          >
            <span>Explore All 20+ Production Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#E85D3F]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
