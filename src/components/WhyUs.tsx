"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Tags, Headset, Activity, UserCheck, RefreshCw } from "lucide-react";

export default function WhyUs() {
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

  const reasons = [
    {
      title: "Robust Security",
      desc: "Bank-level encryption ensures your student data and financial records are completely private.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Exclusive Codebase",
      desc: "Unlike multi-tenant SaaS platforms, you get your own dedicated software environment.",
      icon: <Tags className="w-5 h-5 text-emerald-500" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "24/7 Dedicated Support",
      desc: "Our Ahmedabad-based team is always available via WhatsApp to resolve your specific issues instantly.",
      icon: <Headset className="w-5 h-5 text-[var(--color-brand-orange)]" />,
      bg: "bg-[var(--color-brand-orange)]/10",
      border: "border-[var(--color-brand-orange)]/20"
    },
    {
      title: "Private Servers",
      desc: "Hosted on premium private cloud infrastructure exclusively for your institute.",
      icon: <Activity className="w-5 h-5 text-rose-500" />,
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      title: "Dedicated Manager",
      desc: "Get a personal account manager who understands your specific operational workflows.",
      icon: <UserCheck className="w-5 h-5 text-indigo-500" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      title: "Bespoke Updates",
      desc: "We push new features and optimizations built strictly on your direct feedback and roadmap.",
      icon: <RefreshCw className="w-5 h-5 text-cyan-500" />,
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    }
  ];

  return (
    <section className="py-24 bg-[var(--bg)] border-t border-[var(--border)]" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-[var(--color-brand-blue-light)] uppercase tracking-[0.2em] mb-4"
          >
            Outperform The Competition
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-[var(--fg)] mb-4 tracking-tight"
          >
            Why You Should <span className="text-[var(--color-brand-orange)]">Partner With Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--muted)]"
          >
            The premium choice for coaching institutes pushing beyond the standard SaaS solutions.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, idx) => (
            <motion.div variants={item} key={idx} className="bg-[var(--panel)] border border-[var(--border)] shadow-sm rounded-2xl p-6 hover:-translate-y-1 transition-all hover:shadow-xl group">
              <div className={`w-10 h-10 rounded-lg ${reason.bg} ${reason.border} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-[var(--fg)] mb-2">{reason.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
