"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LogoIntro() {
  // Start as true so the overlay renders immediately on client mount
  const [visible, setVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if already seen this session
    const seen = sessionStorage.getItem("sc_intro_v3");
    if (seen) {
      setVisible(false);
      return;
    }

    // Show the intro
    setShouldRender(true);
    document.body.style.overflow = "hidden";

    // Dismiss after 2.6s
    const t = setTimeout(() => {
      setVisible(false);
    }, 2600);

    return () => clearTimeout(t);
  }, []);

  // After exit animation completes, save to session
  const handleExitComplete = () => {
    sessionStorage.setItem("sc_intro_v3", "1");
    document.body.style.overflow = "";
  };

  if (!shouldRender) return null;

  const letters = "SmartCore".split("");

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="logo-intro"
          exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#0a0a0f", willChange: "transform" }}
        >
          {/* Ambient glow */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 480,
              height: 480,
              background: "radial-gradient(circle, rgba(244,94,34,0.2) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1.3, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Logo image */}
          <motion.div
            className="relative mb-7 z-10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-orange-500"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: 1.9, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            />
            <img
              src="/logo.jpeg"
              alt="SmartCore"
              className="w-24 h-24 rounded-2xl object-cover"
              style={{ boxShadow: "0 0 50px rgba(244, 94, 34, 0.4)" }}
            />
          </motion.div>

          {/* Brand name — letter by letter */}
          <div className="flex items-center z-10">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className="text-white font-bold"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                  fontFamily: "'Outfit', sans-serif",
                }}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.38,
                  delay: 0.4 + i * 0.07,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            className="mt-4 text-sm tracking-[0.3em] uppercase font-medium text-orange-400 z-10"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
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
