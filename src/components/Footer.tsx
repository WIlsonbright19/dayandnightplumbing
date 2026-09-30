import React from 'react';
import { ArrowRight, Phone, MapPin, ShieldCheck, Clock, Award, Star } from 'lucide-react';
import { BUSINESS } from '../data/siteData';

interface FooterProps {
  onNavClick: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer id="contact" className="w-full bg-[#0c0c0c] text-white pt-14 sm:pt-20 pb-10 sm:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 flex flex-col gap-10 sm:gap-14">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 sm:gap-10 border-b border-white/15 pb-10 sm:pb-12">
          {/* Left Headline */}
          <div className="max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
              DAY & NIGHT PLUMBING SERVICES
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-[1.05] font-display text-white">
              PLUMBING SERVICE. <br />
              PERSONAL ATTENTION.
            </h2>
          </div>

          {/* Right Direct Contact Card */}
          <div className="flex flex-col gap-3 bg-neutral-900/90 border border-white/10 rounded-2xl p-5 sm:p-6 lg:min-w-[340px]">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider font-semibold">
              <Clock size={14} />
              <span>Call to confirm current availability</span>
            </div>
            <a
              href={`tel:${BUSINESS.phoneLink}`}
              className="text-xl sm:text-2xl font-extrabold tracking-tight text-white hover:text-amber-400 transition-colors flex items-center gap-2 font-display"
            >
              <Phone size={20} className="text-amber-400" />
              <span>{BUSINESS.phone}</span>
            </a>
            <div className="flex items-center gap-2 text-neutral-300 text-xs sm:text-sm">
              <MapPin size={15} className="text-neutral-400 shrink-0" />
              <span>{BUSINESS.location} · {BUSINESS.neighborhood}</span>
            </div>
            <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-300 text-xs sm:text-sm hover:text-white transition-colors">
              <MapPin size={15} className="text-neutral-400 shrink-0" />
              <span>View Google Business Profile</span>
            </a>
          </div>
        </div>

        {/* 4-Column Informational & Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 border-b border-white/10 pb-10 sm:pb-12">
          {/* Column 1: Company & Credentials */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-white text-black flex items-center justify-center font-bold text-xs font-display">
                DN
              </div>
              <span className="font-bold tracking-tight text-base font-display">DAY & NIGHT PLUMBING</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Day & Night Plumbing Services is listed in Atlanta, Georgia. Google reviewers have praised punctual arrivals, respectful service, efficient work, and tidy cleanup.
            </p>
            <div className="flex flex-col gap-1.5 pt-2 text-[11px] font-mono text-neutral-400">
              <div className="flex items-center gap-1.5 text-neutral-300">
                <ShieldCheck size={13} className="text-emerald-400" />
                <span>Plumber listed in Atlanta, GA 30303</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-300">
                <Award size={13} className="text-amber-400" />
                <span>Hours not listed online · Call to confirm</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-300">
                <Star size={13} className="text-amber-400 fill-amber-400" />
                <span>{BUSINESS.rating} / 5 · {BUSINESS.reviewCount} Google reviews</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold block">
              QUICK NAVIGATION
            </span>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-300">
              <li>
                <button onClick={() => onNavClick('hero')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Day & Night
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('adapt')} className="hover:text-white transition-colors cursor-pointer">
                  Customer Care
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('projects')} className="hover:text-white transition-colors cursor-pointer">
                  Customer Highlights
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-white transition-colors cursor-pointer">
                  Plumbing Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('testimonials')} className="hover:text-white transition-colors cursor-pointer">
                  Customer Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('booking')} className="hover:text-amber-400 text-amber-400 transition-colors cursor-pointer font-bold flex items-center gap-1">
                  <span>Plan a Service Request</span>
                  <ArrowRight size={12} />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Services */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold block">
              OUR SPECIALTIES
            </span>
            <ul className="flex flex-col gap-2 text-xs text-neutral-300">
              <li>General plumbing repairs</li>
              <li>In-home plumbing service</li>
              <li>Plumbing troubleshooting</li>
              <li>Call to discuss your specific job</li>
            </ul>
          </div>

          {/* Column 4: Service Areas & Schedule */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold block">
              SERVICE COVERAGE
            </span>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Listed in Atlanta, Georgia 30303, near Woodruff Park. The Google profile does not specify service areas; call to confirm whether your address is covered.
            </p>
            <p className="text-xs text-neutral-300 font-medium leading-relaxed">
              Atlanta, Georgia · Woodruff Park
            </p>
            <div className="mt-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
              <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-0.5">Hours of Operation</span>
              <span className="font-bold text-white block">Not listed online</span>
              <span className="text-neutral-400 text-[11px]">Call {BUSINESS.phone} to confirm availability.</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Day & Night Plumbing Services · Atlanta, GA.
          </div>
          <div className="font-mono text-[11px] text-neutral-500 text-center sm:text-right">
            Plumbing service · Atlanta, Georgia
          </div>
        </div>
      </div>
    </footer>
  );
};
