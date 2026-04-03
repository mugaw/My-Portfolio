import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Check, Sparkles } from 'lucide-react';
import { projectsData } from '../store/projectsSlice';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

const ProjectDetail = ({ projectId, onBack }: ProjectDetailProps) => {
  const project = projectsData.find(p => p.id === projectId);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-32"
    >
      {/* Back Button */}
      <div className="fixed top-24 left-4 sm:left-8 z-50">
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/10 hover:border-[#E7FBFC]/30 transition-all"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Projects</span>
        </motion.button>
      </div>

      {/* Hero Image */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
        
        {/* Project Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
          <div className="max-w-6xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-3 py-1 text-xs font-medium bg-[#E7FBFC]/20 backdrop-blur-sm rounded-full text-[#E7FBFC] mb-4"
            >
              {project.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Montserrat']"
            >
              {project.name}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="max-w-6xl mx-auto px-4 sm:px-8 -mt-20 relative z-10">
        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10"
          >
            <Github className="w-5 h-5" />
            <span>View Code</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#E7FBFC] text-[#050505] rounded-full hover:bg-[#E7FBFC]/90 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          )}
        </motion.div>

        {/* Description */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold font-['Montserrat'] mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#E7FBFC]" />
              About the Project
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              {project.fullDescription}
            </p>

            {/* Features */}
            <h3 className="text-xl font-bold font-['Montserrat'] mb-4">Key Features</h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#E7FBFC]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#E7FBFC]" />
                  </div>
                  <span className="text-white/70">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
              <h3 className="text-lg font-bold font-['Montserrat'] mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm bg-white/5 rounded-full text-white/80 hover:bg-[#E7FBFC]/10 hover:text-[#E7FBFC] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
              <h3 className="text-lg font-bold font-['Montserrat'] mb-4">Project Info</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-white/50">Category</span>
                  <p className="text-white/80">{project.category}</p>
                </div>
                <div>
                  <span className="text-sm text-white/50">Status</span>
                  <p className="text-[#E7FBFC]">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Projects */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold font-['Montserrat'] mb-8">More Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((otherProject, index) => (
                <motion.div
                  key={otherProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => onBack()}
                >
                  <div className="relative overflow-hidden rounded-xl bg-[#111] border border-white/5 hover:border-[#E7FBFC]/20 transition-all">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={otherProject.image}
                        alt={otherProject.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold group-hover:text-[#E7FBFC] transition-colors">
                        {otherProject.name}
                      </h3>
                      <p className="text-sm text-white/50 mt-1">{otherProject.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
