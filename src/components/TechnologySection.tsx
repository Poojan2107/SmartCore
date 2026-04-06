"use client";

import { motion } from "framer-motion";
import { Smartphone, Lock, CreditCard, RefreshCw, Zap } from "lucide-react";

export default function TechnologySection() {
  const features = [
    {
      title: "Mobile & Web App",
      desc: "Access your institute's data seamlessly from any device, whether you're at the desk or on the go.",
      icon: <Smartphone className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Dedicated Environments",
      desc: "A completely isolated, tamper-proof system for managing all your student onboarding processes.",
      icon: <Lock className="w-5 h-5 text-green-500" />
    },
    {
      title: "Custom Integrations",
      desc: "Integrate easily with your preferred top payment providers to handle fee collections securely.",
      icon: <CreditCard className="w-5 h-5 text-purple-500" />
    },
    {
      title: "Single Click Syncing",
      desc: "All attendance, fees, and communication data syncs across the platform immediately for all users.",
      icon: <RefreshCw className="w-5 h-5 text-amber-500" />
    },
    {
      title: "Zero Download Time",
      desc: "Our isolated cloud architectures guarantee lighting-fast load times even on slow networks.",
      icon: <Zap className="w-5 h-5 text-orange-500" />
    }
  ];

  return (
    <section className="py-24 bg-[var(--bg)] border-t border-[var(--border)]" id="technology">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <p className="text-xs font-bold text-[var(--color-brand-blue-light)] uppercase tracking-[0.2em] mb-4">
              Built For Speed & Privacy
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--fg)] mb-6 tracking-tight leading-tight">
              Technology that simplifies today,<br/>
              <span className="text-[var(--muted)] font-normal italic">and secures tomorrow.</span>
            </h2>
            <p className="text-lg text-[var(--muted)] mb-8 max-w-lg">
              We don't just provide a web portal. We build an entire technical infrastructure that guarantees absolute reliability, isolation, and speed for your institute.
            </p>
            
            <div className="flex gap-4">
              <div className="bg-[var(--panel)] shadow-sm border border-[var(--border)] rounded-xl p-4 w-32 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-[var(--fg)] mb-1">99.9%</span>
                <span className="text-xs text-[var(--muted)] font-bold uppercase tracking-wider">Uptime</span>
              </div>
              <div className="bg-[var(--panel)] shadow-sm border border-[var(--border)] rounded-xl p-4 w-32 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-[var(--fg)] mb-1">A+</span>
                <span className="text-xs text-[var(--muted)] font-bold uppercase tracking-wider">Security</span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[var(--panel)] shadow-sm border border-[var(--border)] rounded-2xl p-6 flex gap-6 items-start group hover:border-[var(--color-brand-blue-light)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--fg)] mb-2">{feature.title}</h3>
                  <p className="text-[var(--muted)] leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
