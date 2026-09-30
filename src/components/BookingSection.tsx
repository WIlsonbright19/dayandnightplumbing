import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, CheckCircle2, MapPin, Send, ArrowRight, Sparkles } from 'lucide-react';
import { BUSINESS } from '../data/siteData';

interface BookingSectionProps {
  selectedTreatment?: string;
  onTreatmentChange?: (treatment: string) => void;
}

export const TREATMENTS = [
  {
    id: 'general-repairs',
    name: 'General Plumbing Repairs',
    duration: 'Call for availability',
    tag: 'Repairs',
    desc: 'Describe the issue and ask the team whether it can help.'
  },
  {
    id: 'in-home-service',
    name: 'In-Home Plumbing Service',
    duration: 'Call to schedule',
    tag: 'Home',
    desc: 'Ask about an in-home visit, service area, and current availability.'
  },
  {
    id: 'troubleshooting',
    name: 'Plumbing Troubleshooting',
    duration: 'Call for availability',
    tag: 'Troubleshooting',
    desc: 'Talk through a persistent plumbing concern and ask about next steps.'
  },
];

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedTreatment: externalTreatment,
  onTreatmentChange
}) => {
  const [activeTreatment, setActiveTreatment] = useState(
    externalTreatment || TREATMENTS[0].name
  );

  useEffect(() => {
    if (externalTreatment) {
      const match = TREATMENTS.find(
        (t) =>
          t.name.toLowerCase() === externalTreatment.toLowerCase() ||
          externalTreatment.toLowerCase().includes(t.tag.toLowerCase()) ||
          t.name.toLowerCase().includes(externalTreatment.toLowerCase())
      );
      if (match) {
        setActiveTreatment(match.name);
      } else {
        setActiveTreatment(externalTreatment);
      }
    }
  }, [externalTreatment]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Call to confirm availability',
    location: BUSINESS.location,
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSelectTreatment = (name: string) => {
    setActiveTreatment(name);
    if (onTreatmentChange) {
      onTreatmentChange(name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.preferredDate) {
      setErrorMsg('Please complete all required fields (Full Name, Email, and Preferred Date).');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredDate: '',
          preferredTime: 'Call to confirm availability',
          location: BUSINESS.location,
      notes: ''
    });
  };

  return (
    <section
      id="booking"
      className="relative w-full py-20 sm:py-24 lg:py-28 bg-[#f5f4f0] text-neutral-900 border-t border-black/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2.5 sm:gap-3 max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neutral-900 shrink-0" />
            <span className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-neutral-500 font-mono">
              SERVICE & CONTACT DETAILS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1.08] font-display text-neutral-900">
            CONTACT DAY & NIGHT PLUMBING
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mt-1 max-w-2xl">
            Use the options below to outline what you need. This page does not send online requests; call <a href={`tel:${BUSINESS.phoneLink}`} className="font-bold text-neutral-900 underline">{BUSINESS.phone}</a> to discuss service and confirm availability. Hours are not listed on Google.
          </p>
        </div>

        {/* Booking Container */}
        <div className="bg-white rounded-3xl border border-black/10 shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-12 md:p-16 flex flex-col items-center text-center max-w-2xl mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle2 size={36} />
                </div>

                <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold mb-2">
                  ONLINE REQUEST NOT SENT
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase font-display tracking-tight text-neutral-900 mb-4">
                  CALL TO CONFIRM SERVICE
                </h3>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                  Your details stay in this browser and have not been sent to Day & Night Plumbing Services. Call <a href={`tel:${BUSINESS.phoneLink}`} className="font-bold text-neutral-900 underline">{BUSINESS.phone}</a> to discuss <strong className="text-neutral-900">{activeTreatment}</strong> and confirm current availability.
                </p>

                <div className="w-full bg-[#f8f7f4] rounded-2xl p-5 border border-black/5 text-left text-xs sm:text-sm text-neutral-700 flex flex-col gap-2.5 mb-8">
                  <div className="flex justify-between border-b border-black/5 pb-2">
                    <span className="text-neutral-500 font-mono uppercase text-[11px]">Selected Service</span>
                    <span className="font-bold text-neutral-900">{activeTreatment}</span>
                  </div>
                  <div className="flex justify-between border-b border-black/5 pb-2">
                    <span className="text-neutral-500 font-mono uppercase text-[11px]">Preferred Time Window</span>
                    <span className="font-semibold text-neutral-900">{formData.preferredDate} · {formData.preferredTime}</span>
                  </div>
                  <div className="flex justify-between border-b border-black/5 pb-2">
                    <span className="text-neutral-500 font-mono uppercase text-[11px]">Listed Location</span>
                    <span className="font-semibold text-neutral-900">{formData.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-mono uppercase text-[11px]">Customer Phone</span>
                    <span className="font-semibold text-neutral-900">{formData.phone || 'Not specified'}</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold text-xs uppercase tracking-wider hover:bg-black transition-all active:scale-95 cursor-pointer"
                >
                  <span>Edit Service Details</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Column: Service Selection */}
                <div className="lg:col-span-5 bg-[#faf9f6] p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-black/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                        STEP 1: SELECT SERVICE
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400">
                        {TREATMENTS.length} {TREATMENTS.length === 1 ? 'Option' : 'Options'}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      {TREATMENTS.map((treatment) => {
                        const isSelected = activeTreatment === treatment.name;
                        return (
                          <button
                            key={treatment.id}
                            type="button"
                            onClick={() => handleSelectTreatment(treatment.name)}
                            className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-white border-neutral-900 shadow-md ring-1 ring-neutral-900'
                                : 'bg-white/60 hover:bg-white border-black/5 hover:border-black/20 text-neutral-700'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <span className="text-xs sm:text-sm font-bold uppercase font-display tracking-tight text-neutral-900 leading-snug">
                                {treatment.name}
                              </span>
                              <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full shrink-0 font-semibold ${
                                isSelected ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-700'
                              }`}>
                                {treatment.duration}
                              </span>
                            </div>

                            <p className="text-[11px] sm:text-xs text-neutral-500 font-normal mt-1.5 leading-relaxed line-clamp-2">
                              {treatment.desc}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-black/10 flex items-center gap-3 text-xs text-neutral-500">
                    <Sparkles size={16} className="text-amber-600 shrink-0" />
                    <span>Google reviewers mention punctual arrivals, respectful service, and clean work areas.</span>
                  </div>
                </div>

                {/* Right Column: Reservation Details Form */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10">
                  <div className="mb-6 pb-4 border-b border-black/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold block mb-0.5">
                        STEP 2: SERVICE & CONTACT DETAILS
                      </span>
                      <h4 className="text-base sm:text-lg font-bold uppercase font-display text-neutral-900">
                        {activeTreatment}
                      </h4>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="mb-6 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Full Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 font-semibold">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. David Miller"
                          className="w-full bg-[#fbfaf8] border border-neutral-300 rounded-xl px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-black focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 font-semibold">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="david@example.com"
                          className="w-full bg-[#fbfaf8] border border-neutral-300 rounded-xl px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-black focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone & Date Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 font-semibold">
                          PHONE NUMBER
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(678) 482-4444"
                          className="w-full bg-[#fbfaf8] border border-neutral-300 rounded-xl px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-black focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 font-semibold flex items-center justify-between">
                          <span>PREFERRED SERVICE DATE *</span>
                          <Calendar size={12} className="text-neutral-400" />
                        </label>
                        <input
                          type="date"
                          required
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full bg-[#fbfaf8] border border-neutral-300 rounded-xl px-4 py-2.5 text-sm text-neutral-900 focus:bg-white focus:border-black focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Time Window & Service Region */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 font-semibold flex items-center justify-between">
                          <span>PREFERRED ARRIVAL WINDOW</span>
                          <Clock size={12} className="text-neutral-400" />
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full bg-[#fbfaf8] border border-neutral-300 rounded-xl px-4 py-2.5 text-sm text-neutral-900 focus:bg-white focus:border-black focus:outline-none transition-colors"
                        >
                          <option value="Call to confirm availability">Call to confirm availability</option>
                          <option value="Morning request">Morning request</option>
                          <option value="Afternoon request">Afternoon request</option>
                          <option value="Evening request">Evening request</option>
                          <option value="As soon as available">As soon as available</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 font-semibold flex items-center justify-between">
                          <span>CITY / SERVICE REGION</span>
                          <MapPin size={12} className="text-neutral-400" />
                        </label>
                        <select
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full bg-[#fbfaf8] border border-neutral-300 rounded-xl px-4 py-2.5 text-sm text-neutral-900 focus:bg-white focus:border-black focus:outline-none transition-colors"
                        >
                          <option value="Atlanta, GA 30303">Atlanta, GA 30303</option>
                          <option value="Other nearby location (confirm by phone)">Other nearby location (confirm by phone)</option>
                        </select>
                      </div>
                    </div>

                    {/* Notes Field */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 font-semibold">
                        ISSUE DESCRIPTION OR PROJECT SPECIFICS (OPTIONAL)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Briefly describe the plumbing issue or service you would like to discuss..."
                        className="w-full bg-[#fbfaf8] border border-neutral-300 rounded-xl px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-black focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-neutral-900 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase overflow-hidden shadow-xl transition-all duration-300 hover:bg-black active:scale-95 disabled:opacity-50 cursor-pointer"
                      >
                        <span className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform" />
                        <span>
                          {isSubmitting ? 'PREPARING DETAILS...' : 'VIEW CONTACT INSTRUCTIONS'}
                        </span>
                        <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
