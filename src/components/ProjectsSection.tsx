import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, Layers, Clock, Zap } from 'lucide-react';
import { PROJECTS } from '../data/siteData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = PROJECTS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <section
      id="projects"
      className="w-full min-h-screen lg:h-screen py-16 lg:py-0 bg-white text-[#121212] flex flex-col justify-center border-b border-black/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full flex flex-col justify-center gap-6 sm:gap-8 lg:gap-10 my-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 w-full">
          <div className="max-w-2xl">
            {/* Eyebrow badge */}
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <span className="w-2 h-2 rounded-full bg-neutral-900 shrink-0" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                CUSTOMER REVIEW HIGHLIGHTS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold uppercase tracking-tight leading-tight font-display text-neutral-900">
              WHAT ATLANTA CUSTOMERS APPRECIATE
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-0.5 sm:pt-0">
            <span className="text-[11px] font-mono font-medium text-neutral-400 sm:hidden">
              PROJECT {String(currentIndex + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-black hover:bg-black hover:text-white transition-all active:scale-95 cursor-pointer"
                aria-label="Previous customer highlight"
              >
                <ChevronLeft size={16} className="sm:hidden" />
                <ChevronLeft size={18} className="hidden sm:block" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-black hover:bg-black hover:text-white transition-all active:scale-95 cursor-pointer"
                aria-label="Next customer highlight"
              >
                <ChevronRight size={16} className="sm:hidden" />
                <ChevronRight size={18} className="hidden sm:block" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Project Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center">
          {/* Left Metadata & Story */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4 sm:gap-5"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight font-display text-neutral-900">
                    {currentProject.title}
                  </h3>
                  <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase mt-0.5">
                    {currentProject.location} · {currentProject.year}
                  </div>
                </div>

                {/* Quantitative Metric Badges */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-neutral-200">
                  <div>
                    <div className="flex items-center gap-1 text-[11px] text-neutral-400 font-mono uppercase">
                      <Layers size={12} />
                      <span>Scope</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-neutral-900 mt-0.5 tabular-nums">
                      {currentProject.specs.area}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[11px] text-neutral-400 font-mono uppercase">
                      <Clock size={12} />
                      <span>Turnaround</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-neutral-900 mt-0.5 tabular-nums">
                      {currentProject.specs.buildTime}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[11px] text-neutral-400 font-mono uppercase">
                      <Zap size={12} />
                      <span>Standard</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-neutral-900 mt-0.5 truncate">
                      {currentProject.specs.energyRating}
                    </div>
                  </div>
                </div>

                {/* Book Build / Treatment Consultation Button */}
                <div className="pt-1">
                  <button
                    onClick={() => onSelectProject(currentProject)}
                    className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900 hover:bg-black text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
                    <span>DISCUSS YOUR SERVICE NEEDS</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Dual-Photo Overlapping Composition with Increased Height */}
          <div className="lg:col-span-7 relative h-[360px] sm:h-[440px] md:h-[500px] lg:h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full"
              >
                {/* Primary Tall Card */}
                <div className="absolute top-0 left-0 w-[68%] sm:w-[62%] h-[85%] rounded-2xl overflow-hidden shadow-2xl border border-black/10 bg-neutral-100 z-10 group">
                  <img
                    src={currentProject.mainImage}
                    alt="Plumbing service work"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Secondary Offset Landscape Card */}
                <div className="absolute bottom-0 right-0 w-[62%] sm:w-[58%] h-[68%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100 z-20 group">
                  <img
                    src={currentProject.secondaryImage}
                    alt="Plumbing repair detail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
