"use client";
import { motion } from "framer-motion";
import { Globe, LayoutDashboard, Smartphone, Code2, Cloud, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = { Globe, LayoutDashboard, Smartphone, Code2, Cloud };
const colors = ["text-brand", "text-purple-400", "text-cyan-400", "text-emerald-400", "text-amber-400"];
const bgs = ["bg-brand/10 border-brand/20", "bg-purple-500/10 border-purple-500/20", "bg-cyan-500/10 border-cyan-500/20", "bg-emerald-500/10 border-emerald-500/20", "bg-amber-500/10 border-amber-500/20"];
const details: Record<string, string[]> = {
  "web-development": ["Responsive across all devices", "SEO-optimised structure", "Performance-first architecture", "Accessible design", "Fast loading"],
  "web-applications": ["Scalable architecture", "Clean UX", "Role-based access", "Real-time dashboards", "API-ready"],
  "mobile-applications": ["Cross-platform iOS/Android", "Native-feel performance", "Offline-capable", "Push notifications", "Store deployment"],
  "custom-software": ["Built around your workflow", "Maintainable codebase", "System integration", "Full documentation", "Long-term support"],
  "cloud-devops": ["Cloud architecture", "CI/CD pipelines", "Container orchestration", "Monitoring", "Zero-downtime deploys"],
};

export function ServicesPage() {
  return (
    <div className="bg-[#09090f] min-h-screen">
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(99,102,241,0.14) 0%, transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6"><div className="w-5 h-px bg-brand" /><span className="text-xs font-semibold tracking-widest uppercase text-brand-light">Services</span></div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">What we <span className="gradient-text">build.</span></h1>
            <p className="text-lg text-white/50 max-w-xl leading-relaxed">From modern websites to complex cloud infrastructure — we design and build digital products that perform.</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-5">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon];
            return (
              <motion.div key={svc.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 md:p-10 hover:border-white/[0.12] transition-all">
                <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-start">
                  <div className={`w-14 h-14 rounded-2xl ${bgs[i]} border flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${colors[i]}`} />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">{svc.title}</h2>
                    <p className="text-white/50 mb-5">{svc.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                      {(details[svc.id] || []).map((pt) => (
                        <li key={pt} className="flex items-center gap-2.5">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${colors[i]}`} />
                          <span className="text-sm text-white/55">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold ${bgs[i]} border ${colors[i]} whitespace-nowrap`}>
                    Get started <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
