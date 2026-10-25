import Link from "next/link";
import Image from "next/image";
import { Linkedin, Github, Twitter, Instagram } from "lucide-react";
import CrestSoftLogo from "@/assets/CrestsoftNewLogo.png";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/about/careers", badge: "Hiring" },
  { label: "Tech & Innovation", href: "/about/tech-innovation" },
  { label: "How We Work", href: "/about/how-we-work" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Github, label: "GitHub" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#E7DED3]/60 bg-[#FCFAF6]">
      <div className="section-wrapper py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10">
          {/* Logo + tagline */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-2 w-fit">
              <Image
                src={CrestSoftLogo}
                alt="CrestSoft"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <span className="text-[#151515] font-display font-bold tracking-tight">
                CrestSoft
              </span>
            </Link>
            <p className="text-sm text-[#a89a8a] leading-relaxed">
              Technology Built to Move You Forward.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-[#68645F] hover:text-[#151515] transition flex items-center gap-1.5"
              >
                <span>{l.label}</span>
                {l.badge && (
                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded-full bg-orange-100 text-[#C9472D] font-bold">
                    {l.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-[#E7DED3] flex items-center justify-center text-[#68645F] hover:text-[#e8642c] hover:border-[#e8642c]/30 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-[#E7DED3]/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#a89a8a]">
            &copy; 2026 CrestSoft. All rights reserved.
          </p>
          <p
            className="text-xs text-[#d6cbbf]"
            style={{
              fontFamily: "var(--font-hand), cursive",
              fontStyle: "italic",
            }}
          >
            Built with purpose. For a better tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
