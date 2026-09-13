"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Code, Layers, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const tabs = [
  { id: "overview", label: "Product Overview", icon: Play },
  { id: "engineering", label: "Architecture & Code", icon: Code },
  { id: "design", label: "UX & Micro-Interactions", icon: Layers },
];

export function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  const [activeTab, setActiveTab] = useState("overview");

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#151515]/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl bg-[#FCFAF6] border border-[#E7DED3] rounded-3xl shadow-2xl overflow-hidden z-10 my-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E7DED3]/70 bg-white/70">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#E85D3F]/10 flex items-center justify-center text-[#E85D3F]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-[#151515]">
                    CrestSoft Product Showcase
                  </h3>
                  <p className="text-[11px] text-[#68645F]">
                    Crafting digital excellence from concept to production
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full border border-[#E7DED3] flex items-center justify-center text-[#68645F] hover:text-[#151515] hover:bg-black/5 transition"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex items-center gap-2 px-6 pt-4 border-b border-[#E7DED3]/40 bg-[#FBF8F2]">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl flex items-center gap-2 transition-all ${
                      isActive
                        ? "text-[#E85D3F] bg-white border-t border-x border-[#E7DED3]"
                        : "text-[#68645F] hover:text-[#151515]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="p-6 sm:p-8">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  {/* Visual Reel Banner */}
                  <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-[#151515] to-[#2a2421] p-6 text-white flex flex-col justify-between overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-medium tracking-wider uppercase backdrop-blur-md">
                        ● Reel 2026
                      </span>
                      <span className="text-xs text-white/60">4K High-Definition</span>
                    </div>

                    <div className="text-center my-auto py-8">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 rounded-full bg-[#E85D3F] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#E85D3F]/40 cursor-pointer"
                      >
                        <Play className="w-6 h-6 ml-1 fill-current" />
                      </motion.div>
                      <p className="font-display font-bold text-lg mt-4">
                        Watch Digital Transformation in Action
                      </p>
                      <p className="text-xs text-white/70 max-w-sm mx-auto mt-1">
                        Explore how we build platforms that scale effortlessly from day one.
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-white/60 pt-2 border-t border-white/10">
                      <span>Logistics • SaaS • Cloud • E-commerce</span>
                      <span>Avg. Lighthouse: 98/100</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-white border border-[#E7DED3] text-center">
                      <span className="font-display font-bold text-lg text-[#151515] block">2-6 Weeks</span>
                      <span className="text-[11px] text-[#68645F]">Sprint Delivery</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-[#E7DED3] text-center">
                      <span className="font-display font-bold text-lg text-[#151515] block">60 FPS</span>
                      <span className="text-[11px] text-[#68645F]">Fluid Motion</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-[#E7DED3] text-center">
                      <span className="font-display font-bold text-lg text-[#151515] block">100% IP</span>
                      <span className="text-[11px] text-[#68645F]">Code Ownership</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "engineering" && (
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-white border border-[#E7DED3]">
                    <h4 className="font-display font-bold text-sm text-[#151515] mb-2 flex items-center gap-2">
                      <Code className="w-4 h-4 text-[#E85D3F]" /> Scalable Full-Stack Stack
                    </h4>
                    <p className="text-xs text-[#68645F] leading-relaxed mb-4">
                      We engineer robust systems utilizing Next.js App Router, TypeScript, React 18/19, Tailwind CSS, PostgreSQL, and AWS/Vercel serverless functions.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-2 text-[#151515]">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Strict TypeScript typing & linting</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#151515]">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Automated CI/CD workflows</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#151515]">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Sub-second server response times</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#151515]">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Comprehensive unit & E2E testing</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "design" && (
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-white border border-[#E7DED3]">
                    <h4 className="font-display font-bold text-sm text-[#151515] mb-2 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#E85D3F]" /> Design Systems & Micro-Interactions
                    </h4>
                    <p className="text-xs text-[#68645F] leading-relaxed mb-3">
                      Every interface is custom-tailored with fluid layout transitions, responsive touch states, and cohesive color tokens that elevate your brand perception.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-3 py-1 rounded-full bg-[#F5F0E8] text-[#151515] font-medium">Figma Tokens</span>
                      <span className="px-3 py-1 rounded-full bg-[#F5F0E8] text-[#151515] font-medium">Framer Motion</span>
                      <span className="px-3 py-1 rounded-full bg-[#F5F0E8] text-[#151515] font-medium">Accessible WCAG AA</span>
                      <span className="px-3 py-1 rounded-full bg-[#F5F0E8] text-[#151515] font-medium">Three.js 3D Accents</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-[#E7DED3]/70 bg-white/70 flex items-center justify-between">
              <span className="text-xs text-[#68645F]">
                Ready to bring your vision to reality?
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-[#68645F] hover:text-[#151515]"
                >
                  Close
                </button>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="btn-primary btn-shimmer px-5 py-2 text-xs font-semibold inline-flex items-center gap-1.5"
                >
                  Start a Project <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
