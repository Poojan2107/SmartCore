"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LogoIntro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check session — only show once per session
    const seen = sessionStorage.getItem("sc_intro_v2");
    if (seen) return;

    // Mount and show
    setVisible(true);
    document.body.style.overflow = "hidden";

    // After 2.6s, dismiss
    const t = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("sc_intro_v2", "1");
    }, 2600);

    return () => clearTimeout(t);
  }, []);

  const letters = "SmartCore".split("");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="logo-intro"
          initial={{ opacity: 1, y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0f]"
          style={{ willChange: "transform" }}
        >
          {/* Background glow */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 480,
              height: 480,
              background: "radial-gradient(circle, rgba(244,94,34,0.18) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1.3, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />

          {/* Logo */}
          <motion.div
            className="relative mb-7 z-10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-orange-500"
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: 1.8, opacity: 0 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            />
            <img
              src="/logo.jpeg"
              alt="SmartCore"
              className="w-24 h-24 rounded-2xl object-cover shadow-2xl"
              style={{ boxShadow: "0 0 50px rgba(244, 94, 34, 0.35)" }}
            />
          </motion.div>

          {/* Brand name letter by letter */}
          <div className="flex items-center overflow-hidden z-10">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className="font-bold text-white"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontFamily: "var(--font-outfit, sans-serif)",
                  letterSpacing: i === 5 ? "0.01em" : "0",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.45 + i * 0.07,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            className="mt-3 text-sm tracking-[0.3em] uppercase font-medium text-orange-400 z-10"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Institute Intelligence
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] bg-orange-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
