"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight, Zap, MessageSquare, Shield } from "lucide-react";

export function ContactPage() {
  return (
    <div className="bg-[#09090f] min-h-screen">
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(99,102,241,0.14) 0%, transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6"><div className="w-5 h-px bg-brand" /><span className="text-xs font-semibold tracking-widest uppercase text-brand-light">Contact</span></div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">Let&apos;s build <span className="gradient-text">something.</span></h1>
            <p className="text-lg text-white/50 max-w-xl leading-relaxed">Have a project in mind? Drop us a message and we&apos;ll get back to you quickly.</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="space-y-8">
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8">
              <h2 className="text-xl font-bold text-white mb-6">Why work with CrestSoft</h2>
              <div className="space-y-5">
                {[
                  { Icon: Zap, title: "Fast turnaround", desc: "We move quickly without compromising quality." },
                  { Icon: MessageSquare, title: "Clear communication", desc: "You're kept in the loop at every stage." },
                  { Icon: Shield, title: "Built to last", desc: "We write clean, maintainable code you can grow on." },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-light" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-0.5">{title}</p>
                      <p className="text-xs text-white/40 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8">
              <h2 className="text-xl font-bold text-white mb-6">Get in touch directly</h2>
              <div className="space-y-3">
                {[
                  { href: "mailto:hello@crestsoft.in", Icon: Mail, label: "Email", value: "hello@crestsoft.in" },
                  { href: "#", Icon: Linkedin, label: "LinkedIn", value: "CrestSoft" },
                  { href: "#", Icon: Github, label: "GitHub", value: "CrestSoft" },
                ].map(({ href, Icon, label, value }) => (
                  <a key={label} href={href} className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.07] hover:border-brand/35 hover:bg-brand/5 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-light" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-white/35 mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-brand-light transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8">
              <h2 className="text-xl font-bold text-white mb-2">Send us a message</h2>
              <p className="text-sm text-white/35 mb-8">We&apos;ll get back to you within 24 hours.</p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2" htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand/50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2" htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand/50 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-2" htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand/50 transition-colors resize-none leading-relaxed" />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand text-white font-semibold hover:bg-brand-light transition-colors shadow-lg shadow-brand/25 text-sm">
                  Send Message <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
