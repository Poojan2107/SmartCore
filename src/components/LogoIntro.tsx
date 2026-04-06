"use client";

import { useEffect, useRef } from "react";

export default function LogoIntro() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    // Skip if already shown this session
    if (sessionStorage.getItem("sc_intro_v4")) return;

    // Reveal the overlay immediately
    el.style.display = "flex";
    document.body.style.overflow = "hidden";

    // After 2.8s, curtain sweep up exit
    const exitTimer = setTimeout(() => {
      el.style.transition = "transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)";
      el.style.transform = "translateY(-100%)";

      // After transition, clean up
      setTimeout(() => {
        el.style.display = "none";
        document.body.style.overflow = "";
        sessionStorage.setItem("sc_intro_v4", "1");
      }, 950);
    }, 2800);

    return () => clearTimeout(exitTimer);
  }, []);

  return (
    <div
      ref={overlayRef}
      style={{ display: "none" }}
      className="fixed inset-0 z-[9999] flex-col items-center justify-center overflow-hidden"
    >
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#08080f]" />

      {/* Ambient glow */}
      <div
        className="absolute rounded-full pointer-events-none sc-glow-anim"
        style={{
          width: 520,
          height: 520,
          background: "radial-gradient(circle, rgba(244,94,34,0.2) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Logo */}
      <div className="relative z-10 mb-7 sc-logo-anim">
        {/* Pulse ring */}
        <div
          className="absolute inset-0 rounded-2xl border-2 border-orange-500 sc-ring-anim"
        />
        <img
          src="/logo.jpeg"
          alt="SmartCore"
          className="w-24 h-24 rounded-2xl object-cover relative z-10"
          style={{ boxShadow: "0 0 50px rgba(244,94,34,0.4)" }}
        />
      </div>

      {/* Brand name */}
      <div className="relative z-10 flex items-center">
        {"SmartCore".split("").map((letter, i) => (
          <span
            key={i}
            className="text-white font-bold sc-letter-anim"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontFamily: "'Outfit', sans-serif",
              animationDelay: `${0.4 + i * 0.07}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Tagline */}
      <p
        className="relative z-10 mt-4 text-sm tracking-[0.3em] uppercase font-medium text-orange-400 sc-tagline-anim"
      >
        Institute Intelligence
      </p>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-[3px] sc-progress-anim" style={{ backgroundColor: "#f45e22" }} />

      <style>{`
        @keyframes sc-glow {
          from { opacity: 0; transform: scale(0.4); }
          to   { opacity: 1; transform: scale(1.3); }
        }
        @keyframes sc-logo {
          0%   { opacity: 0; transform: scale(0.5); }
          70%  { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes sc-ring {
          0%   { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes sc-letter {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes sc-tagline {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes sc-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }

        .sc-glow-anim {
          animation: sc-glow 1.2s ease-out forwards;
        }
        .sc-logo-anim {
          animation: sc-logo 0.65s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        .sc-ring-anim {
          animation: sc-ring 1.5s ease-out infinite;
          animation-delay: 0.5s;
        }
        .sc-letter-anim {
          opacity: 0;
          animation: sc-letter 0.38s cubic-bezier(0.33,1,0.68,1) forwards;
        }
        .sc-tagline-anim {
          opacity: 0;
          animation: sc-tagline 0.5s ease forwards;
          animation-delay: 1.3s;
        }
        .sc-progress-anim {
          animation: sc-progress 2.7s linear forwards;
        }
      `}</style>
    </div>
  );
}
