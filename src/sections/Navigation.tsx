import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E7FBFC] to-[#999] flex items-center justify-center">
                <span className="text-[#050505] font-bold text-lg font-['Montserrat']">M</span>
              </div>
              <span className="text-xl font-bold font-['Montserrat'] hidden sm:block">
                Mu<span className="text-[#E7FBFC]">Gaw</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E7FBFC] transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* GitHub Link */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href="https://github.com/mugaw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-[#E7FBFC]/50 hover:bg-[#E7FBFC]/5 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl pt-20 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-2xl font-medium text-white/80 hover:text-[#E7FBFC] transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="https://github.com/mugaw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-[#E7FBFC] text-[#050505]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">View GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
