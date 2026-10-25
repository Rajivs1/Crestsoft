"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Cpu,
  Workflow,
  Briefcase,
  Layers,
  Sparkles,
  Terminal,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MountainImg from "@/assets/MountainMoon.png";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { studioMilestones, studioStats } from "@/data/aboutData";

export function AboutPage() {
  return (
    <div className="bg-[#FCFAF6] min-h-screen text-[#151515] pt-16 lg:pt-[72px]">
      {/* ── 1. ABOUT SUB-NAVIGATION AT THE VERY TOP ── */}
      <AboutSubNav />

      {/* ── 2. HERO SECTION ── */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#E7DED3]/70 bg-gradient-to-b from-[#F5F0E8]/70 via-[#FCFAF6] to-[#FCFAF6]">
        {/* Subtle decorative mesh glow */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] pointer-events-none rounded-full blur-3xl opacity-35"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(232,93,63,0.25) 0%, rgba(201,71,45,0.08) 50%, transparent 80%)",
          }}
        />

        <div className="section-wrapper relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E7DED3] bg-white/80 shadow-xs mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#E85D3F] animate-pulse" />
              <span className="text-[11px] font-display font-semibold tracking-[0.18em] uppercase text-[#68645F]">
                About CrestSoft • Engineering & Digital Studio
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="font-display text-[#151515] font-extrabold tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.4rem)" }}
            >
              Built with purpose. <br />
              <span className="gradient-text-shimmer inline-block">
                Engineered to endure.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#68645F] max-w-2xl leading-relaxed mb-10">
              CrestSoft is a modern software engineering studio. We design,
              architect, and deploy mission-critical digital products for businesses
              demanding obsessive code quality, sub-100ms speed, and high-velocity
              execution.
            </p>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
              {studioStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.12 + i * 0.08 }}
                  className="p-4 rounded-2xl bg-white/75 border border-[#E7DED3]/80 shadow-xs backdrop-blur-xs"
                >
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#151515] tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#151515] mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#a89a8a] truncate">
                    {stat.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. EXPLORE ABOUT SUB-PAGES (GATEWAY CARDS) ── */}
      <section className="py-16 md:py-24 bg-[#FCFAF6] border-b border-[#E7DED3]/60">
        <div className="section-wrapper">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-display font-semibold tracking-[0.25em] uppercase text-[#E85D3F] mb-2 block">
                The CrestSoft Collective
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#151515] tracking-tight">
                Explore Inside Our Studio
              </h2>
            </div>
            <p className="text-sm text-[#68645F] max-w-md">
              Dive deeper into our open career opportunities (freshers to 4 years), our
              technical architecture radar, and our structured 5-phase delivery process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Gateway 1: Careers */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="card-light p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/40 rounded-full blur-2xl pointer-events-none group-hover:bg-orange-200/50 transition-colors" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#E85D3F]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-orange-100 text-[#C9472D] border border-orange-200">
                    Freshers to 4 Yrs
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#151515] mb-2 group-hover:text-[#E85D3F] transition-colors">
                  Careers & Hiring
                </h3>
                <p className="text-sm text-[#68645F] leading-relaxed mb-6">
                  Exciting engineering & design roles for hungry freshers, junior
                  devs, and mid-level builders (0–4 yrs). 1-on-1 mentorship, modern
                  tools, and fast-track career growth.
                </p>
              </div>

              <Link
                href="/about/careers"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#E85D3F] group-hover:gap-3 transition-all pt-4 border-t border-[#E7DED3]/60"
              >
                <span>View Open Positions (0–4 Yrs)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Gateway 2: Tech & Innovation */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="card-light p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-200/50 transition-colors" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#b45309]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-amber-100 text-amber-900 border border-amber-200">
                    Radar 2026
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#151515] mb-2 group-hover:text-[#b45309] transition-colors">
                  Tech & Innovation
                </h3>
                <p className="text-sm text-[#68645F] leading-relaxed mb-6">
                  Discover our battle-tested technology radar, applied Agentic AI
                  pipelines, edge-first architectures, and R&D benchmarks.
                </p>
              </div>

              <Link
                href="/about/tech-innovation"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#b45309] group-hover:gap-3 transition-all pt-4 border-t border-[#E7DED3]/60"
              >
                <span>Inspect Tech Radar</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Gateway 3: How We Work */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="card-light p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/40 rounded-full blur-2xl pointer-events-none group-hover:bg-orange-200/50 transition-colors" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#E85D3F]">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-orange-100 text-[#C9472D] border border-orange-200">
                    Methodology
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#151515] mb-2 group-hover:text-[#E85D3F] transition-colors">
                  How We Work
                </h3>
                <p className="text-sm text-[#68645F] leading-relaxed mb-6">
                  Our 5-phase delivery blueprint: from architecture specs to 1-week
                  sprints, weekly Friday staging previews, and clean repository handovers.
                </p>
              </div>

              <Link
                href="/about/how-we-work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#E85D3F] group-hover:gap-3 transition-all pt-4 border-t border-[#E7DED3]/60"
              >
                <span>Explore Methodology</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. MANIFESTO & THE CRESTSOFT STORY ── */}
      <section className="py-20 md:py-28 bg-[#F5F0E8]/50 border-b border-[#E7DED3]/70">
        <div className="section-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Manifesto */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E85D3F] mb-4">
                <span className="w-4 h-px bg-[#E85D3F]" />
                The CrestSoft Manifesto
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#151515] tracking-tight leading-[1.1] mb-6">
                Most agencies write code to get paid. We write code to build
                monuments.
              </h2>
              <div className="space-y-4 text-base text-[#68645F] leading-relaxed mb-8">
                <p>
                  In an industry overflowing with outsourced cookie-cutter
                  templates, technical debt, and delayed promises, CrestSoft was
                  founded in 2026 in Gurugram, Haryana with a singular contrarian truth:
                  <strong className="text-[#151515] font-semibold">
                    {" "}
                    Software is the most valuable leverage a modern business
                    possesses.
                  </strong>
                </p>
                <p>
                  When you partner with us, you don&apos;t get opaque account
                  managers. You work directly with engineers and designers who treat
                  your codebase with the highest degree of craft and care.
                </p>
                <p>
                  We build lean, modular, high-throughput systems that scale from
                  your first 1,000 users to millions of transactions without
                  flinching.
                </p>
              </div>

              {/* Verified Checklist */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "100% Full Codebase Ownership",
                  "Direct Slack / Discord Access",
                  "Zero Legacy Framework Bloat",
                  "Automated CI/CD Test Pipelines",
                  "Sub-100ms P95 Edge Performance",
                  "Transparent Weekly Sprints",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E85D3F] shrink-0" />
                    <span className="text-xs font-medium text-[#151515]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Evolution Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="card-light p-6 sm:p-8"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E7DED3]/70">
                <h3 className="font-display text-xl font-bold text-[#151515]">
                  Our Journey & Evolution
                </h3>
                <span className="text-xs font-mono font-medium text-[#E85D3F]">
                  Founded 2026 • Gurugram, Haryana
                </span>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#E7DED3]">
                {studioMilestones.map((m) => (
                  <div key={m.year} className="relative flex items-start gap-5">
                    <div className="w-7 h-7 rounded-full bg-white border-2 border-[#E85D3F] flex items-center justify-center shrink-0 z-10 shadow-xs">
                      <div className="w-2 h-2 rounded-full bg-[#E85D3F]" />
                    </div>
                    <div className="flex-1 -mt-0.5">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-xs font-mono font-bold text-[#E85D3F]">
                          {m.year}
                        </span>
                        <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-[#E7DED3]/50 text-[#68645F]">
                          {m.tag}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-base text-[#151515] mb-1.5">
                        {m.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. HOW WE THINK (ENGINEERING CREED) ── */}
      <section className="py-20 md:py-28 bg-[#FCFAF6] border-b border-[#E7DED3]/60">
        <div className="section-wrapper">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-display font-semibold tracking-[0.25em] uppercase text-[#E85D3F] mb-3 block">
              Core Principles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight mb-4">
              The Engineering Creed
            </h2>
            <p className="text-sm sm:text-base text-[#68645F] leading-relaxed">
              Every system we design and line of code we push is governed by four
              uncompromising pillars.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: "01",
                icon: TrendingUp,
                title: "Business ROI First",
                desc: "Code is a means to an end. We architect software to lower operating overhead, convert users, and accelerate company valuations.",
                accent: "text-[#E85D3F]",
                border: "hover:border-[#E85D3F]/40",
              },
              {
                num: "02",
                icon: Terminal,
                title: "Radical Type Safety",
                desc: "Strict TypeScript end-to-end. We catch errors at build-time rather than 3 AM in production. Zero tolerance for unhandled edge-cases.",
                accent: "text-[#b45309]",
                border: "hover:border-[#b45309]/40",
              },
              {
                num: "03",
                icon: Zap,
                title: "Sub-100ms Latency",
                desc: "Speed is a feature. We leverage edge networks, caching tiers, and optimized server components to deliver lightning-fast response times.",
                accent: "text-[#C9472D]",
                border: "hover:border-[#C9472D]/40",
              },
              {
                num: "04",
                icon: ShieldCheck,
                title: "Clean Ownership",
                desc: "No proprietary lock-in. We hand over modular, thoroughly documented repositories that any talented engineer can immediately build upon.",
                accent: "text-[#7c2d12]",
                border: "hover:border-[#7c2d12]/40",
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.55 }}
                  className={`card-light p-7 relative group transition-all duration-300 ${p.border}`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-[#E7DED3] group-hover:text-[#E85D3F] transition-colors">
                      {p.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F5F0E8] flex items-center justify-center text-[#151515] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 text-[#E85D3F]" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#151515] mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. STUDIO VISUAL SPOTLIGHT ── */}
      <section className="py-20 md:py-28 bg-[#F5F0E8]/40 border-b border-[#E7DED3]/70">
        <div className="section-wrapper">
          <div className="rounded-3xl border border-[#E7DED3] bg-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xs">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[11px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F] mb-3 block">
                  Studio Culture & Craft
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight mb-6">
                  Where ambitious ideas become world-class software.
                </h2>
                <p className="text-sm sm:text-base text-[#68645F] leading-relaxed mb-8">
                  From deep technical discussions in our internal RFCs to tactile
                  Figma prototypes and sub-second CI pipelines, CrestSoft operates
                  as an agile, precision laboratory for the world&apos;s most
                  exciting products.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/about/careers"
                    className="btn-primary px-6 py-3 text-sm shadow-md"
                  >
                    <span>Join Our Team (0–4 Yrs)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/about/how-we-work"
                    className="btn-outline px-6 py-3 text-sm"
                  >
                    <span>Our 5-Phase Process</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-[#E7DED3] shadow-lg relative aspect-[4/3]">
                  <Image
                    src={MountainImg}
                    alt="CrestSoft vision"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p
                      className="text-lg sm:text-xl font-medium leading-snug"
                      style={{
                        fontFamily: "var(--font-hand), cursive",
                        fontStyle: "italic",
                      }}
                    >
                      &ldquo;Simplicity is prerequisite for reliability.&rdquo;
                    </p>
                    <span className="text-xs text-white/70 tracking-wider uppercase mt-1 block font-mono">
                      — CrestSoft Engineering Creed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. BOTTOM CTA ── */}
      <section className="py-20 md:py-28 bg-[#FCFAF6]">
        <div className="section-wrapper text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200/60 text-[#C9472D] text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let&apos;s Shape What&apos;s Next</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#151515] tracking-tight mb-6">
            Ready to build something unforgettable?
          </h2>
          <p className="text-base sm:text-lg text-[#68645F] leading-relaxed mb-10">
            Whether you&apos;re launching a brand-new digital venture or looking
            to join our growing team of engineers, we&apos;d love to connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary px-8 py-3.5 text-base w-full sm:w-auto shadow-md justify-center"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about/careers"
              className="btn-outline px-8 py-3.5 text-base w-full sm:w-auto justify-center"
            >
              <span>Explore Open Roles (0–4 Yrs)</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
