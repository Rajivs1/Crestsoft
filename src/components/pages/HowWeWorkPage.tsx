"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Terminal,
  Zap,
  MessageSquare,
  FileCode,
  Lock,
  GitBranch,
} from "lucide-react";
import Link from "next/link";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { studioWorkflow, clientCollaborationPillars } from "@/data/aboutData";

export function HowWeWorkPage() {
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
              "radial-gradient(ellipse at center, rgba(232,93,63,0.2) 0%, rgba(201,71,45,0.08) 50%, transparent 80%)",
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
              <span className="w-2 h-2 rounded-full bg-[#E85D3F] animate-pulse" />
              <span className="text-[11px] font-display font-semibold tracking-[0.18em] uppercase text-[#68645F]">
                Our Process • Studio Methodology & Standards
              </span>
            </div>

            <h1
              className="font-display text-[#151515] font-extrabold tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.4rem)" }}
            >
              How we turn ambitious ideas into <br />
              <span className="gradient-text-shimmer inline-block">
                bulletproof software.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#68645F] max-w-2xl leading-relaxed mb-8">
              Predictable execution, zero technical shortcuts, and complete
              transparency. Here is the exact blueprint we follow to design,
              engineer, and deploy mission-critical products.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-primary px-6 py-3 text-sm shadow-md"
              >
                <span>Initiate a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about/tech-innovation"
                className="btn-outline px-6 py-3 text-sm"
              >
                <span>Explore Tech Radar</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. COLLABORATION PILLARS (HOW CLIENTS EXPERIENCE US) ── */}
      <section className="py-20 md:py-24 bg-[#FCFAF6] border-b border-[#E7DED3]/70">
        <div className="section-wrapper">
          <div className="max-w-3xl mb-14">
            <span className="text-[11px] font-display font-semibold tracking-[0.25em] uppercase text-[#E85D3F] mb-2 block">
              The Client Experience
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight mb-4">
              A partnership founded on radical clarity.
            </h2>
            <p className="text-base text-[#68645F] leading-relaxed">
              We eliminated the traditional agency bloat. No confusing change
              orders, no opaque project managers — just direct communication with
              the builders creating your software.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientCollaborationPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-light p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#E85D3F] mb-5">
                    {i === 0 && <MessageSquare className="w-5 h-5" />}
                    {i === 1 && <Lock className="w-5 h-5" />}
                    {i === 2 && <GitBranch className="w-5 h-5" />}
                    {i === 3 && <ShieldCheck className="w-5 h-5" />}
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#151515] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. THE 5-PHASE STUDIO BLUEPRINT ── */}
      <section className="py-20 md:py-28 bg-[#F5F0E8]/40 border-b border-[#E7DED3]/70">
        <div className="section-wrapper">
          <div className="max-w-2xl mb-14">
            <span className="text-[11px] font-display font-semibold tracking-[0.25em] uppercase text-[#E85D3F] mb-2 block">
              Step-by-Step Delivery
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight mb-4">
              The 5-Phase Engineering Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-[#68645F] leading-relaxed">
              From the initial architecture blueprint to production zero-downtime
              deployment, every milestone is structured for precision and speed.
            </p>
          </div>

          <div className="space-y-6">
            {studioWorkflow.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-light p-6 sm:p-8"
              >
                <div className="grid lg:grid-cols-[140px_1fr_320px] gap-6 items-start">
                  {/* Step + Timeline */}
                  <div>
                    <span className="font-mono text-3xl font-extrabold text-[#E85D3F] block">
                      {step.step}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#a89a8a] mt-1 block">
                      {step.timeline}
                    </span>
                  </div>

                  {/* Headline & Description */}
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#151515] block mb-1">
                      {step.phase}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#151515] mb-2">
                      {step.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7DED3]">
                    <span className="text-[11px] font-mono font-bold uppercase text-[#a89a8a] block mb-2.5">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-xs font-medium text-[#151515]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D3F] shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. STUDIO TOOLING & STANDARDS ── */}
      <section className="py-20 md:py-28 bg-[#FCFAF6] border-b border-[#E7DED3]/70">
        <div className="section-wrapper">
          <div className="rounded-3xl border border-[#E7DED3] bg-white p-8 sm:p-12 lg:p-16 shadow-xs">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[11px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F] mb-3 block">
                  Tooling & Stack
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight mb-6">
                  Industry-leading infrastructure powering every sprint.
                </h2>
                <div className="space-y-4 text-sm text-[#68645F] leading-relaxed mb-8">
                  <p>
                    We leverage modern collaborative tools: Slack for real-time
                    developer chats, Linear for sprint velocity, GitHub for pull
                    requests and continuous integration, and Figma for design tokens.
                  </p>
                  <p>
                    Every client receives direct invites to their project board
                    with complete visibility into backlog, in-progress tasks, and
                    staging releases.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="btn-primary px-6 py-3 text-sm shadow-md"
                  >
                    <span>Start Your First Sprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/about/careers"
                    className="btn-outline px-6 py-3 text-sm"
                  >
                    <span>Join Our Engineering Team</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Tooling Badges Card */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { name: "GitHub Actions", desc: "Automated CI/CD & testing" },
                  { name: "Figma Dev Mode", desc: "Design tokens & 1:1 specs" },
                  { name: "Linear App", desc: "Transparent agile roadmaps" },
                  { name: "Slack Connect", desc: "Direct engineering channel" },
                  { name: "Vercel & Edge", desc: "Instant preview deployments" },
                  { name: "Postman & tRPC", desc: "Type-safe API validation" },
                ].map((tool) => (
                  <div
                    key={tool.name}
                    className="p-4 rounded-2xl bg-[#F5F0E8]/70 border border-[#E7DED3]"
                  >
                    <div className="font-display font-bold text-sm text-[#151515]">
                      {tool.name}
                    </div>
                    <div className="text-[11px] text-[#68645F] mt-0.5">
                      {tool.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. BOTTOM CTA ── */}
      <section className="py-20 md:py-28 bg-[#FCFAF6]">
        <div className="section-wrapper text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200/60 text-[#C9472D] text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Zero-Surprise Execution?</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#151515] tracking-tight mb-6">
            Let&apos;s engineer your next digital breakthrough.
          </h2>
          <p className="text-base sm:text-lg text-[#68645F] leading-relaxed mb-10">
            Tell us about your product challenge or technology roadmap, and we will
            deliver an architectural proposal within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary px-8 py-3.5 text-base w-full sm:w-auto shadow-md justify-center"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about/careers"
              className="btn-outline px-8 py-3.5 text-base w-full sm:w-auto justify-center"
            >
              <span>View Open Roles (0–4 Yrs)</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
