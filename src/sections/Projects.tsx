import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projectsData } from '../store/projectsSlice';
import { getAssetPath } from '../lib/assets';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  onProjectClick: (projectId: string) => void;
}

const Projects = ({ onProjectClick }: ProjectsProps) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Automotive', 'E-Commerce', 'Fintech', 'Entertainment', 'Travel', 'Food'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title stroke draw animation
      gsap.fromTo(
        titleRef.current,
        { backgroundPosition: '200% center' },
        {
          backgroundPosition: '0% center',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'center center',
            scrub: true,
          },
        }
      );

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.project-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { rotateX: 45, opacity: 0, y: 100 },
            {
              rotateX: 0,
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
              delay: index * 0.1,
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h2
          ref={titleRef}
          className="text-[15vw] font-black font-['Montserrat'] text-stroke opacity-20 whitespace-nowrap"
          style={{
            WebkitTextStroke: '1px rgba(255,255,255,0.1)',
            WebkitTextFillColor: 'transparent',
          }}
        >
          SELECTED WORKS
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#E7FBFC] text-sm font-medium mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Montserrat'] mb-6"
          >
            Selected <span className="text-gradient">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto"
          >
            A collection of projects showcasing my expertise in frontend development,
            UI design, and creative problem-solving.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#E7FBFC] text-[#050505]'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ perspective: '1000px' }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="project-card group relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 hover:border-[#E7FBFC]/20 transition-all duration-500 cursor-pointer"
                  onClick={() => onProjectClick(project.id)}
                >
                  {/* Image */}
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <img
                      src={getAssetPath(project.image)}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#E7FBFC]/0 group-hover:bg-[#E7FBFC]/5 transition-colors duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm rounded-full text-white/80">
                        {project.category}
                      </span>
                    </div>

                    {/* View Project Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-[#E7FBFC] flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-[#050505]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-['Montserrat'] mb-2 group-hover:text-[#E7FBFC] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-white/50 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-white/5 rounded text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-white/5 rounded text-white/60">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm text-white/50 hover:text-[#E7FBFC] transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-sm text-white/50 hover:text-[#E7FBFC] transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/mugaw?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:border-[#E7FBFC]/50 hover:bg-[#E7FBFC]/5 transition-all"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
