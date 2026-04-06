"use client";

import { motion } from "framer-motion";
import { Code2, Workflow, Handshake } from "lucide-react";

export default function TeamSection() {
  return (
    <section className="py-24 bg-[var(--bg)] border-t border-[var(--border)] relative overflow-hidden" id="team">
      <div
        className="absolute top-0 left-1/2 w-[700px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(ellipse, color-mix(in srgb, var(--color-brand-blue) 8%, transparent), color-mix(in srgb, var(--color-brand-orange) 6%, transparent))" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-[var(--color-brand-orange)] uppercase tracking-[0.2em] mb-4"
          >
            The People Behind SmartCore
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-[var(--fg)] mb-4 tracking-tight"
          >
            One Platform. <span className="text-[var(--color-brand-blue)]">Two Co-Founders.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--muted)]"
          >
            SmartCore was not built by a company — it was built by two people who saw the same problem and decided to solve it together, from scratch.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">

          {/* Unified Identity Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--panel)] border border-[var(--border)] rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: "radial-gradient(circle at 30% 50%, var(--color-brand-orange), transparent 50%), radial-gradient(circle at 70% 50%, var(--color-brand-blue), transparent 50%)" }}
            />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="flex -space-x-3">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-orange)]/10 border-2 border-[var(--color-brand-orange)]/30 flex items-center justify-center font-bold text-lg text-[var(--color-brand-orange)] z-10 shadow-lg">
                    DP
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-blue)]/10 border-2 border-[var(--color-brand-blue)]/30 flex items-center justify-center font-bold text-lg text-[var(--color-brand-blue)] shadow-lg">
                    PS
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--fg)]">Dhananjay Parmar & Poojan Shrivastav</h3>
                  <p className="text-[var(--muted)] text-sm mt-0.5">Co-Founders — SmartCore Technologies, Ahmedabad</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg)] text-sm font-medium text-[var(--muted)] shrink-0">
                <Handshake className="w-4 h-4 text-[var(--color-brand-orange)]" />
                Built together, from day one
              </div>
            </div>
          </motion.div>

          {/* Complementary Domains */}
          <div className="grid md:grid-cols-2 gap-6">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[var(--panel)] border border-[var(--border)] rounded-3xl p-8 group hover:border-[var(--color-brand-orange)]/40 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 bg-[var(--color-brand-orange)]/5 group-hover:bg-[var(--color-brand-orange)]/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-orange)]/10 border border-[var(--color-brand-orange)]/20 flex items-center justify-center mb-6">
                  <Workflow className="w-5 h-5 text-[var(--color-brand-orange)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--fg)] mb-1">Dhananjay Parmar</h3>
                <p className="text-[var(--color-brand-orange)] text-sm font-semibold uppercase tracking-wide mb-4">Co-Founder · Product & Vision</p>
                <p className="text-[var(--muted)] leading-relaxed">
                  Dhananjay shapes the product direction and client relationships. He sits with institute owners, understands their operations deeply, and translates their needs into a vision the platform can deliver on — every single build.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[var(--panel)] border border-[var(--border)] rounded-3xl p-8 group hover:border-[var(--color-brand-blue)]/40 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 bg-[var(--color-brand-blue)]/5 group-hover:bg-[var(--color-brand-blue)]/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-blue)]/10 border border-[var(--color-brand-blue)]/20 flex items-center justify-center mb-6">
                  <Code2 className="w-5 h-5 text-[var(--color-brand-blue)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--fg)] mb-1">Poojan Shrivastav</h3>
                <p className="text-[var(--color-brand-blue)] text-sm font-semibold uppercase tracking-wide mb-4">Co-Founder · Engineering & Architecture</p>
                <p className="text-[var(--muted)] leading-relaxed">
                  Poojan engineers the backbone of every system. He architects the data pipelines, builds the secure APIs, and writes the code that makes SmartCore reliable enough to run an entire institute without breaking a sweat.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Bottom tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-[var(--muted)] pt-2"
          >
            <span className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[var(--border)]" />
              No sales team. No outsourcing. Just two Co-Founders, personally accountable for every system we ship.
              <span className="w-8 h-[1px] bg-[var(--border)]" />
            </span>
          </motion.p>

        </div>
      </div>
    </section>
  );
}
