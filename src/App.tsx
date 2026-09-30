/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AdaptSection } from './components/AdaptSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceShowcaseSection } from './components/ServiceShowcaseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { BookingSection, TREATMENTS } from './components/BookingSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedTreatment, setSelectedTreatment] = useState<string>(TREATMENTS[0].name);

  // Monitor scroll position to update active navbar state
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'adapt',
      'projects',
      'services',
      'service-showcase',
      'testimonials',
      'journey',
      'booking',
      'contact'
    ];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookTreatment = (treatmentName?: string) => {
    if (treatmentName) {
      // Find closest treatment match
      const lower = treatmentName.toLowerCase();
      const matched = TREATMENTS.find(
        (t) =>
          lower.includes(t.tag.toLowerCase()) ||
          lower.includes(t.name.toLowerCase()) ||
          t.name.toLowerCase().includes(lower)
      );
      if (matched) {
        setSelectedTreatment(matched.name);
      } else {
        setSelectedTreatment(treatmentName);
      }
    }
    scrollTo('booking');
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-[#121212] flex flex-col font-sans selection:bg-[#121212] selection:text-white">
      {/* Top Global Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-600 origin-left z-50 shadow-sm"
        style={{ scaleX }}
      />

      {/* Top Navigation with Mobile Slide-In Drawer */}
      <Navbar
        onBookTreatment={() => handleBookTreatment()}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main className="flex-1 w-full">
        {/* Section 1: Hero Section (100vh) */}
        <HeroSection onExplore={() => scrollTo('about')} />

        {/* Section 2: About Arkhaus Philosophy & Precision Modular (100vh) */}
        <AboutSection onLearnMore={() => scrollTo('adapt')} />

        {/* Section 3: Designed to Adapt - Hotspot Interactive Viewer (100vh) */}
        <AdaptSection onExplore={() => scrollTo('projects')} />

        {/* Section 4: Recently Completed Homes Project Carousel (100vh) */}
        <ProjectsSection
          onSelectProject={() => handleBookTreatment()}
        />

        {/* Section 5: Scalable Homes Banner & Services List (100vh) */}
        <ServicesSection
          onSelectService={(service) => {
            if (service.id === 'service-3') {
              scrollTo('service-showcase');
            } else {
              handleBookTreatment(service.title);
            }
          }}
          onExploreProjects={() => scrollTo('projects')}
        />

        {/* Section 6: Plumbing Service Spotlight (100vh) */}
        <ServiceShowcaseSection
          onBookConsultation={() =>
            handleBookTreatment('General Plumbing Repairs')
          }
        />

        {/* Section 7: Testimonials Showcase with Full-screen Backdrop (100vh) */}
        <TestimonialsSection />

        {/* Section 8: Customer Service CTA Section (100vh) */}
        <CtaSection
          onStartBuilding={() =>
            handleBookTreatment('General Plumbing Repairs')
          }
        />

        {/* Section 9: Dedicated Booking & Treatment Reservation Section */}
        <BookingSection
          selectedTreatment={selectedTreatment}
          onTreatmentChange={(t) => setSelectedTreatment(t)}
        />
      </main>

      {/* Footer Section with Location & Contact */}
      <Footer onNavClick={(id) => scrollTo(id)} />
    </div>
  );
}
