"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

function Tag({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="text-[11px] font-medium px-2.5 py-1 rounded-lg border backdrop-blur-sm"
      style={{ color, borderColor: `${color}30`, background: `${color}12` }}
    >
      {label}
    </span>
  );
}

function ProjectImage({ src, alt, accent }: { src: string; alt: string; accent: string }) {
  return (
    <div className="relative group/img overflow-hidden rounded-2xl border border-white/[0.08] bg-brand-surface">
      {/* Gradient border glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{ boxShadow: `0 0 60px -15px ${accent}40, inset 0 0 60px -15px ${accent}15` }}
      />
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover/img:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent" />
        {/* Accent tint */}
        <div className="absolute inset-0 opacity-20 mix-blend-color" style={{ background: accent }} />
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section className="py-28 md:py-36 border-t border-brand-border/50 bg-brand-bg relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-wrapper relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-brand-accent" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-indigo-400">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Selected work.</h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-border text-brand-muted text-sm font-semibold hover:border-brand-accent/40 hover:text-white hover:bg-brand-accent/5 transition self-start"
          >
            View all work <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((proj, i) => {
            const isLast = i === projects.length - 1;
            const reversed = i % 2 !== 0;

            if (isLast) {
              return (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="rounded-3xl overflow-hidden border border-brand-border/50 bg-brand-surface/50 backdrop-blur-sm">
                    {/* Info bar */}
                    <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-border/50">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-mono text-brand-subtle">Project {proj.number}</span>
                          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-brand-border text-brand-muted">{proj.category}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">{proj.name}</h3>
                        <p className="text-brand-muted text-sm max-w-md leading-relaxed">{proj.description}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-4">
                        <div className="flex flex-wrap gap-2">
                          {proj.tags.map((t) => <Tag key={t} label={t} color={proj.accentColor} />)}
                        </div>
                        <a href={proj.url} className="inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3" style={{ color: proj.accentColor }}>
                          View Project <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    {/* Full-width image */}
                    <div className="relative h-64 md:h-[440px] overflow-hidden group">
                      <Image
                        src={proj.image}
                        alt={`${proj.name} preview`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/30 to-transparent" />
                      <div className="absolute inset-0 opacity-15 mix-blend-color" style={{ background: proj.accentColor }} />
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reversed ? "[direction:rtl]" : ""}`}
              >
                <div style={{ direction: "ltr" }}>
                  <ProjectImage src={proj.image} alt={`${proj.name} preview`} accent={proj.accentColor} />
                </div>
                <div className="space-y-5" style={{ direction: "ltr" }}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-brand-subtle">Project {proj.number}</span>
                    <Tag label={proj.category} color={proj.accentColor} />
                  </div>
                  <h3 className="text-2xl md:text-[2rem] font-bold text-white tracking-tight leading-tight">{proj.name}</h3>
                  <p className="text-brand-muted leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((t) => <Tag key={t} label={t} color={proj.accentColor} />)}
                  </div>
                  <motion.a
                    href={proj.url}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:gap-3 hover:shadow-lg"
                    style={{ color: proj.accentColor, background: `${proj.accentColor}12`, border: `1px solid ${proj.accentColor}25` }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
