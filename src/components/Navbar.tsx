"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle scroll effect and mount
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className={`fixed inset-x-0 z-50 flex justify-center transition-all duration-500 ${scrolled ? "top-4 px-4" : "top-0 w-full"}`}>
      <nav
        className={`w-full max-w-7xl transition-all duration-500 ${
          scrolled 
            ? "bg-[var(--panel)]/80 backdrop-blur-2xl shadow-xl shadow-black/5 dark:shadow-black/20 border border-[var(--border)] rounded-full px-6 py-3" 
            : "bg-transparent px-4 sm:px-6 lg:px-8 py-5 border-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="/logo.jpeg" 
                alt="SmartCore Logo" 
                className="w-10 h-10 rounded-lg shadow-sm group-hover:scale-105 transition-transform object-cover" 
              />
              <span className="font-heading font-bold text-xl tracking-wide text-[var(--fg)]">
                SmartCore <span className="text-[var(--muted)] font-medium hidden sm:inline-block">Technologies</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[var(--muted)] hover:text-[var(--color-brand-blue-light)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {/* Desktop CTAs */}
            <div className="flex items-center space-x-4 ml-4">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--panel)] transition-colors"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              )}

              <a 
                href="#contact" 
                className="flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--color-brand-blue-light)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue-light)] text-white px-4 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(35,82,219,0.3)] hover:shadow-[0_0_25px_rgba(35,82,219,0.5)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Quote</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 mr-2 rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--panel)] transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--muted)] hover:text-[var(--fg)] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute left-4 right-4 top-full mt-2 bg-[var(--panel)]/95 backdrop-blur-2xl border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-[var(--muted)] hover:text-[var(--color-brand-orange)] hover:bg-[var(--bg)] rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-[var(--border)] my-4" />
              <div className="flex flex-col space-y-3 px-3">
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 text-base font-medium text-[var(--fg)] border border-[var(--border)] rounded-lg py-3 hover:bg-[var(--bg)] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Details</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-light)] text-white rounded-lg py-3 text-base font-bold transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
