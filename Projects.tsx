import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Box, X } from 'lucide-react';

const RoboticArmIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 20h4" />
    <circle cx="6" cy="18" r="2" />
    <path d="M6 16l4-6" />
    <circle cx="10" cy="10" r="2" />
    <path d="M11 8l4-2" />
    <circle cx="16" cy="6" r="2" />
    <path d="M18 5L20 4" />
  </svg>
);

const StitchingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Needle */}
    <path d="M12 2l2 2-8 16-3 1 1-3 8-16z" />
    {/* Thread loop */}
    <path d="M9 14.5c4-2 8-1 10 2s-1 7-5 5-5-5 0-5" />
  </svg>
);

const RoverIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 14h12l2-4H4z" />
    <circle cx="8" cy="18" r="2" />
    <circle cx="16" cy="18" r="2" />
    <path d="M12 14v-4" />
    <path d="M10 6h4" />
    <path d="M12 6V2" />
  </svg>
);

const ProgrammableSurfaceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12l10-6 10 6-10 6-10-6z" />
    <path d="M2 17l10 6 10-6" />
    <path d="M2 7l10 6 10-6" />
  </svg>
);

const projects = [
  {
    title: "5 Axis Robotic Arm",
    date: "April 2025 – December 2025",
    description: "Designed and developed a precision robotic arm for multipurpose applications such as drilling, cooking, and dishwashing. Implemented wireless control for smooth and cost-effective operation.",
    longDescription: "Designed and developed a precision robotic arm for multipurpose applications such as drilling, cooking, and dishwashing.\n• Implemented wireless control for smooth and cost-effective operation.\n• Integrated custom-trained AI models for advanced functionality.",
    tools: ["SolidWorks", "ROS2", "RViz", "YOLOv8", "TensorFlow Lite", "Hardware"],
    icon: RoboticArmIcon,
    images: []
  },
  {
    title: "Inspection Rover",
    date: "August 2024 – December 2024",
    description: "Developed autonomous navigation with LiDAR-based SLAM. Built AI models for surface irregularity and wear detection.",
    longDescription: "• Developed autonomous navigation with LiDAR-based SLAM.\n• Built AI models for surface irregularity and wear detection.\n• Implemented real-time speed-torque optimization for stable FPS recording.",
    tools: ["SolidWorks", "ROS2", "NavStack2", "Gazebo", "RViz", "Hardware"],
    icon: RoverIcon,
    images: []
  },
  {
    title: "Banana Panel Test Rig",
    date: "August 2024 – December 2024",
    description: "Developed a tailored test rig and simulated platform replicating industrial surface irregularities to validate autonomous inspection models.",
    longDescription: "• Designed training panels for AI model validation.\n• Replicated industrial surface irregularities for inspection testing.\n• Developed a tailored test rig for inspection rover testing.\n• Created a simulated platform replicating industrial conditions to validate performance.",
    tools: ["SolidWorks", "Inkscape", "Lightburn", "Hardware"],
    icon: Wrench,
    images: []
  },
  {
    title: "Factory Container Design",
    date: "August 2024 – September 2024",
    description: "Designed and rendered a factory workspace within a standardized container. Focused on portability, ergonomics, and efficiency.",
    longDescription: "• Designed and rendered a factory workspace within a standardized container.\n• Focused on portability, ergonomics, and efficiency, enabling AR & VR integration.",
    tools: ["SolidWorks"],
    icon: Box,
    images: []
  },
  {
    title: "Programmable Surface",
    date: "February 2024 – March 2025",
    description: "Engineered a reusable programmable mould surface for custom manufacturing. Enabled shape customization through linear actuator arrays.",
    longDescription: "• Engineered a reusable programmable mould surface for custom manufacturing.\n• Enabled shape customization through linear actuator arrays.",
    tools: ["SolidWorks", "Rhinoceros 3D", "Grasshopper", "Firefly"],
    icon: ProgrammableSurfaceIcon,
    images: []
  },
  {
    title: "Thread Tension Monitoring Kit",
    date: "October 2024 – November 2024",
    description: "Developed an embedded system for detecting stitching irregularities in the textile industry. Built a working prototype as a proof of concept.",
    longDescription: "• Developed an embedded system for detecting stitching irregularities in the textile industry.\n• Built a working prototype as a proof of concept for low-cost quality monitoring.",
    tools: ["SolidWorks", "3D Printing", "Sensor Integration", "Hardware"],
    icon: StitchingIcon,
    images: []
  }
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  if (selectedId !== null) {
    window.onkeydown = (e) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
  } else {
    window.onkeydown = null;
  }

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 perspective-1000">
      <motion.div 
        initial={{ opacity: 0, rotateX: -15, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center tracking-tight">
          My Top <span className="text-primary-500">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                layoutId={`project-${index}`}
                key={index}
                onClick={() => setSelectedId(index)}
                className="bg-dark-800/40 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col h-full group cursor-pointer hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 md:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-transparent to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/10 transition-colors pointer-events-none" />
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <motion.div 
                    layoutId={`project-icon-${index}`}
                    className="w-14 h-14 rounded-xl bg-dark-800/80 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:border-primary-500/50 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all"
                  >
                    <Icon className="w-6 h-6 text-primary-500" />
                  </motion.div>
                </div>
                
                <motion.h3 layoutId={`project-title-${index}`} className="text-2xl font-bold font-display text-white mb-2 group-hover:text-primary-400 transition-colors relative z-10">
                  {project.title}
                </motion.h3>
                <motion.p layoutId={`project-date-${index}`} className="text-sm text-primary-500/80 mb-4 font-mono relative z-10">
                  {project.date}
                </motion.p>
                
                <motion.p layoutId={`project-desc-${index}`} className="text-gray-300 text-base leading-relaxed mb-6 flex-grow relative z-10">
                  {project.description}
                </motion.p>
                
                <motion.div layoutId={`project-tools-${index}`} className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {project.tools.slice(0, 3).map((tool, i) => (
                    <span key={i} className="text-xs font-mono text-gray-300 bg-white/10 backdrop-blur-sm px-2 py-1 rounded border border-white/10">
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                      +{project.tools.length - 3} more
                    </span>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedId !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-none">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-dark-900/60 backdrop-blur-xl pointer-events-auto"
            />
            
            {/* Modal Content */}
            <motion.div 
              layoutId={`project-${selectedId}`}
              className="bg-dark-800/80 backdrop-blur-2xl p-6 md:p-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative pointer-events-auto shadow-2xl border border-white/20 z-10"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-primary-500 hover:text-white text-gray-400 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {(() => {
                const project = projects[selectedId];
                const Icon = project.icon;
                return (
                  <div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 mt-4 sm:mt-0">
                      <motion.div layoutId={`project-icon-${selectedId}`} className="w-16 h-16 rounded-2xl bg-dark-800/80 flex items-center justify-center border border-primary-500/50 shadow-[0_0_30px_rgba(14,165,233,0.3)] shrink-0">
                        <Icon className="w-8 h-8 text-primary-500" />
                      </motion.div>
                      <div>
                        <motion.h3 layoutId={`project-title-${selectedId}`} className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight mb-2">
                          {project.title}
                        </motion.h3>
                        <motion.p layoutId={`project-date-${selectedId}`} className="text-primary-500 font-mono text-sm sm:text-base">
                          {project.date}
                        </motion.p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                      <div className="lg:col-span-2">
                        <h4 className="text-2xl font-display font-bold text-white mb-4">Overview</h4>
                        <motion.p layoutId={`project-desc-${selectedId}`} className="text-gray-300 leading-relaxed text-lg mb-6 font-medium">
                          {project.description}
                        </motion.p>
                        <h4 className="text-2xl font-display font-bold text-white mb-4">Deep Dive</h4>
                        <p className="text-gray-400 leading-relaxed text-lg whitespace-pre-wrap">
                          {project.longDescription}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-display font-bold text-white mb-4">Tech Stack</h4>
                        <motion.div layoutId={`project-tools-${selectedId}`} className="flex flex-wrap gap-2">
                          {project.tools.map((tool, i) => (
                            <span key={i} className="text-sm font-mono text-gray-200 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
                              {tool}
                            </span>
                          ))}
                        </motion.div>
                      </div>
                    </div>

                    {/* Image Gallery */}
                    {project.images && project.images.length > 0 && (
                      <div>
                        <h4 className="text-2xl font-display font-bold text-white mb-4">Project Gallery</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {project.images.map((img, i) => (
                            <div key={i} className="w-full h-48 sm:h-64 rounded-2xl overflow-hidden border border-white/10 bg-dark-900/50">
                              <img src={img} alt={`${project.title} gallery image ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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
