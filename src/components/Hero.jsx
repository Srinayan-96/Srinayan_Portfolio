import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CursorImageTrail from './CursorImageTrail';

const roles = [
  'SOFTWARE ENGINEER',
  'FULL STACK DEVELOPER',
  'AI APPLICATION BUILDER',
  'SYSTEM DESIGN ENTHUSIAST',
];

export default function Hero() {
  const heroRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, 150]);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setDisplayText((prev) =>
          isDeleting ? currentRole.slice(0, prev.length - 1) : currentRole.slice(0, prev.length + 1)
        );
      },
      typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-8 overflow-hidden"
    >
      <motion.div
        style={{ y: parallaxY, willChange: 'transform' }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,120,120,0.15),transparent)]"
        aria-hidden
      />
      <CursorImageTrail heroRef={heroRef} />
      <div className="relative z-10 max-w-portfolio mx-auto w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tight leading-none uppercase text-white mb-6"
        >
          NYALAKONDA SRINAYAN
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#a1a1a1] text-lg tracking-[0.2em] mb-16 min-h-[2rem]"
        >
          <span>{displayText}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="inline-block text-[#a1a1a1] text-sm tracking-[0.3em] hover:text-white transition-colors"
        >
          ↓ SCROLL
        </motion.a>
      </div>
    </section>
  );
}
