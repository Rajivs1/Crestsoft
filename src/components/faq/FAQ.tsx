"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs, FAQItem } from "@/data/faq";

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="card-light overflow-hidden transition-colors duration-200">
      <button
        onClick={onToggle}
        className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer select-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3.5">
          <span className="w-6 h-6 rounded-lg bg-[#E85D3F]/10 text-[#E85D3F] flex items-center justify-center shrink-0 mt-0.5">
            <HelpCircle className="w-3.5 h-3.5" />
          </span>
          <div>
            <span className="text-[10px] font-display uppercase tracking-widest text-[#a89a8a] block mb-1">
              {item.category}
            </span>
            <h3 className="font-display text-[#151515] font-semibold text-sm sm:text-base leading-snug">
              {item.question}
            </h3>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full border border-[#E7DED3] flex items-center justify-center shrink-0 text-[#68645F] group-hover:border-[#E85D3F]"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 border-t border-[#E7DED3]/40 pl-14 sm:pl-16">
              <p className="text-xs sm:text-sm text-[#68645F] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 z-10">
      <div className="section-wrapper max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[10px] font-display font-semibold tracking-[0.2em] uppercase text-[#E85D3F] mb-3 px-3 py-1 rounded-full border border-[#E85D3F]/20 bg-[#E85D3F]/5">
            Got Questions?
          </span>
          <h2
            className="font-display text-[#151515] leading-[1.05]"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              letterSpacing: "-0.03em",
              fontWeight: 700,
            }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#68645F] max-w-md mx-auto leading-relaxed mt-3">
            Everything you need to know about our collaboration model, delivery speed, and engineering standards.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((f) => (
            <AccordionItem
              key={f.id}
              item={f}
              isOpen={openId === f.id}
              onToggle={() => toggle(f.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
