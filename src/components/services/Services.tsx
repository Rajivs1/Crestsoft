"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function ServiceCard({ svc, index }: { svc: Service; index: number }) {
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
    <motion.div variants={item}>
      <Link href="/services" className="block h-full">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          className="card-light group relative p-5 sm:p-6 flex flex-col h-full cursor-pointer overflow-hidden"
        >
          {/* Mouse Spotlight Follower */}
          {isHovered && (
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 93, 63, 0.12), transparent 80%)`,
              }}
            />
          )}

          {/* Watermark index */}
          <span className="absolute top-4 right-5 text-2xl sm:text-3xl font-display font-bold text-[#151515]/5 group-hover:text-[#E85D3F]/15 transition-colors duration-300 pointer-events-none select-none">
            0{index + 1}
          </span>

          {/* Animated 3D icon */}
          <motion.div
            className="w-14 h-14 mb-5 relative z-10"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.15, rotate: 4 }}
          >
            <Image
              src={iconImages[svc.icon]}
              alt={svc.title}
              width={56}
              height={56}
              className="w-14 h-14 object-contain drop-shadow-sm"
            />
          </motion.div>

          <h3 className="font-display text-[#151515] font-semibold text-[15px] tracking-tight mb-2 relative z-10 group-hover:text-[#E85D3F] transition-colors duration-300">
            {svc.title}
          </h3>
          <p className="text-xs text-[#68645F] leading-relaxed mb-auto relative z-10">
            {svc.description}
          </p>

          <motion.div
            className="mt-6 w-9 h-9 rounded-full flex items-center justify-center border border-[#E7DED3] group-hover:border-[#E85D3F]/40 group-hover:bg-[#E85D3F]/10 transition-all duration-300 relative z-10"
            whileHover={{ scale: 1.15 }}
          >
            <ArrowRight className="w-4 h-4 text-[#a89a8a] group-hover:text-[#E85D3F] transition-all duration-300 group-hover:translate-x-0.5" />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function Services() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 z-10 overflow-hidden">
      {/* Decorative warm glow */}
      <motion.div
        className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[60vw] h-[30vw] max-w-[700px] max-h-[300px] pointer-events-none"
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(232,93,63,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      <div className="section-wrapper relative">
        {/* Header with slide-in animation */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-md"
            >
              <span className="inline-block text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F] mb-4 px-3 py-1 rounded-full border border-[#E85D3F]/20 bg-[#E85D3F]/5">
                What We Do
              </span>
              <h2
                className="font-display text-[#151515] leading-[1.05] mt-3"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  letterSpacing: "-0.03em",
                  fontWeight: 700,
                }}
              >
                Digital Solutions<br />for What&apos;s Next.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-end gap-3 md:pt-8"
            >
              <p className="text-sm text-[#68645F] max-w-[280px] leading-relaxed text-right">
                From modern websites to scalable applications, we help businesses
                turn ideas into powerful digital products.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E85D3F] hover:text-[#C9472D] transition-colors group"
              >
                View All Services
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Cards with staggered animation and spotlight */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {services.map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

