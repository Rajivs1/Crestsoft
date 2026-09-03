"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const onScroll = useCallback(() => setScrolled(window.scrollY > 20), []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-brand-bg/80 backdrop-blur-xl border-b border-brand-border/50" : "bg-transparent"
        }`}
      >
        <div className="section-wrapper flex items-center justify-between h-16 lg:h-[72px]">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-brand-accent/20 group-hover:bg-brand-accent/30 transition" />
              <div className="absolute inset-[2px] rounded-md bg-brand-accent flex items-center justify-center">
                <span className="text-white font-black text-sm">C</span>
              </div>
            </div>
            <span className="text-white font-bold text-[17px] tracking-tight">CrestSoft</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active(l.href) ? "text-white" : "text-brand-muted hover:text-white hover:bg-white/5"
                }`}
              >
                {active(l.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/[0.07] rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-accent text-white text-sm font-semibold hover:bg-brand-glow transition shadow-lg shadow-brand-accent/25"
            >
              Start a Project <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-9 h-9 rounded-lg border border-brand-border flex items-center justify-center text-brand-muted hover:text-white transition"
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-72 bg-brand-surface border-l border-brand-border flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-border">
                <span className="font-bold text-white">CrestSoft</span>
                <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-lg border border-brand-border flex items-center justify-center text-brand-muted hover:text-white" aria-label="Close">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <nav className="flex-1 p-4 flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-xl text-[15px] font-medium transition ${
                      active(l.href) ? "bg-brand-accent/10 text-brand-glow" : "text-brand-muted hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <div className="p-4 border-t border-brand-border">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-accent text-white font-semibold hover:bg-brand-glow transition"
                >
                  Start a Project <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
