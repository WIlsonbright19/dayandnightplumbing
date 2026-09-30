import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail, MapPin, Calendar } from 'lucide-react';

interface NavbarProps {
  onBookTreatment: () => void;
  onRequestQuote?: () => void; // for backwards compatibility
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookTreatment,
  onRequestQuote,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleBooking = () => {
    setDrawerOpen(false);
    if (onBookTreatment) {
      onBookTreatment();
    } else if (onRequestQuote) {
      onRequestQuote();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when drawer is open & handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false);
      }
    };

    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerOpen]);

  const scrollToSection = (id: string) => {
    setDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home', num: '01' },
    { id: 'about', label: 'About Us', num: '02' },
    { id: 'adapt', label: 'Customer Care', num: '03' },
    { id: 'projects', label: 'Customer Highlights', num: '04' },
    { id: 'services', label: 'Services', num: '05' },
    { id: 'testimonials', label: 'Reviews', num: '06' },
    { id: 'booking', label: 'Request Service', num: '07' },
    { id: 'contact', label: 'Contact', num: '08' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md py-3 sm:py-3.5 border-b border-white/10 shadow-lg text-white'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
          {/* Brand Wordmark */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-2 text-left focus:outline-none cursor-pointer"
            aria-label="Day & Night Plumbing Services home"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-white text-black flex items-center justify-center font-bold text-xs sm:text-sm font-display tracking-tighter group-hover:scale-105 transition-transform duration-200">
              <span className="font-extrabold">DN</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg sm:text-xl font-bold tracking-tight font-display text-white">
                DAY & NIGHT
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-white/70 uppercase">
                PLUMBING SERVICES
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide uppercase">
            <button
              onClick={() => scrollToSection('hero')}
              className={`transition-colors relative py-1 hover:text-white cursor-pointer ${
                activeSection === 'hero' ? 'text-white font-semibold' : 'text-white/80'
              }`}
            >
              HOME
              {activeSection === 'hero' && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full"
                />
              )}
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors relative py-1 hover:text-white cursor-pointer ${
                activeSection === 'about' || activeSection === 'adapt' ? 'text-white font-semibold' : 'text-white/80'
              }`}
            >
              ABOUT US
              {(activeSection === 'about' || activeSection === 'adapt') && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full"
                />
              )}
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className={`transition-colors relative py-1 hover:text-white cursor-pointer ${
                activeSection === 'services' || activeSection === 'service-showcase' ? 'text-white font-semibold' : 'text-white/80'
              }`}
            >
              SERVICES
              {(activeSection === 'services' || activeSection === 'service-showcase') && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full"
                />
              )}
            </button>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <button
              onClick={handleBooking}
              className="group relative hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/40 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95 shadow-sm cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-black transition-colors" />
              <span>REQUEST SERVICE</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors active:scale-95 cursor-pointer focus:outline-none"
              aria-label="Open mobile navigation drawer"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Refined Mobile Slide-In Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Dark blurred Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
              aria-hidden="true"
            />

            {/* Slide-In Drawer Panel from Right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[86vw] max-w-sm sm:max-w-md bg-[#0d0d0d] text-white border-l border-white/10 shadow-2xl flex flex-col justify-between p-6 sm:p-7 overflow-y-auto"
            >
              {/* Drawer Header */}
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-white text-black flex items-center justify-center font-bold text-xs font-display tracking-tighter">
                      <span>DN</span>
                    </div>
                    <div className="flex flex-col leading-none">
                      <span className="text-lg font-bold tracking-tight font-display text-white">
                        DAY & NIGHT
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-neutral-400">
                        PLUMBING SERVICES
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer active:scale-95"
                    aria-label="Close menu drawer"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Drawer Nav Items List */}
                <div className="py-5 flex flex-col gap-1">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03, duration: 0.2 }}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-left transition-all cursor-pointer ${
                          isActive
                            ? 'bg-white/15 text-white font-bold'
                            : 'text-white/75 hover:text-white hover:bg-white/5 font-medium'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-mono text-neutral-500 tracking-wider">
                            {item.num}
                          </span>
                          <span className="text-base uppercase tracking-wider font-display">
                            {item.label}
                          </span>
                        </div>
                        <ArrowRight
                          size={15}
                          className={`transition-transform duration-200 ${
                            isActive ? 'text-white translate-x-1' : 'text-neutral-600'
                          }`}
                        />
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                <button
                  onClick={handleBooking}
                  className="w-full py-3.5 px-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-neutral-200 active:scale-95 transition-all"
                >
                  <Calendar size={14} className="shrink-0" />
                  <span>REQUEST ESTIMATE / SERVICE</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
