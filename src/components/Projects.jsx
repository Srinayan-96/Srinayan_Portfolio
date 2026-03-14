import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function Projects({ onProjectSelect }) {
  const [activeImageId, setActiveImageId] = useState(null);

  return (
    <section id="projects" className="py-20 px-8 bg-[#050505]">
      <div className="max-w-portfolio mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold uppercase text-white mb-20"
        >
          PROJECTS
        </motion.h2>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24"
            >
              {/* Left Side: Image Presentation */}
              <div 
                className="w-full lg:w-1/2 relative cursor-none group/image"
                onClick={() => onProjectSelect(project.id)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                }}
              >
                {/* Custom VIEW cursor */}
                <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden mix-blend-difference opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                  <div 
                    className="absolute flex items-center justify-center w-20 h-20 rounded-full bg-white text-black pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out scale-50 group-hover/image:scale-100"
                    style={{
                      left: 'var(--mouse-x, 50%)',
                      top: 'var(--mouse-y, 50%)',
                    }}
                  >
                     <span className="text-xs font-bold tracking-widest whitespace-nowrap">VIEW</span>
                  </div>
                </div>

                {/* Background glow specific to the image frame */}
                <div 
                  className={`absolute inset-[-10%] rounded-3xl blur-[80px] transition-colors duration-1000 ease-out z-0 pointer-events-none
                    ${activeImageId === project.id ? 'bg-[#00e5ff]/15' : 'bg-transparent group-hover/image:bg-[#00e5ff]/20'}`} 
                />

                {/* Background layers */}
                <div className="absolute inset-0 bg-white/5 rounded-3xl transform -rotate-2 scale-105 z-10 transition-transform duration-500 group-hover/image:-rotate-3 group-hover/image:scale-110" />
                <div className="absolute inset-0 bg-black rounded-3xl transform rotate-1 scale-105 opacity-50 z-10 transition-transform duration-500 group-hover/image:rotate-2 group-hover/image:scale-110" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#111] aspect-[4/3] group z-20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-90 opacity-70"
                  />
                  {/* Fady overlay for the cool image presentation effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

                  {/* Inner cyan glow on hover */}
                  <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,229,255,0)] group-hover/image:shadow-[inset_0_0_50px_rgba(0,229,255,0.2)] transition-shadow duration-500 z-30 pointer-events-none" />
                </div>
              </div>

              {/* Right Side: Project Details */}
              <div className="w-full lg:w-1/2 flex flex-col justify-start">
                {/* Top Meta Info */}
                <span className="text-white/60 text-sm font-medium tracking-wide mb-2">
                  India • {project.period}
                </span>

                {/* Title */}
                <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
                  {project.title.split(' – ')[0]}
                </h3>

                {/* Tagline / Subtitle */}
                <p className="text-[#e0e0e0] text-base lg:text-lg font-medium leading-relaxed mb-4">
                  {project.tagline}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start text-[#a1a1a1] text-sm leading-relaxed">
                      <span className="mr-3 text-white/40 mt-1 text-[10px]">●</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-auto pt-2">
                  {project.tech.split(',').map((tech, i) => {
                    // pseudo-random starting angles so lights don't sync up
                    const startAngles = ['90deg', '0deg', '180deg', '45deg', '270deg', '135deg', '315deg'];
                    const angle = startAngles[i % startAngles.length];
                    
                    return (
                      <div 
                        key={i} 
                        className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-[0_0_10px_rgba(0,229,255,0.05)] bg-[#222]"
                      >
                        {/* Randomized starting position, all spinning same direction */}
                        <span 
                          className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite]"
                          style={{
                            background: `conic-gradient(from ${angle} at 50% 50%, rgba(0,229,255,0) 0%, rgba(0,229,255,1) 10%, rgba(0,229,255,0) 20%)`
                          }}
                        />
                        
                        <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[#0a0a0a] px-4 py-2 text-xs font-semibold tracking-wider text-[#e0e0e0]">
                          {tech.trim()}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
