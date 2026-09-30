import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = TESTIMONIALS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section
      id="testimonials"
      className="relative w-full h-[100dvh] min-h-[580px] sm:min-h-[640px] flex items-center overflow-hidden text-neutral-900 border-b border-black/10 select-none"
    >
      {/* Full-Bleed Plumbing Craftsmanship Backdrop */}
      <div className="absolute inset-0 z-0 bg-neutral-950">
        <img
          src="./images/master_plumber_team_1790751575252.jpg"
          alt="Plumbing service work"
          className="w-full h-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full flex items-center">
        {/* Frosted Floating Testimonial Card */}
        <div className="w-full max-w-xl bg-white/95 backdrop-blur-xl p-6 sm:p-10 md:p-12 rounded-3xl shadow-2xl border border-white/40">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Header label & rating */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold truncate">
                  GOOGLE REVIEWS · 4.3 / 5 · 4 REVIEWS
                </span>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 text-amber-500 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" stroke="none" />
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="min-h-[110px] sm:min-h-[140px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base sm:text-xl md:text-2xl font-normal leading-relaxed text-neutral-800 font-display"
                >
                  {currentTestimonial.quote}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Author details & pagination controls */}
            <div className="flex items-end justify-between pt-4 sm:pt-6 border-t border-neutral-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-sm sm:text-base font-bold font-display text-neutral-900">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-500 mt-0.5">
                    {currentTestimonial.role}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Arrow controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-black hover:bg-black hover:text-white transition-all active:scale-95 cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-black hover:bg-black hover:text-white transition-all active:scale-95 cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
