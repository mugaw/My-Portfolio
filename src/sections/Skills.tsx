import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Database, 
  GitBranch, 
  Terminal,
  Layers,
  Cpu,
  Globe
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 98 },
      ],
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'MongoDB', level: 70 },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: Terminal,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 95 },
        { name: 'Vercel', level: 85 },
        { name: 'Vite', level: 90 },
      ],
    },
    {
      title: 'Design',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 80 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Responsive Design', level: 95 },
      ],
    },
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Tailwind', icon: '🌊' },
    { name: 'Python', icon: '🐍' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Git', icon: '📦' },
    { name: 'GSAP', icon: '🎬' },
    { name: 'Redux', icon: '🔄' },
    { name: 'Framer', icon: '🎭' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Skill bars animation
      const skillBars = sectionRef.current?.querySelectorAll('.skill-bar');
      skillBars?.forEach((bar) => {
        const level = bar.getAttribute('data-level');
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${level}%`,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E7FBFC]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E7FBFC]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#E7FBFC] text-sm font-medium mb-4"
          >
            Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Montserrat'] mb-6"
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto"
          >
            My technical toolkit for building modern, scalable, and performant web applications.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-[#E7FBFC]/20 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#E7FBFC]/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-[#E7FBFC]" />
                </div>
                <h3 className="text-xl font-bold font-['Montserrat']">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-white/70">{skill.name}</span>
                      <span className="text-sm text-white/50">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="skill-bar h-full bg-gradient-to-r from-[#E7FBFC] to-[#999] rounded-full transition-all duration-300"
                        data-level={skill.level}
                        style={{
                          boxShadow: hoveredSkill === skill.name ? '0 0 20px rgba(231, 251, 252, 0.5)' : 'none',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold font-['Montserrat'] mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[#E7FBFC]/30 hover:bg-[#E7FBFC]/5 transition-all cursor-default"
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Stack Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Layers, label: 'Frontend React Mastery', desc: 'Modern UI/UX' },
            { icon: Cpu, label: 'Python Development', desc: 'Backend & Logic' },
            { icon: Globe, label: 'Full Stack', desc: 'End-to-End' },
            { icon: GitBranch, label: 'Version Control', desc: 'Git & GitHub' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5"
            >
              <item.icon className="w-8 h-8 text-[#E7FBFC] mx-auto mb-4" />
              <h4 className="font-semibold mb-1">{item.label}</h4>
              <p className="text-sm text-white/50">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
