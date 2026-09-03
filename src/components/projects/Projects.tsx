"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectMockup } from "./ProjectMockup";

export function Projects() {
  return (
    <section className="py-24 md:py-32 border-t border-brand-border/50 bg-brand-bg">
      <div className="section-wrapper">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-brand-accent" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-indigo-400">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Selected work.</h2>
          </div>
          <Link href="/work" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-border text-brand-muted text-sm font-semibold hover:border-brand-accent/40 hover:text-white transition self-start">
            View all work <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {projects.map((proj, i) => {
            const isLast = i === projects.length - 1;
            const reversed = i % 2 !== 0;

            if (isLast) {
              return (
                <motion.div key={proj.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
                  className="rounded-3xl overflow-hidden border border-brand-border/50 bg-brand-surface">
                  <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-border/50">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono text-brand-subtle">Project {proj.number}</span>
                        <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-brand-border text-brand-muted">{proj.category}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">{proj.name}</h3>
                      <p className="text-brand-muted text-sm max-w-md">{proj.description}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tags.map((t) => (
                          <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded-md border" style={{ color: proj.accentColor, borderColor: `${proj.accentColor}30`, background: `${proj.accentColor}10` }}>{t}</span>
                        ))}
                      </div>
                      <a href={proj.url} className="inline-flex items-center gap-1.5 text-sm font-semibold transition" style={{ color: proj.accentColor }}>
                        View Project <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                  <div className="h-64 md:h-[380px]">
                    <ProjectMockup projectId={proj.id} accentColor={proj.accentColor} />
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div key={proj.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${reversed ? "direction-rtl" : ""}`}
                style={reversed ? { direction: "rtl" } : undefined}
              >
                <div className="h-56 md:h-72 lg:h-[380px]" style={{ direction: "ltr" }}>
                  <ProjectMockup projectId={proj.id} accentColor={proj.accentColor} />
                </div>
                <div className="space-y-5" style={{ direction: "ltr" }}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-brand-subtle">Project {proj.number}</span>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full border" style={{ color: proj.accentColor, borderColor: `${proj.accentColor}30`, background: `${proj.accentColor}10` }}>{proj.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{proj.name}</h3>
                  <p className="text-brand-muted leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((t) => (
                      <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded-md border" style={{ color: proj.accentColor, borderColor: `${proj.accentColor}30`, background: `${proj.accentColor}10` }}>{t}</span>
                    ))}
                  </div>
                  <a href={proj.url} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition" style={{ color: proj.accentColor, background: `${proj.accentColor}12`, border: `1px solid ${proj.accentColor}25` }}>
                    View Project <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
