"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  ExternalLink,
  Shield,
  Zap,
  Lock,
  Server,
  Activity,
  Calendar,
  Layers,
  Cpu,
  Smartphone,
  Globe,
  Cloud,
  ChevronDown,
  Clock,
  Code2,
  TrendingUp,
  Sliders,
  Compass,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { ProjectEstimator } from "@/components/cta/ProjectEstimator";

// Bespoke generated service showcase images
import WebDevImg from "@/assets/services/service_web_dev.jpg";
import WebAppImg from "@/assets/services/service_web_app.jpg";
import MobileImg from "@/assets/services/service_mobile_app.jpg";
import CustomImg from "@/assets/services/service_custom_software.jpg";
import CloudImg from "@/assets/services/service_cloud_devops.jpg";

interface TabData {
  id: string;
  title: string;
  shortDesc: string;
  tagline: string;
  icon: typeof Globe;
  image: typeof WebDevImg;
  badge: string;
  metrics: { label: string; value: string };
  deliverables: string[];
  techStack: string[];
}

const serviceTabsData: TabData[] = [
  {
    id: "web-development",
    title: "Web Development",
    shortDesc:
      "Bespoke, high-converting websites engineered with Next.js 16 App Router, tailored typography, and search engine dominance.",
    tagline: "Sub-second load times & 60fps editorial layouts",
    icon: Globe,
    image: WebDevImg,
    badge: "Flagship",
    metrics: { label: "Lighthouse Score", value: "100/100" },
    deliverables: [
      "Sub-second load times & Core Web Vitals optimization",
      "Headless CMS integration (Sanity, Strapi, Contentful)",
      "Buttery fluid micro-animations & responsive layouts",
      "Built-in SEO metadata & social sharing architectures",
    ],
    techStack: ["Next.js 16", "Tailwind CSS", "TypeScript", "Framer Motion", "Vercel Edge"],
  },
  {
    id: "web-applications",
    title: "Web Apps & SaaS",
    shortDesc:
      "Complex, multi-tenant web applications and SaaS platforms engineered for high throughput, data integrity, and silky smooth UX.",
    tagline: "Scalable multi-tenant databases with role-based access",
    icon: Layers,
    image: WebAppImg,
    badge: "High Demand",
    metrics: { label: "Uptime SLA", value: "99.9%" },
    deliverables: [
      "Multi-tenant SaaS architectures with strict tenant isolation",
      "Role-based access control (RBAC) & enterprise SSO",
      "Real-time analytics, filtering, & CSV/PDF reporting",
      "Secure Stripe, Razorpay, or Paddle payment gateways",
    ],
    techStack: ["React 18", "PostgreSQL", "Prisma / Drizzle", "REST & GraphQL", "Stripe API", "Node.js"],
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    shortDesc:
      "Native-feel cross-platform mobile apps for iOS & Android built for offline resilience, biometric security, and rapid App Store approval.",
    tagline: "Single codebase with 60fps native gestures",
    icon: Smartphone,
    image: MobileImg,
    badge: "iOS & Android",
    metrics: { label: "Frame Rate", value: "60 FPS" },
    deliverables: [
      "Single codebase for iOS and Android with native performance",
      "Offline-first sync with local data storage",
      "Push notification setup & biometric authentication",
      "Full App Store and Google Play deployment management",
    ],
    techStack: ["React Native", "Flutter", "Expo", "Fastlane", "Push Notifications", "Biometrics"],
  },
  {
    id: "custom-software",
    title: "Custom Software",
    shortDesc:
      "Bespoke enterprise systems and internal tools tailored to your operational workflows, replacing fragmented third-party subscriptions.",
    tagline: "Unified internal platforms with 100% IP ownership",
    icon: Cpu,
    image: CustomImg,
    badge: "Enterprise",
    metrics: { label: "Microservice Latency", value: "<15ms" },
    deliverables: [
      "Custom operational workflows, ERP, and CRM tools",
      "Clean RESTful and GraphQL API backends",
      "Third-party integrations (accounting, logistics, CRM)",
      "Comprehensive API schemas and technical documentation",
    ],
    techStack: ["Node.js", "Python", "PostgreSQL", "Redis", "Microservices", "Docker"],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    shortDesc:
      "Resilient cloud infrastructure, automated zero-downtime CI/CD pipelines, and proactive 24/7 observability clusters.",
    tagline: "Automated edge deployments with zero-downtime rollouts",
    icon: Cloud,
    image: CloudImg,
    badge: "Infrastructure",
    metrics: { label: "Deployment Speed", value: "1.8s" },
    deliverables: [
      "Automated CI/CD pipelines (GitHub Actions, GitLab CI)",
      "AWS, GCP, and Vercel serverless architectures",
      "Containerization with Docker & Kubernetes orchestration",
      "24/7 uptime monitoring & automated failover protocols",
    ],
    techStack: ["AWS", "Vercel", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
];

const faqs = [
  {
    q: "How does CrestSoft approach sprint timelines and delivery?",
    a: "We structure our builds into rapid 2-week milestones. You get full visibility into working staging environments at the end of every sprint, ensuring rapid feedback and zero surprises upon launch.",
  },
  {
    q: "Do we retain 100% ownership of the code and intellectual property?",
    a: "Yes. From day one, all repositories, cloud credentials, Figma designs, and codebase assets belong solely to your organization with full documentation and no vendor lock-in.",
  },
  {
    q: "Can CrestSoft take over or refactor an existing codebase?",
    a: "Absolutely. We perform comprehensive technical audits (identifying performance bottlenecks, security vulnerabilities, and legacy architectural debt) before providing a clear refactoring roadmap.",
  },
  {
    q: "What post-launch maintenance and support options do you offer?",
    a: "We provide SLA-backed maintenance tiers covering security updates, continuous dependency upgrades, automated uptime monitoring, and ongoing feature expansion sprints.",
  },
];

export function ServicesPage() {
  const [selectedTab, setSelectedTab] = useState<string>("web-development");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activeTabData = serviceTabsData.find((t) => t.id === selectedTab) || serviceTabsData[0];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#FCFAF6] min-h-screen text-[#151515] selection:bg-[#E85D3F]/20 selection:text-[#7c2d12]">
      {/* ── 1. Page Hero Section ── */}
      <section
        id="overview"
        className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden"
      >
        {/* Ambient warm background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] max-w-[900px] max-h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(232,93,63,0.14) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Subtle decorative grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(21,21,21,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="section-wrapper relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E85D3F] animate-ping" />
              <span className="text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F] px-3 py-1 rounded-full border border-[#E85D3F]/20 bg-[#E85D3F]/5">
                CrestSoft Capabilities
              </span>
            </div>

            <h1
              className="font-display font-bold text-[#151515] leading-[1.04] mb-6 tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.4rem)" }}
            >
              Engineered for speed.<br />
              <span className="gradient-text-shimmer inline-block">Crafted for scale.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#68645F] max-w-2xl leading-relaxed mb-8">
              We design, architect, and deploy digital products for companies that value speed, visual craft, and maintainable software architecture. Choose an offering below to explore our technical capabilities.
            </p>

            {/* Quick Highlights */}
            <div className="flex flex-wrap gap-2.5 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#E7DED3] text-[#151515] shadow-xs hover:border-[#E85D3F]/40 transition-colors">
                <Zap className="w-3.5 h-3.5 text-[#E85D3F]" /> Sub-Second Performance
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#E7DED3] text-[#151515] shadow-xs hover:border-emerald-500/40 transition-colors">
                <Shield className="w-3.5 h-3.5 text-emerald-600" /> 100% Code & IP Ownership
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#E7DED3] text-[#151515] shadow-xs hover:border-[#E85D3F]/40 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-[#E85D3F]" /> 60fps Micro-Animations
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Interactive "Explore by Choice" Stage ── */}
      <section className="py-8 bg-[#F5F0E8]/50 border-y border-[#E7DED3]/80">
        <div className="section-wrapper">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] font-display font-bold uppercase tracking-wider text-[#E85D3F]">
                Interactive Navigator
              </span>
              <h2 className="text-lg sm:text-xl font-display font-bold text-[#151515]">
                Select a capability to preview architecture
              </h2>
            </div>
            <span className="text-xs text-[#68645F] hidden sm:block">
              Click tabs to switch live preview
            </span>
          </div>

          {/* Tab Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-6">
            {serviceTabsData.map((tab) => {
              const Icon = tab.icon;
              const isSelected = selectedTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedTab(tab.id)}
                  className={`relative px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-[#151515] text-white shadow-md scale-[1.02]"
                      : "bg-white/80 text-[#68645F] hover:text-[#151515] hover:bg-white border border-[#E7DED3]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#E85D3F]" : "text-[#68645F]"}`} />
                  <span>{tab.title}</span>
                  {isSelected && (
                    <motion.span
                      layoutId="choiceTabIndicator"
                      className="w-1.5 h-1.5 rounded-full bg-[#E85D3F]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Preview Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabData.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="card-light p-6 sm:p-8 bg-white border border-[#E7DED3] shadow-xl rounded-2xl overflow-hidden relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Info Column */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-display font-semibold uppercase tracking-widest text-[#E85D3F] px-2.5 py-0.5 rounded-full bg-[#E85D3F]/10 border border-[#E85D3F]/20">
                      {activeTabData.badge}
                    </span>
                    <span className="text-xs text-[#a89a8a]">•</span>
                    <span className="text-xs font-mono text-[#68645F]">
                      {activeTabData.metrics.label}: <strong className="text-[#151515]">{activeTabData.metrics.value}</strong>
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#151515] leading-tight">
                    {activeTabData.title}
                  </h3>

                  <p className="text-sm text-[#68645F] leading-relaxed">
                    {activeTabData.shortDesc}
                  </p>

                  {/* Bullet Deliverables */}
                  <div className="space-y-2">
                    {activeTabData.deliverables.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-[#5c5750]">
                        <span className="w-4 h-4 rounded-full bg-[#E85D3F]/15 flex items-center justify-center text-[#E85D3F] shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeTabData.techStack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium text-[#68645F] bg-[#F5F0E8] border border-[#E7DED3]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action row */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => scrollToSection(activeTabData.id)}
                      className="btn-primary btn-shimmer px-5 py-2.5 text-xs font-semibold inline-flex items-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>Explore In-Depth Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <Link
                      href={`/contact?service=${activeTabData.id}`}
                      className="px-4 py-2.5 rounded-xl border border-[#E7DED3] text-xs font-medium text-[#68645F] hover:text-[#151515] hover:bg-[#FCFAF6] transition"
                    >
                      Start Project
                    </Link>
                  </div>
                </div>

                {/* Right Image Mockup Preview */}
                <div className="lg:col-span-6 relative">
                  <div className="relative rounded-2xl overflow-hidden border border-[#E7DED3] shadow-lg group">
                    {/* Visual Mac-style Topbar */}
                    <div className="bg-[#F5F0E8] px-4 py-2 border-b border-[#E7DED3] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                      </div>
                      <span className="text-[10px] font-mono text-[#68645F]">
                        crestsoft://{activeTabData.id}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/5">
                      <Image
                        src={activeTabData.image}
                        alt={activeTabData.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        placeholder="blur"
                        priority
                      />
                      {/* Sheen reflection overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Floating micro-badge */}
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#E7DED3] shadow-md flex items-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#E85D3F]" />
                      <span className="text-xs font-semibold text-[#151515]">{activeTabData.tagline}</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── 3. Detailed Services Showcase (5 In-Depth Sections) ── */}
      <div className="py-16 sm:py-24 space-y-28 sm:space-y-36">
        {/* ── Service 1: Web Development ── */}
        <section id="web-development" className="scroll-mt-36">
          <div className="section-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-display font-bold text-[#E85D3F]">01</span>
                  <span className="w-1 h-1 rounded-full bg-[#E7DED3]" />
                  <span className="text-[10px] font-display font-semibold uppercase tracking-widest text-[#E85D3F] px-2.5 py-0.5 rounded-full bg-[#E85D3F]/10 border border-[#E85D3F]/20">
                    Flagship Offering
                  </span>
                </div>

                <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#151515] leading-tight mb-4">
                  Web Development & Experiences
                </h2>
                <p className="text-sm sm:text-base text-[#68645F] leading-relaxed mb-6">
                  Modern websites engineered with Next.js 16 App Router, tailored typography, and search engine dominance. We turn complex business requirements into fast, accessible, and high-converting web presences.
                </p>

                {/* Deliverables */}
                <div className="space-y-3 mb-8">
                  {[
                    "Sub-second load times & Core Web Vitals optimization",
                    "Headless CMS integration (Sanity, Strapi, Contentful)",
                    "Buttery fluid micro-animations & responsive layouts",
                    "Built-in SEO metadata & social sharing architectures",
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-3 text-xs sm:text-sm text-[#5c5750]">
                      <span className="w-5 h-5 rounded-full bg-[#E85D3F]/15 flex items-center justify-center text-[#E85D3F] shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Next.js 16", "Tailwind CSS", "TypeScript", "Framer Motion", "Vercel Edge"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-medium text-[#68645F] bg-white border border-[#E7DED3] shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact?service=web-development"
                  className="btn-primary btn-shimmer px-7 py-3 text-xs font-semibold inline-flex items-center gap-2"
                >
                  <span>Start Web Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>

              {/* Bespoke Visual Mockup Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="card-light p-2.5 sm:p-3 relative overflow-hidden bg-white/95 border border-[#E7DED3] shadow-2xl rounded-2xl group">
                  {/* Browser Header */}
                  <div className="flex items-center justify-between px-3 py-2 border-b border-[#E7DED3]/70 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="px-3 py-0.5 rounded-full bg-[#F5F0E8] text-[10px] font-mono text-[#68645F] flex items-center gap-1">
                      <Lock className="w-2.5 h-2.5 text-emerald-600" />
                      <span>https://crestsoft.in/web-architecture</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 font-medium">60 FPS</span>
                  </div>

                  {/* Image Canvas */}
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                    <Image
                      src={WebDevImg}
                      alt="Web Development Showcase"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      placeholder="blur"
                    />
                  </div>

                  {/* Floating Metric Overlay */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E7DED3] shadow-xl flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#a89a8a] block">Core Web Vitals</span>
                      <strong className="text-sm font-display text-[#151515]">Sub-Second Edge Render</strong>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold">
                        100/100
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Service 2: Web Applications & SaaS ── */}
        <section id="web-applications" className="scroll-mt-36">
          <div className="section-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Bespoke Visual Mockup Side (Alternating on Desktop) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="order-2 lg:order-1 relative"
              >
                <div className="card-light p-2.5 sm:p-3 relative overflow-hidden bg-white/95 border border-[#E7DED3] shadow-2xl rounded-2xl group">
                  {/* Dashboard Mockup Header */}
                  <div className="flex items-center justify-between px-3 py-2 border-b border-[#E7DED3]/70 mb-2">
                    <div className="flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-[#E85D3F]" />
                      <span className="font-display font-bold text-xs text-[#151515]">Multi-Tenant SaaS Engine</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-medium">
                      ● Live Sync
                    </span>
                  </div>

                  {/* Image Canvas */}
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                    <Image
                      src={WebAppImg}
                      alt="Web Applications & SaaS Dashboard"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      placeholder="blur"
                    />
                  </div>

                  {/* Floating Analytics Pill */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E7DED3] shadow-xl flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#a89a8a] block">Monthly Recurring Revenue</span>
                      <strong className="text-sm font-display text-[#151515]">$28,450 / month</strong>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-orange-100 text-[#E85D3F] text-xs font-bold">
                      +15.3% Growth
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="order-1 lg:order-2"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-display font-bold text-[#E85D3F]">02</span>
                  <span className="w-1 h-1 rounded-full bg-[#E7DED3]" />
                  <span className="text-[10px] font-display font-semibold uppercase tracking-widest text-[#E85D3F] px-2.5 py-0.5 rounded-full bg-[#E85D3F]/10 border border-[#E85D3F]/20">
                    High Throughput
                  </span>
                </div>

                <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#151515] leading-tight mb-4">
                  Web Applications & SaaS
                </h2>
                <p className="text-sm sm:text-base text-[#68645F] leading-relaxed mb-6">
                  Complex web platforms designed for real-world business workflows. We engineer multi-tenant software, high-throughput database layers, and intuitive interfaces that delight users and scale seamlessly.
                </p>

                {/* Deliverables */}
                <div className="space-y-3 mb-8">
                  {[
                    "Multi-tenant SaaS architectures with strict tenant isolation",
                    "Role-based access control (RBAC) & enterprise SSO",
                    "Real-time analytics, filtering, & CSV/PDF reporting",
                    "Secure Stripe, Razorpay, or Paddle payment gateways",
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-3 text-xs sm:text-sm text-[#5c5750]">
                      <span className="w-5 h-5 rounded-full bg-[#E85D3F]/15 flex items-center justify-center text-[#E85D3F] shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["React 18", "PostgreSQL", "Prisma / Drizzle", "REST & GraphQL", "Stripe API", "Node.js"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-medium text-[#68645F] bg-white border border-[#E7DED3] shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact?service=web-applications"
                  className="btn-primary btn-shimmer px-7 py-3 text-xs font-semibold inline-flex items-center gap-2"
                >
                  <span>Start Web App Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Service 3: Mobile Applications ── */}
        <section id="mobile-applications" className="scroll-mt-36">
          <div className="section-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-display font-bold text-[#E85D3F]">03</span>
                  <span className="w-1 h-1 rounded-full bg-[#E7DED3]" />
                  <span className="text-[10px] font-display font-semibold uppercase tracking-widest text-[#E85D3F] px-2.5 py-0.5 rounded-full bg-[#E85D3F]/10 border border-[#E85D3F]/20">
                    Cross-Platform
                  </span>
                </div>

                <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#151515] leading-tight mb-4">
                  Mobile Applications
                </h2>
                <p className="text-sm sm:text-base text-[#68645F] leading-relaxed mb-6">
                  Cross-platform mobile experiences that feel truly native, responsive, and purposeful. Built for fast store approvals, offline reliability, and silky smooth 60fps gesture navigation.
                </p>

                {/* Deliverables */}
                <div className="space-y-3 mb-8">
                  {[
                    "Single codebase for iOS and Android with native performance",
                    "Offline-first sync with local data storage",
                    "Push notification setup & biometric authentication",
                    "Full App Store and Google Play deployment management",
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-3 text-xs sm:text-sm text-[#5c5750]">
                      <span className="w-5 h-5 rounded-full bg-[#E85D3F]/15 flex items-center justify-center text-[#E85D3F] shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["React Native", "Flutter", "Expo", "Fastlane", "Push Notifications", "Biometrics"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-medium text-[#68645F] bg-white border border-[#E7DED3] shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact?service=mobile-applications"
                  className="btn-primary btn-shimmer px-7 py-3 text-xs font-semibold inline-flex items-center gap-2"
                >
                  <span>Start Mobile Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>

              {/* Bespoke Visual Mockup Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="card-light p-2.5 sm:p-3 relative overflow-hidden bg-white/95 border border-[#E7DED3] shadow-2xl rounded-2xl group">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-[#E7DED3]/70 mb-2">
                    <span className="text-xs font-display font-bold text-[#151515]">iOS & Android Unified Build</span>
                    <span className="text-[10px] text-[#E85D3F] font-semibold">Store Ready</span>
                  </div>

                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                    <Image
                      src={MobileImg}
                      alt="Mobile Applications UI Showcase"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      placeholder="blur"
                    />
                  </div>

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E7DED3] shadow-xl flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#a89a8a] block">Gesture Physics</span>
                      <strong className="text-sm font-display text-[#151515]">60fps Native Navigation</strong>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold">
                      iOS 18 + Android 15
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Service 4: Custom Software ── */}
        <section id="custom-software" className="scroll-mt-36">
          <div className="section-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Bespoke Visual Mockup Side (Alternating) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="order-2 lg:order-1 relative"
              >
                <div className="card-light p-2.5 sm:p-3 relative overflow-hidden bg-white/95 border border-[#E7DED3] shadow-2xl rounded-2xl group">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-[#E7DED3]/70 mb-2">
                    <span className="text-xs font-display font-bold text-[#151515]">Microservice Logic & ETL Flow</span>
                    <span className="text-[10px] text-emerald-600 font-semibold font-mono">12.4ms latency</span>
                  </div>

                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                    <Image
                      src={CustomImg}
                      alt="Custom Enterprise Software Architecture"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      placeholder="blur"
                    />
                  </div>

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E7DED3] shadow-xl flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#a89a8a] block">Data Reliability</span>
                      <strong className="text-sm font-display text-[#151515]">Encrypted High-Availability Cluster</strong>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-orange-100 text-[#E85D3F] text-xs font-bold">
                      100% Owned IP
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="order-1 lg:order-2"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-display font-bold text-[#E85D3F]">04</span>
                  <span className="w-1 h-1 rounded-full bg-[#E7DED3]" />
                  <span className="text-[10px] font-display font-semibold uppercase tracking-widest text-[#E85D3F] px-2.5 py-0.5 rounded-full bg-[#E85D3F]/10 border border-[#E85D3F]/20">
                    Bespoke Systems
                  </span>
                </div>

                <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#151515] leading-tight mb-4">
                  Custom Software & Systems
                </h2>
                <p className="text-sm sm:text-base text-[#68645F] leading-relaxed mb-6">
                  Bespoke software engineered to fit your exact business logic and long-term goals. We replace fragmented third-party tools with unified, owned internal platforms with zero recurring per-seat fees.
                </p>

                {/* Deliverables */}
                <div className="space-y-3 mb-8">
                  {[
                    "Custom operational workflows, ERP, and CRM tools",
                    "Clean RESTful and GraphQL API backends",
                    "Third-party integrations (accounting, logistics, CRM)",
                    "Comprehensive API schemas and technical documentation",
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-3 text-xs sm:text-sm text-[#5c5750]">
                      <span className="w-5 h-5 rounded-full bg-[#E85D3F]/15 flex items-center justify-center text-[#E85D3F] shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Node.js", "Python", "PostgreSQL", "Redis", "Microservices", "Docker"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-medium text-[#68645F] bg-white border border-[#E7DED3] shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact?service=custom-software"
                  className="btn-primary btn-shimmer px-7 py-3 text-xs font-semibold inline-flex items-center gap-2"
                >
                  <span>Build Custom Software</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Service 5: Cloud & DevOps ── */}
        <section id="cloud-devops" className="scroll-mt-36">
          <div className="section-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-display font-bold text-[#E85D3F]">05</span>
                  <span className="w-1 h-1 rounded-full bg-[#E7DED3]" />
                  <span className="text-[10px] font-display font-semibold uppercase tracking-widest text-[#E85D3F] px-2.5 py-0.5 rounded-full bg-[#E85D3F]/10 border border-[#E85D3F]/20">
                    Reliability First
                  </span>
                </div>

                <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#151515] leading-tight mb-4">
                  Cloud Infrastructure & DevOps
                </h2>
                <p className="text-sm sm:text-base text-[#68645F] leading-relaxed mb-6">
                  Scalable cloud architecture, continuous deployment pipelines, and infrastructure that grows with you. Zero-downtime releases, automated container clusters, and proactive 24/7 monitoring.
                </p>

                {/* Deliverables */}
                <div className="space-y-3 mb-8">
                  {[
                    "Automated CI/CD pipelines (GitHub Actions, GitLab CI)",
                    "AWS, GCP, and Vercel serverless architectures",
                    "Containerization with Docker & Kubernetes orchestration",
                    "24/7 uptime monitoring & automated failover protocols",
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-3 text-xs sm:text-sm text-[#5c5750]">
                      <span className="w-5 h-5 rounded-full bg-[#E85D3F]/15 flex items-center justify-center text-[#E85D3F] shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["AWS", "Vercel", "Docker", "Kubernetes", "Terraform", "GitHub Actions"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-medium text-[#68645F] bg-white border border-[#E7DED3] shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact?service=cloud-devops"
                  className="btn-primary btn-shimmer px-7 py-3 text-xs font-semibold inline-flex items-center gap-2"
                >
                  <span>Deploy Cloud Setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>

              {/* Bespoke Visual Mockup Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="card-light p-2.5 sm:p-3 relative overflow-hidden bg-white/95 border border-[#E7DED3] shadow-2xl rounded-2xl group">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-[#E7DED3]/70 mb-2">
                    <div className="flex items-center gap-2">
                      <Cloud className="w-3.5 h-3.5 text-[#E85D3F]" />
                      <span className="font-display font-bold text-xs text-[#151515]">Cloud Operations Console</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 font-semibold font-mono">● 99.99% Edge SLA</span>
                  </div>

                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                    <Image
                      src={CloudImg}
                      alt="Cloud Infrastructure and DevOps Center"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      placeholder="blur"
                    />
                  </div>

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E7DED3] shadow-xl flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#a89a8a] block">Edge Pipeline</span>
                      <strong className="text-sm font-display text-[#151515]">Automated 1.8s Deploy</strong>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold">
                      Zero-Downtime
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* ── 4. Project Scope Estimator & Next Steps ── */}
      <section id="estimate" className="py-20 sm:py-28 border-t border-[#E7DED3]/80 bg-[#FBF8F2] relative overflow-hidden">
        {/* Glow backdrop */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[30vw] max-w-[800px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(232,93,63,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="section-wrapper max-w-4xl relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F] mb-3 px-3 py-1 rounded-full border border-[#E85D3F]/20 bg-[#E85D3F]/5">
              Transparent Scoping
            </span>
            <h2
              className="font-display font-bold text-[#151515] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Ready to scope your project?
            </h2>
            <p className="text-sm text-[#68645F] max-w-md mx-auto mt-2">
              Select your requirements below for an instant estimated sprint plan.
            </p>
          </div>

          <ProjectEstimator />

          {/* Intro Call Action */}
          <div className="mt-12 text-center">
            <p className="text-xs text-[#68645F] mb-3">Prefer discussing your architecture directly with an engineer?</p>
            <Link
              href="/contact"
              className="btn-outline-dark px-7 py-3 text-xs font-semibold inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Schedule a 15-Minute Intro Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Frequently Asked Questions Section ── */}
      <section className="py-20 sm:py-24 border-t border-[#E7DED3]/70 bg-[#FCFAF6]">
        <div className="section-wrapper max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F] px-3 py-1 rounded-full border border-[#E85D3F]/20 bg-[#E85D3F]/5 inline-block mb-3">
              Delivery Standards
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#151515]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-[#E7DED3] bg-white overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-[#151515] hover:text-[#E85D3F] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown className="w-4 h-4 text-[#68645F] shrink-0" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#68645F] leading-relaxed border-t border-[#E7DED3]/40">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
