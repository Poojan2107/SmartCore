"use client";

import { useState, useEffect } from "react";

export default function LogoIntro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("LogoIntro mounted");
    // Skip if seen this session
    if (typeof window !== "undefined" && sessionStorage.getItem("sc_v5")) {
      console.log("LogoIntro skipped (sc_v5 found)");
      return;
    }
    setShow(true);
    console.log("LogoIntro showing...");
    document.body.style.overflow = "hidden";

    const dismiss = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("sc_v5", "1");
    }, 3000);

    return () => clearTimeout(dismiss);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#08080f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.4s ease",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(244,94,34,0.2) 0%, transparent 70%)",
          filter: "blur(70px)",
          animation: "scGlow 1.2s ease-out forwards",
        }}
      />

      {/* Logo */}
      <div style={{ position: "relative", zIndex: 1, marginBottom: 28, animation: "scLogo 0.65s cubic-bezier(0.34,1.56,0.64,1) forwards" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 16,
            border: "2px solid #f45e22",
            animation: "scRing 1.5s ease-out infinite",
            animationDelay: "0.5s",
          }}
        />
        <img
          src="/logo.jpeg"
          alt="SmartCore"
          style={{
            width: 96,
            height: 96,
            borderRadius: 16,
            objectFit: "cover",
            display: "block",
            boxShadow: "0 0 50px rgba(244,94,34,0.4)",
            position: "relative",
            zIndex: 1,
          }}
        />
      </div>

      {/* Brand name */}
      <div style={{ position: "relative", zIndex: 1, display: "flex" }}>
        {"SmartCore".split("").map((letter, i) => (
          <span
            key={i}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              color: "white",
              opacity: 0,
              animation: "scLetter 0.38s cubic-bezier(0.33,1,0.68,1) forwards",
              animationDelay: `${0.4 + i * 0.07}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Tagline */}
      <p
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: 16,
          fontSize: 13,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          fontWeight: 500,
          color: "#fb923c",
          opacity: 0,
          animation: "scTagline 0.5s ease forwards",
          animationDelay: "1.3s",
        }}
      >
        Institute Intelligence
      </p>

      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 3,
          backgroundColor: "#f45e22",
          animation: "scProgress 2.8s linear forwards",
        }}
      />

      <style>{`
        @keyframes scGlow {
          from { opacity: 0; transform: scale(0.4); }
          to   { opacity: 1; transform: scale(1.3); }
        }
        @keyframes scLogo {
          0%   { opacity: 0; transform: scale(0.5); }
          70%  { transform: scale(1.06); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes scRing {
          0%   { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes scLetter {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scTagline {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
