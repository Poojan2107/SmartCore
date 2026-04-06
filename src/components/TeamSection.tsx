"use client";

import { motion } from "framer-motion";

export default function TeamSection() {
  const team = [
    {
      name: "Poojan Shrivastav",
      initials: "PS",
      role: "Co-Founder & Developer",
      desc: "Specializing in high-performance architecture and secure data management. Poojan ensures that your institute's digital infrastructure is robust, scalable, and capable of handling thousands of student records without a single bottleneck.",
      color: "var(--color-brand-blue)"
    },
    {
      name: "Dhananjay Parmar",
      initials: "DP",
      role: "Co-Founder & Developer",
      desc: "Focused on crafting intuitive workflows and seamless user experiences. Dhananjay designs the precise administrative tools and interfaces that allow your staff to manage fees, attendance, and communications effortlessly.",
      color: "var(--color-brand-orange)"
    }
  ];

  return (
    <section className="py-24 bg-[var(--bg)] border-t border-[var(--border)]" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-[var(--color-brand-blue-light)] uppercase tracking-[0.2em] mb-4"
          >
            Locally Rooted Experts
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-[var(--fg)] mb-4 tracking-tight"
          >
            The Engineers Building <span className="text-[var(--color-brand-orange)]">Your Systems</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--muted)]"
          >
            We are dedicated developers based in Ahmedabad. No outsourced support, no generic sales teams—just the architects personally invested in writing the code that powers your institute.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[var(--panel)] border border-[var(--border)] rounded-3xl p-8 hover:border-[var(--color-brand-blue-light)] transition-colors shadow-lg shadow-black/5 dark:shadow-none relative overflow-hidden group"
            >
              {/* Subtle accent glow */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-10 group-hover:opacity-20 transition-opacity" 
                style={{ backgroundColor: member.color }}
              />

              <div className="flex items-center gap-5 mb-6 relative z-10">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl uppercase tracking-wider"
                  style={{ backgroundColor: `color-mix(in srgb, ${member.color} 10%, transparent)`, color: member.color }}
                >
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--fg)]">{member.name}</h3>
                  <p className="text-[var(--color-brand-orange)] font-semibold text-sm tracking-wide uppercase mt-1">
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="text-[var(--muted)] leading-relaxed relative z-10">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
