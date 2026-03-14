import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT ME', href: '#about' },
  { label: 'CERTIFICATES', href: '#certifications' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

function formatTime(date) {
  return date.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

export default function Navbar({ onOpenCV }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/5"
    >
      <div className="max-w-portfolio mx-auto px-8 py-4 flex items-center justify-between">
        <a href="#home" className="text-white text-sm font-medium tracking-wider">
          SRINAYAN©
        </a>

        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#a1a1a1] hover:text-white text-xs font-medium tracking-[0.2em] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenCV}
            className="text-[#a1a1a1] hover:text-white text-xs font-medium tracking-[0.2em] transition-all duration-300 border-l border-white/10 pl-12 hover:pl-14 group flex items-center gap-2"
          >
            <span>CV</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        <div className="text-white text-sm font-mono tabular-nums hidden sm:block">
          {formatTime(time)}
        </div>

        {/* Mobile Menu Trigger Placeholder (if needed, otherwise just Logo) */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={onOpenCV} className="text-[#a1a1a1] text-xs font-bold tracking-widest border border-white/10 px-4 py-2 rounded-lg">CV</button>
        </div>
      </div>
    </motion.nav>
  );
}
