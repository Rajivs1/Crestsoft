"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/projects";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function ProjectCard({ proj }: { proj: Project }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div variants={cardVariant} className="perspective-1000">
      <motion.a
        href={proj.url}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group block card-light overflow-hidden transition-all duration-300"
        whileHover={{ y: -6 }}
      >
        <div className="relative p-3 sm:p-4 pb-0">
          <div className="relative aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden sheen-overlay bg-[#e7ded3]/30 shadow-md">
            {/* Live indicator badge */}
            <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Project
            </div>

            {/* External link indicator */}
            <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xs">
              <ExternalLink className="w-3.5 h-3.5 text-[#151515]" />
            </div>

            <Image
              src={proj.image}
              alt={`${proj.name} preview`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.1) 100%)",
              }}
            />
          </div>
        </div>

        <div className="p-4 sm:p-5 pt-3 sm:pt-4">
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="font-display text-[#151515] font-semibold text-sm sm:text-base tracking-tight group-hover:text-[#E85D3F] transition-colors duration-300">
              {proj.name}
            </h3>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border border-[#E7DED3] group-hover:border-[#E85D3F]/40 group-hover:bg-[#E85D3F]/10 transition-all duration-300">
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a89a8a] group-hover:text-[#E85D3F] transition-all duration-300 group-hover:translate-x-0.5" />
            </div>
          </div>
          <p className="text-[11px] sm:text-xs text-[#68645F] mb-3">
            {proj.category}
          </p>

          {/* Project Tech Tags */}
          {proj.tags && proj.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E7DED3]/50">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md text-[10px] font-medium text-[#68645F] bg-[#FCFAF6] border border-[#E7DED3]/60 group-hover:border-[#E85D3F]/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.a>
    </motion.div>
  );
}

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
            <h2
              className="font-display text-[#151515] leading-[1.05] mt-2 sm:mt-3"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                letterSpacing: "-0.03em",
                fontWeight: 700,
              }}
            >
              Ideas brought to life.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E85D3F] hover:text-[#C9472D] transition-colors group"
            >
              View All Projects{" "}
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {projects.map((proj) => (
            <ProjectCard key={proj.id} proj={proj} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

