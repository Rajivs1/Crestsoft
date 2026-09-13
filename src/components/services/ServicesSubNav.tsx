"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface SubNavItem {
  id: string;
  label: string;
}

const subNavItems: SubNavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "web-development", label: "Web Development" },
  { id: "web-applications", label: "Web Apps & SaaS" },
  { id: "mobile-applications", label: "Mobile Apps" },
  { id: "custom-software", label: "Custom Software" },
  { id: "cloud-devops", label: "Cloud & DevOps" },
];

export function ServicesSubNav() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = subNavItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(subNavItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // account for navbar + subnav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-16 lg:top-[72px] z-30 bg-[#FCFAF6]/90 backdrop-blur-xl border-y border-[#E7DED3]/80 transition-all duration-300 shadow-xs">
      <div className="section-wrapper flex items-center justify-between py-2.5 overflow-x-auto no-scrollbar gap-4">
        {/* Navigation Items */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {subNavItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-[#E85D3F]"
                    : "text-[#68645F] hover:text-[#151515] hover:bg-black/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSubNavPill"
                    className="absolute inset-0 rounded-full bg-[#E85D3F]/10 border border-[#E85D3F]/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E85D3F]" />}
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Action Button */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <Link
            href="/contact"
            className="btn-primary btn-shimmer px-4 py-1.5 text-xs font-semibold inline-flex items-center gap-1.5 shadow-xs"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
