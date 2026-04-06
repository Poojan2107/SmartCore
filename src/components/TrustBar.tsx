"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, School, BookOpen } from "lucide-react";

export default function TrustBar() {
  const items = [
    { name: "Coaching centers", icon: <Building2 className="w-5 h-5" /> },
    { name: "Tuition chains", icon: <School className="w-5 h-5" /> },
    { name: "K-12 institutes", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Test prep academies", icon: <BookOpen className="w-5 h-5" /> },
  ];

  return (
    <section className="py-12 border-y border-slate-800/50 bg-slate-900/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-[0.15em] hidden sm:block mb-8">
          Empowering Ahmedabad's coaching classes to go digital
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-70">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                {item.icon}
              </div>
              <span className="font-semibold">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
