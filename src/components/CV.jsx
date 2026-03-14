import { useEffect } from 'react';
import { motion } from 'framer-motion';

const DownloadIcon = () => (
  <svg 
    stroke="currentColor" 
    fill="none" 
    strokeWidth="2" 
    viewBox="0 0 24 24" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    height="1em" 
    width="1em" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const CloseIcon = () => (
  <svg 
    stroke="currentColor" 
    fill="none" 
    strokeWidth="2" 
    viewBox="0 0 24 24" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    height="1em" 
    width="1em" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const cvData = {
  name: "Nyalakonda Srinayan",
  contact: {
    linkedin: "https://www.linkedin.com/in/srinayan-n",
    email: "srinayan122345@gmail.com",
    github: "https://github.com/Srinayan-96",
    mobile: "+91-9505965175"
  },
  skills: {
    languages: ["C++", "JavaScript", "C", "Java"],
    frameworks: ["React", "Spring", "Express.js", "Spring MVC", "Tailwind CSS"],
    tools: ["GitHub", "MongoDB", "Figma", "MySQL"],
    softSkills: ["Risk Awareness and Strategic Planning", "Learning Agility", "Adaptive Leadership"]
  },
  projects: [
    {
      title: "MedicoRe – Intelligent Hospital Management Backend",
      date: "Feb 2026 - Mar 2026",
      description: [
        "Architected a scalable Spring Boot-based hospital management system.",
        "Built robust backend logic for appointment scheduling, medical records, and user management.",
        "Implemented JWT-based authentication for secure access."
      ],
      tech: "Java, Spring, Spring Boot, MySQL"
    },
    {
      title: "PlanIt - Smart Task & Daily Planning Application",
      date: "Oct 2025 - Nov 2025",
      description: [
        "Developed a responsive daily planner using the MERN stack.",
        "Implemented real-time task management features, improving task tracking efficiency by 40%.",
        "Optimized the interface and workflows for smoother daily planning."
      ],
      tech: "React.js, Node.js (Express), MongoDB"
    },
    {
      title: "LawEZY - AI Legal Assistance Platform",
      date: "Aug 2025 - Sept 2025",
      description: [
        "Architected a centralized legal-tech system connecting users with AI guidance and lawyer support.",
        "Integrated AI-based legal query assistance and secure data workflows.",
        "Achieved a 60% reduction in search time for legal resources and case-related information."
      ],
      tech: "React.js, Node.js (Express), MongoDB"
    },
    {
      title: "CPUFlow - CPU Scheduling Visualization Simulator",
      date: "Apr 2025",
      description: [
        "Simulated multiple CPU scheduling algorithms to help users understand process scheduling concepts.",
        "Enabled real-time Gantt chart visualizations using JavaScript logic."
      ],
      tech: "HTML, CSS, JavaScript"
    }
  ],
  training: [
    {
      title: "Emerging Technologies (AI & Cloud)",
      date: "Jul 2025 - Aug 2025",
      description: [
        "Learned the fundamentals of cloud computing and AI application workflows using IBM Cloud services.",
        "Gained hands-on exposure to IBM Watsonx.ai and the Granite model for generating accurate, real-time AI-driven responses."
      ]
    },
    {
      title: "Think Design Prototype – Design Thinking and Figma",
      date: "Jun 2025 - Jul 2025",
      description: [
        "Explored Design Thinking for problem definition and user research to identify user pain points.",
        "Created a high-fidelity prototype in Figma showcasing functional UI navigation."
      ]
    }
  ],
  certificates: [
    { title: "DevOps and AI on AWS", issuer: "Coursera", date: "Nov 2025" },
    { title: "Getting Started with Git and GitHub", issuer: "Coursera", date: "Aug 2025" },
    { title: "Build Generative AI Apps and Solutions with No-Code Tools", issuer: "Infosys", date: "Aug 2025" },
    { title: "Software Engineering Essentials", issuer: "Coursera", date: "Jun 2025" }
  ],
  education: [
    {
      school: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      score: "CGPA: 7.23",
      date: "Aug 2023 - Present"
    },
    {
      school: "Resonance",
      location: "Hyderabad, Telangana",
      degree: "Intermediate",
      score: "Percentage: 91%",
      date: "Jun 2022 - Apr 2023"
    },
    {
      school: "Vivekananda Residential School",
      location: "Karimnagar, Telangana",
      degree: "Matriculation",
      score: "Percentage: 89%",
      date: "Jun 2020 - Mar 2021"
    }
  ]
};

export default function CV({ isOpen, onClose }) {
  // Prevent background scroll when CV is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black overflow-y-auto"
      data-lenis-prevent
    >
      {/* Premium Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative min-h-screen px-4 md:px-12 py-20 max-w-6xl mx-auto">
        {/* Navigation / Header */}
        <div className="flex justify-between items-center mb-24">
          <motion.button
            onClick={onClose}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
              <CloseIcon />
            </div>
            <span className="text-xs font-mono tracking-[0.2em] uppercase">Close</span>
          </motion.button>

          <motion.a
            href="/Srinayan_cv_latest.pdf"
            download="Srinayan_cv_latest.pdf"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full transition-all duration-300 group"
          >
            <span className="text-xs font-bold tracking-widest group-hover:text-cyan-400">DOWNLOAD RESUME</span>
            <div className="text-lg group-hover:text-cyan-400 group-hover:translate-y-0.5 transition-transform">
              <DownloadIcon />
            </div>
          </motion.a>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Header Section */}
          <div className="md:col-span-12 mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-4"
            >
              CURRICULUM<br />VITAE
            </motion.h1>
            <div className="h-1.5 w-32 bg-cyan-500" />
          </div>

          {/* Left Column (Sidebar Info) */}
          <div className="md:col-span-4 space-y-16">
            {/* Contact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-cyan-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-8">Contact</h3>
              <div className="space-y-4 text-sm text-white/60">
                <div className="group">
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Phone</p>
                  <p className="group-hover:text-white transition-colors font-medium">{cvData.contact.mobile}</p>
                </div>
                <div className="group">
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Email</p>
                  <p className="group-hover:text-white transition-colors font-medium">{cvData.contact.email}</p>
                </div>
                <div className="flex gap-6 pt-2">
                  <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-cyan-400 transition-colors">LinkedIn</a>
                  <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-cyan-400 transition-colors">GitHub</a>
                </div>
              </div>
            </motion.section>

            {/* Skills */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-cyan-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-8">Skills</h3>
              <div className="space-y-10">
                <div>
                  <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Core Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {[...cvData.skills.languages, ...cvData.skills.frameworks].map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-white/5 rounded border border-white/5 text-[11px] text-white/70 hover:border-cyan-500/30 transition-colors">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {cvData.skills.tools.map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-white/5 rounded border border-white/5 text-[11px] text-white/70 hover:border-cyan-500/30 transition-colors">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Right Column (Core Content) */}
          <div className="md:col-span-8 space-y-24">
            {/* Projects */}
            <section>
              <h3 className="text-cyan-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-12">Selected Projects</h3>
              <div className="space-y-16">
                {cvData.projects.map((project, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-4 group-hover:border-cyan-500/50 transition-colors">
                      <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                      <span className="text-xs text-white/30 font-mono tracking-widest">{project.date}</span>
                    </div>
                    <ul className="space-y-3 mb-6 pl-2">
                      {project.description.map((desc, i) => (
                        <li key={i} className="text-sm text-white/50 leading-relaxed font-light hover:text-white/80 transition-colors">• {desc}</li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-cyan-500/60 uppercase">Tech</span>
                      <p className="text-[11px] font-mono text-white/40">{project.tech}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-cyan-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-12">Education</h3>
              <div className="space-y-12">
                {cvData.education.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 border-t border-white/10"
                  >
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{edu.school}</h4>
                      <p className="text-sm text-cyan-500/70 font-medium">{edu.degree}</p>
                      <p className="text-xs text-white/40 mt-1 uppercase tracking-widest">{edu.location}</p>
                    </div>
                    <div className="md:text-right">
                      <p className="text-sm font-bold text-white mb-1">{edu.score}</p>
                      <p className="text-xs text-white/30 font-mono">{edu.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
        
        {/* Footer Polish */}
        <div className="mt-32 pt-12 border-t border-white/5 text-center">
          <p className="text-[10px] font-mono text-white/20 tracking-[0.5em] uppercase">Built with Intention & Attention</p>
        </div>
      </div>
    </motion.div>
  );
}
