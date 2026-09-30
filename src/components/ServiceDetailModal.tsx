import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, Clock, MapPin, Zap, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookConsultation: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookConsultation
}) => {
  if (!service) return null;

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
          {/* Top Bar with Close button */}
          <div className="p-6 sm:p-8 flex items-center justify-between border-b border-black/10 bg-white sticky top-0 z-20">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              SERVICE SPECIFICATION
            </span>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-10 overflow-y-auto flex flex-col gap-10">
            {/* Header section matching 00:52 of the video */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Title & Description */}
              <div className="md:col-span-7 flex flex-col gap-3 sm:gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight font-display text-neutral-900 leading-[1.08]">
                  {service.title}
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Key features bullet points */}
                <div className="mt-4 flex flex-col gap-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Engineered Features
                  </span>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle2 size={16} className="text-amber-800 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Sidebar info: Duration & Ideal For & Book Consultation */}
              <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-black/10 shadow-sm flex flex-col gap-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Duration:
                  </span>
                  <div className="text-sm sm:text-base font-bold text-neutral-900">
                    {service.duration}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Ideal For:
                  </span>
                  <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {service.idealFor}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onBookConsultation(service.title);
                    }}
                    className="w-full group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider shadow-md transition-all active:scale-95"
                  >
                    <span className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform" />
                    <span>BOOK A CONSULTATION</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Architectural Photo Preview */}
            <div className="relative rounded-2xl overflow-hidden h-56 sm:h-72 w-full shadow-md border border-black/10">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 text-white text-xs font-mono uppercase tracking-widest">
                Field Deployed System Standard
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
