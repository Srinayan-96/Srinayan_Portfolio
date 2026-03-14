import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function About() {
  const [isHoveringPrecision, setIsHoveringPrecision] = useState(false);
  const [isImpacted, setIsImpacted] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);
  const containerRef = useRef(null);
  const precisionRef = useRef(null);
  const purposeRef = useRef(null);

  // Reset state after 5 seconds
  useEffect(() => {
    let timeout;
    if (isImpacted) {
      timeout = setTimeout(() => {
        setIsImpacted(false);
        setPulseActive(false);
        setIsHoveringPrecision(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [isImpacted]);

  const sections = [
    {
      label: "MY BELIEF",
      content: (
        <>
          I architect digital systems where{" "}
          <span
            ref={precisionRef}
            onMouseEnter={() => {
              if (isImpacted) return;
              setIsHoveringPrecision(true);
            }}
            onMouseLeave={() => {
              if (!isImpacted && !pulseActive) setIsHoveringPrecision(false);
            }}
            onClick={() => {
              if (!isImpacted && !pulseActive) setPulseActive(true);
            }}
            className={`relative inline-block cursor-crosshair transition-all duration-500 ${isHoveringPrecision ? 'text-white font-medium tracking-wider' : 'text-white/80'}`}
          >
            precision
            {isHoveringPrecision && !pulseActive && !isImpacted && <FocusBrackets />}
          </span>{" "}
          meets{" "}
          <span
            ref={purposeRef}
            className={`relative inline-block transition-all duration-1000 ${isImpacted ? 'text-white font-medium [text-shadow:0_0_15px_rgba(255,255,255,0.4)]' : 'text-white/80'}`}
          >
            purpose.
            {isImpacted && <motion.div layoutId="flare" className="absolute inset-x-0 -bottom-1 h-[2px] bg-white/40 blur-[1px]" />}
          </span>
        </>
      )
    },
    {
      label: "MY BACKGROUND",
      content:
        "Currently pursuing B.Tech in Computer Science at Lovely Professional University, I focus on building structured backend systems and full-stack applications that solve practical problems."
    },
    {
      label: "MY APPROACH",
      content:
        "I design software in layers - database, backend logic, and interfaces ensuring each component works together with clarity, efficiency, and scalability."
    }
  ];

  return (
    <section id="about" ref={containerRef} className="py-8 px-8 bg-[#050505] relative antialiased overflow-hidden">
      <div className="max-w-portfolio mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white border-l-4 border-white pl-6"
        >
          ABOUT ME
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-9 space-y-12">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6"
              >
                <div className="md:col-span-3">
                  <h3 className="text-xs md:text-sm font-semibold text-white/40 uppercase tracking-[0.2em] pt-1">
                    {section.label}
                  </h3>
                </div>
                <div className="md:col-span-9">
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-2xl">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Core Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-12 border-t border-white/5"
            >
              <div className="md:col-span-3">
                <h3 className="text-xs md:text-sm font-semibold text-white/40 uppercase tracking-[0.2em]">
                  CORE FOCUS
                </h3>
              </div>
              <div className="md:col-span-9 flex flex-wrap gap-x-12 gap-y-6">
                <Pillar label="Backend Engineering" value="Architecture" />
                <Pillar label="System Design" value="Efficiency" />
                <Pillar label="Full-Stack Development" value="Integration" />
              </div>
            </motion.div>
          </div>

          {/* Original Premium Image Column */}
          <div className="lg:col-span-3 self-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full w-full rounded-2xl overflow-hidden group border border-white/5 shadow-2xl"
            >
              <div className={`absolute inset-0 ${!isImpacted ? 'bg-black/40 group-hover:bg-black/0' : ''} transition-all duration-700 z-10 pointer-events-none`} />

              {/* Film Grain Shader Overlay */}
              <div
                className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none z-20"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
              />

              <img
                src="/photos/photos/about.jpeg"
                alt="About Srinayan"
                className={`w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isImpacted ? 'grayscale-0 brightness-[1.1] scale-105' : 'grayscale group-hover:grayscale-0 group-hover:scale-105'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Connection Pulse */}
      <AnimatePresence>
        {pulseActive && precisionRef.current && purposeRef.current && (
          <DataPulse
            startRef={precisionRef}
            endRef={purposeRef}
            onArrive={() => {
              setIsImpacted(true);
              setPulseActive(false);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
function FocusBrackets() {
  return (
    <>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/40" />
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white/40" />
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white/40" />
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/40" />
    </>
  );
}

function DataPulse({ startRef, endRef, onArrive }) {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (startRef.current && endRef.current) {
      const parent = startRef.current.closest('section').getBoundingClientRect();
      const start = startRef.current.getBoundingClientRect();
      const end = endRef.current.getBoundingClientRect();

      setCoords({
        x1: start.right - parent.left,
        y1: start.top + start.height / 2 - parent.top,
        x2: end.left - parent.left,
        y2: end.top + end.height / 2 - parent.top
      });
    }
  }, [startRef, endRef]);

  if (!coords) return null;

  return (
    <motion.div
      initial={{ x: coords.x1, y: coords.y1, opacity: 0, width: 0 }}
      animate={{
        x: [coords.x1, coords.x2],
        width: [0, 80, 0],
        opacity: [0, 1, 0]
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={onArrive}
      className="absolute h-[1px] bg-gradient-to-r from-white/0 via-white to-white/0 z-40"
    />
  );
}

function Pillar({ label, value }) {
  return (
    <div className="group">
      <p className="text-[10px] font-mono text-white/30 tracking-[0.3em] uppercase mb-2 group-hover:text-white transition-colors">
        {label}
      </p>
      <p className="text-white font-bold tracking-tight text-lg">
        {value}
      </p>
    </div>
  );
}
