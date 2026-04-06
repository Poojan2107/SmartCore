"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb } from "lucide-react";

export default function TeamSection() {
  return (
    <section className="py-24 bg-[var(--bg)] border-t border-[var(--border)] relative overflow-hidden" id="team">
      <div
        className="absolute top-0 left-1/2 w-[700px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(ellipse, color-mix(in srgb, var(--color-brand-orange) 8%, transparent), color-mix(in srgb, var(--color-brand-blue) 6%, transparent))" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-[var(--color-brand-orange)] uppercase tracking-[0.2em] mb-4"
          >
            The Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-[var(--fg)] mb-4 tracking-tight"
          >
            The People Who <span className="text-[var(--color-brand-orange)]">Built This</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--muted)]"
          >
            A founder with a clear vision and a developer who makes that vision real — this is SmartCore.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* Dhananjaysinh — Founder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--panel)] border border-[var(--border)] rounded-3xl p-8 group hover:border-[var(--color-brand-orange)]/40 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 bg-[var(--color-brand-orange)]/6 group-hover:bg-[var(--color-brand-orange)]/12 transition-colors" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-orange)]/10 border border-[var(--color-brand-orange)]/20 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-[var(--color-brand-orange)]" />
                </div>
                <span className="text-xs font-bold text-[var(--color-brand-orange)] uppercase tracking-widest border border-[var(--color-brand-orange)]/20 bg-[var(--color-brand-orange)]/5 px-3 py-1 rounded-full">
                  Founder
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--fg)] mb-1">Dhananjaysinh Parmar</h3>
              <p className="text-[var(--color-brand-orange)] text-sm font-semibold uppercase tracking-wide mb-5">Founder & Director</p>
              <p className="text-[var(--muted)] leading-relaxed">
                Dhananjaysinh founded SmartCore with a mission to eliminate the operational chaos that plagues coaching institutes. He drives the product vision, owns client relationships, and ensures every solution we build is exactly what an institute actually needs.
              </p>
            </div>
          </motion.div>

          {/* Poojan — Core Developer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--panel)] border border-[var(--border)] rounded-3xl p-8 group hover:border-[var(--color-brand-blue)]/40 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 bg-[var(--color-brand-blue)]/6 group-hover:bg-[var(--color-brand-blue)]/12 transition-colors" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-blue)]/10 border border-[var(--color-brand-blue)]/20 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-[var(--color-brand-blue)]" />
                </div>
                <span className="text-xs font-bold text-[var(--color-brand-blue)] uppercase tracking-widest border border-[var(--color-brand-blue)]/20 bg-[var(--color-brand-blue)]/5 px-3 py-1 rounded-full">
                  Core Developer
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--fg)] mb-1">Poojan Shrivastav</h3>
              <p className="text-[var(--color-brand-blue)] text-sm font-semibold uppercase tracking-wide mb-5">Lead Engineer & Tech Core</p>
              <p className="text-[var(--muted)] leading-relaxed">
                Poojan engineers everything under the hood. He architects the data pipelines, builds the secure APIs, and writes every line of production code that makes SmartCore fast, reliable, and ready to scale with your institute.
              </p>
            </div>
          </motion.div>

        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-[var(--muted)] mt-8"
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[var(--border)]" />
            No sales team. No outsourcing. The founder and the engineer — directly accountable for every system we ship.
            <span className="w-8 h-[1px] bg-[var(--border)]" />
          </span>
        </motion.p>

      </div>
    </section>
  );
}
