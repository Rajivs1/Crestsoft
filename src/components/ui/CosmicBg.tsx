"use client";

export function CosmicBg() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Deep base gradient */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #050510 0%, #080820 40%, #0a0a2e 70%, #050510 100%)" }} />
      
      {/* Animated aurora glow - top right */}
      <div className="absolute -top-32 -right-32 w-[800px] h-[800px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #6366f1 0%, #8b5cf6 30%, transparent 70%)", animation: "cosmicFloat 20s ease-in-out infinite" }} />
      
      {/* Purple glow - left center */}
      <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #a855f7 0%, #7c3aed 30%, transparent 70%)", animation: "cosmicFloat 25s ease-in-out 5s infinite reverse" }} />
      
      {/* Warm accent - bottom */}
      <div className="absolute -bottom-20 left-1/3 w-[700px] h-[500px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #f97316 0%, #ec4899 30%, transparent 70%)", animation: "cosmicFloat 30s ease-in-out 10s infinite" }} />
      
      {/* Star field */}
      <div className="absolute inset-0 opacity-[0.4]"
        style={{ backgroundImage: "radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.4) 0%, transparent 100%), radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.3) 0%, transparent 100%), radial-gradient(1px 1px at 50px 160px, rgba(255,255,255,0.2) 0%, transparent 100%), radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.35) 0%, transparent 100%), radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.25) 0%, transparent 100%), radial-gradient(1px 1px at 160px 120px, rgba(255,255,255,0.15) 0%, transparent 100%)", backgroundSize: "200px 200px" }} />
      
      {/* Fine grid */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      
      {/* Noise grain */}
      <div className="absolute inset-0 opacity-[0.018] mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <style>{`
        @keyframes cosmicFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 15px) scale(0.95); }
        }
      `}</style>
    </div>
  );
}
