"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Projects() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 z-10">
      <div className="section-wrapper relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F] mb-3 sm:mb-4 px-3 py-1 rounded-full border border-[#E85D3F]/20 bg-[#E85D3F]/5">
              Featured Work
            </span>
            <h2 className="font-display text-[#151515] leading-[1.05] mt-2 sm:mt-3" style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.03em", fontWeight: 700 }}>
              Ideas brought to life.
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
            <Link href="/work" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E85D3F] hover:text-[#C9472D] transition-colors group">
              View All Projects <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((proj) => (
            <motion.div key={proj.id} variants={card}>
              <motion.a href={proj.url} className="group block card-light overflow-hidden"
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}>
                <div className="relative p-3 sm:p-4 pb-0">
                  <motion.div className="relative aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden"
                    style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
                    whileHover={{ rotateX: -2, rotateY: 3, scale: 1.03 }} initial={{ rotateX: 2, rotateY: -1 }}>
                    <Image src={proj.image} alt={`${proj.name} preview`} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.08) 100%)" }} />
                  </motion.div>
                </div>
                <div className="p-4 sm:p-5 pt-3 sm:pt-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display text-[#151515] font-semibold text-sm sm:text-base tracking-tight">{proj.name}</h3>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border border-[#E7DED3] group-hover:border-[#E85D3F]/30 group-hover:bg-[#E85D3F]/5 transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a89a8a] group-hover:text-[#E85D3F] transition-all duration-300" />
                    </div>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#68645F]">{proj.category}</p>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
