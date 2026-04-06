"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingTable() {
  const tiers = [
    {
      name: "Starter",
      priceRange: "₹8,000 – ₹12,000",
      desc: "Perfect for single-batch tutors.",
      features: [
        "Student management",
        "Attendance tracking",
        "Basic dashboard",
      ],
      popular: false,
    },
    {
      name: "Basic",
      priceRange: "₹15,000 – ₹20,000",
      desc: "For growing coaching classes.",
      features: [
        "Everything in Starter",
        "Teacher role",
        "Student login",
      ],
      popular: false,
    },
    {
      name: "Standard",
      priceRange: "₹25,000 – ₹35,000",
      desc: "The smart choice for established institutes.",
      features: [
        "Everything in Basic",
        "Marks management",
        "Reports",
        "Study material upload",
        "Accountant role",
      ],
      popular: true,
    },
    {
      name: "Advanced",
      priceRange: "₹40,000 – ₹60,000",
      desc: "For multi-branch coaching chains.",
      features: [
        "Everything in Standard",
        "WhatsApp / SMS automation",
        "Fees tracking",
        "Advanced reports",
      ],
      popular: false,
    },
    {
      name: "Premium",
      priceRange: "₹70,000 – ₹1,00,000",
      desc: "Enterprise custom development.",
      features: [
        "Everything in Advanced",
        "Full multi-role system",
        "Admin, Teacher, Accountant, Assistant, Student roles",
      ],
      popular: false,
    }
  ];

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
    <section className="py-24 bg-[var(--bg)] border-t border-[var(--border)] relative" id="pricing">
      {/* Background glow to emphasize focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-[var(--color-brand-blue)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-[var(--color-brand-blue-light)] uppercase tracking-[0.2em] mb-4"
          >
            Clear And Transparent
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-[var(--fg)] mb-4 tracking-tight"
          >
            Transparent pricing by <span className="text-[var(--color-brand-orange)]">institute size</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--muted)]"
          >
            One-time setup investment. No monthly platform fees. No surprise add-ons.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {tiers.map((tier, idx) => (
            <motion.div 
              variants={item} 
              key={idx} 
              className={`relative bg-[var(--panel)] border ${tier.popular ? "border-[var(--color-brand-orange)] shadow-2xl scale-100 lg:scale-105 z-10" : "border-[var(--border)] hover:border-[var(--color-brand-blue-light)] shadow-sm hover:shadow-xl"} rounded-3xl p-6 flex flex-col transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-brand-orange)] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[var(--fg)] mb-2">{tier.name}</h3>
                <p className="text-[var(--muted)] text-sm h-10">{tier.desc}</p>
              </div>

              <div className="mb-6">
                <div className="flex flex-col items-start gap-1">
                  <span className="text-2xl font-black text-[var(--fg)] tracking-tight">{tier.priceRange}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${tier.popular ? "text-[var(--color-brand-orange)]" : "text-[var(--color-brand-blue-light)]"}`} />
                    <span className="text-sm text-[var(--fg)] font-medium leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`w-full py-3 rounded-xl font-bold text-sm text-center transition-colors block ${tier.popular ? "bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-light)] text-white shadow-md shadow-[rgba(244,94,34,0.3)]" : "bg-[var(--bg)] border border-[var(--border)] hover:bg-[var(--color-brand-blue)] hover:text-white hover:border-[var(--color-brand-blue)] text-[var(--fg)]"}`}
              >
                {tier.name === "Premium" ? "Contact Us" : "Get Started"}
              </a>

            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-[var(--muted)] text-sm mt-12 max-w-2xl mx-auto">
          * Final pricing depends on institute size, integrations, and customization. We'll confirm a written quote after scoping.
        </p>

      </div>
    </section>
  );
}
