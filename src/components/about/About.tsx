"use client";
import { motion } from "framer-motion";
import { Target, Cpu, TrendingUp } from "lucide-react";
import Image from "next/image";
import MountainImg from "@/assets/MountainMoon.png";

const items = [
  { icon: Target, title: "Business First", desc: "Technology designed around real business needs.", accent: "#E85D3F", bg: "bg-orange-50 border-orange-100" },
  { icon: Cpu, title: "Modern Engineering", desc: "Clean, scalable and maintainable solutions.", accent: "#C9472D", bg: "bg-amber-50 border-amber-100" },
  { icon: TrendingUp, title: "Built to Grow", desc: "Products designed with the future in mind.", accent: "#b45309", bg: "bg-yellow-50 border-yellow-100" },
];

export function About() {
  return (
    <section className="relative py-24 md:py-32 z-10">
      <div className="section-wrapper">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[10px] font-display font-medium tracking-[0.3em] uppercase text-[#a89a8a] mb-4 block">03 / Why CrestSoft</span>
            <h2 className="font-display text-charcoal leading-[0.95]" style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", letterSpacing: "-0.04em", fontWeight: 700 }}>Built with purpose.</h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1fr_1fr_auto] gap-5 items-start">
          {items.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="card-light group p-7">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border ${p.bg}`}>
                  <Icon className="w-5 h-5" style={{ color: p.accent }} />
                </div>
                <h3 className="font-display text-charcoal font-semibold text-lg tracking-tight mb-2">{p.title}</h3>
                <p className="text-sm text-[#68645F] leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7 }} className="hidden md:flex flex-col items-center gap-3 pt-2">
            <div className="w-36 h-28 rounded-2xl overflow-hidden relative">
              <Image src={MountainImg} alt="Mountain scenery" fill className="object-cover" sizes="160px" />
            </div>
            <p className="text-center text-coral/50 text-sm leading-snug" style={{ fontFamily: "var(--font-hand), cursive", fontStyle: "italic" }}>More than<br />development.<br />A partner in<br />your growth.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
