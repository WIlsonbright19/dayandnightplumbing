import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  onStartBuilding: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartBuilding }) => {
  return (
    <section
      id="journey"
      className="w-full min-h-screen lg:h-screen py-16 lg:py-0 bg-white text-[#121212] flex flex-col justify-center border-b border-black/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full flex flex-col items-center text-center justify-center gap-6 sm:gap-8 lg:gap-10 my-auto">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 mb-1 sm:mb-2">
          <span className="w-2 h-2 rounded-full bg-neutral-900 shrink-0" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold block">
            CUSTOMER-REPORTED SERVICE HIGHLIGHTS
          </span>
        </div>

        {/* Giant Headline with responsive sizing */}
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight leading-[1.06] font-display text-neutral-900"
          >
            PUNCTUAL ARRIVALS. RESPECTFUL SERVICE. CLEAN WORK AREAS.
          </motion.h2>
        </div>

        {/* 3 Staggered Plumbing Craftsmanship Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72 w-full shadow-lg border border-black/10 group"
          >
            <img
              src="./images/hero_plumbing_service_1790751534991.jpg"
              alt="Plumbing service work"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72 w-full shadow-lg border border-black/10 group"
          >
            <img
              src="./images/emergency_pipe_repair_1790751588697.jpg"
              alt="Plumbing repair work"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72 w-full shadow-lg border border-black/10 group"
          >
            <img
              src="./images/master_plumber_team_1790751575252.jpg"
              alt="Home plumbing service"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
          </motion.div>
        </div>

        {/* CTA Button with Hover Slide Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={onStartBuilding}
            className="group relative inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-neutral-900 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase overflow-hidden shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <span className="absolute inset-0 bg-neutral-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white group-hover:bg-black transition-colors duration-300" />
            <span className="relative z-10 font-bold group-hover:text-black transition-colors duration-300">
              PLAN A SERVICE REQUEST
            </span>
            <ArrowRight
              size={15}
              className="relative z-10 group-hover:text-black group-hover:translate-x-1 transition-all duration-300"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
