import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function LaunchDrawer({ isOpen, onClose, onNotify }) {
  const [selectedInterest, setSelectedInterest] = useState('Design');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
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
          onNotify("Ecosystem Request Sent Successfully", "success");
          form.current.reset();
          setIsSubmitting(false);
          
          // Auto-close the drawer after a brief moment
          setTimeout(() => {
            onClose();
          }, 2000);
        },
        (error) => {
          console.error("Error submitting form:", error);
          onNotify("Something went wrong. Please try again.", "error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] cursor-pointer"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 35, stiffness: 350, mass: 0.8 }}
            className="fixed top-0 right-0 w-full md:w-[440px] h-full bg-[#050505]/95 backdrop-blur-3xl border-l border-white/[0.08] z-[101] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          >
            <div className="flex justify-between items-center px-8 pt-10 pb-4 relative">
              {/* Top Right Notification is now handled globally */}
              <h2 className="text-2xl font-semibold text-white tracking-tight">
                Get started.
              </h2>
              <button 
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center text-white/70 hover:text-white transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div className="px-8 pt-4 pb-8 flex-1 overflow-y-auto custom-scrollbar">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                
                {/* Hidden input for interested_in since we use a custom pill selector */}
                <input type="hidden" name="interested_in" value={selectedInterest} />
                
                <div className="space-y-4">
                  <input 
                    type="text" 
                    name="name"
                    required 
                    className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] rounded-2xl px-4 py-3.5 text-[15px] text-white placeholder-white/30 focus:outline-none focus:bg-white/[0.06] focus:border-white/[0.2] focus:ring-1 focus:ring-white/[0.2] transition-all duration-200" 
                    placeholder="Name" 
                  />
                  
                  <input 
                    type="email" 
                    name="email"
                    required 
                    className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] rounded-2xl px-4 py-3.5 text-[15px] text-white placeholder-white/30 focus:outline-none focus:bg-white/[0.06] focus:border-white/[0.2] focus:ring-1 focus:ring-white/[0.2] transition-all duration-200" 
                    placeholder="Email Address" 
                  />
                </div>

                {/* The Functional Segmented Controls */}
                <div className="pt-2 space-y-3">
                  <label className="text-[11px] font-bold text-white/40 uppercase tracking-[0.15em] pl-1">Interested in</label>
                  <div className="flex flex-wrap gap-2">
                    {['Design', 'Development', 'AI Core', 'Other'].map((pill) => (
                      <div 
                        key={pill}
                        onClick={() => setSelectedInterest(pill)}
                        className={`px-4 py-2.5 rounded-full cursor-pointer text-[13px] font-semibold tracking-wide transition-all duration-300 border
                          ${selectedInterest === pill 
                            ? 'bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] border-transparent text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                            : 'bg-white/[0.02] border-white/[0.05] text-white/60 hover:bg-white/[0.06] hover:text-white hover:border-white/[0.15]'}`}
                      >
                        {pill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <textarea 
                    name="message"
                    required 
                    rows="4" 
                    className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] rounded-2xl px-4 py-3.5 text-[15px] text-white placeholder-white/30 focus:outline-none focus:bg-white/[0.06] focus:border-white/[0.2] focus:ring-1 focus:ring-white/[0.2] transition-all duration-200 resize-none" 
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div className="pt-4 pb-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-full text-[13px] uppercase tracking-widest font-bold transition-all duration-300 flex justify-center items-center gap-2 border ${
                      isSubmitting 
                        ? 'bg-[#D4AF37]/50 border-transparent text-[#050505]/50 cursor-not-allowed' 
                        : 'bg-[#D4AF37] border-transparent text-[#050505] hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]'
                    }`}
                  >
                    {isSubmitting ? 'Sending Request...' : 'Deploy Request'}
                  </button>
                </div>

              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}