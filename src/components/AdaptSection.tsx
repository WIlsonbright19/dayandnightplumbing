import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ABOUT_HOTSPOTS } from '../data/siteData';

interface AdaptSectionProps {
  onExplore: () => void;
}

export const AdaptSection: React.FC<AdaptSectionProps> = ({ onExplore }) => {
  const [activeTab, setActiveTab] = useState<'ON-TIME SERVICE' | 'RESPECTFUL CARE' | 'CAREFUL WORK'>('ON-TIME SERVICE');

  const currentView = ABOUT_HOTSPOTS[activeTab];

  return (
    <section
      id="adapt"
      className="w-full min-h-screen lg:h-screen py-16 lg:py-0 bg-[#fcfbf9] text-[#121212] flex flex-col justify-center border-b border-black/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full flex flex-col gap-4 sm:gap-6 my-auto">
        {/* Top Header Row with Title and Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <span className="w-2 h-2 rounded-full bg-neutral-900 shrink-0" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold block">
                THE DETAILS CUSTOMERS NOTICE
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold uppercase tracking-tight font-display text-neutral-900">
              THOUGHTFUL SERVICE, FROM ARRIVAL TO CLEANUP.
            </h2>
          </div>

          {/* Segmented Switcher Controls */}
          <div className="flex items-center gap-1 p-1 bg-neutral-200/80 rounded-full w-fit shrink-0">
            {(['ON-TIME SERVICE', 'RESPECTFUL CARE', 'CAREFUL WORK'] as const).map((tab, idx) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                }}
                className={`${idx > 0 ? 'hidden sm:inline-block' : 'inline-block'} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  activeTab === tab
                    ? 'bg-neutral-900 text-white shadow-md'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Interactive Viewer Canvas without Plus Icons */}
        <div className="relative rounded-3xl overflow-hidden h-[360px] sm:h-[440px] md:h-[480px] lg:h-[500px] w-full bg-neutral-900 shadow-2xl border border-black/10 group">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTab}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              src={currentView.image}
              alt={`Day & Night Plumbing Services ${activeTab.toLowerCase()} highlight`}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/20 pointer-events-none" />

          {/* Bottom Info Bar: Features & Action without any Plus Icons */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col md:flex-row md:items-end justify-end md:justify-between gap-4">
            {/* Diagnostic highlights list for active tab (hidden on mobile) */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 flex-1">
              {currentView.hotspots.map((hs) => (
                <div
                  key={hs.id}
                  className="bg-black/60 backdrop-blur-md border border-white/15 rounded-xl p-3 text-white transition-all hover:border-white/35"
                >
                  <h4 className="text-[11px] sm:text-xs font-bold font-display uppercase tracking-wider text-amber-400 mb-1">
                    {hs.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-white/80 leading-relaxed font-normal line-clamp-2">
                    {hs.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action button */}
            <div className="shrink-0 flex items-center justify-end">
              <button
                onClick={onExplore}
                className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black text-[11px] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-xl transition-all duration-200 hover:bg-neutral-100 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black group-hover:scale-125 transition-transform" />
                <span>EXPLORE FEATURED REPAIRS</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
