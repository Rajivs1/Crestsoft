"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Layers,
  Sparkles,
  ArrowRight,
  Clock,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";

interface PlatformOption {
  id: string;
  name: string;
  icon: any;
  desc: string;
  baseTimeline: string;
}

const platforms: PlatformOption[] = [
  {
    id: "web",
    name: "Web Application",
    icon: Globe,
    desc: "Modern responsive web platform",
    baseTimeline: "3-5 Weeks",
  },
  {
    id: "mobile",
    name: "Mobile App",
    icon: Smartphone,
    desc: "Cross-platform iOS & Android",
    baseTimeline: "4-6 Weeks",
  },
  {
    id: "saas",
    name: "Full SaaS System",
    icon: Layers,
    desc: "Multi-tenant app + API + Admin",
    baseTimeline: "6-8 Weeks",
  },
];

const timelines = [
  { id: "mvp", label: "Rapid MVP", time: "2-4 Weeks", badge: "Fast Track" },
  { id: "standard", label: "Standard Launch", time: "6-10 Weeks", badge: "Recommended" },
  { id: "enterprise", label: "Enterprise Scale", time: "12+ Weeks", badge: "Full Dedicated" },
];

const featuresList = [
  { id: "auth", label: "User Auth & Roles" },
  { id: "payments", label: "Stripe / Payments" },
  { id: "ai", label: "AI / LLM Integration" },
  { id: "analytics", label: "Realtime Analytics" },
];

export function ProjectEstimator() {
  const [selectedPlatform, setSelectedPlatform] = useState("web");
  const [selectedTimeline, setSelectedTimeline] = useState("standard");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["auth", "payments"]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const currentPlatform = platforms.find((p) => p.id === selectedPlatform)!;
  const currentTimeline = timelines.find((t) => t.id === selectedTimeline)!;

  const contactQuery = `/contact?platform=${selectedPlatform}&timeline=${selectedTimeline}&features=${selectedFeatures.join(",")}`;

  return (
    <div className="card-light p-6 sm:p-8 relative overflow-hidden bg-white/90 border border-[#E7DED3] shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-[#E85D3F] animate-ping" />
        <span className="text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F]">
          Interactive Project Estimator
        </span>
      </div>
      <h3 className="font-display font-bold text-lg sm:text-xl text-[#151515] mb-1">
        Estimate Your Project Scope
      </h3>
      <p className="text-xs text-[#68645F] mb-6">
        Select your platform and requirements for an instant timeline overview.
      </p>

      {/* Step 1: Choose Platform */}
      <div className="mb-6">
        <label className="text-[11px] font-display font-semibold uppercase tracking-wider text-[#151515] block mb-2.5">
          1. Select Platform
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {platforms.map((p) => {
            const Icon = p.icon;
            const isSelected = selectedPlatform === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPlatform(p.id)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "border-[#E85D3F] bg-[#E85D3F]/5 shadow-sm"
                    : "border-[#E7DED3] bg-white hover:border-[#E85D3F]/40 hover:bg-[#FBF9F4]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon
                    className={`w-4 h-4 ${
                      isSelected ? "text-[#E85D3F]" : "text-[#a89a8a]"
                    }`}
                  />
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#E85D3F]" />
                  )}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xs text-[#151515]">
                    {p.name}
                  </h4>
                  <p className="text-[10px] text-[#68645F] leading-tight mt-0.5">
                    {p.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Choose Timeline */}
      <div className="mb-6">
        <label className="text-[11px] font-display font-semibold uppercase tracking-wider text-[#151515] block mb-2.5">
          2. Target Timeline
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {timelines.map((t) => {
            const isSelected = selectedTimeline === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelectedTimeline(t.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "border-[#E85D3F] bg-[#E85D3F]/5 shadow-sm"
                    : "border-[#E7DED3] bg-white hover:border-[#E85D3F]/40 hover:bg-[#FBF9F4]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#E85D3F] px-1.5 py-0.5 rounded bg-white border border-[#E85D3F]/20">
                    {t.badge}
                  </span>
                  <Clock className="w-3 h-3 text-[#a89a8a]" />
                </div>
                <h4 className="font-display font-semibold text-xs text-[#151515]">
                  {t.label}
                </h4>
                <p className="text-[10px] text-[#68645F]">{t.time}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3: Optional Capabilities */}
      <div className="mb-6">
        <label className="text-[11px] font-display font-semibold uppercase tracking-wider text-[#151515] block mb-2.5">
          3. Core Capabilities Included
        </label>
        <div className="flex flex-wrap gap-2">
          {featuresList.map((f) => {
            const isSelected = selectedFeatures.includes(f.id);
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => toggleFeature(f.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                  isSelected
                    ? "border-[#E85D3F] bg-[#E85D3F]/10 text-[#E85D3F]"
                    : "border-[#E7DED3] bg-white text-[#68645F] hover:border-[#a89a8a]"
                }`}
              >
                {isSelected ? "✓ " : "+ "}
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Estimation Summary Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F0E8] border border-[#E7DED3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-display uppercase tracking-widest text-[#a89a8a] block">
            Estimated Scope & Sprint Plan
          </span>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-display font-bold text-base text-[#151515]">
              {currentPlatform.name}
            </span>
            <span className="text-[#a89a8a]">•</span>
            <span className="text-xs font-semibold text-[#E85D3F]">
              {currentTimeline.time}
            </span>
          </div>
          <p className="text-[11px] text-[#68645F] mt-0.5">
            Includes UI/UX, Next.js architecture, QA & 30-day warranty.
          </p>
        </div>

        <Link
          href={contactQuery}
          className="btn-primary btn-shimmer px-6 py-3 text-xs font-semibold whitespace-nowrap inline-flex items-center justify-center gap-2"
        >
          Get Exact Scope Proposal
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
