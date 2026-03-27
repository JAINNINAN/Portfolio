import { motion } from 'framer-motion';
import { Mail, Briefcase, Globe, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto relative z-10 text-center perspective-1000">
      <motion.div 
        initial={{ opacity: 0, rotateX: 15, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-10">
          Get In <span className="text-primary-500">Touch</span>
        </h2>
        
        <div className="bg-dark-800/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.1)] max-w-3xl mx-auto">
          <p className="text-gray-300 text-xl leading-relaxed font-medium mb-10">
            I'm currently looking for specialized roles in Robotics, Automation, and Mechatronics in Japan. Whether you have an opportunity or just want to connect, feel free to reach out.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <a 
              href="mailto:jain.ninan01@gmail.com"
              className="flex items-center gap-3 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full font-medium transition-transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
            <a 
              href="https://www.linkedin.com/in/jain-ninan-0a9213195" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 bg-dark-700/50 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 hover:bg-white/5 text-white px-8 py-4 rounded-full font-medium transition-all hover:-translate-y-1 w-full sm:w-auto justify-center shadow-sm"
            >
              <Briefcase className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
          
          <div className="flex justify-center gap-8 pt-8 border-t border-white/10">
            <a href="https://github.com/jain-ninan" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all">
              <span className="sr-only">GitHub</span>
              <Globe className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/jain-ninan-0a9213195" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary-500 hover:-translate-y-1 transition-all">
              <span className="sr-only">LinkedIn</span>
              <Briefcase className="w-6 h-6" />
            </a>
            <a href="mailto:jain.ninan01@gmail.com" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all">
              <span className="sr-only">Email</span>
              <Mail className="w-6 h-6" />
            </a>
            <a href="/resume.pdf" className="text-gray-400 hover:text-primary-500 hover:-translate-y-1 transition-all">
              <span className="sr-only">Resume</span>
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-12 font-mono">
          Designed and built by Jain Ninan.
        </p>
      </motion.div>
    </section>
  );
}
