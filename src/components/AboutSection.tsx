import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Cpu, Leaf } from 'lucide-react';
import { BUSINESS } from '../data/siteData';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section
      id="about"
      className="w-full min-h-screen lg:h-screen py-16 lg:py-0 bg-[#fcfbf9] text-[#121212] flex flex-col justify-center border-b border-black/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full flex flex-col justify-center gap-6 sm:gap-8 lg:gap-12 my-auto">
        {/* Top Header Label */}
        <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
          <span className="w-2 h-2 rounded-full bg-neutral-900 shrink-0" />
          <span className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-neutral-500 font-mono">
            ABOUT DAY & NIGHT PLUMBING
          </span>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center">
          {/* Left Title Column */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold uppercase tracking-tight leading-[1.08] font-display text-neutral-900">
              LOCAL PLUMBING SERVICE. PERSONAL CARE.
            </h2>
            <div className="h-0.5 w-14 bg-neutral-900 rounded-full" />
            <p className="text-neutral-500 text-xs sm:text-sm font-medium leading-relaxed">
              Day & Night Plumbing Services is listed in Atlanta, Georgia. Customer reviews mention punctual arrivals, respectful service, efficient work, and clean work areas.
            </p>
          </div>

          {/* Right Image + Minimalist Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden h-60 sm:h-72 lg:h-80 w-full shadow-lg border border-black/5 bg-neutral-100 group">
              <img
                src="./images/master_plumber_team_1790751575252.jpg"
                alt="Plumbing service work"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] sm:text-[11px] text-white/90 uppercase tracking-wider font-mono">
                <span>Atlanta, Georgia</span>
                <span className="hidden sm:inline">{BUSINESS.rating} Google rating · {BUSINESS.reviewCount} reviews</span>
              </div>
            </div>

            {/* Micro Feature Badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 border-t border-black/10 text-neutral-800">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Leaf size={14} className="text-emerald-700 shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider truncate">Punctual Visits</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Cpu size={14} className="text-blue-700 shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider truncate">Respectful Service</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck size={14} className="text-neutral-800 shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider truncate">Clean Work Areas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
