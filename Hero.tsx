import { motion } from 'framer-motion';
import ThreeCanvas from './ThreeCanvas';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <ThreeCanvas />
      
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary-500 font-medium tracking-widest mb-4 uppercase"
        >
          Mechatronics & Automation Engineer
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-dark-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 mb-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] inline-block mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight text-white drop-shadow-lg"
          >
            Hi, I'm <span className="text-gradient">Jain Ninan</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-md font-medium"
          >
            Integrating mechanical, electrical, and software systems to deliver innovative, efficient, and sustainable robotics solutions.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="#projects" className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-3 rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]">
            View My Work
          </a>
          <a href="#contact" className="glass hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-all">
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce"
      >
        <a href="#about">
          <ChevronDown className="w-8 h-8 text-gray-500 hover:text-white transition-colors" />
        </a>
      </motion.div>
    </section>
  );
}
