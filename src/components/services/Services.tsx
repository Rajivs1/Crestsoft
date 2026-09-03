"use client";
import { motion } from "framer-motion";
import { Globe, LayoutDashboard, Smartphone, Code2, Cloud, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

const icons: Record<string, React.ElementType> = { Globe, LayoutDashboard, Smartphone, Code2, Cloud };
const accents = ["text-indigo-400 bg-indigo-500/10 border-indigo-500/20", "text-violet-400 bg-violet-500/10 border-violet-500/20", "text-cyan-400 bg-cyan-500/10 border-cyan-500/20", "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", "text-amber-400 bg-amber-500/10 border-amber-500/20"];

export function Services() {
  return (
    <section className="py-24 md:py-32 border-t border-brand-border/50 bg-brand-bg">
      <div className="section-wrapper">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-brand-accent" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-indigo-400">Our Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">What we build.</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, i) => {
            const Icon = icons[svc.icon];
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative rounded-2xl border border-brand-border/50 bg-brand-surface p-6 hover:border-brand-accent/30 hover:bg-brand-card transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border mb-5 ${accents[i]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-brand-subtle block mb-2">0{i + 1}</span>
                <h3 className="text-base font-bold text-white mb-1.5">{svc.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-4">{svc.description}</p>
                <p className="text-xs text-brand-subtle leading-relaxed">{svc.detail}</p>
                <ArrowUpRight className="absolute top-6 right-6 w-4 h-4 text-brand-subtle opacity-0 group-hover:opacity-100 group-hover:text-brand-accent transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/services" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-border text-brand-muted text-sm font-semibold hover:border-brand-accent/40 hover:text-white transition">
            View all services <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
