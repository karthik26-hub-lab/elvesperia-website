'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  useEffect(() => {
    // Bulletproof 3-second fallback
    const timer = setTimeout(() => {
      if (typeof onComplete === 'function') {
        onComplete();
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#050505] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Subtle Cosmic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#3b1c7a] rounded-full blur-[120px] opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#D4AF37] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

      {/* The Logo (Centered perfectly) */}
      <motion.div
        initial={{ filter: 'blur(20px)', scale: 1.1, opacity: 0 }}
        animate={{ filter: 'blur(0px)', scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <img
          src="/logo-elvs.png" 
          alt="Elvesperia"
          className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]"
        />
      </motion.div>
      
      {/* Sleek Gold Loading Line (Moved lower to 65% for breathing space) */}
      <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[180px] md:w-[240px] h-[1px] bg-white/[0.05] overflow-hidden rounded-full z-10">
        <motion.div 
          initial={{ width: "0%", opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)]"
        />
      </div>

    </motion.div>
  );
}