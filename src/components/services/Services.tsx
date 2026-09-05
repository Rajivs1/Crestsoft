"use client";
import { motion } from "framer-motion";
import { Globe, LayoutDashboard, Smartphone, Code2, Cloud, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

const icons: Record<string, React.ElementType> = { Globe, LayoutDashboard, Smartphone, Code2, Cloud };
const gradients = [
  "from-indigo-500/20 to-indigo-500/0",
  "from-violet-500/20 to-violet-500/0",
  "from-cyan-500/20 to-cyan-500/0",
  "from-emerald-500/20 to-emerald-500/0",
  "from-amber-500/20 to-amber-500/0",
];
const iconColors = ["text-indigo-400", "text-violet-400", "text-cyan-400", "text-emerald-400", "text-amber-400"];
const iconBgs = ["bg-indigo-500/10 border-indigo-500/20", "bg-violet-500/10 border-violet-500/20", "bg-cyan-500/10 border-cyan-500/20", "bg-emerald-500/10 border-emerald-500/20", "bg-amber-500/10 border-amber-500/20"];

export function Services() {
  return (
    <section className="py-28 md:py-36 border-t border-brand-border/50 bg-brand-bg relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="section-wrapper relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-brand-accent" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-indigo-400">Our Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text">What we build.</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon = icons[svc.icon];
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group relative rounded-2xl border border-brand-border/40 bg-brand-surface/80 backdrop-blur-sm p-7 hover:border-brand-accent/30 transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Hover glow gradient */}
                <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-radial ${gradients[i]} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${iconBgs[i]}`}>
                  <Icon className={`w-5 h-5 ${iconColors[i]}`} />
                </div>
                <span className="relative z-10 text-[10px] font-mono text-brand-subtle block mb-2">0{i + 1}</span>
                <h3 className="relative z-10 text-[17px] font-bold text-brand-text mb-2 group-hover:text-brand-glow transition-colors">{svc.title}</h3>
                <p className="relative z-10 text-sm text-brand-muted leading-relaxed mb-3">{svc.description}</p>
                <p className="relative z-10 text-xs text-brand-subtle leading-relaxed">{svc.detail}</p>
                <ArrowUpRight className="absolute top-7 right-7 w-4 h-4 text-brand-subtle opacity-0 group-hover:opacity-100 group-hover:text-brand-accent transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex justify-center mt-12">
          <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-border text-brand-muted text-sm font-semibold hover:border-brand-accent/40 hover:text-brand-text hover:bg-brand-accent/5 transition">
            View all services <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
