"use client";

import { motion } from "framer-motion";
import { Coffee, Code2, Rocket, HeartHandshake } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      title: "Discovery & Planning",
      desc: "We start by understanding your exact workflows, paper trails, and pain points over a dedicated session.",
      icon: <Coffee className="w-6 h-6 text-blue-500" />,
      delay: 0.1
    },
    {
      title: "Custom Development",
      desc: "Our engineers build standard modules and integrate custom scripts required uniquely for your institute.",
      icon: <Code2 className="w-6 h-6 text-emerald-500" />,
      delay: 0.2
    },
    {
      title: "Deployment & Training",
      desc: "We deploy the application securely to your domain, migrate your data, and personally train your faculty.",
      icon: <Rocket className="w-6 h-6 text-[var(--color-brand-orange)]" />,
      delay: 0.3
    },
    {
      title: "Ongoing Maintenance",
      desc: "We act as your extended IT arm, ensuring 99.9% uptime and handling feature updates permanently.",
      icon: <HeartHandshake className="w-6 h-6 text-purple-500" />,
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 bg-[var(--bg)] border-t border-[var(--border)]" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-[var(--color-brand-blue-light)] uppercase tracking-[0.2em] mb-4"
          >
            How We Partner
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-[var(--fg)] mb-4 tracking-tight"
          >
            Our <span className="text-[var(--color-brand-orange)]">Engagement Model</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--muted)]"
          >
            We deploy individual systems. That means dedicated time, customized software, and reliable maintenance. First-class treatment every step of the way.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-[39px] md:left-1/2 top-4 bottom-4 w-0.5 bg-[var(--border)] md:-ml-[1px]" />
          
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: step.delay }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Center marker */}
                <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full bg-[var(--panel)] border-4 border-[var(--bg)] shadow-md flex items-center justify-center -ml-4 md:-ml-4 z-10 shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-brand-blue-light)]" />
                </div>
                
                {/* Content Box */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pl-16 text-left" : "md:pr-16 md:text-right"}`}>
                  <div className="bg-[var(--panel)] border border-[var(--border)] p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className={`mb-4 inline-flex p-3 rounded-xl bg-slate-100 dark:bg-slate-800 ${idx % 2 === 0 ? "float-left mr-4" : "md:float-right md:ml-4 float-left mr-4"}`}>
                      {step.icon}
                    </div>
                    <div className="clear-none md:clear-none">
                      <h3 className="text-xl font-bold text-[var(--fg)] mb-2">{step.title}</h3>
                      <p className="text-[var(--muted)] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
