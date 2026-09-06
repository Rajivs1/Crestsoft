"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import BottomImg from "@/assets/BottomImg.png";

export function CTA() {
  return (
    <section className="relative py-14 sm:py-16 md:py-20 lg:py-28 z-10 overflow-hidden">
      {/* Background image with parallax feel */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image src={BottomImg} alt="" fill className="object-cover object-center" sizes="100vw" aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(252,250,246,0.95) 0%, rgba(252,250,246,0.85) 30%, rgba(252,250,246,0.5) 60%, rgba(252,250,246,0.15) 100%)" }} />
      </motion.div>

      <div className="section-wrapper relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="inline-block text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F] mb-4 px-3 py-1 rounded-full border border-[#E85D3F]/20 bg-[#E85D3F]/5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Let&apos;s Build Together
          </motion.span>

          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mt-4">
            <div className="max-w-lg">
              <motion.h2
                className="font-display text-[#151515] mb-3 leading-[1.05]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", fontWeight: 700 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Have an idea worth building?
              </motion.h2>
              <motion.p
                className="text-base text-[#68645F] mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Let&apos;s turn it into something real.
              </motion.p>
              <motion.div
                className="flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                  <Link href="/contact" className="btn-primary px-7 py-3.5 text-sm group">
                    Start a Project
                    <motion.span className="inline-block" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                  <Link href="/contact" className="btn-outline-dark px-7 py-3.5 text-sm inline-flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Get in Touch
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, rotate: -8, x: 30 }}
              whileInView={{ opacity: 1, rotate: -2, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:block md:pt-8"
            >
              <p className="text-xl lg:text-2xl text-[#E85D3F]/40 leading-snug" style={{ fontFamily: "var(--font-hand), cursive", fontStyle: "italic" }}>
                Ideas<br />Today<br />A Better<br />Tomorrow
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
