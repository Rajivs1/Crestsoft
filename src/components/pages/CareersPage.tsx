"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  X,
  Send,
  Sparkles,
  Laptop,
  GraduationCap,
  HeartPulse,
  Globe,
  Compass,
  TrendingUp,
  ChevronDown,
  Layers,
  Building,
} from "lucide-react";
import Link from "next/link";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import {
  careerOpenings,
  CareerOpening,
  perksAndCulture,
  hiringSteps,
} from "@/data/aboutData";

// Icon mapping helper
function getPillarIcon(iconName: string) {
  switch (iconName) {
    case "Globe":
      return Globe;
    case "TrendingUp":
      return TrendingUp;
    case "Laptop":
      return Laptop;
    case "GraduationCap":
      return GraduationCap;
    case "HeartPulse":
      return HeartPulse;
    case "Compass":
    default:
      return Compass;
  }
}

export function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [expandedJobId, setExpandedJobId] = useState<string | null>("junior-fullstack-engineer");
  const [modalRole, setModalRole] = useState<CareerOpening | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    linkedin: "",
    experience: "Fresher / 0–1 Year",
    coverNote: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const departments = useMemo(() => {
    return ["All", "Engineering", "AI & Cloud", "Design"];
  }, []);

  const filteredJobs = useMemo(() => {
    if (selectedDept === "All") return careerOpenings;
    return careerOpenings.filter((job) => job.department === selectedDept);
  }, [selectedDept]);

  const handleApply = (role: CareerOpening) => {
    setModalRole(role);
    setSubmitted(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalRole) return;
    setSubmitting(true);

    try {
      // 1. Post to internal /api/apply route
      await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          role: modalRole.title,
        }),
      });

      // 2. Also forward directly to FormSubmit endpoint for rajeev04632@gmail.com
      try {
        await fetch("https://formsubmit.co/ajax/rajeev04632@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `[Job Application] ${formData.name} - ${modalRole.title}`,
            _template: "table",
            _captcha: "false",
            "Applicant Name": formData.name,
            "Role Applied": modalRole.title,
            "Experience Tier": formData.experience,
            "Email Address": formData.email,
            "Phone Number": formData.phone,
            "GitHub / Portfolio": formData.portfolio,
            "LinkedIn URL": formData.linkedin || "Not provided",
            "Project Note": formData.coverNote || "None provided",
            "Sent To": "rajeev04632@gmail.com",
            Timestamp: new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
            }),
          }),
        });
      } catch (directErr) {
        console.warn("Direct formsubmit attempt:", directErr);
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Application submission error:", err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const closeModal = () => {
    setModalRole(null);
    setSubmitted(false);
    setSubmitting(false);
  };

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E7DED3] bg-white/80 shadow-xs mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#E85D3F] animate-pulse" />
              <span className="text-[11px] font-display font-semibold tracking-[0.18em] uppercase text-[#68645F]">
                Careers at CrestSoft • Hiring Freshers to 4 Years Experience
              </span>
            </div>

            <h1
              className="font-display text-[#151515] font-extrabold tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.4rem)" }}
            >
              Accelerate your engineering craft. <br />
              <span className="gradient-text-shimmer inline-block">
                Build real software from Day 1.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#68645F] max-w-2xl leading-relaxed mb-8">
              We are actively hiring talented freshers, self-taught developers, and
              early-career engineers (0 to 4 years experience). Work directly with
              production codebases, learn from senior mentors, and grow fast.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#openings"
                className="btn-primary px-6 py-3 text-sm shadow-md"
              >
                <span>View {careerOpenings.length} Openings (0–4 Yrs)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#culture"
                className="btn-outline px-6 py-3 text-sm"
              >
                <span>Perks & Growth Track</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. PERKS & CULTURE SECTION ── */}
      <section id="culture" className="py-20 md:py-28 bg-[#FCFAF6] border-b border-[#E7DED3]/70">
        <div className="section-wrapper">
          <div className="max-w-3xl mb-14">
            <span className="text-[11px] font-display font-semibold tracking-[0.25em] uppercase text-[#E85D3F] mb-2 block">
              Life at CrestSoft
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight mb-4">
              Engineered for rapid growth and human potential.
            </h2>
            <p className="text-base text-[#68645F] leading-relaxed">
              We invest heavily in junior and early-career talent. Direct mentorship,
              modern workstations, competitive stipends, and freedom to experiment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perksAndCulture.map((pillar, i) => {
              const Icon = getPillarIcon(pillar.iconName);
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="card-light p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#E85D3F]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-[#E7DED3]/50 text-[#68645F]">
                        {pillar.stats}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#151515] mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#E85D3F] mb-3">
                      {pillar.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. LIVE JOB OPENINGS (FRESHERS TO 4 YEARS) ── */}
      <section id="openings" className="py-20 md:py-28 bg-[#F5F0E8]/40 border-b border-[#E7DED3]/70">
        <div className="section-wrapper">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-[11px] font-display font-semibold tracking-[0.25em] uppercase text-[#E85D3F] mb-2 block">
                Join the Team • 0 to 4 Years Experience
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight">
                Current Open Positions
              </h2>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {departments.map((dept) => {
                const isSelected = selectedDept === dept;
                const count =
                  dept === "All"
                    ? careerOpenings.length
                    : careerOpenings.filter((j) => j.department === dept).length;

                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? "bg-[#151515] text-white shadow-xs"
                        : "bg-white/80 text-[#68645F] hover:text-[#151515] border border-[#E7DED3]"
                    }`}
                  >
                    <span>{dept}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-[#E7DED3]/60 text-[#68645F]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Job Listings Accordion/Cards */}
          <div className="space-y-4">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <div
                  key={job.id}
                  className={`card-light transition-all duration-300 overflow-hidden ${
                    isExpanded ? "border-[#E85D3F]/40 shadow-md" : ""
                  }`}
                >
                  {/* Job Header Bar */}
                  <div
                    onClick={() =>
                      setExpandedJobId(isExpanded ? null : job.id)
                    }
                    className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-black/[0.01]"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-orange-100 text-[#C9472D] border border-orange-200">
                          {job.department}
                        </span>
                        {job.badge && (
                          <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                            {job.badge}
                          </span>
                        )}
                        <span className="text-xs text-[#a89a8a] flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                        <span className="text-xs text-[#151515] font-semibold flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#E85D3F]" />
                          {job.experience}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#151515]">
                        {job.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#68645F] mt-1 max-w-2xl">
                        {job.shortDesc}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApply(job);
                        }}
                        className="btn-primary px-5 py-2.5 text-xs font-semibold"
                      >
                        <span>Apply Now</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        className="w-9 h-9 rounded-full border border-[#E7DED3] flex items-center justify-center text-[#68645F] hover:text-[#151515]"
                        aria-label="Expand role"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="px-6 sm:px-8 pb-8 border-t border-[#E7DED3]/70 pt-6 bg-white/40"
                      >
                        <div className="grid md:grid-cols-[1.5fr_1fr] gap-8">
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-display font-bold text-sm text-[#151515] uppercase tracking-wider mb-2">
                                Role Overview
                              </h4>
                              <p className="text-sm text-[#68645F] leading-relaxed">
                                {job.overview}
                              </p>
                            </div>

                            <div>
                              <h4 className="font-display font-bold text-sm text-[#151515] uppercase tracking-wider mb-3">
                                What You&apos;ll Do
                              </h4>
                              <ul className="space-y-2">
                                {job.responsibilities.map((r, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#68645F]"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-[#E85D3F] shrink-0 mt-0.5" />
                                    <span>{r}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-display font-bold text-sm text-[#151515] uppercase tracking-wider mb-3">
                                Requirements & Skills
                              </h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#68645F]"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#E85D3F] shrink-0 mt-2" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Right column: Tech Stack & Fast Apply */}
                          <div className="space-y-6">
                            <div className="p-5 rounded-2xl bg-[#F5F0E8]/70 border border-[#E7DED3]">
                              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#151515] mb-3">
                                Core Tech Stack
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {job.techStack.map((tech) => (
                                  <span
                                    key={tech}
                                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white border border-[#E7DED3] text-[#151515]"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {job.niceToHave && job.niceToHave.length > 0 && (
                              <div className="p-5 rounded-2xl bg-white border border-[#E7DED3]">
                                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#151515] mb-2">
                                  Bonus Points
                                </h4>
                                <ul className="space-y-1.5">
                                  {job.niceToHave.map((nth, i) => (
                                    <li
                                      key={i}
                                      className="text-xs text-[#68645F] flex items-start gap-2"
                                    >
                                      <span className="text-[#E85D3F] font-bold">
                                        +
                                      </span>
                                      <span>{nth}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <div className="pt-2">
                              <button
                                type="button"
                                onClick={() => handleApply(job)}
                                className="btn-primary w-full justify-center py-3 text-sm shadow-md"
                              >
                                <span>Apply for {job.title}</span>
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Open Application Box */}
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-white border border-[#E7DED3] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E85D3F] mb-1 block">
                Fresher or Career Pivot?
              </span>
              <h3 className="font-display text-2xl font-bold text-[#151515] mb-2">
                Have a great GitHub profile or live project demo?
              </h3>
              <p className="text-sm text-[#68645F] max-w-xl">
                Even if your exact specialization isn&apos;t listed above, if you
                are a curious programmer with high agency, send us your code. We
                love self-starters.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-outline-dark px-6 py-3 text-sm shrink-0 justify-center"
            >
              <span>Send Open Code Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. HOW WE HIRE (TRANSPARENT PROCESS) ── */}
      <section className="py-20 md:py-28 bg-[#FCFAF6]">
        <div className="section-wrapper">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-display font-semibold tracking-[0.25em] uppercase text-[#E85D3F] mb-3 block">
              Respect for Your Time
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight mb-4">
              Our 4-Step Hiring Process
            </h2>
            <p className="text-sm sm:text-base text-[#68645F] leading-relaxed">
              No endless 7-round gauntlets or arbitrary trivia quizzes. We
              evaluate real-world problem-solving, aesthetic taste, and mutual fit.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((step) => (
              <div
                key={step.step}
                className="card-light p-6 sm:p-7 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl font-extrabold text-[#E85D3F]">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E7DED3]/60 text-[#68645F]">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#151515] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. APPLICATION MODAL ── */}
      <AnimatePresence>
        {modalRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-xl bg-[#FCFAF6] border border-[#E7DED3] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 w-9 h-9 rounded-full border border-[#E7DED3] flex items-center justify-center text-[#68645F] hover:text-[#151515] transition"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 mb-1 block">
                    Dispatched to rajeev04632@gmail.com
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#151515] mb-2">
                    Application Received!
                  </h3>
                  <p className="text-sm text-[#68645F] max-w-md mx-auto mb-4 leading-relaxed">
                    Thank you for applying to{" "}
                    <strong className="text-[#151515] font-semibold">
                      {modalRole.title}
                    </strong>
                    . Your application has been emailed directly to{" "}
                    <strong className="text-[#151515] font-semibold">
                      rajeev04632@gmail.com
                    </strong>
                    . Our team reviews all profiles within 48 hours.
                  </p>
                  <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200/60 text-xs text-[#68645F] max-w-sm mx-auto mb-6 text-left space-y-1">
                    <p><strong className="text-[#151515]">Applicant:</strong> {formData.name}</p>
                    <p><strong className="text-[#151515]">Email:</strong> {formData.email}</p>
                    <p><strong className="text-[#151515]">Position:</strong> {modalRole.title}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="btn-primary px-8 py-2.5 text-xs font-semibold"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div>
                  <div className="mb-6 pb-4 border-b border-[#E7DED3]/70">
                    <span className="text-[11px] font-mono font-bold text-[#E85D3F] uppercase tracking-wider block mb-1">
                      Direct Application • Forwarded to rajeev04632@gmail.com
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#151515]">
                      {modalRole.title}
                    </h3>
                    <p className="text-xs text-[#a89a8a] mt-1">
                      {modalRole.department} • {modalRole.location} • {modalRole.experience}
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#151515] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Alex Kumar"
                          className="w-full px-4 py-2.5 rounded-xl border border-[#E7DED3] bg-white text-sm text-[#151515] focus:outline-none focus:border-[#E85D3F]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#151515] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="alex@gmail.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-[#E7DED3] bg-white text-sm text-[#151515] focus:outline-none focus:border-[#E85D3F]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#151515] mb-1.5">
                          GitHub / Portfolio URL *
                        </label>
                        <input
                          type="url"
                          required
                          value={formData.portfolio}
                          onChange={(e) =>
                            setFormData({ ...formData, portfolio: e.target.value })
                          }
                          placeholder="https://github.com/yourhandle"
                          className="w-full px-4 py-2.5 rounded-xl border border-[#E7DED3] bg-white text-sm text-[#151515] focus:outline-none focus:border-[#E85D3F]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#151515] mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 9876543210"
                          className="w-full px-4 py-2.5 rounded-xl border border-[#E7DED3] bg-white text-sm text-[#151515] focus:outline-none focus:border-[#E85D3F]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#151515] mb-1.5">
                        Experience Level
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) =>
                          setFormData({ ...formData, experience: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E7DED3] bg-white text-sm text-[#151515] focus:outline-none focus:border-[#E85D3F]"
                      >
                        <option value="Fresher / 0–1 Year">Fresher / Final Year Student (0–1 Year)</option>
                        <option value="1–2 Years">Junior Developer (1–2 Years)</option>
                        <option value="2–3 Years">Early-Career Engineer (2–3 Years)</option>
                        <option value="3–4 Years">Mid-Level Engineer (3–4 Years)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#151515] mb-1.5">
                        Tell us about a project you loved building & your tech stack
                      </label>
                      <textarea
                        rows={3}
                        value={formData.coverNote}
                        onChange={(e) =>
                          setFormData({ ...formData, coverNote: e.target.value })
                        }
                        placeholder="Share a link to a live app, your favorite tech stack, or why you want to learn with us..."
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E7DED3] bg-white text-sm text-[#151515] focus:outline-none focus:border-[#E85D3F]"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="btn-outline px-5 py-2.5 text-xs"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary px-6 py-2.5 text-xs shadow-md disabled:opacity-60 cursor-pointer"
                      >
                        {submitting ? (
                          <div className="flex items-center gap-1.5">
                            <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending to rajeev04632@gmail.com...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5">
                            <Send className="w-3.5 h-3.5" />
                            <span>Submit Application</span>
                          </div>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
