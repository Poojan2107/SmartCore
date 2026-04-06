"use client";

import { motion } from "framer-motion";
import { PhoneCall, MapPin, Mail, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-orange)]/90 via-[var(--color-brand-orange)] to-[var(--color-brand-orange-light)]/90 z-0"/>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[100px] z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-heading font-black text-slate-900 mb-6 tracking-tight"
        >
          See SmartCore on your terms
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl font-medium text-slate-800 mb-12 max-w-2xl mx-auto"
        >
          We're based right here in Ahmedabad. Tell us about your batches and your pain points — we'll listen, and show you exactly how we can help.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
        >
          <div className="flex items-center gap-2 bg-slate-900/10 px-5 py-3 rounded-full text-slate-900 font-bold backdrop-blur-sm border border-slate-900/10">
            <Mail className="w-5 h-5" />
            <span>info@smartcoretech.in</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/10 px-5 py-3 rounded-full text-slate-900 font-bold backdrop-blur-sm border border-slate-900/10">
            <MapPin className="w-5 h-5" />
            <span>Ahmedabad, Gujarat</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="tel:+91XXXXXXXXXX"
            className="group flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-5 rounded-2xl text-xl font-bold transition-all shadow-[0_10px_40px_rgba(15,23,42,0.3)] hover:shadow-[0_15px_50px_rgba(15,23,42,0.4)] mx-auto w-fit"
          >
            <PhoneCall className="w-6 h-6" />
            <span>Call +91 XXXXX XXXXX</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
