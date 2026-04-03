import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Code2, Palette, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { getAssetPath } from '../lib/assets';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - character stagger
      const titleChars = titleRef.current?.querySelectorAll('.char');
      if (titleChars) {
        gsap.fromTo(
          titleChars,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.03,
            ease: 'power4.out',
            delay: 0.2,
          }
        );
      }

      // Subtitle blur reveal
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, filter: 'blur(10px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          delay: 0.6,
          ease: 'power2.out',
        }
      );

      // CTA button pop
      gsap.fromTo(
        ctaRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 0.8,
          ease: 'back.out(1.7)',
        }
      );

      // Image mask expansion
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'circle(0% at 50% 50%)' },
        {
          clipPath: 'circle(100% at 50% 50%)',
          duration: 1.4,
          ease: 'power4.out',
        }
      );

      // Parallax on scroll
      gsap.to(imageRef.current, {
        y: 150,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Title letter spacing on scroll
      gsap.to(titleRef.current, {
        letterSpacing: '30px',
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '50% top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const titleText = 'MUHAMMAD GAWAD';
  const typewriterWords = [
    'React & Python Developer',
    'UI/UX Designer',
    'Creative Thinker',
    'Full-Stack Developer',
    'Pizza Lover 🍕',
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = typewriterWords[currentWordIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(75);
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev: number) => (prev + 1) % typewriterWords.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0"
        style={{ clipPath: 'circle(0% at 50% 50%)' }}
      >
        <img
          src={getAssetPath('/images/hero-bg.jpg')}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#E7FBFC]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-glow"
        >
          <Sparkles className="w-4 h-4 text-[#E7FBFC]" />
          <span className="text-sm text-white/80 font-medium tracking-wider uppercase">Open for collaborations</span>
        </motion.div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-['Montserrat'] mb-6 tracking-tighter"
        >
          {titleText.split('').map((char, index) => (
            <span
              key={index}
              className="char inline-block"
              style={{ opacity: 0 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Dynamic Typewriter Subtitle */}
        <div className="h-12 sm:h-16 mb-8">
          <p className="text-2xl sm:text-3xl md:text-4xl text-white font-light tracking-wide flex items-center justify-center gap-2">
            <span className="text-white/60">I'm a </span>
            <span className="text-[#E7FBFC] font-semibold min-w-[2ch]">
              {currentText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[2px] h-[0.8em] bg-[#E7FBFC] ml-1"
              />
            </span>
          </p>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-sm sm:text-base text-white/40 max-w-2xl mx-auto mb-10"
        >
          Cooking code & recipes · Learning automation · Part-time gamer & footballer 🍕⚽
        </motion.p>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6 mb-10"
        >
          <div className="flex items-center gap-2 text-white/50 hover:text-[#E7FBFC] transition-colors">
            <Code2 className="w-5 h-5" />
            <span className="text-sm">React</span>
          </div>
          <div className="w-1 h-1 bg-white/20 rounded-full" />
          <div className="flex items-center gap-2 text-white/50 hover:text-[#E7FBFC] transition-colors">
            <Palette className="w-5 h-5" />
            <span className="text-sm">Design</span>
          </div>
          <div className="w-1 h-1 bg-white/20 rounded-full" />
          <div className="flex items-center gap-2 text-white/50 hover:text-[#E7FBFC] transition-colors">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm">Animation</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-[#E7FBFC] text-[#050505] rounded-full font-semibold overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Works
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </motion.button>

          <motion.a
            href="https://github.com/mugaw"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:border-[#E7FBFC]/50 hover:bg-[#E7FBFC]/5 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View GitHub
          </motion.a>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-30" />
    </section>
  );
};

export default Hero;
