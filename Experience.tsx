import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const experiences = [
  {
    role: "R & D Intern",
    company: "Yokohama National University",
    period: "Jan 2026 - May 2026",
    location: "On-Site, Japan",
    brief: "Developing AR-based human-robot interaction interfaces to streamline complex industrial trajectory programming.",
    points: [
      "Developed an AR-based interface to streamline robot programming, enabling real-time spatial visualization of trajectories and reducing path-planning errors.",
      "Implemented human-robot interaction (HRI) protocols using AR overlays to simplify complex task execution for industrial robotic arms."
    ]
  },
  {
    role: "Automation Intern",
    company: "Mecha Systems Pvt. Ltd.",
    period: "Jul 2025 - Oct 2025",
    location: "Remote",
    brief: "Designed, procured, machined, and assembled a fully automated PCB Testing Jig model.",
    points: [
      "Was in charge of designing and developing working model of an automated PCB Testing jig according to the organization’s requirements.",
      "Carried out the design, procurement, machining and assembly work for the jig."
    ]
  },
  {
    role: "Intern – Home Automation",
    company: "Jan Power Solutions",
    period: "Jun 2025",
    location: "Bangalore, India",
    brief: "Designed and implemented comprehensive energy-efficient home automation control systems.",
    points: [
      "Designed and implemented a home automation system that reduced traditional wiring requirements while enhancing smart functionality in a newly built house.",
      "Integrated energy-efficient and user-friendly control systems to improve convenience and sustainability."
    ]
  },
  {
    role: "Research & Development Intern",
    company: "FLSmidth Private Limited",
    period: "Mar 2024 – Mar 2025",
    location: "Chennai, India",
    brief: "Built an adaptable modular robotic rover and optimized process systems using advanced CAD/simulations.",
    points: [
      "Designed and developed a specialized workspace using advanced CAD, ensuring ergonomics and operational efficiency.",
      "Built a modular robotic rover for project-specific applications with adaptability in design.",
      "Conducted flow simulations and process optimization to enhance system performance.",
      "Collaborated with cross-functional teams to validate designs via virtual and physical prototyping."
    ]
  },
  {
    role: "Research & Development Engineer",
    company: "CoE for Additive Manufacturing, VIT",
    period: "Sep 2023 – Mar 2025",
    location: "Chennai, India",
    brief: "Developed kinetic facades, modular mould systems, and automated CV tracking solutions.",
    points: [
      "Designed a kinetic facade system with adaptive motion for energy efficiency and aesthetics.",
      "Created a customizable mould system for dynamic and flexible production requirements.",
      "Developed computer vision solutions for automated object recognition and tracking.",
      "Operated and optimized laser cutting processes for precision fabrication.",
      "Contributed to conceptualization and development of CNC machines for advanced manufacturing."
    ]
  },
  {
    role: "Co-Founder, Team Lead",
    company: "Team Ignition, VIT Chennai",
    period: "Mar 2023 – Sep 2023",
    location: "Chennai, India",
    brief: "Founded a rocketry team, leading CAD/manufacturing and developing a custom flight computer.",
    points: [
      "Founded and led a rocketry team for national and international competitions.",
      "Oversaw the design, manufacturing, and systems integration of rocketry projects.",
      "Designed and developed a custom flight computer for monitoring and control.",
      "Coordinated propulsion, aerodynamic, and electronic subsystems for reliable integration."
    ]
  }
];

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  if (selectedExp !== null) {
    window.onkeydown = (e) => {
      if (e.key === 'Escape') setSelectedExp(null);
    };
  } else {
    window.onkeydown = null;
  }

  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 perspective-1000">
      <motion.div 
        initial={{ opacity: 0, rotateX: 15, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center tracking-tight">
          Professional <span className="text-primary-500">Experience</span>
        </h2>
        
        {/* Timeline Roadmap */}
        <div className="relative max-w-5xl mx-auto mt-16">
          {/* Central Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent transform md:-translate-x-1/2" />
          
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                layoutId={`exp-${index}`}
                onClick={() => setSelectedExp(index)}
                className={`relative flex flex-col md:flex-row items-center mb-10 group cursor-pointer ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[24px] md:left-1/2 top-[50%] md:top-[50%] w-4 h-4 rounded-full bg-dark-900 border-2 border-primary-500 shadow-[0_0_10px_rgba(14,165,233,0.3)] transform -translate-x-[7px] md:-translate-x-[8px] -translate-y-[8px] group-hover:bg-primary-500 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.6)] transition-all duration-300 z-10" />

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                  <div className="bg-dark-800/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-primary-500/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                    <motion.h3 layoutId={`exp-title-${index}`} className="text-xl font-bold font-display text-white mb-1 group-hover:text-primary-400 transition-colors">
                      {exp.role}
                    </motion.h3>
                    <motion.div layoutId={`exp-company-${index}`} className="text-base text-primary-500/90 font-medium mb-2">
                      {exp.company}
                    </motion.div>
                    
                    <motion.p layoutId={`exp-brief-${index}`} className="text-gray-400 text-sm leading-relaxed mb-3">
                      {exp.brief}
                    </motion.p>

                    <div className={`flex flex-wrap gap-3 mt-4 text-xs font-mono text-gray-500 ${isEven ? 'md:justify-end justify-start' : 'justify-start'}`}>
                      <motion.span layoutId={`exp-period-${index}`}>{exp.period}</motion.span>
                      <span>•</span>
                      <motion.span layoutId={`exp-location-${index}`}>{exp.location}</motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedExp !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-dark-900/60 backdrop-blur-xl pointer-events-auto"
            />
            
            <motion.div 
              layoutId={`exp-${selectedExp}`}
              className="bg-dark-800/80 backdrop-blur-2xl p-6 md:p-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative pointer-events-auto shadow-2xl border border-white/20 z-10"
            >
              <button 
                onClick={() => setSelectedExp(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-primary-500 hover:text-white text-gray-400 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {(() => {
                const exp = experiences[selectedExp];
                return (
                  <div>
                    <div className="mb-10 block pr-12">
                      <motion.h3 layoutId={`exp-title-${selectedExp}`} className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
                        {exp.role}
                      </motion.h3>
                      <motion.div layoutId={`exp-company-${selectedExp}`} className="text-xl md:text-2xl text-primary-400 font-medium mb-2">
                        {exp.company}
                      </motion.div>
                      <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-400 mt-4">
                        <motion.span layoutId={`exp-period-${selectedExp}`} className="bg-white/5 px-3 py-1 rounded-md border border-white/5">{exp.period}</motion.span>
                        <motion.span layoutId={`exp-location-${selectedExp}`} className="bg-white/5 px-3 py-1 rounded-md border border-white/5">{exp.location}</motion.span>
                      </div>
                    </div>
                    
                    <motion.p layoutId={`exp-brief-${selectedExp}`} className="text-gray-300 text-lg leading-relaxed mb-8 italic border-l-2 border-primary-500 pl-4 py-1">
                      {exp.brief}
                    </motion.p>

                    <div className="bg-dark-900/50 rounded-2xl p-6 md:p-8 border border-white/5 mb-8">
                      <h4 className="text-xl font-display font-bold text-white mb-6">Key Responsibilities & Achievements</h4>
                      <ul className="space-y-4">
                        {exp.points.map((point, i) => (
                          <li key={i} className="text-gray-300 leading-relaxed flex items-start gap-4">
                            <span className="text-primary-500 mt-1.5 text-sm">◆</span>
                            <span className="flex-1 text-base">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Experience Gallery */}
                    {(exp as any).images && (exp as any).images.length > 0 && (
                      <div>
                        <h4 className="text-xl font-display font-bold text-white mb-4">Experience Gallery</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {(exp as any).images.map((img: string, i: number) => (
                            <div key={i} className="w-full h-48 sm:h-64 rounded-2xl overflow-hidden border border-white/10 bg-dark-900/50">
                              <img src={img} alt={`Experience gallery image ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
