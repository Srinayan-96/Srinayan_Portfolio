import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const visibleSections = [
  { id: 'trainings', label: 'TRAININGS' },
  { id: 'certifications', label: 'CERTIFICATIONS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'softskills', label: 'MY CORE' }
];

const allTrackedIds = ['home', 'about', 'trainings', 'certifications', 'projects', 'softskills', 'contact'];

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionStates = new Map();
    
    const updateActiveSection = () => {
      let bestId = '';
      let minDistance = Infinity;
      const viewportCenter = window.innerHeight / 2;

      sectionStates.forEach((state, id) => {
        if (state.isIntersecting) {
          const el = document.getElementById(id);
          if (!el) return;
          const rect = el.getBoundingClientRect();
          
          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            bestId = id;
          }
        }
      });

      if (bestId) {
        setActiveSection(bestId);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        sectionStates.set(entry.target.id, {
          isIntersecting: entry.isIntersecting,
          rect: entry.boundingClientRect
        });
      });
      updateActiveSection();
    }, {
      root: null,
      rootMargin: '0px',
      threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) // Many thresholds for smooth tracking
    });

    allTrackedIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Show only if the active section is one of our visible ones 
  // (so it naturally hides when 'about' or 'contact' are active)
  const activeSectionData = visibleSections.find(s => s.id === activeSection);
  const isVisible = !!activeSectionData;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          // Matches SoftSkills vibe: dark bg, thin subtle cyan border, text matching cyan
          className="fixed right-0 top-[40vh] -translate-y-1/2 z-50 hidden md:flex items-center justify-center bg-[#0a0a0a] border border-[#222] border-r-0 hover:border-[#00e5ff] transition-colors duration-500 text-[#00e5ff] py-10 px-3 font-semibold text-xs tracking-[0.2em] rounded-l-xl shadow-[0_0_15px_rgba(0,229,255,0.05)]"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="rotate-180"
            >
              {activeSectionData.label}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
