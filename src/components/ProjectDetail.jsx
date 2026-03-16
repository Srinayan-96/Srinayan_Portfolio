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

          {/* Large Media - Reverted to Full Width with Premium Borders */}
          <motion.div 
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="aspect-[16/9] w-full bg-[#111] rounded-xl overflow-hidden mb-24 relative group border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
             <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(255,255,255,0.03)] pointer-events-none" />
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
                  <span>OVERVIEW</span>
                  <span className="h-[1px] w-12 bg-white/10" />
                </p>
                <div className="space-y-10">
                  {(project.details || project.points).map((detail, i) => (
                    <div key={i} className="group">
                      <p className="text-lg leading-relaxed text-white/80 group-hover:text-white transition-colors font-light">
                        {detail}
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

              {(project.github || project.live) && (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8 flex items-center gap-4">
                    <span>LINKS</span>
                    <span className="h-[1px] w-12 bg-white/10" />
                  </p>
                  <div className="flex flex-wrap gap-6">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-sm border border-white/10 text-sm font-bold tracking-widest uppercase text-white hover:bg-white hover:text-black transition-all duration-300 group/github"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                    
                    {project.live && (
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-[#00e5ff] text-black text-sm font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 group/live"
                      >
                         <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                        </svg>
                        <span>Live Site</span>
                        <motion.span 
                          className="inline-block"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          →
                        </motion.span>
                      </a>
                    )}
                  </div>
                </div>
              )}
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
