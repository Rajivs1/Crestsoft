"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Globe,
  Smartphone,
  Server,
  Palette,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Lock,
  Sparkles,
  Search,
  X,
  CheckCircle2,
  LayoutGrid,
  List,
  SlidersHorizontal,
  ChevronRight,
  Code2,
  Terminal,
  ShieldCheck,
  Zap,
  Activity,
  Share2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  projects,
  workCategories,
  Project,
  WorkCategoryKey,
} from "@/data/projects";
import { TiltCard } from "@/components/ui/TiltCard";

// Map category key to corresponding Lucide Icon
function getCategoryIcon(key: WorkCategoryKey) {
  switch (key) {
    case "web-app":
      return Globe;
    case "mobile-app":
      return Smartphone;
    case "devops":
      return Server;
    case "ui-design":
      return Palette;
    case "social-media":
      return TrendingUp;
    case "all":
    default:
      return Layers;
  }
}

// Map category key to frame style details
function getCategoryFrameType(key: WorkCategoryKey) {
  switch (key) {
    case "mobile-app":
      return "mobile";
    case "ui-design":
      return "design";
    case "social-media":
      return "social";
    case "devops":
      return "devops";
    default:
      return "browser";
  }
}

export function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<WorkCategoryKey>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "detailed">("grid");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(
    null
  );

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalProject]);

  // All unique tags across projects for quick-filter chips
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => tagsSet.add(t)));
    return Array.from(tagsSet).slice(0, 10);
  }, []);

  // Filtered projects based on activeCategory, searchQuery, and selectedTag
  const filteredProjects = useMemo(() => {
    return projects.filter((proj) => {
      // Category filter
      if (activeCategory !== "all" && proj.categoryKey !== activeCategory) {
        return false;
      }
      // Tag filter
      if (selectedTag && !proj.tags.includes(selectedTag)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = proj.name.toLowerCase().includes(q);
        const matchesCategory = proj.category.toLowerCase().includes(q);
        const matchesDesc = proj.description.toLowerCase().includes(q);
        const matchesDomain = proj.domain.toLowerCase().includes(q);
        const matchesTags = proj.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesCategory && !matchesDesc && !matchesDomain && !matchesTags) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, searchQuery, selectedTag]);

  // Counts by category
  const categoryCounts = useMemo(() => {
    const counts: Record<WorkCategoryKey, number> = {
      all: projects.length,
      "web-app": 0,
      "mobile-app": 0,
      devops: 0,
      "ui-design": 0,
      "social-media": 0,
    };
    projects.forEach((p) => {
      if (counts[p.categoryKey] !== undefined) {
        counts[p.categoryKey]++;
      }
    });
    return counts;
  }, []);

  const activeCategoryMeta = useMemo(() => {
    return (
      workCategories.find((c) => c.id === activeCategory) || workCategories[0]
    );
  }, [activeCategory]);

  return (
    <div className="bg-[#FCFAF6] min-h-screen text-[#151515] selection:bg-[#E85D3F]/20 selection:text-[#7C2D12]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden">
        {/* Subtle ambient luxury mesh glow */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[450px] pointer-events-none rounded-full"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 30%, rgba(232, 93, 63, 0.12), rgba(245, 240, 232, 0.4) 60%, transparent 80%)",
            filter: "blur(50px)",
          }}
        />

        <div className="section-wrapper relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E7DED3] bg-white/80 shadow-xs mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#E85D3F] animate-pulse" />
              <span className="text-[11px] font-display font-semibold tracking-[0.16em] uppercase text-[#68645F]">
                Portfolio & Engineering Showcase • 2024–2026
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="font-display text-[#151515] font-extrabold tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)" }}
            >
              Engineered with precision. <br />
              <span className="gradient-text-shimmer inline-block">
                Built for measurable impact.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#68645F] max-w-2xl leading-relaxed mb-10">
              Explore our multidisciplinary portfolio spanning high-traffic{" "}
              <strong className="text-[#151515] font-semibold">Web Applications</strong>,{" "}
              fluid <strong className="text-[#151515] font-semibold">Mobile Apps</strong>, resilient{" "}
              <strong className="text-[#151515] font-semibold">Cloud & DevOps</strong> pipelines, bespoke{" "}
              <strong className="text-[#151515] font-semibold">UI/UX Design Systems</strong>, and high-impact{" "}
              <strong className="text-[#151515] font-semibold">Social Media Management</strong>.
            </p>

            {/* Live Metrics Proof Ticker */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
              {[
                { label: "Quoting & App Latency", value: "-65%", icon: Zap },
                { label: "Deployment Velocity", value: "12x", icon: Server },
                { label: "Average App Rating", value: "4.9★", icon: Smartphone },
                { label: "Monthly Social Reach", value: "4.5M+", icon: TrendingUp },
              ].map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white/70 border border-[#E7DED3]/80 shadow-xs backdrop-blur-xs"
                  >
                    <div className="flex items-center gap-1.5 text-[#E85D3F] mb-1">
                      <IconComponent className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#a89a8a]">
                        Verified
                      </span>
                    </div>
                    <div className="text-xl sm:text-2xl font-display font-bold text-[#151515] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#68645F] truncate">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE WORK CATEGORY NAVBAR (Sticky Sub-Navbar) */}
      <nav
        aria-label="Work Categories Navigation"
        className="sticky top-[68px] sm:top-[74px] z-30 bg-[#FCFAF6]/90 backdrop-blur-xl border-y border-[#E7DED3]/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-3 sm:py-3.5 transition-all duration-300"
      >
        <div className="section-wrapper">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
            {/* Category Navigation Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]">
              {workCategories.map((category) => {
                const isActive = activeCategory === category.id;
                const IconComponent = getCategoryIcon(category.id);
                const count = categoryCounts[category.id] || 0;

                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setSelectedTag(null);
                    }}
                    className={`relative px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 group shrink-0 ${
                      isActive
                        ? "text-white shadow-sm shadow-[#E85D3F]/25"
                        : "text-[#68645F] hover:text-[#151515] hover:bg-white/70"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeWorkNavPill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E85D3F] via-[#d4540e] to-[#C9472D]"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-2">
                      <IconComponent
                        className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110 ${
                          isActive ? "text-white" : "text-[#a89a8a] group-hover:text-[#E85D3F]"
                        }`}
                      />
                      <span>{category.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono transition-colors ${
                          isActive
                            ? "bg-white/25 text-white"
                            : "bg-[#E7DED3]/60 text-[#68645F]"
                        }`}
                      >
                        {count}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Bar & View Mode Switcher */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Search Input */}
              <div className="relative flex-1 sm:w-60 md:w-64">
                <Search className="w-3.5 h-3.5 text-[#a89a8a] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search work, tech, client..."
                  className="w-full pl-8 pr-8 py-1.5 sm:py-2 text-xs rounded-full bg-white/80 border border-[#E7DED3] text-[#151515] placeholder:text-[#a89a8a] focus:outline-none focus:border-[#E85D3F] focus:ring-2 focus:ring-[#E85D3F]/15 transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#a89a8a] hover:text-[#151515] cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center p-1 rounded-full bg-white/80 border border-[#E7DED3] shadow-2xs">
                <button
                  onClick={() => setViewMode("grid")}
                  title="Grid View"
                  className={`p-1.5 rounded-full transition-all cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-[#151515] text-white"
                      : "text-[#68645F] hover:text-[#151515]"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode("detailed")}
                  title="Detailed List View"
                  className={`p-1.5 rounded-full transition-all cursor-pointer ${
                    viewMode === "detailed"
                      ? "bg-[#151515] text-white"
                      : "text-[#68645F] hover:text-[#151515]"
                  }`}
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. ACTIVE CATEGORY SPOTLIGHT & TAG FILTER BAR */}
      <section className="pt-8 pb-4">
        <div className="section-wrapper">
          {/* Category Highlight Card */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-5 sm:p-6 rounded-3xl bg-white/80 border border-[#E7DED3]/80 shadow-xs mb-6 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span
                    className="text-[10px] font-display font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full border"
                    style={{
                      color: activeCategoryMeta.accentColor,
                      borderColor: `${activeCategoryMeta.accentColor}40`,
                      background: `${activeCategoryMeta.accentColor}10`,
                    }}
                  >
                    Category Spotlight • {activeCategoryMeta.label}
                  </span>
                  <span className="text-xs text-[#a89a8a]">•</span>
                  <span className="text-xs font-mono text-[#68645F]">
                    {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} listed
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-display font-bold text-[#151515] tracking-tight">
                  {activeCategoryMeta.tagline}
                </h2>
                <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed">
                  {activeCategoryMeta.description}
                </p>
              </div>

              {/* Action Jump */}
              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="btn-primary text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>Build {activeCategory === "all" ? "a Project" : activeCategoryMeta.label}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Quick Tag Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none [scrollbar-width:none]">
            <span className="text-[11px] font-display font-semibold text-[#a89a8a] uppercase tracking-wider shrink-0 flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3 text-[#E85D3F]" /> Filter by Tech:
            </span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 rounded-lg text-[11px] font-medium transition cursor-pointer shrink-0 ${
                selectedTag === null
                  ? "bg-[#151515] text-white"
                  : "bg-white/80 border border-[#E7DED3] text-[#68645F] hover:text-[#151515]"
              }`}
            >
              All Tech
            </button>
            {allTags.map((tag) => {
              const isTagActive = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(isTagActive ? null : tag)}
                  className={`px-3 py-1 rounded-lg text-[11px] font-medium transition cursor-pointer shrink-0 ${
                    isTagActive
                      ? "bg-[#E85D3F] text-white shadow-2xs"
                      : "bg-white/80 border border-[#E7DED3] text-[#68645F] hover:text-[#151515] hover:border-[#E85D3F]/40"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS DISPLAY SECTION (Grid or Detailed) */}
      <section className="py-8 pb-24 md:pb-32">
        <div className="section-wrapper">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20 text-center rounded-3xl border border-[#E7DED3] bg-white/70 backdrop-blur-sm p-8"
            >
              <div className="w-14 h-14 rounded-full bg-[#E85D3F]/10 text-[#E85D3F] flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-[#151515] mb-2">
                No matching projects found
              </h3>
              <p className="text-sm text-[#68645F] max-w-md mx-auto mb-6">
                We couldn&apos;t find any case studies matching &ldquo;{searchQuery || selectedTag}&rdquo; in this category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag(null);
                  setActiveCategory("all");
                }}
                className="btn-outline-dark text-xs px-6 py-2.5 rounded-full cursor-pointer"
              >
                Reset All Filters
              </button>
            </motion.div>
          ) : viewMode === "grid" ? (
            /* GRID VIEW */
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((proj, i) => (
                  <ProjectGridCard
                    key={proj.id}
                    proj={proj}
                    index={i}
                    onOpenModal={() => setActiveModalProject(proj)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* DETAILED VIEW */
            <div className="space-y-10 sm:space-y-14">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((proj, i) => (
                  <ProjectDetailedRow
                    key={proj.id}
                    proj={proj}
                    index={i}
                    onOpenModal={() => setActiveModalProject(proj)}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* 5. MULTIDISCIPLINARY EXPERTISE SECTION */}
      <section className="py-20 sm:py-24 border-t border-[#E7DED3]/80 bg-[#F5F0E8]/50">
        <div className="section-wrapper">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] font-display font-semibold uppercase tracking-[0.2em] text-[#E85D3F] px-3 py-1 rounded-full border border-[#E85D3F]/20 bg-[#E85D3F]/5 inline-block mb-3">
              Full-Spectrum Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#151515] tracking-tight mb-4">
              How CrestSoft powers every phase of your digital growth
            </h2>
            <p className="text-sm sm:text-base text-[#68645F] leading-relaxed">
              We eliminate silos by bringing world-class engineering, design, cloud infrastructure, and audience acquisition under one unified roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {[
              {
                title: "Web Applications",
                icon: Globe,
                accent: "#E85D3F",
                desc: "Sub-second Next.js 16 platforms with real-time WebSockets, robust auth, and enterprise database integrity.",
                points: ["Next.js App Router", "Full-stack TypeScript", "Sub-50ms API Latency"],
              },
              {
                title: "Mobile App Dev",
                icon: Smartphone,
                accent: "#f97316",
                desc: "Fluid iOS & Android native apps with 60fps animations, Apple Pay, offline syncing, and live GPS tracking.",
                points: ["React Native & Flutter", "Hardware Sensor APIs", "Live Activities & Widgets"],
              },
              {
                title: "DevOps & Cloud",
                icon: Server,
                accent: "#8b5cf6",
                desc: "Kubernetes orchestration, automated GitOps CI/CD pipelines, multi-cloud IaC, and SOC2 security posture audits.",
                points: ["Terraform & Docker", "ArgoCD Blue/Green", "99.99% Uptime SLAs"],
              },
              {
                title: "UI/UX Design",
                icon: Palette,
                accent: "#0ea5e9",
                desc: "Luxury design systems, Figma tokens synced directly to codebase, WCAG AAA accessibility, and interactive prototypes.",
                points: ["Figma Token Systems", "WCAG AAA Compliant", "Motion Design & Micro-UX"],
              },
              {
                title: "Social Growth",
                icon: TrendingUp,
                accent: "#ec4899",
                desc: "Omnichannel viral video playbooks, influencer attribution engines, and community scaling that turn viewers into buyers.",
                points: ["Short-form Video Sprints", "Creator Campaign Suite", "Conversion Attribution"],
              },
            ].map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-white/90 border border-[#E7DED3]/80 shadow-xs hover:shadow-md hover:border-[#E85D3F]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border"
                      style={{
                        color: pillar.accent,
                        borderColor: `${pillar.accent}30`,
                        background: `${pillar.accent}12`,
                      }}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#151515] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#68645F] leading-relaxed mb-4">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#E7DED3]/60 space-y-1.5">
                    {pillar.points.map((pt) => (
                      <div
                        key={pt}
                        className="text-[11px] text-[#5c5750] flex items-center gap-1.5"
                      >
                        <CheckCircle2
                          className="w-3 h-3 shrink-0"
                          style={{ color: pillar.accent }}
                        />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-[#151515] text-white">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #e85d3f 0%, transparent 60%)",
            filter: "blur(70px)",
          }}
        />

        <div className="section-wrapper relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#E85D3F]" />
            <span className="text-[11px] font-display font-semibold tracking-widest uppercase text-white/80">
              Start Your Next Milestone
            </span>
          </div>

          <h2
            className="font-display text-white font-extrabold tracking-tight leading-tight max-w-2xl mx-auto mb-6"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}
          >
            Have a project ready for production?
          </h2>

          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you need a high-performance web platform, native iOS/Android application, automated Kubernetes pipeline, bespoke design system, or viral social media growth, CrestSoft is ready to partner with you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary px-8 py-4 text-sm font-semibold inline-flex items-center gap-2 rounded-full shadow-lg shadow-[#E85D3F]/30"
            >
              <span>Schedule Free Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 text-sm font-semibold rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              Explore Full Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE CASE STUDY QUICK-VIEW MODAL */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl bg-[#FCFAF6] rounded-3xl border border-[#E7DED3] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 bg-white border-b border-[#E7DED3] flex items-center justify-between gap-4 sticky top-0 z-20">
                <div className="flex items-center gap-3">
                  <span
                    className="text-[10px] font-display font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                    style={{
                      color: activeModalProject.accentColor,
                      borderColor: `${activeModalProject.accentColor}40`,
                      background: `${activeModalProject.accentColor}12`,
                    }}
                  >
                    {activeModalProject.category}
                  </span>
                  <span className="text-xs text-[#a89a8a]">•</span>
                  <span className="text-xs font-mono text-[#68645F]">
                    {activeModalProject.year || "2024–2025"}
                  </span>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="w-8 h-8 rounded-full bg-[#FCFAF6] border border-[#E7DED3] flex items-center justify-center text-[#68645F] hover:text-[#151515] hover:bg-[#F5F0E8] transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                {/* Visual Preview */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#E7DED3] bg-[#151515]/5 shadow-inner">
                  <Image
                    src={activeModalProject.image}
                    alt={`${activeModalProject.name} showcase`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#151515]/85 backdrop-blur-md text-white text-xs font-semibold shadow-md border border-white/10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E85D3F] animate-pulse" />
                    <span>{activeModalProject.metrics}</span>
                  </div>
                </div>

                {/* Project Title & Client Info */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#151515] tracking-tight mb-2">
                    {activeModalProject.name}
                  </h3>
                  <p className="text-sm text-[#68645F] leading-relaxed">
                    {activeModalProject.longDescription ||
                      activeModalProject.description}
                  </p>
                </div>

                {/* Challenge & Solution Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeModalProject.challenge && (
                    <div className="p-4 rounded-2xl bg-white border border-[#E7DED3]/80">
                      <div className="text-[11px] font-display font-bold uppercase tracking-wider text-[#d4540e] mb-1.5 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" /> The Challenge
                      </div>
                      <p className="text-xs text-[#68645F] leading-relaxed">
                        {activeModalProject.challenge}
                      </p>
                    </div>
                  )}

                  {activeModalProject.solution && (
                    <div className="p-4 rounded-2xl bg-white border border-[#E7DED3]/80">
                      <div className="text-[11px] font-display font-bold uppercase tracking-wider text-emerald-700 mb-1.5 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" /> The Solution
                      </div>
                      <p className="text-xs text-[#68645F] leading-relaxed">
                        {activeModalProject.solution}
                      </p>
                    </div>
                  )}
                </div>

                {/* Deliverables Checklist */}
                {activeModalProject.deliverables && (
                  <div>
                    <h4 className="text-xs font-display font-bold uppercase tracking-wider text-[#151515] mb-3">
                      Key Engineering Deliverables
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {activeModalProject.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs text-[#5c5750] p-2.5 rounded-xl bg-white/70 border border-[#E7DED3]/60"
                        >
                          <CheckCircle2
                            className="w-4 h-4 shrink-0"
                            style={{ color: activeModalProject.accentColor }}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technology Pills */}
                <div>
                  <h4 className="text-xs font-display font-bold uppercase tracking-wider text-[#151515] mb-2.5">
                    Technology & Framework Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-medium text-[#5c5750] bg-white border border-[#E7DED3] shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-white border-t border-[#E7DED3] flex items-center justify-between gap-4">
                <div className="text-xs text-[#a89a8a] hidden sm:block">
                  Verified Production Deployment • {activeModalProject.domain}
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <a
                    href={activeModalProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs px-6 py-2.5 rounded-full inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Visit Live System</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// -------------------------------------------------------------
// HELPER COMPONENT: PROJECT GRID CARD (with custom device frames)
// -------------------------------------------------------------
function ProjectGridCard({
  proj,
  index,
  onOpenModal,
}: {
  proj: Project;
  index: number;
  onOpenModal: () => void;
}) {
  const frameType = getCategoryFrameType(proj.categoryKey);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.05,
      }}
      className="h-full"
    >
      <div className="group block h-full">
        <TiltCard
          maxTilt={6}
          glareOpacity={0.12}
          scaleOnHover={1.015}
          liftY={-6}
          className="card-light rounded-3xl overflow-hidden border border-[#E7DED3]/90 bg-white/95 shadow-[0_4px_24px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_50px_rgba(232,93,63,0.12)] group-hover:border-[#E85D3F]/35 transition-all duration-300 flex flex-col justify-between"
        >
          {/* Card Upper: Device Mockup Container */}
          <div className="p-3 sm:p-4 pb-0">
            <div
              style={{ transform: "translateZ(18px)" }}
              className="rounded-2xl overflow-hidden border border-[#E7DED3] bg-[#F5F0E8]/70 shadow-2xs"
            >
              {/* Header depending on Frame Type */}
              {frameType === "mobile" ? (
                /* Mobile Device Header */
                <div className="px-3.5 py-2 bg-[#FBF8F2] border-b border-[#E7DED3]/70 flex items-center justify-between text-[10px] text-[#68645F] font-mono">
                  <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                    <Smartphone className="w-3 h-3" />
                    <span>iOS & Android</span>
                  </div>
                  <div className="px-2 py-0.5 rounded-full bg-white/80 border border-[#E7DED3]/60 truncate max-w-[160px]">
                    {proj.domain}
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              ) : frameType === "design" ? (
                /* Figma / Design Artboard Header */
                <div className="px-3.5 py-2 bg-[#FBF8F2] border-b border-[#E7DED3]/70 flex items-center justify-between text-[10px] text-[#68645F]">
                  <div className="flex items-center gap-1.5 text-sky-600 font-semibold font-mono">
                    <Palette className="w-3 h-3" />
                    <span>Figma System</span>
                  </div>
                  <div className="text-[10px] text-[#a89a8a] font-mono">
                    100% Canvas • Tokens
                  </div>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-sky-100 text-sky-700 font-semibold">
                    UI/UX
                  </span>
                </div>
              ) : frameType === "social" ? (
                /* Social Analytics Frame Header */
                <div className="px-3.5 py-2 bg-[#FBF8F2] border-b border-[#E7DED3]/70 flex items-center justify-between text-[10px] text-[#68645F]">
                  <div className="flex items-center gap-1.5 text-pink-600 font-semibold font-mono">
                    <TrendingUp className="w-3 h-3" />
                    <span>Growth Analytics</span>
                  </div>
                  <div className="px-2 py-0.5 rounded-full bg-pink-50 border border-pink-200/60 text-pink-700 font-mono text-[9px]">
                    Multi-Platform
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                </div>
              ) : (
                /* Standard Web Browser / DevOps Frame Header */
                <div className="px-3.5 py-2 bg-[#FBF8F2] border-b border-[#E7DED3]/70 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/90 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/90 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/90 inline-block" />
                  </div>
                  <div className="px-2.5 py-0.5 rounded-full bg-white/80 border border-[#E7DED3]/60 text-[10px] text-[#68645F] flex items-center gap-1 font-mono max-w-[170px] truncate shadow-2xs">
                    <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                    <span className="truncate">https://{proj.domain}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-[#a89a8a] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="hidden sm:inline">Active</span>
                  </div>
                </div>
              )}

              {/* Preview Image with Hover Scale */}
              <div
                onClick={onOpenModal}
                className="relative aspect-[16/10] overflow-hidden bg-[#E7DED3]/40 cursor-pointer"
              >
                {/* Floating Metric Badge */}
                <div
                  style={{ transform: "translateZ(30px)" }}
                  className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151515]/85 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide shadow-md border border-white/10"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: proj.accentColor }}
                  />
                  <span>{proj.metrics}</span>
                </div>

                {/* Quick-view indicator on hover */}
                <div
                  style={{ transform: "translateZ(25px)" }}
                  className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#151515] text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md flex items-center gap-1"
                >
                  <span>Quick Case Study</span>
                  <ArrowRight className="w-3 h-3 text-[#E85D3F]" />
                </div>

                <Image
                  src={proj.image}
                  alt={`${proj.name} live preview`}
                  fill
                  quality={90}
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 70%, rgba(21,21,21,0.18) 100%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Card Lower: Metadata & Actions */}
          <div
            style={{ transform: "translateZ(15px)" }}
            className="p-5 sm:p-6 pt-4 flex-1 flex flex-col justify-between"
          >
            <div>
              {/* Category & Year Tag */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span
                  className="text-[10px] font-display font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border"
                  style={{
                    color: proj.accentColor,
                    borderColor: `${proj.accentColor}30`,
                    background: `${proj.accentColor}10`,
                  }}
                >
                  {proj.category}
                </span>
                <span className="text-[10px] font-mono text-[#a89a8a]">
                  #{proj.number}
                </span>
              </div>

              {/* Title */}
              <h3
                onClick={onOpenModal}
                className="font-display text-[#151515] font-bold text-lg sm:text-xl tracking-tight group-hover:text-[#E85D3F] transition-colors duration-200 cursor-pointer mb-2 flex items-center justify-between"
              >
                <span>{proj.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#E85D3F]" />
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed mb-4 line-clamp-2">
                {proj.description}
              </p>
            </div>

            {/* Bottom Tech Pills & Actions */}
            <div className="space-y-3 pt-3 border-t border-[#E7DED3]/70">
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[10px] font-medium text-[#68645F] bg-[#FCFAF6] border border-[#E7DED3]/80"
                  >
                    {tag}
                  </span>
                ))}
                {proj.tags.length > 3 && (
                  <span className="text-[10px] font-mono text-[#a89a8a] self-center">
                    +{proj.tags.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 pt-1">
                <button
                  onClick={onOpenModal}
                  className="text-xs font-semibold text-[#151515] hover:text-[#E85D3F] inline-flex items-center gap-1 transition cursor-pointer"
                >
                  <span>Read Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-[#E7DED3] flex items-center justify-center text-[#68645F] hover:text-[#151515] hover:border-[#151515] hover:bg-[#F5F0E8] transition shadow-2xs"
                  title="Visit Project"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------
// HELPER COMPONENT: PROJECT DETAILED ROW (for deep dive / list view)
// -----------------------------------------------------------------
function ProjectDetailedRow({
  proj,
  index,
  onOpenModal,
}: {
  proj: Project;
  index: number;
  onOpenModal: () => void;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="p-6 sm:p-8 rounded-3xl bg-white/90 border border-[#E7DED3]/90 shadow-xs hover:shadow-lg hover:border-[#E85D3F]/30 transition-all duration-300"
    >
      <div
        className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          !isEven ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Visual Mockup Column (5 cols or 6 cols) */}
        <div className={`lg:col-span-6 ${!isEven ? "lg:order-2" : "lg:order-1"}`}>
          <div
            onClick={onOpenModal}
            className="group relative rounded-2xl overflow-hidden border border-[#E7DED3] bg-[#F5F0E8] shadow-sm cursor-pointer aspect-[16/10]"
          >
            {/* Top metric pill */}
            <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-[#151515]/85 backdrop-blur-md text-white text-xs font-semibold shadow-md border border-white/10 flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: proj.accentColor }}
              />
              <span>{proj.metrics}</span>
            </div>

            <Image
              src={proj.image}
              alt={`${proj.name} preview`}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#151515] text-xs font-semibold shadow-md inline-flex items-center gap-1 group-hover:bg-[#E85D3F] group-hover:text-white transition-all">
              <span>Explore Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Content Column (6 cols) */}
        <div className={`lg:col-span-6 space-y-4 ${!isEven ? "lg:order-1" : "lg:order-2"}`}>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#a89a8a]">
              Project {proj.number}
            </span>
            <span
              className="text-xs font-display font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
              style={{
                color: proj.accentColor,
                borderColor: `${proj.accentColor}30`,
                background: `${proj.accentColor}10`,
              }}
            >
              {proj.category}
            </span>
            {proj.client && (
              <span className="text-xs text-[#68645F]">• {proj.client}</span>
            )}
          </div>

          <h2
            onClick={onOpenModal}
            className="text-2xl sm:text-3xl font-display font-bold text-[#151515] tracking-tight hover:text-[#E85D3F] transition-colors cursor-pointer"
          >
            {proj.name}
          </h2>

          <p className="text-sm sm:text-base text-[#68645F] leading-relaxed">
            {proj.longDescription || proj.description}
          </p>

          {/* Challenge and Solution snippets */}
          {proj.challenge && (
            <div className="p-3.5 rounded-xl bg-[#FCFAF6] border border-[#E7DED3]/70 text-xs text-[#68645F]">
              <strong className="text-[#151515] block mb-0.5 font-display">
                Key Challenge & Deliverable:
              </strong>
              {proj.challenge}
            </div>
          )}

          {/* Technology Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {proj.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium text-[#5c5750] bg-white border border-[#E7DED3]/80 shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-4 pt-3">
            <button
              onClick={onOpenModal}
              className="btn-primary text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Full Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-2"
            >
              <span>Visit Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
