'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const [notification, setNotification] = useState({ message: '', isVisible: false });
  const timeoutRef = useRef(null);

  const triggerNotification = (message) => {
    setNotification({ message, isVisible: true });
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setNotification(prev => ({ ...prev, isVisible: false }));
    }, 3000);
  };

  return (
    <footer className="relative bg-[#050505] pt-40 pb-10 border-t border-white/[0.05] overflow-hidden flex flex-col justify-between min-h-[50vh] md:min-h-[60vh]">
      
      {/* Heavy Film Grain Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Interactive Background Section (Easter Egg Reveal) */}
      <div 
        className="absolute inset-0 z-0 hidden md:flex items-center justify-center overflow-hidden cursor-crosshair"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Massive Text (Default State) */}
        <motion.h1 
          animate={{ 
            opacity: isHovered ? 0 : 0.04, 
            filter: isHovered ? 'blur(20px)' : 'blur(0px)',
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute text-[15vw] md:text-[13vw] font-black text-white select-none tracking-tighter leading-none w-full text-center"
        >
          ELVESPERIA
        </motion.h1>

        {/* Banner Image (Hover State) */}
        <motion.div
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            x: isHovered ? 0 : -50,
            filter: isHovered ? 'blur(0px)' : 'blur(10px)'
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none"
        >
          <img 
            src="/bannermain.png" 
            alt="Elvesperia Secret Banner"
            className="w-full h-full max-h-[35vh] max-w-5xl object-contain mix-blend-screen opacity-90"
          />
        </motion.div>
      </div>

      {/* The Horizontal Strip (Foreground) */}
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 mt-auto pt-10 md:pt-0 flex flex-col md:flex-row justify-between items-center text-[11px] md:text-xs font-mono text-gray-500 uppercase tracking-widest gap-10 md:gap-0 pointer-events-none text-center md:text-left">
        
        {/* Enable pointer events only on interactive elements to not block background hover */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center pointer-events-auto">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              triggerNotification("ACCESS RESTRICTED: Lab currently under development.");
            }}
            className="hover:text-[#D4AF37] hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-300"
          >
            Experiments
          </a>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              triggerNotification("SYSTEM OFFLINE: Preparing terminal for next phase.");
            }}
            className="hover:text-[#D4AF37] hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-300"
          >
            Terminal
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center pointer-events-auto">
          <a href="mailto:elvesperia01@gmail.com" className="hover:text-[#D4AF37] hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-300">
            hello@elvesperia.com
          </a>
          <a 
            href="https://www.linkedin.com/company/elvesperia" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#D4AF37] hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center pointer-events-auto">
          <span className="opacity-60 pointer-events-none">&copy; {new Date().getFullYear()} ELVESPERIA</span>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#D4AF37] hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-300 group"
          >
            <img 
              src="/logo-elvs.png" 
              alt="Logo" 
              className="w-5 h-5 rounded-full object-cover group-hover:shadow-[0_0_10px_rgba(212,175,55,0.5)] transition-all duration-300 border border-transparent group-hover:border-[#D4AF37]/30" 
            />
            Crafted by KarthikDev
          </a>
        </div>

      </div>

      {/* Cinematic Access Restricted Notification */}
      <AnimatePresence>
        {notification.isVisible && (
          <motion.div
            initial={{ y: 50, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            exit={{ y: 50, opacity: 0, x: "-50%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-10 left-1/2 z-[100] w-[90%] md:w-auto flex flex-col md:flex-row items-center justify-center gap-3 bg-[#050505]/95 backdrop-blur-md border border-[#D4AF37]/30 px-6 py-4 md:py-3 rounded-2xl md:rounded-full shadow-[0_0_25px_rgba(212,175,55,0.15)] pointer-events-none"
          >
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)] shrink-0"></div>
            <span className="text-[#D4AF37] font-mono text-[10px] md:text-xs uppercase tracking-widest text-center">
              {notification.message}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}