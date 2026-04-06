"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What does bespoke development mean for my institute?",
      answer: "It means we don't force you into a pre-built box. We analyze your specific paper trails, fee structures, and staff workflows, and deploy an individual system mapped explicitly to your processes."
    },
    {
      question: "Can I import my old Excel data?",
      answer: "Absolutely. During deployment, our engineering team handles the secure migration of your existing student data, attendance records, and financial histories directly into your new system."
    },
    {
      question: "Are servers and databases shared?",
      answer: "No. Unlike traditional SaaS tools where your data sits next to a thousand other schools, we provision dedicated deployment environments ensuring absolute privacy, speed, and security."
    },
    {
      question: "How does support and maintenance work?",
      answer: "Since your system is unique, our Ahmedabad-based team acts as your dedicated IT department. You message us directly on WhatsApp, and we resolve issues, run server updates, and build feature requests directly for you."
    },
    {
      question: "Is there a long-term commitment?",
      answer: "We partner deeply with the institutes we take on, but you own your data completely. Contracts are totally transparent, mapped around our consulting, building, and maintaining phases."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[var(--bg)] border-t border-[var(--border)]" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-[var(--fg)] mb-4 tracking-tight"
          >
            Frequently Asked <span className="text-[var(--color-brand-blue-light)]">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--muted)]"
          >
            Find answers to common questions about our custom delivery process.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="bg-[var(--panel)] border border-[var(--border)] shadow-sm rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                suppressHydrationWarning
              >
                <span className="text-[var(--fg)] font-semibold">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[var(--muted)] transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-[var(--color-brand-orange)]" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-[var(--muted)] leading-relaxed text-sm md:text-base border-t border-[var(--border)] pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
