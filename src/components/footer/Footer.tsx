import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-border/50 bg-brand-bg transition-colors duration-300">
      <div className="section-wrapper py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-3 group w-fit">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 rounded-md bg-brand-accent/20 group-hover:bg-brand-accent/30 transition" />
                <div className="absolute inset-[2px] rounded bg-brand-accent flex items-center justify-center">
                  <span className="text-white font-black text-xs">C</span>
                </div>
              </div>
              <span className="text-brand-text font-bold tracking-tight">CrestSoft</span>
            </Link>
            <p className="text-sm text-brand-subtle leading-relaxed">Technology Built to Move You Forward.</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase text-brand-subtle mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {nav.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-brand-muted hover:text-white transition">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase text-brand-subtle mb-4">Connect</p>
            <div className="flex gap-2 mb-4">
              {[{ Icon: Linkedin, label: "LinkedIn" }, { Icon: Github, label: "GitHub" }, { Icon: Mail, label: "Email" }].map(({ Icon, label }) => (
                <a key={label} href={label === "Email" ? "mailto:hello@crestsoft.in" : "#"} aria-label={label}
                  className="w-9 h-9 rounded-lg border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-glow hover:border-brand-accent/40 transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-sm text-brand-muted">hello@crestsoft.in</p>
          </div>
        </div>
        <div className="border-t border-brand-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-subtle">© 2026 CrestSoft. All rights reserved.</p>
          <p className="text-xs text-brand-subtle/60">Built with precision. Designed with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
