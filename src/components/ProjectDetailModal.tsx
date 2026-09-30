import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Layers, Clock, Zap, MapPin, Calendar, Check } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestQuote
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl bg-[#fcfbf9] text-[#121212] rounded-3xl shadow-2xl border border-black/10 overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 flex items-center justify-between border-b border-black/10 bg-white sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                CASE STUDY
              </span>
              <span className="text-xs font-mono text-neutral-300">/</span>
              <span className="text-xs font-mono text-neutral-600 uppercase">
                {project.location} · {project.year}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-8 md:p-10 overflow-y-auto flex flex-col gap-6 sm:gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight font-display text-neutral-900">
                {project.title}
              </h2>
              <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed mt-2 sm:mt-3 max-w-2xl">
                {project.description}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-black/10">
              <div>
                <div className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-neutral-400 font-mono uppercase">
                  <Layers size={12} />
                  <span>Floor Area</span>
                </div>
                <div className="text-sm sm:text-lg font-bold text-neutral-900 mt-0.5 sm:mt-1 tabular-nums">
                  {project.specs.area}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-neutral-400 font-mono uppercase">
                  <Clock size={12} />
                  <span>Timeline</span>
                </div>
                <div className="text-sm sm:text-lg font-bold text-neutral-900 mt-0.5 sm:mt-1 tabular-nums">
                  {project.specs.buildTime}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-neutral-400 font-mono uppercase">
                  <Zap size={12} />
                  <span>Standard</span>
                </div>
                <div className="text-xs sm:text-base font-bold text-neutral-900 mt-0.5 sm:mt-1">
                  {project.specs.energyRating}
                </div>
              </div>
            </div>

            {/* Gallery Grid with Increased Height */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-48 sm:h-64 bg-neutral-200 shadow-md">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 sm:h-64 bg-neutral-200 shadow-md">
                <img
                  src={project.secondaryImage}
                  alt={`${project.title} interior and deck`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/10">
              <span className="text-xs text-neutral-500">
                Interested in building a variation of this modular floor plan?
              </span>
              <button
                onClick={() => {
                  onClose();
                  onRequestQuote();
                }}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <span>REQUEST PRICING & BLUEPRINTS</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
