import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function ProjectDetail({ project, onBack, onNext }) {
  // Prevent background scroll when detail is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[150] bg-[#050505] text-white selection:bg-[#00e5ff] selection:text-black overflow-y-auto scrollbar-hide"
      data-lenis-prevent
    >
      {/* ... (Navbar remains same) ... */}
      <nav className="fixed top-0 left-0 right-0 z-[160] bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="text-white text-sm font-medium tracking-tight uppercase hover:opacity-60 transition-opacity"
          >
            SRINAYAN ©
          </button>
          <div className="flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase">
            <button onClick={onBack} className="text-[#00e5ff] hover:opacity-100 transition-opacity">Projects</button>
            <span className="opacity-20">/</span>
            <button onClick={onBack} className="hover:text-[#00e5ff] transition-colors">Go Back</button>
          </div>
        </div>
      </nav>

      <main className="pt-24 md:pt-32 pb-10 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Info */}
          <div className="mb-20">
            <button 
              onClick={onBack}
              className="text-white/40 text-xs font-mono mb-8 hover:text-white transition-colors"
            >
              [back]
            </button>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 uppercase"
            >
              {project.title.split(' – ')[0]}
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-white/60 font-light max-w-2xl"
            >
              {project.tagline}
            </motion.p>
          </div>

          {/* Large Media */}
          <motion.div 
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="aspect-[16/9] w-full bg-[#111] rounded-sm overflow-hidden mb-24 relative group"
          >
             <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32 border-t border-white/10 pt-16">
            <div className="md:col-span-4 space-y-12">
              <DetailRow label="Project" value={project.title.split(' – ')[0]} />
              <DetailRow label="Year" value={project.period.split(' – ').pop()} />
              <DetailRow label="Client" value="Internal / Research" />
              <DetailRow label="Credits" value="Developed by Srinayan" />
            </div>

            <div className="md:col-span-8 space-y-24">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6 flex items-center gap-4">
                  <span>INFO</span>
                  <span className="h-[1px] w-12 bg-white/10" />
                </p>
                <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-light">
                  {project.description}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6 flex items-center gap-4">
                  <span>WHAT I DID</span>
                  <span className="h-[1px] w-12 bg-white/10" />
                </p>
                <div className="space-y-8">
                  {project.points.map((point, i) => (
                    <div key={i} className="flex gap-6 group">
                      <span className="text-white/20 font-mono text-sm pt-1.5 group-hover:text-[#00e5ff] transition-colors">{String(i + 1).padStart(2, '0')}</span>
                      <p className="text-lg leading-relaxed text-white/80 group-hover:text-white transition-colors">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8 flex items-center gap-4">
                  <span>STACK USED</span>
                  <span className="h-[1px] w-12 bg-white/10" />
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.tech.split(',').map((item, i) => (
                    <span 
                      key={i}
                      className="px-6 py-3 rounded-full border border-white/10 text-xs font-semibold tracking-widest text-[#00e5ff] bg-white/5 hover:bg-[#00e5ff] hover:text-black transition-all cursor-default"
                    >
                      {item.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Next Project */}
          <div className="border-t border-white/10 pt-20 pb-20">
            <button 
              onClick={onNext}
              className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 w-full text-left"
            >
              <span className="text-6xl md:text-[140px] font-bold tracking-tighter transition-all duration-500 group-hover:pl-8">Next</span>
              <span className="text-6xl md:text-[140px] font-bold tracking-tighter opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-4">Project</span>
            </button>
          </div>

          {/* Minimal Contact Section - Reduced Padding & Dim Light Color */}
          <div className="border-t border-white/5 pt-12 pb-12 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-white/20 mb-6">LET'S WORK TOGETHER</p>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <a 
                href="mailto:your-email@example.com" 
                className="text-xs font-bold tracking-[0.3em] text-[#a1a1a1]/60 hover:text-[#00e5ff] hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.4)] transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                EMAIL
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                className="text-xs font-bold tracking-[0.3em] text-[#a1a1a1]/60 hover:text-[#00e5ff] hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.4)] transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="px-8 py-8 border-t border-white/5 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center text-[8px] font-bold tracking-[0.3em] uppercase text-white/10">
          <div>SRINAYAN</div>
          <div>{new Date().getFullYear()} © PORTFOLIO</div>
        </div>
      </footer>
    </motion.div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="group">
      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 group-hover:text-white/50 transition-colors">{label}</p>
      <p className="text-lg font-medium group-hover:text-[#00e5ff] transition-colors">{value}</p>
    </div>
  );
}
