"use client";

import { motion } from "framer-motion";
import { Users, CalendarDays, LineChart, BellRing, Clock, Shield, CheckCircle2, CreditCard, MessageSquare } from "lucide-react";

export default function FeaturesGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-[var(--bg)] border-t border-[var(--border)]" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-[var(--color-brand-blue-light)] uppercase tracking-[0.2em] mb-4"
          >
            A Complete Tech Stack
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-[var(--fg)] mb-4 tracking-tight"
          >
            Everything You Need, <span className="text-[var(--color-brand-orange)]">Built For You</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--muted)]"
          >
            We don't offer generic templates. We build each specific module to match the exact requirements of your coaching institute.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Wide */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[var(--panel)] border border-[var(--border)] rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-[var(--color-brand-blue-light)] transition-colors shadow-lg shadow-black/5 dark:shadow-none"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-20 group-hover:opacity-10 dark:group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <Users className="w-24 h-24 text-[var(--color-brand-blue)]" />
            </div>
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-blue)]/10 dark:bg-[var(--color-brand-blue)]/20 flex items-center justify-center text-[var(--color-brand-blue)] dark:text-[var(--color-brand-blue-light)] mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--fg)] mb-3">Student & Batch Management</h3>
              <p className="text-[var(--muted)] leading-relaxed mb-6">
                Organize thousands of students into distinct batches, track their individual progression, and automatically flag unassigned students. Custom tailored to your internal numbering system.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-[var(--fg)] font-medium"><CheckCircle2 className="w-4 h-4 text-green-500" /> Auto-roll generation</li>
                <li className="flex items-center gap-2 text-sm text-[var(--fg)] font-medium"><CheckCircle2 className="w-4 h-4 text-green-500" /> Capacity alerts</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Square */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[var(--panel)] border border-[var(--border)] rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-[var(--color-brand-orange-light)] transition-colors shadow-lg shadow-black/5 dark:shadow-none"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-20 group-hover:opacity-10 dark:group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500">
              <CreditCard className="w-24 h-24 text-[var(--color-brand-orange)]" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-orange)]/10 dark:bg-[var(--color-brand-orange)]/20 flex items-center justify-center text-[var(--color-brand-orange)] mb-6">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--fg)] mb-3">Automated Fee Tracking</h3>
              <p className="text-[var(--muted)] leading-relaxed text-sm">
                Say goodbye to Excel sheets. Generate invoices natively and accept payments directly natively.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Square */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[var(--panel)] border border-[var(--border)] rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-pink-500 transition-colors shadow-lg shadow-black/5 dark:shadow-none"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-20 group-hover:opacity-10 dark:group-hover:opacity-100 group-hover:-rotate-12 transition-all duration-500">
              <MessageSquare className="w-24 h-24 text-pink-500" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 dark:bg-pink-500/20 flex items-center justify-center text-pink-500 mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--fg)] mb-3">Parent Comms</h3>
              <p className="text-[var(--muted)] leading-relaxed text-sm">
                Automatically push attendance reports and test scores via built-in WhatsApp integrations.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Wide */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-[var(--panel)] border border-[var(--border)] rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-emerald-500 transition-colors shadow-lg shadow-black/5 dark:shadow-none"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-20 group-hover:opacity-10 dark:group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <LineChart className="w-24 h-24 text-emerald-500" />
            </div>
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--fg)] mb-3">Performance Analytics</h3>
              <p className="text-[var(--muted)] leading-relaxed mb-6">
                Monitor student test scores across terms visually. Identify struggling batches instantly with clear dashboards explicitly tailored to your requirements.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
