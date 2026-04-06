"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    institute: "",
    phone: "",
    email: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // TODO: Replace with your actual Web3Forms Access Key
          access_key: "6a1196fc-c916-4f4b-9d52-216d2203a268",
          // Send form to primary email, CC the second founder
          subject: "New SmartCore Lead Inquiry",
          from_name: "SmartCore Landing Page",
          replyto: formData.email || "no-reply@smartcore.co.in",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section className="py-24 bg-[var(--bg)] relative overflow-hidden" id="contact">
      {/* Background glow for contact section */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--color-brand-orange)]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-[var(--color-brand-blue-light)] uppercase tracking-[0.2em] mb-4"
          >
            Start Your Custom Build
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-[var(--fg)] mb-4 tracking-tight"
          >
            Let's Build a <span className="text-[var(--color-brand-orange)]">Smarter Future</span> Together
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--muted)]"
          >
            Tell us about your internal workflows and current bottlenecks — we'll listen, and map out exactly how we can engineer a solution.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 bg-[var(--panel)] border border-[var(--border)] rounded-3xl overflow-hidden shadow-2xl relative">
          
          {/* Left Side: Info */}
          <div className="lg:col-span-2 bg-[var(--bg)] border-r border-[var(--border)] p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-blue)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[var(--fg)] mb-4">SmartCore Custom Engineering</h3>
              <p className="text-[var(--muted)] leading-relaxed max-w-sm mb-12">
                Ready to stop relying on generic SaaS platforms or fragile Excel sheets? Reach out to our dedicated team based in Ahmedabad for a personalized consultation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--panel)] border border-[var(--border)] shadow-sm flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-brand-orange)]" />
                  </div>
                  <div>
                    <strong className="block text-[var(--fg)] font-semibold mb-1">Ahmedabad HQ</strong>
                    <span className="text-[var(--muted)] text-sm">Gujarat, India</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--panel)] border border-[var(--border)] shadow-sm flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[var(--color-brand-orange)]" />
                  </div>
                  <div>
                    <strong className="block text-[var(--fg)] font-semibold mb-1">Founders Deck</strong>
                    <div className="flex flex-col">
                      <a href="mailto:poojanshrivastav21@gmail.com" className="text-[var(--muted)] text-sm hover:text-[var(--color-brand-orange)] transition-colors">poojanshrivastav21@gmail.com</a>
                      <a href="mailto:pythond0912@gmail.com" className="text-[var(--muted)] text-sm hover:text-[var(--color-brand-orange)] transition-colors">pythond0912@gmail.com</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--panel)] border border-[var(--border)] shadow-sm flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[var(--color-brand-orange)]" />
                  </div>
                  <div>
                    <strong className="block text-[var(--fg)] font-semibold mb-1">Call / WhatsApp</strong>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+919023362134" className="text-[var(--muted)] text-sm hover:text-[var(--color-brand-orange)] transition-colors">+91 90233 62134 (Poojan)</a>
                      <a href="tel:+918000963451" className="text-[var(--muted)] text-sm hover:text-[var(--color-brand-orange)] transition-colors">+91 80009 63451 (Dhananjay)</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-[var(--color-brand-blue)]/5 rounded-xl border border-[var(--color-brand-blue)]/10">
              <p className="text-sm font-semibold text-[var(--color-brand-blue-light)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue-light)] animate-pulse" />
                Poojan & Dhananjay are currently online
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-3 p-10 md:p-12 relative z-10 flex flex-col justify-center">
            
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-[var(--fg)] mb-4">Request Received!</h3>
                <p className="text-[var(--muted)] text-lg mb-8 max-w-sm mx-auto">
                  Thank you for reaching out. Poojan or Dhananjay will contact you within the next 24 hours to discuss your custom build.
                </p>
                <button 
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ name: "", institute: "", phone: "", email: "", message: "" });
                  }}
                  className="px-6 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-xl font-bold text-[var(--fg)] hover:text-white hover:bg-[var(--color-brand-blue)] transition-colors"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-[var(--fg)] mb-8">Request a workflow consultation</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-[var(--muted)]">Your Name *</label>
                                  <input 
                                    type="text"
                                    id="name"
                                    required={true}
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="E.g. Sameer Patel"
                                    className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)]/50 focus:border-[var(--color-brand-orange)] transition-all"
                                    suppressHydrationWarning
                                  />       
                                </div>
                                <div className="space-y-2">
                                  <label htmlFor="institute" className="text-sm font-medium text-[var(--muted)]">Institute Name *</label>
                                  <input 
                                    type="text"
                                    id="institute"
                                    required={true}
                                    value={formData.institute}
                                    onChange={handleChange}
                                    placeholder="E.g. Excellence Tutorials"
                                    className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)]/50 focus:border-[var(--color-brand-orange)] transition-all"
                                    suppressHydrationWarning
                                  />       
                                </div>
                              </div>

                              <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                  <label htmlFor="phone" className="text-sm font-medium text-[var(--muted)]">Phone Number *</label>
                                  <input 
                                    type="tel"
                                    id="phone"
                                    required={true}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 00000 00000"
                                    className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)]/50 focus:border-[var(--color-brand-orange)] transition-all"
                                    suppressHydrationWarning
                                  />       
                                </div>
                                <div className="space-y-2">
                                  <label htmlFor="email" className="text-sm font-medium text-[var(--muted)]">Email Address (Optional)</label>
                                  <input 
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="hello@example.com"
                                    className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)]/50 focus:border-[var(--color-brand-orange)] transition-all"
                                    suppressHydrationWarning
                                  />       
                                </div>
                              </div>

                              <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-[var(--muted)]">Tell us about your operations</label>
                                <textarea 
                                  id="message" 
                                  rows={4}
                                  value={formData.message}
                                  onChange={handleChange}
                                  placeholder="I manage 5 distinct batches and need an automated way to push attendance straight to parent WhatsApp groups..."
                                  className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)]/50 focus:border-[var(--color-brand-orange)] transition-all resize-none"
                                />
                              </div>

                              {status === "error" && (
                                <p className="text-red-500 text-sm font-medium bg-red-500/10 p-3 rounded-lg">
                                  Something went wrong. Please try again or call us directly.
                                </p>
                              )}

                              <button 
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full flex items-center justify-center gap-2 bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-light)] disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(244,94,34,0.3)] hover:shadow-[0_0_30px_rgba(244,94,34,0.5)]"
                                suppressHydrationWarning
                              >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Custom Quote</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
