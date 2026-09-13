"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import CrestSoftLogo from "@/assets/CrestsoftNewLogo.png";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceTabs = [
  { id: "overview", label: "Overview" },
  { id: "web-development", label: "Web Development" },
  { id: "web-applications", label: "Web Apps & SaaS" },
  { id: "mobile-applications", label: "Mobile Apps" },
  { id: "custom-software", label: "Custom Software" },
  { id: "cloud-devops", label: "Cloud & DevOps" },
  { id: "estimate", label: "Scope Estimator" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const path = usePathname();
  const isServices = path === "/services" || path.startsWith("/services");

  const onScroll = useCallback(() => setScrolled(window.scrollY > 20), []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    if (!isServices) return;
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = serviceTabs.length - 1; i >= 0; i--) {
        const el = document.getElementById(serviceTabs[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(serviceTabs[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isServices]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));

  const scrollToService = (id: string) => {
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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || isServices
            ? "bg-[#FCFAF6]/90 backdrop-blur-xl border-b border-[#E7DED3]/70 shadow-xs"
            : "bg-transparent"
        }`}
      >
        <div className="section-wrapper flex items-center justify-between h-16 lg:h-[72px]">
          <Link href="/" className="flex items-center gap-2 group">
            <Image src={CrestSoftLogo} alt="CrestSoft" width={32} height={32} className="w-8 h-8 object-contain" />
            <span className="text-charcoal font-display font-bold text-[17px] tracking-tight">CrestSoft</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active(l.href) ? "text-charcoal" : "text-[#68645F] hover:text-charcoal"
                }`}
              >
                {active(l.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-0 -bottom-1 h-[2px] bg-coral rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="hidden md:block">
              <Link href="/contact" className="btn-primary px-5 py-2.5 text-sm">
                Start a Project <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-9 h-9 rounded-lg border border-[#E7DED3] flex items-center justify-center text-[#68645F] hover:text-charcoal transition"
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Dynamic Services Sub-Navbar (only active when on /services) ── */}
        {isServices && (
          <div className="border-t border-[#E7DED3]/80 bg-[#FCFAF6]/95 backdrop-blur-xl">
            <div className="section-wrapper flex items-center justify-between py-2 overflow-x-auto no-scrollbar gap-2">
              <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                {serviceTabs.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToService(item.id)}
                      className={`relative px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "text-[#E85D3F] bg-[#E85D3F]/10 border border-[#E85D3F]/30"
                          : "text-[#68645F] hover:text-[#151515] hover:bg-black/5"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E85D3F]" />}
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="hidden lg:flex items-center gap-2 shrink-0">
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-[#E85D3F] hover:text-[#C9472D] flex items-center gap-1 transition"
                >
                  <span>Fast Inquiry</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-72 bg-ivory border-l border-[#E7DED3] flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#E7DED3]">
                <span className="font-bold text-charcoal">CrestSoft</span>
                <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-lg border border-[#E7DED3] flex items-center justify-center text-[#68645F] hover:text-charcoal" aria-label="Close">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
                {links.map((l, i) => (
                  <motion.div key={l.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + i * 0.04 }}>
                    <Link href={l.href} onClick={() => setOpen(false)}
                      className={`px-4 py-3 rounded-xl text-[15px] font-medium transition flex items-center gap-3 ${
                        active(l.href) ? "bg-orange-50 text-coral" : "text-[#68645F] hover:text-charcoal hover:bg-cream"
                      }`}>
                      {l.label}
                    </Link>
                    {l.href === "/services" && isServices && (
                      <div className="ml-4 pl-3 border-l-2 border-[#E85D3F]/20 my-1 space-y-1">
                        {serviceTabs.map((st) => (
                          <button
                            key={st.id}
                            onClick={() => {
                              setOpen(false);
                              scrollToService(st.id);
                            }}
                            className="w-full text-left px-3 py-1.5 text-xs text-[#68645F] hover:text-[#E85D3F] rounded-lg transition"
                          >
                            {st.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>
              <div className="p-4 border-t border-[#E7DED3]">
                <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary justify-center w-full py-3 text-sm">
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
