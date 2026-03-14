import { motion } from 'framer-motion';

export default function LoadingTransition({ projectIndex, projectTitle }) {
  // Format index to [00X]
  const formattedIndex = `[${String(projectIndex + 1).padStart(3, '0')}]`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[200] bg-[#050505] flex items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-white flex items-center gap-4"
      >
        <span className="text-lg font-medium tracking-tight opacity-60">
          {formattedIndex}
        </span>
        <span className="text-xl md:text-2xl font-light tracking-widest uppercase">
          {projectTitle}
        </span>
      </motion.div>
    </motion.div>
  );
}
