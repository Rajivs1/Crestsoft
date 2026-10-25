"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  ShieldCheck,
  Server,
  Layers,
  ArrowRight,
  ArrowUpRight,
  Terminal,
  Activity,
  Globe,
  CheckCircle2,
  Sparkles,
  Database,
  Radio,
  Boxes,
  Code2,
} from "lucide-react";
import Link from "next/link";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { techRadarItems } from "@/data/aboutData";

export function TechInnovationPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const categories = [
    { id: "all", label: "Entire Stack" },
    { id: "frontend", label: "Frontend & Mobile" },
    { id: "backend", label: "Backend & Systems" },
    { id: "ai", label: "AI & Intelligence" },
    { id: "cloud", label: "Cloud & Edge" },
  ];

  const filteredTech = useMemo(() => {
    return techRadarItems.filter((item) => {
      const matchCat = activeCategory === "all" || item.category === activeCategory;
      const matchStatus =
        selectedStatus === "all" || item.status === selectedStatus;
      return matchCat && matchStatus;
    });
  }, [activeCategory, selectedStatus]);

  return (
    <div className="bg-[#FCFAF6] min-h-screen text-[#151515] pt-16 lg:pt-[72px]">
      {/* ── 1. ABOUT SUB-NAVIGATION AT THE VERY TOP ── */}
      <AboutSubNav />

      {/* ── 2. HERO SECTION ── */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#E7DED3]/70 bg-gradient-to-b from-[#F5F0E8]/70 via-[#FCFAF6] to-[#FCFAF6]">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] pointer-events-none rounded-full blur-3xl opacity-35"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(180,83,9,0.2) 0%, rgba(232,93,63,0.1) 50%, transparent 80%)",
          }}
        />

        <div className="section-wrapper relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E7DED3] bg-white/80 shadow-xs mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#b45309] animate-pulse" />
              <span className="text-[11px] font-display font-semibold tracking-[0.18em] uppercase text-[#68645F]">
                CrestSoft R&D • Tech & Innovation Radar 2026
              </span>
            </div>

            <h1
              className="font-display text-[#151515] font-extrabold tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.4rem)" }}
            >
              Engineering at the edge of <br />
              <span className="gradient-text-shimmer inline-block">
                scale and modern intelligence.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#68645F] max-w-2xl leading-relaxed mb-8">
              We don&apos;t chase hype. We systematically evaluate, battle-test,
              and deploy high-leverage technologies across React Server
              Components, distributed Go services, Edge runtimes, and Agentic AI.
            </p>

            {/* Live Reliability Ticker */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
              {[
                { label: "P95 Edge Latency", value: "<85ms", icon: Zap },
                { label: "Type Coverage", value: "100%", icon: Terminal },
                { label: "Uptime Standard", value: "99.98%", icon: ShieldCheck },
                { label: "Cold Start Overhead", value: "0ms", icon: Server },
              ].map((m) => {
                const IconComponent = m.icon;
                return (
                  <div
                    key={m.label}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white/80 border border-[#E7DED3] shadow-xs"
                  >
                    <div className="flex items-center gap-1.5 text-[#b45309] mb-1">
                      <IconComponent className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#a89a8a]">
                        Telemetry
                      </span>
                    </div>
                    <div className="text-xl sm:text-2xl font-display font-bold text-[#151515] tracking-tight">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-[#68645F] truncate">
                      {m.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. TECH RADAR MATRIX ── */}
      <section className="py-20 md:py-28 bg-[#FCFAF6] border-b border-[#E7DED3]/70">
        <div className="section-wrapper">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-[11px] font-display font-semibold tracking-[0.25em] uppercase text-[#b45309] mb-2 block">
                Production Stack
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight">
                Our Technology Radar
              </h2>
              <p className="text-sm text-[#68645F] max-w-xl mt-1">
                Every technology in our radar is evaluated on three criteria: code
                maintainability, real-world execution speed, and long-term durability.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#151515] text-white shadow-xs"
                        : "bg-white/80 text-[#68645F] hover:text-[#151515] border border-[#E7DED3]"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Technology Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredTech.map((tech) => {
              const isCore = tech.status === "Core Standard";
              return (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="card-light p-6 flex flex-col justify-between hover:border-[#b45309]/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full ${
                          isCore
                            ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                            : "bg-amber-100 text-amber-900 border border-amber-200"
                        }`}
                      >
                        {tech.status}
                      </span>
                      <span className="text-[11px] font-mono text-[#a89a8a] capitalize">
                        {tech.category}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base sm:text-lg text-[#151515] mb-1">
                      {tech.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#b45309] mb-3">
                      {tech.role}
                    </p>
                    <p className="text-xs text-[#68645F] leading-relaxed mb-4">
                      {tech.whyChosen}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E7DED3]/60 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#a89a8a]">
                      Benchmark
                    </span>
                    <span className="text-xs font-mono font-bold text-[#151515]">
                      {tech.metrics}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. APPLIED AI & CRESTSOFT LABS ── */}
      <section className="py-20 md:py-28 bg-[#F5F0E8]/40 border-b border-[#E7DED3]/70">
        <div className="section-wrapper">
          <div className="max-w-2xl mb-14">
            <span className="text-[11px] font-display font-semibold tracking-[0.25em] uppercase text-[#b45309] mb-2 block">
              Internal R&D Lab
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight mb-4">
              Where Innovation Meets Reality
            </h2>
            <p className="text-sm sm:text-base text-[#68645F] leading-relaxed">
              We allocate 10% of our engineering bandwidth to build prototypes,
              evaluate upcoming protocols, and test emerging architectures before
              recommending them to clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Boxes,
                title: "Autonomous Agent Orchestrators",
                badge: "Applied AI",
                desc: "Moving beyond simple prompt completions to deterministic multi-agent state graphs. Agents perform schema validation, API calls, and self-correction before rendering conclusions.",
                tags: ["LangChain", "Gemini 2.0", "FastAPI", "Tool Calling"],
              },
              {
                icon: Radio,
                title: "Real-Time Collaborative Canvas",
                badge: "Systems",
                desc: "Sub-50ms peer-to-peer state synchronization utilizing Conflict-free Replicated Data Types (CRDTs) and WebSockets over distributed edge nodes.",
                tags: ["WebSockets", "CRDTs", "Redis Pub/Sub", "Three.js"],
              },
              {
                icon: Layers,
                title: "Tactile Spatial Web Interfaces",
                badge: "Frontend UI",
                desc: "Blending GPU-accelerated WebGL shaders and spring physics into enterprise web tools. Creating interfaces that feel alive without slowing down browser execution.",
                tags: ["Three.js", "GLSL Shaders", "Framer Motion", "60 FPS"],
              },
              {
                icon: Server,
                title: "Zero-Cold-Start Edge Architecture",
                badge: "Cloud Infra",
                desc: "Running full-featured API handlers directly inside Cloudflare Workers and V8 isolates across 300+ global cities with zero JVM or container boot delay.",
                tags: ["V8 Isolates", "Cloudflare", "Edge KV", "Sub-15ms"],
              },
            ].map((lab) => {
              const Icon = lab.icon;
              return (
                <div
                  key={lab.title}
                  className="card-light p-7 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#b45309]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                        {lab.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-[#151515] mb-2">
                      {lab.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed mb-6">
                      {lab.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E7DED3]/60 flex flex-wrap gap-1.5">
                    {lab.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white border border-[#E7DED3] text-[#151515]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. ARCHITECTURE PRINCIPLES ── */}
      <section className="py-20 md:py-28 bg-[#FCFAF6]">
        <div className="section-wrapper">
          <div className="rounded-3xl border border-[#E7DED3] bg-white p-8 sm:p-12 lg:p-16 shadow-xs">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[11px] font-display font-semibold tracking-[0.2em] uppercase text-[#b45309] mb-3 block">
                  Engineering Standards
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight mb-6">
                  Quality is not an afterthought. It&apos;s encoded in our CI/CD.
                </h2>
                <div className="space-y-4 text-sm text-[#68645F] leading-relaxed mb-8">
                  <p>
                    Every pull request submitted at CrestSoft runs through a battery
                    of automated checks: strict TypeScript compilation, unit test
                    suites, visual regression scans, and Core Web Vitals audits.
                  </p>
                  <p>
                    We guarantee that the code we ship is free of dead branches,
                    vulnerabilities, and undocumented technical shortcuts.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="btn-primary px-6 py-3 text-sm shadow-md"
                  >
                    <span>Discuss Your Architecture</span>
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

              <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0e13] text-white font-mono text-xs border border-white/10 shadow-xl overflow-hidden">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-white/40 ml-2">crestsoft-ci.yml</span>
                </div>
                <div className="space-y-2 text-white/80">
                  <p className="text-emerald-400">✓ TypeCheck: 0 errors across 48,200 LOC</p>
                  <p className="text-emerald-400">✓ E2E Tests: 142 passed (100% assertions)</p>
                  <p className="text-emerald-400">✓ Lighthouse Performance: 99 / 100</p>
                  <p className="text-emerald-400">✓ Security Audit: Zero known CVEs found</p>
                  <p className="text-white/40 pt-2">→ Artifact bundled in 1.42s</p>
                  <p className="text-amber-400">→ Deployed to 310 edge regions worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
