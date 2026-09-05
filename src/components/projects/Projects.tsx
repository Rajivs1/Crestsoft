"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

function Tag({ label, color }: { label: string; color: string }) {
  return (
    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md" style={{ color, backgroundColor: `${color}12`, border: `1px solid ${color}20` }}>
      {label}
    </span>
  );
}

export function Projects() {
  return (
    <section className="relative py-28 md:py-40 z-10">
      {/* Section glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-violet-500/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="section-wrapper relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] font-display font-medium tracking-[0.3em] uppercase text-brand-subtle mb-4 block">02 / Work</span>
            <h2 className="font-display text-brand-text leading-[0.95]" style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", letterSpacing: "-0.04em", fontWeight: 700 }}>
              Selected work.
            </h2>
          </div>
          <Link href="/work" className="btn-outline px-5 py-2.5 text-sm self-start">
            View all projects <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* Project cards - 3 column matching reference */}
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <a href={proj.url} className="group block glow-card overflow-hidden">
                {/* Image with glow */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={`${proj.name} preview`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Color overlay */}
                  <div className="absolute inset-0 opacity-20 mix-blend-color" style={{ background: proj.accentColor }} />
                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/40 to-transparent" />
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: `inset 0 0 60px -10px ${proj.accentColor}25` }} />
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-display text-brand-text font-semibold text-base tracking-tight">{proj.name}</h3>
                      <p className="text-xs text-brand-muted mt-0.5">{proj.category}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center border border-brand-border/40 group-hover:border-brand-accent/40 group-hover:bg-brand-accent/10 transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 text-brand-subtle group-hover:text-brand-accent transition-colors" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.slice(0, 3).map((t) => <Tag key={t} label={t} color={proj.accentColor} />)}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
