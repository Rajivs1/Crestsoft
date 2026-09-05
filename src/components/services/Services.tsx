"use client";
import { motion } from "framer-motion";
import { Globe, LayoutDashboard, Smartphone, Code2, Cloud, ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

const icons: Record<string, React.ElementType> = { Globe, LayoutDashboard, Smartphone, Code2, Cloud };
const accents = ["#6366f1", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"];

export function Services() {
  return (
    <section className="py-28 md:py-40 border-t border-brand-border/50 bg-brand-bg relative overflow-hidden noise">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/[0.04] rounded-full blur-[150px] pointer-events-none" style={{ opacity: "var(--glow-opacity)" }} />

      <div className="section-wrapper relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-20">
          <span className="text-[10px] font-display font-medium tracking-[0.3em] uppercase text-brand-subtle mb-4 block">01 / Services</span>
          <h2 className="font-display text-brand-text leading-[0.95]" style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", letterSpacing: "-0.04em", fontWeight: 700 }}>
            What we build.
          </h2>
        </motion.div>

        {/* Service list — editorial rows */}
        <div className="space-y-0">
          {services.map((svc, i) => {
            const Icon = icons[svc.icon];
            const accent = accents[i];
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.55 }}
                className="group border-b border-brand-border/40 last:border-b-0"
              >
                <div className="flex items-center gap-6 md:gap-10 py-7 md:py-9 px-2 cursor-default transition-all duration-300 hover:pl-4">
                  {/* Number */}
                  <span className="hidden md:block font-display text-[11px] tracking-[0.2em] w-8 flex-shrink-0 transition-colors duration-300" style={{ color: "var(--brand-subtle)" }}>
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <motion.div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: `${accent}10`,
                      borderColor: `${accent}20`,
                    }}
                    whileHover={{ rotate: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color: accent }} />
                  </motion.div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-brand-text font-semibold text-lg md:text-xl tracking-tight group-hover:text-brand-accent transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-brand-muted mt-0.5 hidden sm:block">{svc.description}</p>
                  </div>

                  {/* Detail (desktop only) */}
                  <p className="hidden lg:block text-xs text-brand-subtle max-w-[240px] leading-relaxed text-right">
                    {svc.detail}
                  </p>

                  {/* Arrow */}
                  <ArrowRight className="w-4 h-4 text-brand-subtle opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex justify-start mt-14">
          <Link href="/services" className="btn-outline px-5 py-2.5 text-sm">
            Explore all services <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
