import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  Linkedin, 
  Instagram, 
  Facebook,
  Github,
  Music2
} from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mugaw', label: 'GitHub', color: '#333' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-gawad-449552b5', label: 'LinkedIn', color: '#0077B5' },
    { icon: Instagram, href: 'https://www.instagram.com/Muhammad1Gawad', label: 'Instagram', color: '#E4405F' },
    { icon: Facebook, href: 'https://www.facebook.com/Muhammad1Gawad', label: 'Facebook', color: '#1877F2' },
    { icon: Music2, href: 'https://www.tiktok.com/@Muhammad1Gawad', label: 'TikTok', color: '#000000' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#E7FBFC]/5 rounded-full blur-3xl" />
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
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Montserrat'] mb-6"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-['Montserrat'] mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-12">
              <a
                href="mailto:muhammedgawad@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#E7FBFC]/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E7FBFC]/10 flex items-center justify-center group-hover:bg-[#E7FBFC]/20 transition-colors">
                  <Mail className="w-6 h-6 text-[#E7FBFC]" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Email</p>
                  <p className="text-white group-hover:text-[#E7FBFC] transition-colors">
                    muhammedgawad@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-[#E7FBFC]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#E7FBFC]" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Location</p>
                  <p className="text-white">Egypt</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Follow Me</h4>
              <div className="flex flex-wrap gap-4">
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
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#E7FBFC]/30 hover:bg-[#E7FBFC]/5 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#E7FBFC]/10 to-transparent border border-[#E7FBFC]/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold">Available for freelance</span>
              </div>
              <p className="text-sm text-white/60">
                I'm currently open to new projects and collaborations. Let's create something amazing together!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#E7FBFC]/50 focus:outline-none focus:ring-2 focus:ring-[#E7FBFC]/10 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#E7FBFC]/50 focus:outline-none focus:ring-2 focus:ring-[#E7FBFC]/10 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#E7FBFC]/50 focus:outline-none focus:ring-2 focus:ring-[#E7FBFC]/10 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#E7FBFC] text-[#050505] rounded-xl font-semibold hover:bg-[#E7FBFC]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#050505] border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
