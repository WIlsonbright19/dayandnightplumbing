import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/siteData';

interface HeroSectionProps {
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  // Auto transition every 9 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-[580px] sm:min-h-[640px] flex flex-col justify-between overflow-hidden text-white select-none"
    >
      {/* Background Images with smooth crossfade and subtle zoom */}
      <div className="absolute inset-0 z-0 bg-neutral-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
          />
        </AnimatePresence>

        {/* Cinematic gradient scrims for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/60 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/25 to-black/75 z-10 pointer-events-none" />
      </div>

      {/* Spacer for sticky header */}
      <div className="h-20 sm:h-24 md:h-28 z-20 shrink-0" />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full my-auto flex flex-col justify-center py-4">
        <div className="max-w-3xl">
          {/* Main Headline - beautifully formatted for mobile and desktop */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-extrabold uppercase tracking-tight leading-[1.08] sm:leading-[1.03] font-display text-white"
          >
            <span className="block">DAY & NIGHT.</span>
            <span className="block text-white/90">PLUMBING SERVICES.</span>
          </motion.h1>

          {/* Subtitle / Tagline - concisely arranged */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 sm:mt-5 text-white/85 text-xs sm:text-sm md:text-base font-normal max-w-lg leading-relaxed"
          >
            {currentSlide.tagline}
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-8 flex items-center"
          >
            <button
              onClick={onExplore}
              className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm tracking-wider uppercase overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-white/20 active:scale-95 shrink-0 cursor-pointer"
            >
              {/* Expanding hover fill */}
              <span className="absolute inset-0 bg-neutral-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

              {/* Dot icon */}
              <span className="relative z-10 w-2 h-2 rounded-full bg-black group-hover:bg-white transition-colors duration-300" />
              <span className="relative z-10 font-bold group-hover:text-white transition-colors duration-300">
                MEET DAY & NIGHT
              </span>
              <ArrowRight
                size={14}
                className="relative z-10 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
