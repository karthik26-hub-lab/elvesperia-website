'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const servicesList = [
  { id: '01', title: 'Branding', desc: 'Premium structural visual identities, including bespoke logo and visiting card design.'},
  { id: '02', title: 'Content Creation', desc: 'Cinematic social media posts and high-retention reels tailored for Instagram and Facebook.' },
  { id: '03', title: 'Web Development', desc: 'High-performance websites and fully-scaled web applications engineered with absolute precision.' },
  { id: '04', title: 'Portfolio Showcase', desc: 'Immersive professional portfolios designed to exhibit your expertise and command attention.' },
  { id: '05', title: 'Generative AI', desc: 'Custom context engineering and automated generative models built to elevate your workflows.' },
  { id: '06', title: 'AI Platforms', desc: 'Intelligent ecosystem integrations and robust AI platforms for next-generation digital experiences.' }
];

const ServiceCard = ({ service, index }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ rotateX: -80, opacity: 0, y: 50 }}
      whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10% 0px -25% 0px" }}
      transition={{ type: "spring", stiffness: 60, damping: 15, mass: 1.5, delay: 0.1 }}
      style={{ transformOrigin: "top center", zIndex: index + 1 }}
      className="sticky top-[15vh] md:top-[20vh] w-full mb-6"
    >
      <div 
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
        className="relative w-full bg-[#0a0a0a] border border-white/[0.05] rounded-[2rem] p-8 md:p-14 shadow-[0_-20px_50px_rgba(0,0,0,0.6)] group overflow-hidden transition-colors duration-700 hover:border-white/[0.1]"
      >
        {/* Hover Glow Effect */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500 ease-in-out"
          style={{ opacity: isFocused ? 1 : 0, background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212,175,55,0.08), transparent 40%)` }}
        />
        
        {/* Noise Filter Overlay (Cinematic Grain) */}
        <div 
          className="absolute inset-0 z-10 opacity-20 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
        
        {/* Top Gold Gradient Line */}
        <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-50 z-20" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/[0.15] z-20" />
        
        {/* Inner Shadow Depth */}
        <div className="absolute inset-0 rounded-[2rem] pointer-events-none shadow-[inset_0_30px_60px_rgba(0,0,0,0.4)] z-20 group-hover:shadow-[inset_0_30px_60px_rgba(0,0,0,0.8)] transition-shadow duration-700" />

        {/* Content Structure */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 relative z-30">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 flex-1">
            <span className="text-6xl md:text-8xl font-bold text-white/[0.03] group-hover:text-white/[0.15] transition-colors duration-700 leading-none select-none drop-shadow-md">
              {service.id}
            </span>
            <div className="relative">
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight transition-opacity duration-500 group-hover:opacity-0">{service.title}</h3>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] inline-block text-transparent bg-clip-text">
                {service.title}
              </h3>
            </div>
          </div>
          <div className="md:w-1/3 border-l-2 border-white/[0.1] group-hover:border-[#C5A059] pl-6 md:pl-10 transition-colors duration-700 relative">
            <div className="absolute left-[-2px] top-0 h-0 w-[2px] bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-[#B38728] group-hover:h-full transition-all duration-1000 ease-out" />
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed group-hover:text-gray-300 transition-colors duration-700">{service.desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Services({ onNotify }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          onNotify('Request sent successfully. We will be in touch.', 'success');
          form.current.reset();
          setIsSubmitting(false);
          // Auto-close modal after brief delay
          setTimeout(() => {
            setIsModalOpen(false);
          }, 2000);
        },
        (error) => {
          console.error(error);
          onNotify('Failed to send request. Please try again.', 'error');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="services" className="relative bg-[#050505] py-16 md:py-24 overflow-clip">
      
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent)'
        }}
      ></div>

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-4 block">Our Expertise</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Architecting <br className="hidden md:block" /> Digital Ecosystems.
          </h2>
        </motion.div>

        {/* Cards Container */}
        <div className="relative w-full" style={{ perspective: "1500px" }}>
          {servicesList.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Deployment CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 md:mt-32 text-center pb-8 md:pb-16"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-gray-500 tracking-tight leading-snug">
            Ready to initiate <span className="text-white">your project?</span>
          </h3>
          <div className="mt-8 inline-block" onClick={() => setIsModalOpen(true)}>
            <div className="relative group px-10 py-4 rounded-full border border-white/[0.15] bg-white/[0.03] backdrop-blur-md font-mono text-sm uppercase tracking-widest cursor-pointer overflow-hidden transition-all duration-700 hover:border-[#C5A059]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <div className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] group-hover:w-full transition-all duration-700 ease-in-out"></div>
              <span className="relative z-10 text-white group-hover:text-black font-bold transition-colors duration-700 delay-75">Deploy Now</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- PRO TWEAK: The Command Center Modal (Elvesperia Logo Theme) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030108]/80 backdrop-blur-2xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-gradient-to-br from-[#12072b] to-[#05020a] border border-[#3b1c7a]/40 rounded-[2rem] p-8 md:p-12 shadow-[0_0_80px_rgba(59,28,122,0.3)] overflow-hidden"
            >
              
              {/* Subtle Cosmic Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#6b21a8] rounded-full mix-blend-screen filter blur-[80px] opacity-30 pointer-events-none"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#1e1459] rounded-full mix-blend-screen filter blur-[80px] opacity-40 pointer-events-none"></div>

              {/* Toast Notification is now handled globally */}

              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-[#7c5fb5] hover:text-[#D4AF37] transition-colors z-20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              <div className="flex items-center gap-4 mb-2">
                {/* Elvesperia Logo */}
                <img 
                  src="/logo-elvs.png" 
                  alt="Elvesperia Logo" 
                  className="w-8 h-8 rounded-full object-cover shadow-[0_0_15px_rgba(212,175,55,0.4)] ring-1 ring-white/10" 
                />
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Deploy Your Vision.
                </h2>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">

                {/* Identity Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.15em] drop-shadow-sm">Your Name</label>
                    <input type="text" name="name" required 
                      className="w-full bg-black/40 backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_2px_15px_rgba(0,0,0,0.8)] rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37]/60 focus:bg-[#D4AF37]/[0.02] transition-all duration-500" 
                      placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.15em] drop-shadow-sm">Email Address</label>
                    <input type="email" name="email" required 
                      className="w-full bg-black/40 backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_2px_15px_rgba(0,0,0,0.8)] rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37]/60 focus:bg-[#D4AF37]/[0.02] transition-all duration-500" 
                      placeholder="hello@example.com" />
                  </div>
                </div>

                {/* Service Pills */}
                <div className="space-y-3 mt-6">
                  <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.15em] drop-shadow-sm">Primary Objective</label>
                  <input type="hidden" name="service_selected" value={selectedService} />
                  <div className="flex flex-wrap gap-3">
                    {['Branding', 'Web Development', 'AI Platforms', 'Content Creation'].map((pill) => (
                      <div 
                        key={pill}
                        onClick={() => setSelectedService(pill)}
                        className={`px-5 py-2.5 rounded-full border cursor-pointer text-sm font-medium transition-all duration-500 shadow-lg backdrop-blur-md
                          ${selectedService === pill 
                            ? 'border-[#D4AF37] bg-gradient-to-r from-[#BF953F]/10 to-[#B38728]/10 text-[#FCF6BA] shadow-[0_0_20px_rgba(212,175,55,0.15)]' 
                            : 'border-white/[0.08] bg-black/40 text-white/60 hover:border-white/[0.2] hover:text-white'}`}
                      >
                        {pill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* The Brief */}
                <div className="space-y-2 mt-6">
                  <label className="text-[10px] font-bold text-white/50 uppercase tracking-[0.15em] drop-shadow-sm">Project Details</label>
                  <textarea name="message" required rows="4" 
                    className="w-full bg-black/40 backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_2px_15px_rgba(0,0,0,0.8)] rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37]/60 focus:bg-[#D4AF37]/[0.02] transition-all duration-500 resize-none" 
                    placeholder="Describe the digital ecosystem you want to architect..."></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-8 pb-2 flex justify-center relative z-10">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative group px-12 py-4 rounded-full border bg-[#0a0a0a]/60 backdrop-blur-2xl overflow-hidden transition-all duration-500 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8)]
                      ${isSubmitting 
                        ? 'border-white/[0.05] text-white/40 cursor-not-allowed' 
                        : 'border-white/[0.12] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-10px_rgba(212,175,55,0.3)] hover:border-[#D4AF37]/40'}`}
                  >
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    )}
                    <span className={`relative z-10 font-bold transition-colors duration-500 uppercase tracking-[0.25em] text-xs flex items-center gap-3
                      ${isSubmitting ? 'text-white/40' : 'text-white/90 group-hover:text-black drop-shadow-sm group-hover:drop-shadow-none'}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Launch Project'}
                      {!isSubmitting && (
                        <svg className="w-4 h-4 transform transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      )}
                    </span>
                  </button>
                </div>

              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}