"use client";

export function CosmicBg() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Deep base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #02040A 0%, #050816 30%, #070B18 60%, #050816 85%, #02040A 100%)",
        }}
      />

      {/* Atmospheric aurora – top-right blue */}
      <div
        className="absolute -top-40 -right-40 w-[900px] h-[900px] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, #3b82f6 0%, #6366f1 25%, transparent 65%)",
          animation: "cosmicFloat 22s ease-in-out infinite",
        }}
      />

      {/* Purple glow – left */}
      <div
        className="absolute top-[30%] -left-48 w-[700px] h-[700px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, #8b5cf6 0%, #7c3aed 25%, transparent 65%)",
          animation: "cosmicFloat 28s ease-in-out 6s infinite reverse",
        }}
      />

      {/* Warm accent – bottom */}
      <div
        className="absolute -bottom-24 left-1/4 w-[800px] h-[500px] rounded-full opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle, #f97316 0%, #ec4899 35%, transparent 70%)",
          animation: "cosmicFloat 32s ease-in-out 12s infinite",
        }}
      />

      {/* Cyan accent – center-right */}
      <div
        className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle, #06b6d4 0%, #3b82f6 40%, transparent 70%)",
          animation: "cosmicFloat 26s ease-in-out 3s infinite",
        }}
      />

      {/* Star field – tiny subtle dots */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.35) 0%, transparent 100%), radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.25) 0%, transparent 100%), radial-gradient(1px 1px at 50px 160px, rgba(255,255,255,0.15) 0%, transparent 100%), radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.3) 0%, transparent 100%), radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.2) 0%, transparent 100%), radial-gradient(1px 1px at 160px 120px, rgba(255,255,255,0.12) 0%, transparent 100%)",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Fine grid – very subtle, fading at edges */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 30%, black 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 30%, black 0%, transparent 80%)",
        }}
      />

      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

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
