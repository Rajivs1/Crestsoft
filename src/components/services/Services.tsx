"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { services, Service } from "@/data/services";

import WebDevIcon from "@/assets/08_service_web_development.png";
import WebAppIcon from "@/assets/09_service_web_applications.png";
import MobileIcon from "@/assets/10_service_mobile_apps.png";
import CustomIcon from "@/assets/11_service_custom_software.png";
import CloudIcon from "@/assets/12_service_cloud_devops.png";

const iconImages: Record<string, StaticImageData> = {
  Globe: WebDevIcon,
  LayoutDashboard: WebAppIcon,
  Smartphone: MobileIcon,
  Code2: CustomIcon,
  Cloud: CloudIcon,
};

function ServiceCard({ svc, index, isWide }: { svc: Service; index: number; isWide?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link href="/services" className="block h-full group">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
        className={`card-light relative p-6 sm:p-8 flex flex-col justify-between h-full overflow-hidden border border-[#E7DED3]/80 bg-white/85 backdrop-blur-md transition-all duration-300 ${
          isWide ? "lg:flex-row lg:items-center lg:gap-8" : ""
        }`}
      >
        {/* Mouse Spotlight Follower */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 93, 63, 0.12), transparent 75%)`,
            }}
          />
        )}

        {/* Top bar with 3D Icon and Index Badge */}
        <div className={`relative z-10 ${isWide ? "lg:flex-1" : ""}`}>
          <div className="flex items-start justify-between gap-4 mb-5">
            {/* 3D Icon on glowing podium */}
            <div className="relative">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.12, rotate: 5 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FCFAF6] to-[#F5F0E8] border border-[#E7DED3] flex items-center justify-center p-2.5 shadow-sm group-hover:border-[#E85D3F]/40 group-hover:shadow-[0_8px_24px_rgba(232,93,63,0.15)] transition-all duration-300"
              >
                <Image
                  src={iconImages[svc.icon]}
                  alt={svc.title}
                  width={56}
                  height={56}
                  className="w-12 h-12 object-contain drop-shadow-md"
                />
              </motion.div>
            </div>

            {/* Badge & Watermark */}
            <div className="flex items-center gap-2">
              {svc.badge && (
                <span className="px-2.5 py-1 rounded-full text-[10px] font-display font-semibold uppercase tracking-wider text-[#E85D3F] bg-[#E85D3F]/10 border border-[#E85D3F]/20">
                  {svc.badge}
                </span>
              )}
              <span className="font-display font-bold text-lg text-[#151515]/20 group-hover:text-[#E85D3F]/30 transition-colors">
                0{index + 1}
              </span>
            </div>
          </div>

          <h3 className="font-display text-[#151515] font-bold text-lg sm:text-xl tracking-tight mb-2 group-hover:text-[#E85D3F] transition-colors duration-300">
            {svc.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed mb-5">
            {svc.description}
          </p>

          {/* Key Deliverables Bullet list */}
          {svc.deliverables && svc.deliverables.length > 0 && (
            <div className="space-y-1.5 mb-6 pt-3 border-t border-[#E7DED3]/50">
              {svc.deliverables.map((d) => (
                <div key={d} className="flex items-center gap-2 text-xs text-[#5c5750]">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#E85D3F]/15 flex items-center justify-center shrink-0 text-[#E85D3F]">
                    <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                  </span>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer: Tech tags + Action link */}
        <div className={`relative z-10 pt-4 border-t border-[#E7DED3]/60 flex flex-wrap items-center justify-between gap-3 ${
          isWide ? "lg:pt-0 lg:border-t-0 lg:flex-col lg:items-end lg:justify-center" : ""
        }`}>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {svc.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[10px] font-medium text-[#68645F] bg-[#FCFAF6] border border-[#E7DED3]/80 group-hover:border-[#E85D3F]/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action button */}
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#151515] group-hover:text-[#E85D3F] transition-colors">
            <span>Explore</span>
            <div className="w-7 h-7 rounded-full bg-white border border-[#E7DED3] flex items-center justify-center group-hover:border-[#E85D3F] group-hover:bg-[#E85D3F] group-hover:text-white transition-all duration-300">
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function Services() {
  const topServices = services.slice(0, 3);
  const bottomServices = services.slice(3);

  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-36 z-10 overflow-hidden">
      {/* Decorative ambient warm glow */}
      <motion.div
        className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[70vw] h-[35vw] max-w-[850px] max-h-[350px] pointer-events-none"
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(232,93,63,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      <div className="section-wrapper relative">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#E85D3F]" />
                <span className="text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F] px-3 py-1 rounded-full border border-[#E85D3F]/20 bg-[#E85D3F]/5">
                  Core Capabilities
                </span>
              </div>
              <h2
                className="font-display text-[#151515] leading-[1.04]"
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                  letterSpacing: "-0.035em",
                  fontWeight: 700,
                }}
              >
                Digital Solutions<br />
                <span className="gradient-text-shimmer inline-block">Built for What&apos;s Next.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:items-end gap-3"
            >
              <p className="text-sm text-[#68645F] max-w-sm leading-relaxed md:text-right">
                From modern websites to complex full-stack applications, we engineer scalable digital products ready for enterprise growth.
              </p>
              <Link
                href="/services"
                className="btn-outline-dark px-6 py-2.5 text-xs font-semibold inline-flex items-center gap-2 group"
              >
                View Full Capabilities
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#E85D3F]" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Luxury Bento Grid Layout: 3 Columns on Top, 2 Columns on Bottom */}
        <div className="space-y-5">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topServices.map((svc, i) => (
              <ServiceCard key={svc.id} svc={svc} index={i} />
            ))}
          </div>

          {/* Bottom Row: 2 Wider Featured Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {bottomServices.map((svc, i) => (
              <ServiceCard key={svc.id} svc={svc} index={i + 3} isWide={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
