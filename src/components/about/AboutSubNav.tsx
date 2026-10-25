"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, Briefcase, Cpu, Workflow, ArrowUpRight } from "lucide-react";

export const aboutNavItems = [
  {
    href: "/about",
    label: "Overview",
    icon: Sparkles,
    badge: "Studio",
    exact: true,
  },
  {
    href: "/about/careers",
    label: "Careers",
    icon: Briefcase,
    badge: "Hiring (0-4 Yrs)",
    highlight: true,
  },
  {
    href: "/about/tech-innovation",
    label: "Tech & Innovation",
    icon: Cpu,
    badge: "Radar 2026",
  },
  {
    href: "/about/how-we-work",
    label: "How We Work",
    icon: Workflow,
    badge: "Methodology",
  },
];

export function AboutSubNav() {
  const pathname = usePathname();

  const isCurrent = (item: (typeof aboutNavItems)[0]) => {
    if (item.exact) {
      return pathname === item.href;
    }
    return pathname.startsWith(item.href);
  };

  return (
    <nav
      aria-label="About Navigation"
      className="sticky top-[64px] lg:top-[72px] z-30 bg-[#FCFAF6]/95 backdrop-blur-xl border-b border-[#E7DED3]/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300"
    >
      <div className="section-wrapper">
        <div className="flex items-center justify-between py-2 sm:py-2.5 overflow-x-auto no-scrollbar gap-2 sm:gap-3">
          {/* Subnav links */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {aboutNavItems.map((item) => {
              const active = isCurrent(item);
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 sm:gap-2 ${
                    active
                      ? "text-[#E85D3F] bg-[#E85D3F]/10 border border-[#E85D3F]/30 shadow-xs"
                      : "text-[#68645F] hover:text-[#151515] hover:bg-black/5 border border-transparent"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full font-mono uppercase tracking-wider ${
                        active
                          ? "bg-[#E85D3F] text-white font-bold"
                          : item.highlight
                          ? "bg-amber-100 text-amber-900 border border-amber-200"
                          : "bg-[#E7DED3]/60 text-[#68645F]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {active && (
                    <motion.div
                      layoutId="about-subnav-indicator"
                      className="absolute inset-0 rounded-full border border-[#E85D3F]/40 pointer-events-none"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Quick CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <span className="text-xs text-[#a89a8a] hidden lg:inline font-mono">
              Gurugram • Global Delivery
            </span>
            <Link
              href="/contact"
              className="text-xs font-semibold text-[#151515] hover:text-[#E85D3F] flex items-center gap-1 transition"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
