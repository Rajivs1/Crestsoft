"use client";

interface Props {
  projectId: string;
  accentColor: string;
}

export function ProjectMockup({ projectId, accentColor }: Props) {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-950">
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-4 h-9 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <div className="flex-1 mx-3 h-5 rounded bg-white/[0.05] flex items-center px-2.5">
          <span className="text-[9px] text-white/20 font-mono">crestsoft.in/{projectId}</span>
        </div>
      </div>
      {/* Content area with accent glow */}
      <div className="h-[calc(100%-2.25rem)] relative overflow-hidden">
        {/* Accent gradient overlay */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${accentColor}15 0%, transparent 50%)` }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        {/* Mockup UI */}
        <div className="relative p-5 space-y-3">
          {/* Nav skeleton */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md" style={{ background: `${accentColor}40` }} />
              <div className="h-2 w-16 rounded-full bg-white/15" />
            </div>
            <div className="flex gap-4">
              <div className="h-1.5 w-10 rounded-full bg-white/8" />
              <div className="h-1.5 w-10 rounded-full bg-white/8" />
              <div className="h-1.5 w-10 rounded-full bg-white/8" />
            </div>
          </div>
          {/* Hero area */}
          <div className="pt-4 space-y-2">
            <div className="h-3.5 w-3/4 rounded-full bg-white/20" />
            <div className="h-2.5 w-1/2 rounded-full bg-white/10" />
            <div className="h-2 w-2/3 rounded-full bg-white/7" />
          </div>
          <div className="flex gap-2 pt-2">
            <div className="h-7 w-20 rounded-lg" style={{ background: accentColor }} />
            <div className="h-7 w-18 rounded-lg border border-white/15" />
          </div>
          {/* Cards */}
          <div className="grid grid-cols-3 gap-2.5 pt-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-xl p-3 bg-white/[0.03] border border-white/[0.06]">
                <div className="h-1.5 w-8 rounded-full bg-white/10 mb-2" />
                <div className="h-2 w-12 rounded-full" style={{ background: `${accentColor}60` }} />
                <div className="mt-2 h-1 rounded-full bg-white/5">
                  <div className="h-full rounded-full" style={{ width: `${40 + i * 20}%`, background: `${accentColor}80` }} />
                </div>
              </div>
            ))}
          </div>
          {/* Chart area */}
          <div className="rounded-xl p-3 border border-white/[0.05] bg-white/[0.02]">
            <div className="flex items-end gap-1 h-12">
              {[45, 65, 40, 80, 55, 75, 50, 85, 60, 70, 90, 65].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i >= 10 ? accentColor : `${accentColor}35` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
