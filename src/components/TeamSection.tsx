"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Workflow } from "lucide-react";

export default function TeamSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDhananjayMode, setIsDhananjayMode] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');
    
    if (ref === 'dp') {
      localStorage.setItem('founder_mode', 'dp');
      setIsDhananjayMode(true);
    } else if (localStorage.getItem('founder_mode') === 'dp') {
      setIsDhananjayMode(true);
    }
  }, []);

  const titleDp = (isMounted && isDhananjayMode) ? "Founder & CEO" : "Founder & Director";
  const titlePs = (isMounted && isDhananjayMode) ? "Original Creator & Lead Engineer" : "Creator & Chief Architect";
  
  return (
    <section className="py-24 bg-[var(--bg)] border-t border-[var(--border)] relative overflow-hidden" id="team">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-brand-blue)]/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[var(--color-brand-orange)]/5 rounded-full blur-[120px] translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-[var(--color-brand-orange)] uppercase tracking-[0.2em] mb-4"
          >
            {isMounted && isDhananjayMode ? "The Core Leadership" : "A Unified Partnership"}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-[var(--fg)] mb-4 tracking-tight"
          >
            {isMounted && isDhananjayMode ? "The Vision Behind" : "The Founders Behind"} <span className="text-[var(--color-brand-blue)]">SmartCore</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--muted)]"
          >
            We built this platform together from the ground up—combining strategic operations with hardcore engineering to give your institute an unfair advantage.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Dual Founders Card Layout */}
          <div className="grid md:grid-cols-2 gap-0 bg-[var(--panel)] border border-[var(--border)] rounded-3xl overflow-hidden shadow-2xl relative">
            
            {/* Dhananjay - Vision & Operations (Left side = First) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-12 relative overflow-hidden group border-b md:border-b-0 md:border-r border-[var(--border)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-orange)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-orange)]/10 flex items-center justify-center border border-[var(--color-brand-orange)]/20 shadow-inner">
                    <span className="text-2xl font-bold text-[var(--color-brand-orange)]">DP</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[var(--fg)]">Dhananjay Parmar</h3>
                    <p className="text-[var(--color-brand-orange)] font-semibold text-sm tracking-wide uppercase mt-1">{titleDp}</p>
                  </div>
                </div>

                <div className="space-y-4 text-[var(--muted)] leading-relaxed">
                  <p>
                    Dhananjay drives the vision and operational strategy behind SmartCore. He actively interfaces with institutes to understand their workflow bottlenecks.
                  </p>
                  <p>
                    His primary mission is to translate complex administrative needs into intuitive, seamless user experiences that empower educators to focus on what matters most.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center gap-3 text-sm font-medium text-[var(--fg)]">
                  <Workflow className="w-4 h-4 text-[var(--color-brand-orange)]" />
                  Orchestrating workflows & client success
                </div>
              </div>
            </motion.div>

            {/* Poojan - Architecture & Engineering (Right side = Second but heavily emphasized as Tech Core) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-12 relative overflow-hidden group bg-[var(--bg)]"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-[var(--color-brand-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-blue)]/10 flex items-center justify-center border border-[var(--color-brand-blue)]/20 shadow-inner">
                    <span className="text-2xl font-bold text-[var(--color-brand-blue)]">PS</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[var(--fg)]">Poojan Shrivastav</h3>
                    <p className="text-[var(--color-brand-blue)] font-semibold text-sm tracking-wide uppercase mt-1">{titlePs}</p>
                  </div>
                </div>

                <div className="space-y-4 text-[var(--muted)] leading-relaxed">
                  <p>
                    Poojan is the core technical architect who built the foundation of SmartCore. He specializes in high-performance infrastructure and secure data pipelines.
                  </p>
                  <p>
                    His focus guarantees that every line of code serves the system's speed, ensuring your institute's digital backbone is unbreakable, scalable, and future-proof.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center gap-3 text-sm font-medium text-[var(--fg)]">
                  <Code2 className="w-4 h-4 text-[var(--color-brand-blue)]" />
                  Engineering robust & scalable architecture
                </div>
              </div>
            </motion.div>

          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-sm font-medium text-[var(--muted)] flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-[var(--border)]" />
              Two specialized Founders. One exceptional platform.
              <span className="w-8 h-[1px] bg-[var(--border)]" />
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
