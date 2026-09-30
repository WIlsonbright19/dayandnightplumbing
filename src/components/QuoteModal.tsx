import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, Home, Sparkles } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefilledService
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    homeType: prefilledService || 'MODULAR HOME CONSTRUCTION',
    timeline: 'Within 6 months',
    budget: '$150k - $300k',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

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
          className="relative z-10 w-full max-w-2xl bg-[#fcfbf9] text-[#121212] rounded-3xl shadow-2xl border border-black/10 overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 flex items-center justify-between border-b border-black/10 bg-white sticky top-0 z-20">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold block mb-0.5">
                ESTIMATE & CONSULTATION
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-neutral-900">
                Request a Custom Quote
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-10 overflow-y-auto">
            {submitted ? (
              <div className="py-8 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-neutral-900">
                  Quote Request Received
                </h3>
                <p className="text-neutral-600 text-sm max-w-md leading-relaxed">
                  Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>. A senior architectural consultant will review your site location in <span className="font-semibold text-neutral-900">{formData.location || 'your area'}</span> and assemble preliminary factory pricing within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                      Project Site Location (City, State) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Bozeman, MT"
                      className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                      Building Interest
                    </label>
                    <select
                      value={formData.homeType}
                      onChange={(e) => setFormData({ ...formData, homeType: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm focus:border-black focus:outline-none transition-colors"
                    >
                      <option value="TURNKEY FACTORY RESIDENTIAL BUILDS">Turnkey Factory Residential Builds</option>
                      <option value="OFF-GRID & ENERGY-INDEPENDENT SYSTEMS">Off-Grid & Energy-Independent Systems</option>
                      <option value="MODULAR EXTENSIONS & ADU SUITES">Modular Extensions & ADU Suites</option>
                      <option value="CUSTOM ARCHITECTURAL COMMISSIONING">Custom Architectural Commissioning</option>
                      <option value="COMPACT LIVING & MICRO PODS">Compact Living & Micro Pods</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                      Estimated Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm focus:border-black focus:outline-none transition-colors"
                    >
                      <option value="Immediately (Ready to build)">Immediately (Ready to build)</option>
                      <option value="Within 3 months">Within 3 months</option>
                      <option value="Within 6 months">Within 6 months</option>
                      <option value="Planning phase (1+ years)">Planning phase (1+ years)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                    Additional Project Details & Site Characteristics
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about the property slope, road access, utilities, or specific model preference..."
                    className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm focus:border-black focus:outline-none resize-none transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95 disabled:opacity-50"
                  >
                    <span className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform" />
                    <span>{isSubmitting ? 'CALCULATING ESTIMATE...' : 'SUBMIT QUOTE REQUEST'}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
