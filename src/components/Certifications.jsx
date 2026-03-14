import { useState } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const certifications = [
  { 
    title: 'DevOps and AI on AWS', 
    subtitle: 'Coursera', 
    image: '/photos/photos/aws_ai.jpg',
    link: 'https://coursera.org/share/222330a4e0978ad3b092858639e1ce3d',
    description: 'Mastered cloud deployments, CI/CD pipelines, and integrating AI services on AWS infrastructure.'
  },
  { 
    title: 'Git and GitHub', 
    subtitle: 'Coursera', 
    image: '/photos/photos/git_and_github.webp',
    link: 'https://coursera.org/share/5ac4543b4a1da300ed765b130fe9cc70',
    description: 'Learned version control fundamentals, branching strategies, and collaborative development.'
  },
  { 
    title: 'Generative AI Applications', 
    subtitle: 'Infosys', 
    image: '/photos/photos/no_code_tools.webp',
    link: 'https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_014157683688415232146/overview',
    description: 'Built generative AI solutions using cutting edge no-code tools and prompt engineering methodologies.'
  },
  { 
    title: 'Software Engineering Essentials', 
    subtitle: 'Coursera', 
    image: '/photos/photos/coursera_logo.svg',
    link: 'https://www.credly.com/badges/99e3c5cd-024f-49c7-8c69-f29f2f1c818f',
    description: 'Acquired core software development lifecycle skills, agile practices, and testing methodologies.'
  },
  { 
    title: 'JavaScript Mastery', 
    subtitle: 'Scaler', 
    image: '/photos/photos/javascript.png',
    link: 'https://moonshot.scaler.com/s/sl/bZY1js8JUC?_gl=1*hi2z9b*_gcl_aw*R0NMLjE3NjQyMjU2MDkuQ2p3S0NBaUE1NXJKQmhCeUVpd0FGa1kxUVBQZEVkX05QUFZDRlYwVW53MWZxdkRDNURaOXZ5Z0xTSXZRRm5PQlpQNk5ZbFZWRU4zY3dob0N0T01RQXZEX0J3RQ..*_gcl_au*MTc2MDM1MzU3LjE3NjQyMjU2MDY.*FPAU*MTc2MDM1MzU3LjE3NjQyMjU2MDY.*_ga*MTE1MDc4MTc1Ny4xNzY0MjI1NjA5*_ga_53S71ZZG1X*czE3NjQyMzYxMDAkbzMkZzAkdDE3NjQyMzYxMDAkajYwJGwwJGgxNDQ4NzkxODM4',
    description: 'Deep dive into advanced JavaScript concepts, closures, asynchronous programming, and DOM manipulation.'
  },
  { 
    title: 'Skills for Jobs Program (IBM)', 
    subtitle: 'Edunet Foundation', 
    image: '/photos/photos/ibm.jpeg',
    link: '/photos/photos/edunet.pdf',
    description: 'Developed advanced technical expertise through project-based learning in AI and Cloud technologies, supported by IBM and Edunet Foundation.'
  },
];

const extendedCertifications = [...certifications, ...certifications];

export default function Certifications() {
  const [emblaRef] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
      dragFree: true,
    },
    [
      AutoScroll({ playInOut: false, speed: 1, stopOnInteraction: false, stopOnMouseEnter: true, startDelay: 0 })
    ]
  );
  
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="certifications" className="py-20 px-8 overflow-hidden">
      <div className="max-w-portfolio mx-auto">
        <div className="flex justify-between items-end mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold uppercase text-white"
          >
            CERTIFICATES
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#a1a1a1] text-sm tracking-[0.2em] uppercase flex items-center gap-4 hidden md:flex"
          >
            Scroll to explore →
          </motion.div>
        </div>

        <div className="embla cursor-grab active:cursor-grabbing overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex -ml-6">
            {extendedCertifications.map((cert, index) => (
              <div
                key={`${cert.title}-${index}`}
                // Use pl-6 instead of container gap so Embla loop math stays perfectly aligned
                className="embla__slide relative pl-6 flex-[0_0_80%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%]"
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  if (emblaRef.current) emblaRef.current.plugins().autoScroll.stop();
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  if (emblaRef.current) emblaRef.current.plugins().autoScroll.play();
                }}
                onClick={() => cert.link ? window.open(cert.link, '_blank') : null}
              >
               <div className="relative aspect-[3/4] rounded-xl overflow-hidden group w-full h-full cursor-pointer">
                {/* Platform Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1.5 bg-[#111]/90 backdrop-blur-md border border-white/10 rounded-lg text-white/90 text-[10px] font-bold uppercase tracking-widest inline-block shadow-lg">
                    {cert.subtitle}
                  </span>
                </div>

                {/* Image Background */}
                <div className="absolute inset-0 bg-white/5 flex items-center justify-center p-6">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end h-full">
                  <h3 className="text-white text-base font-bold mb-1 tracking-wide line-clamp-2">{cert.title}</h3>
                  
                  {/* Hover Description directly inspired by Trainings.jsx */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-out mt-3 ${
                      hoveredIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-[#e0e0e0] text-xs leading-relaxed border-t border-white/20 pt-3">
                      {cert.description}
                    </p>
                  </div>
                </div>
               </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
