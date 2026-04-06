"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, BookOpen, Clock, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32 overflow-hidden" id="home">
      {/* Background Effects matching mockup */}
      <div className="absolute inset-0 bg-[var(--bg)] z-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.05] dark:opacity-[0.02]" />
        
        {/* Gradients */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[var(--color-brand-blue)]/25 dark:bg-[var(--color-brand-blue)]/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-32 w-[600px] h-[600px] bg-[var(--color-brand-orange)]/20 dark:bg-[var(--color-brand-orange)]/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-center lg:text-left mx-auto lg:mx-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--panel)] border border-[var(--color-brand-blue)]/30 text-[var(--color-brand-blue-light)] text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue-light)] animate-pulse" />
              Bespoke Institute Systems
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-heading font-bold text-[var(--fg)] leading-[1.15] lg:leading-[1.1] mb-6 tracking-tight">
              Empowering <span className="text-[var(--color-brand-orange)]">Institutes,</span><br />
              Enriching <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-blue)] to-cyan-500 dark:from-[var(--color-brand-blue-light)] dark:to-cyan-400">Futures.</span>
            </h1>
            
            <p className="text-lg text-[var(--muted)] mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              We build custom digital infrastructure for leading coaching centers. Let SmartCore handle the administrative burden, your way.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-16">
              <a 
                href="#contact"
                className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-light)] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(244,94,34,0.3)] hover:shadow-[0_0_30px_rgba(244,94,34,0.5)]"
              >
                <span>Book A Free Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#pricing"
                className="w-full sm:w-auto group flex items-center justify-center gap-2 text-[var(--fg)] font-semibold hover:text-[var(--color-brand-orange-light)] transition-colors py-2"
              >
                <span>See Pricing</span>
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-10 pt-8 border-t border-[var(--border)]">
              <div>
                <strong className="block text-2xl font-bold text-[var(--fg)] mb-1">Your</strong>
                <span className="text-sm text-[var(--muted)] font-medium">Brand & Apps</span>
              </div>
              <div>
                <strong className="block text-2xl font-bold text-[var(--fg)] mb-1">Your</strong>
                <span className="text-sm text-[var(--muted)] font-medium">Servers & Data</span>
              </div>
              <div>
                <strong className="block text-2xl font-bold text-[var(--fg)] mb-1">24/7</strong>
                <span className="text-sm text-[var(--muted)] font-medium">Dedicated Care</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Custom Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-[500px]"
          >
            {/* Main graphic wrapping container to match mockup */}
            <div className="w-full aspect-[4/5] bg-gradient-to-br from-[var(--panel)] to-[var(--bg)] rounded-3xl border border-[var(--border)] relative z-10 shadow-2xl p-6 flex flex-col pt-12 overflow-hidden">
              
              {/* Inner glowing core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--color-brand-blue)]/10 dark:bg-[var(--color-brand-blue)]/20 rounded-full blur-[80px]" />
              
              {/* The "SmartCore" Brand */}
              <div className="flex flex-col items-center justify-center relative z-20 mb-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-blue-light)] flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    S
                  </div>
                  <span className="font-heading font-black text-2xl text-[var(--fg)]">SmartCore</span>
                </div>
                <div className="text-center">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-brand-orange)]">Custom Institute Management</span>
                </div>
              </div>

              {/* Floating Features List */}
              <div className="relative z-20 flex-grow relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05]">
                  {/* Fake background graphic to simulate the illustration in mockup */}
                  <Users className="w-64 h-64 text-[var(--fg)]" />
                </div>

                <div className="flex flex-col gap-3 relative z-30 ml-4 mt-8">
                  
                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 bg-[var(--panel)] backdrop-blur-md p-3 rounded-xl border border-[var(--border)] w-max shadow-lg">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-blue)]/20 flex items-center justify-center text-[var(--color-brand-blue-light)]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-[var(--fg)]">Attendance</span>
                    <CheckCircle2 className="w-4 h-4 text-green-500 ml-2" />
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 bg-[var(--panel)] backdrop-blur-md p-3 rounded-xl border border-[var(--border)] w-max shadow-lg ml-6">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-orange)]/20 flex items-center justify-center text-[var(--color-brand-orange)]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </div>
                    <span className="text-sm font-semibold text-[var(--fg)]">Fees tracking</span>
                    <CheckCircle2 className="w-4 h-4 text-green-500 ml-2" />
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 bg-[var(--panel)] backdrop-blur-md p-3 rounded-xl border border-[var(--border)] w-max shadow-lg ml-2">
                    <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-500">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-[var(--fg)]">Parent communication</span>
                    <CheckCircle2 className="w-4 h-4 text-green-500 ml-2" />
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 bg-[var(--panel)] backdrop-blur-md p-3 rounded-xl border border-[var(--border)] w-max shadow-lg ml-10">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-[var(--fg)]">Study material</span>
                    <CheckCircle2 className="w-4 h-4 text-green-500 ml-2" />
                  </motion.div>
                </div>
              </div>



            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
