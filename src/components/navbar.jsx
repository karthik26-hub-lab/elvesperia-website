'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ onLaunchClick = () => {} }) {
  const [active, setActive] = useState(null); // Default active item to null for Hero section

  // The simplified, clear navigation links, reordered: Services, Team, Workflow
  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Team', id: 'team' },
    { name: 'Workflow', id: 'workflow' }
  ];

  // Scroll tracking with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          } else {
            setActive((prev) => (prev === entry.target.id ? null : prev));
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []); // Run once on mount

  // Smooth scroll logic
  const handleNavigation = (id) => {
    if (navLinks.some(link => link.id === id)) {
      setActive(id);
    } else {
      setActive(null); // Hide pill for hero/deploy
    }
    
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'deploy') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 1 }} 
      className="fixed top-6 left-0 w-full flex justify-center z-50 pointer-events-none"
    >
      <div className="w-[95%] max-w-3xl pointer-events-auto">
        <nav className="relative flex justify-between items-center px-4 py-2 rounded-full bg-gradient-to-b from-[#12072b]/80 to-black/60 backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.6)] group">
          
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8e74c8]/40 to-transparent opacity-70 rounded-full pointer-events-none"></div>

          {/* Logo (Clicks to top/hero) */}
          <motion.div 
            layoutId="logo" 
            onClick={() => handleNavigation('hero')} 
            className="flex items-center space-x-3 z-10 pl-2 cursor-pointer group/logo"
          >
            <img 
              src="/logo-elvs.png" 
              alt="ELVESPERIA Logo" 
              className="w-8 h-8 rounded-full object-cover shadow-[0_0_10px_rgba(212,175,55,0.2)] group-hover/logo:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-shadow duration-500" 
            />
            <span className="text-sm font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 select-none">
              ELVESPERIA
            </span>
          </motion.div>
          
          {/* Center Links (Services, Team, Workflow) */}
          <div className="hidden md:flex space-x-1 bg-black/40 p-1 rounded-full border border-white/[0.05] z-10 relative">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className={`relative px-5 py-1.5 text-xs tracking-widest uppercase font-medium transition-colors duration-300 rounded-full z-10 ${
                  active === link.id ? 'text-[#D4AF37]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {active === link.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/[0.05] rounded-full border border-white/[0.1] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 pointer-events-none select-none">{link.name}</span>
              </button>
            ))}
          </div>

          {/* CTA Button (Launch) */}
          <button 
            onClick={onLaunchClick} 
            className="relative z-10 px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-black bg-gradient-to-r from-white to-gray-200 rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] group/btn"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 group-hover/btn:text-black transition-colors duration-500">
              Launch
            </span>
          </button>
        </nav>
      </div>
    </motion.div>
  );
}