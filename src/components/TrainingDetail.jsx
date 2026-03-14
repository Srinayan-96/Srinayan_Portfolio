import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function TrainingDetail({ training, onBack, onNext }) {
  // Prevent background scroll when detail is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  if (!training) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[150] bg-[#050505] text-white selection:bg-cyan-500 selection:text-black overflow-y-auto scrollbar-hide"
      data-lenis-prevent
    >
      <nav className="fixed top-0 left-0 right-0 z-[160] bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-8 py-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="text-white text-xs font-mono tracking-widest uppercase hover:opacity-60 transition-opacity"
          >
            SRINAYAN ©
          </button>
          <div className="flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase">
            <button onClick={onBack} className="text-cyan-500 hover:opacity-100 transition-opacity">Trainings</button>
            <span className="opacity-20">/</span>
            <button onClick={onBack} className="hover:text-cyan-500 transition-colors">Go Back</button>
          </div>
        </div>
      </nav>

      <main className="pt-32 md:pt-40 pb-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Minimal Header */}
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 mb-16 md:mb-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-24 h-24 rounded-2xl bg-white/5 flex items-center justify-center p-5 border border-white/10 shrink-0"
            >
              <img src={training.image} alt={training.subtitle} className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500" />
            </motion.div>
            
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-cyan-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-4">
                  {training.subtitle} • {training.period}
                </p>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                  {training.title.split(' – ')[0]}
                </h1>
                <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed max-w-2xl">
                  {training.tagline}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Structured Content */}
          <div className="space-y-32">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 flex items-center gap-4 font-mono">
                <span>Overview</span>
                <span className="h-[1px] w-12 bg-white/10" />
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-white/80 font-light">
                {training.overview}
              </p>
            </motion.section>

            {/* Content Modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
              {training.content.map((module, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <h3 className="text-white/40 text-[10px] uppercase font-mono tracking-[0.3em] mb-6 group-hover:text-cyan-500 transition-colors">
                    0{i + 1} — {module.heading}
                  </h3>
                  <p className="text-lg leading-relaxed text-white/60 group-hover:text-white transition-all duration-500">
                    {module.body}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Skills & Footer Meta */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-24 border-t border-white/5 grid grid-cols-1 md:grid-cols-12 gap-16"
            >
              <div className="md:col-span-8">
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-10 font-mono">Key Takeaways</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {training.skills.map((skill, i) => (
                    <div key={i} className="flex items-start gap-4 text-sm text-white/70">
                      <span className="w-1 h-1 rounded-full bg-cyan-500/50 mt-2 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-4">
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-10 font-mono">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {training.tech.split(',').map((t, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-white/40 uppercase">
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Simple Navigation */}
          <div className="mt-40 pt-12 border-t border-white/5 flex justify-between items-center text-xs font-mono">
            <button onClick={onBack} className="text-white/30 hover:text-white transition-colors tracking-widest uppercase">← Back to Dashboard</button>
            <button onClick={onNext} className="text-cyan-500 hover:opacity-70 transition-opacity tracking-widest uppercase">Next Training →</button>
          </div>
        </div>
      </main>

      <footer className="px-8 py-12 text-center">
        <p className="text-[8px] font-bold tracking-[0.5em] uppercase text-white/10">Srinayan Portfolio © 2026</p>
      </footer>
    </motion.div>
  );
}
