import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ServiceShowcaseSectionProps {
  onBookConsultation: () => void;
}

export const ServiceShowcaseSection: React.FC<ServiceShowcaseSectionProps> = ({
  onBookConsultation
}) => {
  return (
    <section
      id="service-showcase"
      className="w-full min-h-screen lg:h-screen py-16 lg:py-0 bg-[#fcfbf9] text-[#121212] flex flex-col justify-center border-b border-black/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full flex flex-col justify-center gap-6 sm:gap-8 my-auto">
        {/* Top Split: Title & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-start">
          {/* Left Title and Description */}
          <div className="lg:col-span-7 flex flex-col gap-2 sm:gap-2.5">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-neutral-900 shrink-0" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold block">
                SERVICE IN ATLANTA, GEORGIA
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-[1] font-display text-neutral-900">
              PLUMBING HELP, WITH A PERSONAL TOUCH
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
              Day & Night Plumbing Services is listed as a plumber in Atlanta. Call to discuss your plumbing concern and confirm service availability.
            </p>
          </div>

          {/* Right Info: Duration, Ideal For, and Book a Consultation */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 bg-white p-5 sm:p-6 rounded-2xl border border-black/10 shadow-sm">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">
                  Availability
                </span>
                <span className="text-xs sm:text-sm font-bold text-neutral-900">
                  Call to confirm
                </span>
              </div>

              <div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-800 leading-snug block">
                  Atlanta, GA 30303
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-100">
              <button
                onClick={onBookConsultation}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-neutral-900 hover:bg-black text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-125 transition-transform" />
                <span>DISCUSS A PLUMBING JOB</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Architectural Panorama Image with Increased Height */}
        <div className="relative rounded-3xl overflow-hidden h-60 sm:h-72 md:h-80 lg:h-96 w-full bg-neutral-900 shadow-2xl border border-black/10 group">
          <img
            src="./images/master_plumber_team_1790751575252.jpg"
            alt="Plumbing service work"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 text-white text-[10px] sm:text-xs font-mono uppercase tracking-widest bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
            Day & Night Plumbing Services · Atlanta, Georgia
          </div>
        </div>
      </div>
    </section>
  );
};
