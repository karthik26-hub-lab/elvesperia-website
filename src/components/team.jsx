'use client';

import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'BalaKumaresh G', role: 'FOUNDER & CEO', bio: 'Architecting high-performance digital ecosystems and structural logic.' , img: '/team/bala-kumaresh.jpg'},
  { name: 'BalaVignesh G', role: 'CO-FOUNDER', bio: 'Bridging the gap between raw hardware potential and AI innovation.' , img: '/team/bala-vignesh.jpg'},
  { name: 'Balaji B', role: 'PARTNER & MENTOR', bio: 'Specializing in high-fidelity interface design and user experience.' , img: '/team/balaji.jpg'}
];

export default function Team() {
  return (
    <section id="team" className="relative bg-[#050505] py-16 md:py-24 overflow-hidden border-t border-white/[0.05]">

      <div className="w-full max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-4 block">The Architects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">Behind the Logic.</h2>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-[#D4AF37]/30 transition-all duration-500"
            >
              
              {/* Profile Image - Replaced the empty div */}
              <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border border-white/[0.1] group-hover:border-[#D4AF37]/50 group-hover:scale-105 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{member.name}</h3>
              <p className="text-[#D4AF37] text-sm font-mono mb-4 tracking-wider">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}