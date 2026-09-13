"use client";
import { motion } from "framer-motion";
import { Star, CheckCircle2, Quote } from "lucide-react";
import { testimonials, Testimonial } from "@/data/testimonials";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="card-light p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group h-full"
    >
      {/* Background watermark quote icon */}
      <Quote className="absolute top-4 right-4 w-12 h-12 text-[#151515]/5 group-hover:text-[#E85D3F]/10 transition-colors pointer-events-none" />

      <div>
        {/* Stars and optional metric pill */}
        <div className="flex items-center justify-between gap-2 mb-5">
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          {t.metrics && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#E85D3F] bg-[#E85D3F]/10 border border-[#E85D3F]/20">
              {t.metrics}
            </span>
          )}
        </div>

        {/* Quote */}
        <p className="text-sm sm:text-[15px] text-[#151515] leading-relaxed mb-6 font-normal">
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>

      <div className="pt-4 border-t border-[#E7DED3]/60 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar initial circle */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E85D3F]/20 to-[#C9472D]/10 border border-[#E85D3F]/30 flex items-center justify-center text-sm font-bold text-[#E85D3F] font-display">
            {t.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm text-[#151515] leading-tight">
              {t.name}
            </h4>
            <p className="text-[11px] text-[#68645F] leading-snug">
              {t.role}, <span className="font-medium text-[#151515]">{t.company}</span>
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Verified</span>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 z-10 overflow-hidden">
      <div className="section-wrapper relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="inline-block text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F] mb-3 sm:mb-4 px-3 py-1 rounded-full border border-[#E85D3F]/20 bg-[#E85D3F]/5">
              Client Feedback
            </span>
            <h2
              className="font-display text-[#151515] leading-[1.05]"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                letterSpacing: "-0.03em",
                fontWeight: 700,
              }}
            >
              Trusted by founders.<br />Validated by outcomes.
            </h2>
          </div>
          <p className="text-sm text-[#68645F] max-w-xs leading-relaxed sm:text-right">
            Real stories from business leaders who partnered with CrestSoft to build and scale their platforms.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
