import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { MapPin, Users, Briefcase, Code2, Heart, Gamepad2, Utensils } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image morphing mask animation
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'circle(30% at 50% 50%)' },
        {
          clipPath: 'circle(70% at 50% 50%)',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'center center',
            scrub: true,
          },
        }
      );

      // Stats counter animation
      const statNumbers = statsRef.current?.querySelectorAll('.stat-number');
      statNumbers?.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0');
        gsap.fromTo(
          stat,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Briefcase, value: 33, label: 'Projects', suffix: '+' },
    { icon: Code2, value: 2, label: 'Years Experience', suffix: '+' },
    { icon: Users, value: 1, label: 'GitHub Followers', suffix: '' },
  ];

  const interests = [
    { icon: Code2, label: 'Coding', color: '#E7FBFC' },
    { icon: Utensils, label: 'Cooking', color: '#FFA500' },
    { icon: Gamepad2, label: 'Gaming', color: '#FF6B6B' },
    { icon: Heart, label: 'Football', color: '#4ECDC4' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image */}
              <div
                ref={imageRef}
                className="relative rounded-3xl overflow-hidden"
                style={{ clipPath: 'circle(30% at 50% 50%)' }}
              >
                <img
                  src="https://avatars.githubusercontent.com/u/173294530?v=4"
                  alt="Muhammad Gawad"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 to-transparent" />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-[#E7FBFC]/10 backdrop-blur-sm border border-[#E7FBFC]/20 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code2 className="w-10 h-10 text-[#E7FBFC]" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-6 py-3 rounded-full glass"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-sm font-medium">Available for work</span>
                <span className="ml-2 w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse" />
              </motion.div>
            </motion.div>
          </div>

          {/* Content Column */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[#E7FBFC] text-sm font-medium mb-4"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold font-['Montserrat'] mb-6"
            >
              Muhammad <span className="text-gradient">Gawad</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 leading-relaxed mb-6"
            >
              I'm a passionate React & Python developer based in Egypt. I love cooking code & recipes,
              learning automation, and exploring new technologies. When I'm not coding, you'll find me
              gaming or playing football.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/60 leading-relaxed mb-8"
            >
              As a specialized Frontend React Developer, I focus on building high-performance,
              accessible, and stunning web interfaces. I thrive on modern styling patterns, state
              management, and pixel-perfect execution. My goal is to make the web feel alive through code.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 text-white/50 mb-8"
            >
              <MapPin className="w-5 h-5 text-[#E7FBFC]" />
              <span>Egypt</span>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mb-10"
            >
              <h3 className="text-sm font-medium text-white/50 mb-4">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <div
                    key={interest.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5"
                  >
                    <interest.icon className="w-4 h-4" style={{ color: interest.color }} />
                    <span className="text-sm">{interest.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <stat.icon className="w-5 h-5 text-[#E7FBFC]" />
                  </div>
                  <div
                    className="stat-number text-3xl font-bold font-['Montserrat']"
                    data-target={stat.value}
                  >
                    0
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
