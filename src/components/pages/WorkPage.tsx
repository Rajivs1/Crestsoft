"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

function Tag({ label, color }: { label: string; color: string }) {
  return (
    <span className="text-[11px] font-medium px-2.5 py-1 rounded-lg border" style={{ color, borderColor: `${color}30`, background: `${color}12` }}>
      {label}
    </span>
  );
}

export function WorkPage() {
  return (
    <div className="bg-brand-bg min-h-screen">
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(99,102,241,0.14), transparent 65%)" }} />
        <div className="section-wrapper relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="flex items-center gap-3 mb-6"><div className="w-5 h-px bg-brand-accent" /><span className="text-xs font-semibold tracking-widest uppercase text-indigo-400">Portfolio</span></div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">Selected <span className="gradient-text">work.</span></h1>
            <p className="text-lg text-brand-muted max-w-xl leading-relaxed">A look at the products and platforms we&apos;ve built for clients across different industries.</p>
          </motion.div>
        </div>
      </section>
      <section className="pb-28 md:pb-36">
        <div className="section-wrapper space-y-28">
          {projects.map((proj, i) => (
            <motion.div key={proj.id} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 !== 0 ? "[direction:rtl]" : ""}`}>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.08] group" style={{ direction: "ltr" }}>
                <Image src={proj.image} alt={`${proj.name} preview`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent" />
                <div className="absolute inset-0 opacity-15 mix-blend-color" style={{ background: proj.accentColor }} />
              </div>
              <div className="space-y-5" style={{ direction: "ltr" }}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-brand-subtle">Project {proj.number}</span>
                  <Tag label={proj.category} color={proj.accentColor} />
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">{proj.name}</h2>
                <p className="text-brand-muted leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-2">{proj.tags.map(t => <Tag key={t} label={t} color={proj.accentColor} />)}</div>
                <a href={proj.url} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition" style={{ color: proj.accentColor, background: `${proj.accentColor}12`, border: `1px solid ${proj.accentColor}25` }}>
                  View Project <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-24 border-t border-brand-border/50 bg-brand-surface">
        <div className="section-wrapper text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Want to be next?</h2>
          <p className="text-brand-muted mb-8 max-w-md mx-auto">We&apos;d love to work on something great with you.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-accent text-white font-semibold hover:bg-brand-glow transition shadow-lg shadow-brand-accent/25">
            Start a Project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
