import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Notification({ message, type, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20, x: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed top-6 left-6 z-[200] max-w-sm w-full"
        >
          <div className="relative overflow-hidden rounded-2xl bg-[#050505]/90 backdrop-blur-2xl border border-white/[0.08] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            
            {/* Subtle glow based on type */}
            <div className={`absolute -top-10 -left-10 w-32 h-32 rounded-full blur-[50px] opacity-20 pointer-events-none
              ${type === 'success' ? 'bg-[#D4AF37]' : 'bg-red-500'}`} 
            />

            <div className="flex items-start gap-4 relative z-10">
              {/* Logo / Icon */}
              <div className="flex-shrink-0 mt-0.5">
                <img 
                  src="/logo-elvs.png" 
                  alt="Elvesperia Logo" 
                  className={`w-8 h-8 rounded-full object-cover shadow-[0_0_15px_rgba(212,175,55,0.2)] ring-1
                    ${type === 'success' ? 'ring-[#D4AF37]/30' : 'ring-red-500/30'}`}
                />
              </div>

              {/* Message Content */}
              <div className="flex-1">
                <h4 className={`text-sm font-bold uppercase tracking-widest mb-1
                  ${type === 'success' ? 'text-[#D4AF37]' : 'text-red-400'}`}>
                  {type === 'success' ? 'Transmission Successful' : 'Transmission Failed'}
                </h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  {message}
                </p>
              </div>
            </div>

            {/* Premium Gold Accent Line at bottom */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent w-full opacity-50" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
