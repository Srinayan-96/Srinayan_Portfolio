import { motion } from 'framer-motion';

const skills = [
  { id: 1, title: 'Risk Awareness', rotation: -2, lightAngle: '90deg' },
  { id: 2, title: 'Forward Planning', rotation: 3, lightAngle: '0deg' },
  { id: 3, title: 'Learning Agility', rotation: -4, lightAngle: '180deg' },
  { id: 4, title: 'Adaptive Leadership', rotation: 2, lightAngle: '45deg' },
  { id: 5, title: 'Critical Thinking', rotation: -3, lightAngle: '270deg' },
];

export default function SoftSkills() {
  return (
    <section id="softskills" className="py-20 px-8 bg-black">
      <div className="max-w-portfolio mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
          
          {/* Left Side: Heading & Tags */}
          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-6xl font-bold uppercase text-white mb-20"
            >
              What I Am At Core
            </motion.h2>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              className="flex flex-wrap items-center gap-6 lg:gap-8 pl-4 md:pl-8"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ 
                    rotate: 0, 
                    scale: 1.05,
                    boxShadow: "0 0 40px 10px rgba(0, 229, 255, 0.2)",
                  }}
                  transition={{ 
                    duration: 0.4,
                    scale: { type: "spring", stiffness: 300, damping: 20 },
                    rotate: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  style={{ rotate: skill.rotation }}
                  className="relative inline-flex overflow-hidden rounded-full p-[1px] bg-[#222] cursor-default select-none group"
                >
                  {/* Moving border light */}
                  <span 
                    className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite]"
                    style={{
                      background: `conic-gradient(from ${skill.lightAngle} at 50% 50%, rgba(0,229,255,0) 0%, rgba(0,229,255,1) 10%, rgba(0,229,255,0) 20%)`
                    }}
                  />
                  
                  {/* Inner pill */}
                  <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[#050505] px-5 py-2.5 lg:px-6 lg:py-3 text-[#a1a1a1] text-sm md:text-base font-medium group-hover:text-white transition-colors duration-300">
                    {skill.title}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Description paragraph */}
          <div className="w-full lg:w-1/2 flex items-center lg:mt-32">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#a1a1a1] text-lg lg:text-xl leading-relaxed"
            >
              By combining Forward Planning with Adaptive Leadership, I focus on the subtle drivers communication, robust problem solving, and proactive collaboration that quietly save thousands of hours and ensure seamless project delivery.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
