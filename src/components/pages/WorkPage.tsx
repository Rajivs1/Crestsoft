"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectMockup } from "@/components/projects/ProjectMockup";
import Link from "next/link";

export function WorkPage() {
  return (
    <div className="bg-[#09090f] min-h-screen">
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(99,102,241,0.14) 0%, transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="flex items-center gap-3 mb-6"><div className="w-5 h-px bg-brand" /><span className="text-xs font-semibold tracking-widest uppercase text-brand-light">Portfolio</span></div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">Selected <span className="gradient-text">work.</span></h1>
            <p className="text-lg text-white/50 max-w-xl leading-relaxed">A look at the products and platforms we&apos;ve built for clients across different industries.</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-28">
          {projects.map((proj, i) => (
            <motion.div key={proj.id} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="h-72 md:h-96 lg:h-[420px]">
                <ProjectMockup projectId={proj.id} accentColor={proj.accentColor} />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-white/25">Project {proj.number}</span>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full border" style={{ color: proj.accentColor, background: `${proj.accentColor}14`, borderColor: `${proj.accentColor}28` }}>{proj.category}</span>
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">{proj.name}</h2>
                <p className="text-white/45 leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg text-[11px] font-medium border" style={{ color: proj.accentColor, background: `${proj.accentColor}15`, borderColor: `${proj.accentColor}30` }}>{t}</span>
                  ))}
                </div>
                <Link href={proj.url} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
                  style={{ background: `${proj.accentColor}15`, color: proj.accentColor, border: `1px solid ${proj.accentColor}28` }}>
                  View Project <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
