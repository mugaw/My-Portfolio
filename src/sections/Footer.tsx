import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Instagram, Facebook, Music2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mugaw', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-gawad-449552b5', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/Muhammad1Gawad', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/Muhammad1Gawad', label: 'Facebook' },
    { icon: Music2, href: 'https://www.tiktok.com/@Muhammad1Gawad', label: 'TikTok' },
  ];

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
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E7FBFC]/20 group-hover:border-[#E7FBFC]/50 transition-all duration-300">
                  <img 
                    src="https://github.com/mugaw.png" 
                    alt="Muhammad Gawad" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-2xl font-bold font-['Montserrat']">
                  Mu<span className="text-[#E7FBFC]">Gaw</span>
                </span>
              </div>
              <p className="text-white/50 max-w-md mb-8">
                Creative developer crafting beautiful digital experiences. 
                Specializing in React, TypeScript, and modern web technologies.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#E7FBFC]/30 hover:bg-[#E7FBFC]/5 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-white/50 hover:text-[#E7FBFC] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:muhammedgawad@gmail.com"
                    className="text-white/50 hover:text-[#E7FBFC] transition-colors"
                  >
                    muhammedgawad@gmail.com
                  </a>
                </li>
                <li>
                  <span className="text-white/50">Egypt</span>
                </li>
                <li>
                  <a
                    href="https://github.com/mugaw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-[#E7FBFC] transition-colors"
                  >
                    github.com/mugaw
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright with Beating Heart */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-white/40 text-center sm:text-left"
            >
              This art of work is made with{' '}
              <Heart 
                className="w-4 h-4 inline-block text-red-500 animate-heartbeat" 
                fill="#ef4444"
              />{' '}
              by <span className="text-[#E7FBFC]">MuGaw</span>. All rights reserved &copy;{' '}
              {new Date().getFullYear()}
            </motion.p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-white/40 hover:text-[#E7FBFC] transition-colors group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to top</span>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#E7FBFC]/30 group-hover:bg-[#E7FBFC]/5 transition-all">
                <ArrowUp className="w-4 h-4" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
