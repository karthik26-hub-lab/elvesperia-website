'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenDrawer }) {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden bg-[#050505]">
      
      {/* 1. Cinematic Glows (Orbs) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Purple Orb */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/15 rounded-full blur-[100px]" />
        
        {/* Subtle Gold Orb */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#D4AF37]/15 rounded-full blur-[100px]" />
      </div>

      {/* Bottom Fade Mask */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none"></div>

      {/* 2. Heavy Film Grain Texture (Overlays the liquid for a cinematic feel) */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* 3. The Content (Master Copy) */}
      <div className="text-center z-10 max-w-4xl mx-auto flex flex-col items-center mt-10 pt-24 md:pt-0">
        
        {/* Agency Tagline Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-8"
        >
          <span className="px-5 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-[10px] font-bold tracking-[0.3em] text-[#D4AF37]/80 uppercase shadow-sm">
            Premium Design & Digital Scaling
          </span>
        </motion.div>

        {/* Business-Focused Powerful Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-semibold tracking-tight drop-shadow-2xl mb-6 leading-[1.05]">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
              Beyond a Website.
            </span> <br className="hidden md:block" />
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#B38728] drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              A Digital Engine.
            </span>
          </h1>
        </motion.div>

        {/* Subtext Targeted at Business Owners */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-2 text-[17px] md:text-[19px] text-white/50 max-w-2xl leading-relaxed tracking-tight font-medium"
        >
          It starts with a cinematic, high-performance website. From there, we integrate smart AI automations and drive your growth—transforming your business into a unified, hands-off digital ecosystem.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5"
        >
          {/* Primary Button */}
          <motion.button 
            onClick={onOpenDrawer}
            whileHover={{ scale: 1.05, x: [-2, 2, -2, 2, -1, 1, 0], transition: { duration: 0.3 } }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4AF37] text-[#050505] font-semibold tracking-wide text-[14px] transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.9)] flex items-center justify-center gap-2"
          >
            Start Your Project
          </motion.button>
          
          {/* Secondary Button */}
          <a 
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/80 font-medium tracking-wide text-[14px] hover:bg-white/[0.08] hover:text-white hover:border-white/[0.15] transition-all duration-300 backdrop-blur-md flex items-center justify-center"
          >
            Explore Services
          </a>
        </motion.div>

      </div>
    </section>
  );
}