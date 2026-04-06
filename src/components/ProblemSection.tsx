"use client";

import { motion } from "framer-motion";
import { ClipboardList, Coins, FolderKanban } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      title: "Lost Fee Receipts",
      desc: "Awkward conversations with parents about dues because a paper receipt went missing.",
      icon: <Coins className="w-6 h-6" />,
      color: "border-amber-500/30 bg-amber-500/5 text-amber-400",
    },
    {
      title: "Attendance Chaos",
      desc: "Teachers spending the first 15 minutes of every class calling roll and updating registers instead of teaching.",
      icon: <ClipboardList className="w-6 h-6" />,
      color: "border-red-500/30 bg-red-500/5 text-red-400",
    },
    {
      title: "Notebook Dependency",
      desc: "When student data and progress are locked in physical files, giving parents accurate updates feels like guesswork.",
      icon: <FolderKanban className="w-6 h-6" />,
      color: "border-blue-500/30 bg-blue-500/5 text-blue-400",
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-slate-50 mb-6 tracking-tight"
          >
            The old paper way is hurting your <span className="text-slate-500 font-normal italic">growth.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 leading-relaxed"
          >
            Registers, spreadsheets, and scattered WhatsApp chats hide revenue leaks and burn your staff's energy. You don't need a complex corporate tool; you need a simple assistant that works the way you do.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glassmorphism p-8 rounded-2xl group hover:border-slate-500/50 transition-colors"
            >
              <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-1 ${prob.color}`}>
                {prob.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-3">{prob.title}</h3>
              <p className="text-slate-400">{prob.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
