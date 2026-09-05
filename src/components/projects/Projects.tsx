"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

function Tag({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="text-[10px] font-medium px-2 py-0.5 rounded-md border"
      style={{ color, borderColor: `${color}25`, background: `${color}08` }}
    >
      {label}
    </span>
  );
}

export function Projects() {
  return (
    <section className="py-28 md:py-40 border-t border-brand-border/50 bg-brand-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/[0.03] rounded-full blur-[140px] pointer-events-none" style={{ opacity: "var(--glow-opacity)" }} />

      <div className="section-wrapper relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20">
          <div>
            <span className="text-[10px] font-display font-medium tracking-[0.3em] uppercase text-brand-subtle mb-4 block">02 / Work</span>
            <h2 className="font-display text-brand-text leading-[0.95]" style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", letterSpacing: "-0.04em", fontWeight: 700 }}>
              Selected work.
            </h2>
          </div>
          <Link href="/work" className="btn-outline px-5 py-2.5 text-sm self-start">
            All projects <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* Projects */}
        <div className="space-y-32 md:space-y-40">
          {projects.map((proj, i) => {
            const reversed = i % 2 !== 0;

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Large project number */}
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-display text-[72px] md:text-[96px] font-bold leading-none text-brand-border/30" style={{ letterSpacing: "-0.05em" }}>
                    {proj.number}
                  </span>
                  <div className="flex-1 h-px bg-brand-border/30" />
                </div>

                <div className={`grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start ${reversed ? "lg:[direction:rtl]" : ""}`}>
                  {/* Image */}
                  <div className="group/img relative overflow-hidden rounded-2xl border border-brand-border/40 bg-brand-bg" style={{ direction: "ltr" }}>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={proj.image}
                        alt={`${proj.name} preview`}
                        fill
                        className="object-cover transition-all duration-[800ms] ease-out group-hover/img:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 55vw"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/50 via-transparent to-transparent" />
                      <div className="absolute inset-0 opacity-10 mix-blend-color" style={{ background: proj.accentColor }} />
                      {/* Hover accent glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ boxShadow: `inset 0 0 80px -20px ${proj.accentColor}30` }}
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-5 pt-2" style={{ direction: "ltr" }}>
                    <div className="flex items-center gap-3">
                      <Tag label={proj.category} color={proj.accentColor} />
                    </div>

                    <h3 className="font-display text-brand-text leading-tight" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", letterSpacing: "-0.03em", fontWeight: 700 }}>
                      {proj.name}
                    </h3>

                    <p className="text-brand-muted leading-relaxed text-[15px]">{proj.description}</p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.tags.map((t) => <Tag key={t} label={t} color={proj.accentColor} />)}
                    </div>

                    <motion.a
                      href={proj.url}
                      className="inline-flex items-center gap-2 text-sm font-semibold mt-3 group/link"
                      style={{ color: proj.accentColor }}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      View Project
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
