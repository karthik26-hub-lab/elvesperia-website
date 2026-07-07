'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const workflowSteps = [
  {
    id: '01',
    phase: 'Discovery & Architecture',
    title: 'Defining the Blueprint',
    desc: 'Before writing a single line of code, we map the structural logic. We analyze the core requirements, define the system architecture, and establish a high-performance foundation.'
  },
  {
    id: '02',
    phase: 'Context Engineering',
    title: 'Intelligent Structuring',
    desc: 'Designing the brain of the operation. We integrate bespoke generative AI models, craft intelligent prompt structures, and ensure data flows with absolute precision.'
  },
  {
    id: '03',
    phase: 'Structural Execution',
    title: 'Front-End Development',
    desc: 'Translating complex logic into fluid interfaces. Building high-fidelity, scalable web applications where every interaction feels instantaneous and purposeful.'
  },
  {
    id: '04',
    phase: 'Cinematic Refinement',
    title: 'Absolute Polish',
    desc: 'The final layer of luxury. We apply advanced visual styling, structural typography, and premium lighting effects to ensure the digital ecosystem commands attention.'
  }
];

export default function Workflow() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="workflow" className="relative bg-[#050505] py-16 md:py-24 overflow-hidden border-t border-white/[0.05]">
      
      {/* Heavy Film Grain Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
            Our Methodology
            <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-sans text-white tracking-tight leading-[1.1]">
            The Architectural Pipeline.
          </h2>
        </motion.div>

        {/* Alternating Timeline Container */}
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto">
          
          {/* Background Faint Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.1] md:-translate-x-1/2"></div>
          
          {/* Animated Glowing Scroll Line */}
          <motion.div 
            className="absolute left-[28px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#D4AF37] via-amber-200 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.5)] md:-translate-x-1/2"
            style={{ height: lineHeight }}
          ></motion.div>

          {/* Steps */}
          <div className="flex flex-col gap-16 md:gap-20 py-10 relative">
            {workflowSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 120, filter: 'blur(8px)' }} // Start completely hidden, lower, and slightly blurred
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} // Reveal into position
                  viewport={{ once: true, margin: "-150px" }} // Triggers only when it's deep enough into the screen
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Super smooth cinematic deceleration
                  className="relative flex items-center w-full group"
                >
                  {/* Glowing Node / Dot */}
                  <div className="absolute left-[24px] md:left-1/2 top-4 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 w-[10px] md:w-[12px] h-[10px] md:h-[12px] rounded-full bg-[#050505] border border-white/30 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_10px_rgba(212,175,55,0.5)] transition-all duration-500 z-10"></div>
                  
                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left md:ml-auto'}`}>
                    
                    {/* Massive Background Number */}
                    <div className={`absolute -top-12 md:-top-20 text-[7rem] md:text-[12rem] font-bold font-sans text-white/[0.02] select-none pointer-events-none z-0 tracking-tighter transition-colors duration-700 group-hover:text-white/[0.04] ${isEven ? 'md:right-20 left-12 md:left-auto' : 'md:left-20 left-12'}`}>
                      {step.id}
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10">
                      <span className={`font-mono text-xs tracking-widest text-gray-500 uppercase mb-3 flex items-center ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-start gap-2`}>
                        Phase &mdash; {step.phase}
                      </span>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-snug">
                        {step.title}
                      </h3>
                      <p className={`text-gray-400 text-sm md:text-base leading-relaxed max-w-md ${isEven ? 'md:ml-auto' : ''}`}>
                        {step.desc}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}