"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

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
  const { theme, toggle } = useTheme();

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
          scrolled
            ? "bg-brand-bg/80 backdrop-blur-xl border-b border-brand-border/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="section-wrapper flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div
              className="relative w-8 h-8"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className="absolute inset-0 rounded-lg bg-brand-accent/20 group-hover:bg-brand-accent/30 transition" />
              <div className="absolute inset-[2px] rounded-md flex items-center justify-center shadow-lg shadow-brand-accent/25" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
                <span className="text-white font-black text-sm">C</span>
              </div>
            </motion.div>
            <span className="text-brand-text font-bold text-[17px] tracking-tight">CrestSoft</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active(l.href)
                    ? "text-brand-text"
                    : "text-brand-muted hover:text-brand-text hover:bg-brand-border/30"
                }`}
              >
                {active(l.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-brand-accent/10 border border-brand-accent/20 rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <motion.button
              onClick={toggle}
              className="w-9 h-9 rounded-lg border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-text hover:border-brand-accent/40 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: 15 }}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: 90, scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* CTA */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="hidden md:block">
              <Link
                href="/contact"
                className="btn-gradient px-4 py-2 text-sm shadow-lg shadow-indigo-500/25"
              >
                Start a Project <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-9 h-9 rounded-lg border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-text transition"
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-72 bg-brand-surface border-l border-brand-border flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-border">
                <span className="font-bold text-brand-text">CrestSoft</span>
                <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-lg border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-text" aria-label="Close">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <nav className="flex-1 p-4 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.div key={l.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + i * 0.04 }}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 rounded-xl text-[15px] font-medium transition flex items-center gap-3 ${
                        active(l.href) ? "bg-brand-accent/10 text-brand-glow" : "text-brand-muted hover:text-brand-text hover:bg-brand-border/30"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="p-4 space-y-3 border-t border-brand-border">
                <button
                  onClick={toggle}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-brand-muted hover:text-brand-text hover:bg-brand-border/30 transition"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-gradient justify-center w-full py-3"
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
