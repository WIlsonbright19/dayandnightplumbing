import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onExploreProjects: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onExploreProjects
}) => {
  const [hoveredServiceId, setHoveredServiceId] = useState<string>(SERVICES[1].id);

  const activeService = SERVICES.find((s) => s.id === hoveredServiceId) || SERVICES[0];

  return (
    <section
      id="services"
      className="w-full min-h-screen lg:h-screen py-16 lg:py-0 bg-[#fcfbf9] text-[#121212] flex flex-col justify-center border-b border-black/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full flex flex-col justify-center gap-6 sm:gap-8 my-auto">
        {/* Top Half: Plumbing Banner */}
        <div className="relative rounded-3xl overflow-hidden h-60 sm:h-72 md:h-80 w-full bg-neutral-900 shadow-2xl border border-black/10 flex flex-col justify-between p-5 sm:p-8 text-white">
          <img
            src="./images/hero_plumbing_service_1790751534991.jpg"
            alt="Plumbing service in Atlanta"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none" />

          {/* Top Row: Button & Status */}
          <div className="relative z-10 flex items-center justify-between">
            <button
              onClick={onExploreProjects}
              className="group inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 hover:bg-white text-black text-[11px] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black group-hover:scale-125 transition-transform" />
              <span>READ CUSTOMER HIGHLIGHTS</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Bottom Row: Giant Typography Headline */}
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-[1] font-display text-white">
              PLUMBING SERVICE. <br />
              PERSONAL ATTENTION.
            </h2>
          </div>
        </div>

        {/* Lower Half: "OUR SERVICES" Interactive List */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-neutral-900 shrink-0" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold block">
              PLUMBING SERVICES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center">
            {/* Left Dynamic Preview Image with Increased Height */}
            <div className="lg:col-span-5 h-[260px] sm:h-[320px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg border border-black/10 bg-neutral-200 relative group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 sm:bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-white/70">
                  {activeService.duration} Turnaround
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase font-display truncate">
                  {activeService.title}
                </div>
              </div>
            </div>

            {/* Right Service Accordion / Hover Rows */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
              {SERVICES.map((service) => {
                const isHovered = hoveredServiceId === service.id;
                return (
                  <button
                    key={service.id}
                    onMouseEnter={() => setHoveredServiceId(service.id)}
                    onClick={() => onSelectService(service)}
                    className="group py-3 sm:py-4 flex items-center justify-between text-left transition-colors duration-200 hover:bg-neutral-50/70 px-2 rounded-lg cursor-pointer"
                  >
                    <div className="flex-1 pr-3">
                      <h3
                        className={`text-sm sm:text-base lg:text-lg font-extrabold uppercase font-display tracking-tight transition-colors ${
                          isHovered ? 'text-amber-800' : 'text-neutral-900 group-hover:text-amber-800'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-neutral-500 font-normal mt-0.5 line-clamp-1">
                        {service.subtitle}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-400 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
