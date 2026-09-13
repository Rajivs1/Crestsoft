"use client";
import { motion } from "framer-motion";

const brands = [
  { name: "Daksh Cargo", sector: "Logistics", symbol: "◆" },
  { name: "CafeBliss", sector: "Hospitality Tech", symbol: "✦" },
  { name: "Cyphernaut", sector: "Cloud Security", symbol: "▲" },
  { name: "NovaPay", sector: "Fintech", symbol: "●" },
  { name: "Horizon Health", sector: "HealthTech", symbol: "■" },
  { name: "Apex Global", sector: "Supply Chain", symbol: "⬡" },
  { name: "PulseHQ", sector: "SaaS Analytics", symbol: "◈" },
  { name: "Vortex Labs", sector: "AI Systems", symbol: "❖" },
];

export function LogoMarquee() {
  // Duplicate for smooth seamless loop
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <section className="relative py-10 border-y border-[#E7DED3]/60 bg-[#FBF9F4] overflow-hidden z-10">
      <div className="section-wrapper mb-5 text-center">
        <p className="text-[11px] font-display font-medium tracking-[0.22em] uppercase text-[#a89a8a]">
          Trusted by forward-thinking teams, fast-growing startups & enterprises
        </p>
      </div>

      {/* Infinite marquee track with left & right gradient fade */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left fade gradient */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #FBF9F4 0%, rgba(251, 249, 244, 0) 100%)",
          }}
        />
        {/* Right fade gradient */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(270deg, #FBF9F4 0%, rgba(251, 249, 244, 0) 100%)",
          }}
        />

        <motion.div
          className="flex items-center gap-10 sm:gap-14 whitespace-nowrap cursor-default"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 28,
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((b, i) => (
            <div
              key={`${b.name}-${i}`}
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl transition-all duration-300 opacity-60 hover:opacity-100 hover:bg-white/80"
            >
              <span className="text-[#E85D3F] text-sm group-hover:scale-110 transition-transform">
                {b.symbol}
              </span>
              <span className="font-display font-bold text-[15px] sm:text-base text-[#151515] tracking-tight group-hover:text-[#E85D3F] transition-colors">
                {b.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#a89a8a] border-l border-[#E7DED3] pl-2.5 hidden sm:inline">
                {b.sector}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
