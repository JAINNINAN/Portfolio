import { motion } from 'framer-motion';
import { Cpu, BookOpen } from 'lucide-react';

const skills = {
  "Languages": "C/C++, Python, Java, MySQL, Arduino, MATLAB, HTML/CSS, JavaScript",
  "CAD Softwares": "SolidWorks, Fusion 360, Rhinoceros 3D, Blender, NTopology, AutoCAD",
  "Simulation Tools": "MoldFlow, CADMould, Ansys, Gazebo, RViz",
  "Automation Frameworks": "ROS, Navigation Stacks (NavStack), MoveIt, SLAM (GMapping, Cartographer)",
  "Control & Hardware Core": "PID Control, LiDAR, IMU, Sensor Fusion, Camera-based navigation, PCB Testing",
  "Manufacturing": "3D Printing, Additive Manufacturing, CNC Machining, Laser Cutting"
};

const education = [
  {
    institution: "Yokohama National University",
    degree: "Special Audit Student",
    year: "2026",
    location: "Yokohama, Japan",
    details: ""
  },
  {
    institution: "Vellore Institute of Technology, Chennai",
    degree: "B.Tech. Mechatronics and Automation",
    year: "2022 - 2026",
    location: "Tamil Nadu, India",
    details: "CGPA: 8.49"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 perspective-1000">
      <motion.div 
        initial={{ opacity: 0, rotateX: -10, y: 100 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center tracking-tight">
          About <span className="text-primary-500">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Summary Section */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-8">
            <div className="bg-dark-800/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <h3 className="text-3xl font-display font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-primary-500" />
                Summary
              </h3>
              <p className="text-gray-300 text-xl leading-relaxed font-medium">
                Mechatronics and Automation Engineering student with strong expertise in robotics, CAD design, product
                development, manufacturing technologies and industrial automation. Skilled in integrating mechanical, electrical, and
                software systems to deliver innovative, efficient, and sustainable solutions. Experienced in manufacturing, research, and
                multi-domain projects with a focus on optimization and reliability.
              </p>
            </div>

            <div className="bg-dark-800/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <h3 className="text-3xl font-display font-bold text-white mb-6 border-b border-white/10 pb-4">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <h4 className="text-2xl font-bold text-white">{edu.institution}</h4>
                    <div className="flex flex-col sm:flex-row justify-between items-start text-primary-400 text-xl font-medium">
                      <span>{edu.degree}</span>
                      <span className="font-mono text-base text-gray-400 mt-1 sm:mt-0">{edu.year}</span>
                    </div>
                    {edu.details && <span className="text-gray-300 text-lg mt-1">{edu.details}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="bg-dark-800/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <h3 className="text-3xl font-display font-bold text-white mb-10 border-b border-white/10 pb-4 flex items-center gap-3">
                <Cpu className="w-8 h-8 text-primary-500" />
                Technical Skills
              </h3>
              
              <div className="flex flex-col gap-8">
                {Object.entries(skills).map(([category, items], index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                    <div className="w-full md:w-1/3 shrink-0">
                      <h4 className="text-xl font-bold text-primary-400 leading-tight">{category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3 w-full">
                      {items.split(', ').map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="text-lg text-white bg-dark-700/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/5 hover:border-primary-500/50 transition-colors shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
