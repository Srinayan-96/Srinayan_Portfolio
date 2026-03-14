import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen bg-[#050505] flex flex-col justify-between px-8 py-12">
      {/* Center Huge Text */}
      <div className="flex-grow flex items-center justify-start mt-12 md:mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-7xl sm:text-8xl md:text-[12vw] leading-[0.9] font-bold text-white tracking-tighter"
        >
          Let's
          <br />
          connect
        </motion.h2>
      </div>

      {/* Bottom Footer Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 text-xs font-semibold tracking-widest text-white/50 uppercase">
        {/* Bottom Left Links */}
        <div className="flex gap-6 items-center">
          <a href="https://github.com/Srinayan-96" target="_blank" rel="noopener noreferrer" 
             className="flex items-center justify-center w-10 h-10 bg-[#111] rounded-xl text-white/50 hover:text-white transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.1)]" 
             aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 12.3c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/srinayan-n" target="_blank" rel="noopener noreferrer" 
             className="flex items-center justify-center w-10 h-10 bg-[#111] rounded-xl text-white/50 hover:text-white transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.1)]" 
             aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="mailto:srinayan122345@gmail.com" 
             className="flex items-center justify-center w-10 h-10 bg-[#111] rounded-xl text-white/50 hover:text-white transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.1)]" 
             aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>

        {/* Bottom Right Details */}
        <div className="flex flex-col items-end text-right max-w-md">
          <div className="flex gap-8 mb-4">
            <a href="https://www.linkedin.com/in/srinayan-n" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-white">LINKEDIN</a>
            <a href="mailto:srinayan122345@gmail.com" className="hover:text-white transition-colors text-white">SRINAYAN122345@GMAIL.COM</a>
          </div>
          <p className="text-[10px] text-white/40 leading-relaxed normal-case tracking-normal">
            Emails sent to this address will be used solely to respond to your inquiry or professional request. The information contained in the message may be stored for communication and administrative purposes.
          </p>
        </div>
      </div>
    </section>
  );
}
