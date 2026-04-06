"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LogoIntro() {
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Only show on first visit per session
    const hasSeenIntro = sessionStorage.getItem("sc_intro_seen");
    if (!hasSeenIntro) {
      setShow(true);
      document.body.style.overflow = "hidden";

      // Start exit animation after 2.4s
      const exitTimer = setTimeout(() => setLeaving(true), 2400);
      // Fully remove after exit animation completes
      const removeTimer = setTimeout(() => {
        setShow(false);
        document.body.style.overflow = "";
        sessionStorage.setItem("sc_intro_seen", "1");
      }, 3200);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(removeTimer);
      };
    }
  }, []);

  if (!show) return null;

  const letters = "SmartCore".split("");

  return (
    <AnimatePresence>
      {!leaving ? (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "var(--bg)" }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Ambient glow behind the logo */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, color-mix(in srgb, var(--color-brand-orange) 15%, transparent), transparent 70%)",
              filter: "blur(80px)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Logo image */}
          <motion.div
            className="relative mb-7"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Ring pulse */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2"
              style={{ borderColor: "var(--color-brand-orange)" }}
              initial={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: 0, scale: 1.7 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
            />
            <motion.img
              src="/logo.jpeg"
              alt="SmartCore"
              className="w-24 h-24 rounded-2xl shadow-2xl object-cover relative z-10"
              style={{ boxShadow: "0 0 40px color-mix(in srgb, var(--color-brand-orange) 30%, transparent)" }}
            />
          </motion.div>

          {/* Brand name — letters staggered */}
          <div className="flex items-center gap-[1px] overflow-hidden">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className="text-4xl md:text-5xl font-heading font-bold"
                style={{ color: "var(--fg)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + i * 0.06,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            className="mt-3 text-sm tracking-[0.25em] uppercase font-medium"
            style={{ color: "var(--color-brand-orange)" }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            Institute Intelligence
          </motion.p>

          {/* Bottom progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[3px]"
            style={{ background: "var(--color-brand-orange)" }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.3, ease: "linear" }}
          />
        </motion.div>
      ) : (
        /* Curtain lift — two panels sweeping up */
        <motion.div
          key="curtain"
          className="fixed inset-0 z-[9999]"
          style={{ background: "var(--bg)" }}
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
    </AnimatePresence>
  );
}
