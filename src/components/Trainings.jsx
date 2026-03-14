import { useState } from 'react';
import { motion } from 'framer-motion';
import { trainings } from '../data/trainings';

export default function Trainings({ onTrainingSelect }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="trainings" className="py-20 px-8 bg-black">
      <div className="max-w-portfolio mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold uppercase text-white mb-16"
        >
          TRAININGS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((training, index) => (
            <motion.div
              key={training.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onTrainingSelect(training.id)}
            >
              {/* Image Background */}
              <div className="absolute inset-0 bg-white/5 flex items-center justify-center p-8">
                <img
                  src={training.image}
                  alt={training.title}
                  className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />

              {/* Default Title (visible when not hovered or partially visible) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                <h3 className="text-white text-xl font-bold mb-1 tracking-wide">{training.title.split(' – ')[0]}</h3>
                <p className="text-[#a1a1a1] text-sm uppercase tracking-wider">{training.subtitle} • {training.period}</p>
                
                {/* Description that slides up on hover */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-out mt-4 ${
                    hoveredIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[#e0e0e0] text-sm leading-relaxed border-t border-white/20 pt-4">
                    {training.tagline}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
