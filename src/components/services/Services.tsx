"use client";
import { motion } from "framer-motion";
import { Globe, LayoutDashboard, Smartphone, Code2, Cloud, ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

const icons: Record<string, React.ElementType> = { Globe, LayoutDashboard, Smartphone, Code2, Cloud };
const glowColors = ["#6366f1", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"];

export function Services() {
  return (
    <section className="relative py-28 md:py-40 z-10">
      <div className="section-wrapper">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[10px] font-display font-medium tracking-[0.3em] uppercase text-brand-subtle mb-4 block">01 / Services</span>
            <h2 className="font-display text-brand-text leading-[0.95]" style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", letterSpacing: "-0.04em", fontWeight: 700 }}>
              What we build.
            </h2>
          </div>
          <p className="text-sm text-brand-muted max-w-xs leading-relaxed">Turning ideas into powerful digital products.</p>
        </motion.div>

        {/* Cards grid - 5 across on lg, matching reference */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((svc, i) => {
            const Icon = icons[svc.icon];
            const glow = glowColors[i];
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="glow-card group relative p-6 flex flex-col"
              >
                {/* Top glow on hover */}
                <div className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${glow}60, transparent)` }} />

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border transition-all duration-300"
                  style={{ backgroundColor: `${glow}10`, borderColor: `${glow}20` }}>
                  <Icon className="w-5 h-5 transition-colors duration-300" style={{ color: glow }} />
                </div>

                <h3 className="font-display text-brand-text font-semibold text-[15px] tracking-tight mb-2">{svc.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed mb-auto">{svc.description}</p>

                {/* Arrow */}
                <div className="mt-5 w-8 h-8 rounded-full flex items-center justify-center border border-brand-border/40 group-hover:border-brand-accent/40 group-hover:bg-brand-accent/10 transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-subtle group-hover:text-brand-accent transition-colors duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
