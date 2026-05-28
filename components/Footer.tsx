'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-8 border-t border-cyan-500 border-opacity-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center space-y-3 sm:space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gradient">Kirubhakaran</h3>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base">
            Full Stack Developer | Building Modern Web Experiences
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <a href="#home" className="hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-6 sm:pt-8 border-t border-gray-700 border-opacity-50">
            <p className="text-gray-500 text-xs sm:text-sm">
              © {currentYear} Kirubhakaran. All rights reserved. | Crafted with passion and modern tech.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Glow */}
      <motion.div
        className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-cyan-500 rounded-full blur-3xl opacity-5 pointer-events-none"
        animate={{
          y: [0, 50, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </footer>
  );
};

export default Footer;
