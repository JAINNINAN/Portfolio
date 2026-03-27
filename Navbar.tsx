import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-dark-900/60 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ perspective: 1000 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex flex-col relative top-[2px] group">
          <span className="text-2xl font-display font-bold text-white leading-none tracking-widest group-hover:text-primary-400 transition-colors">
            JAIN<span className="text-primary-500">.</span>
          </span>
          <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase mt-1 group-hover:text-primary-500/80 transition-colors">
            Engineer
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-2 text-sm font-medium tracking-wide">
          {links.map((link, i) => (
            <div 
              key={i} 
              className="relative px-5 py-2"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    layoutId="nav-hover-pill"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.05)] border border-white/5"
                  />
                )}
              </AnimatePresence>
              <a href={link.href} className="relative z-10 uppercase transition-colors text-gray-300 hover:text-white">
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
