'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          ease: 'power2.out',
        }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          ease: 'power2.out',
        }
      );
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 md:px-8 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Section Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="text-gradient">Me</span>
          </h2>
          <motion.div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Image Section */}
          <motion.div
            ref={imageRef}
            className="relative lg:col-span-1"
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.95 }}
            viewport={{ once: true }}
          >
            <div className="glass-morphism p-8 rounded-2xl border border-cyan-500 border-opacity-30 sticky top-32">
              <div className="w-full aspect-square bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="Kirubhakaran"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Gradient Orbs */}
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500 rounded-full blur-3xl opacity-20"
              animate={{
                y: [0, -20, 0],
                x: [0, 20, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20"
              animate={{
                y: [0, 20, 0],
                x: [0, -20, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Content Section */}
          <motion.div ref={contentRef} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="glass-morphism p-6 rounded-2xl border border-cyan-500 border-opacity-30 hover:border-opacity-100 transition-all"
              whileHover={{ y: -5, borderColor: 'rgba(34, 211, 238, 0.5)' }}
            >
              <h3 className="text-3xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mb-3">
                Education
              </h3>
              <div className="space-y-2">
                <p className="text-lg font-bold text-white">
                  B.E. in Computer Science
                </p>
                <p className="text-sm text-gray-300">
                  Hindusthan Institute of Technology
                </p>
                <p className="text-sm text-cyan-300 font-semibold">
                  CGPA: 8.2% with Honours
                </p>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              variants={itemVariants}
              className="glass-morphism p-6 rounded-2xl border border-cyan-500 border-opacity-30 hover:border-opacity-100 transition-all"
              whileHover={{ y: -5, borderColor: 'rgba(34, 211, 238, 0.5)' }}
            >
              <h3 className="text-3xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mb-3">
                Experience
              </h3>
              <div className="space-y-3">
                <div className="border-l-3 border-cyan-500 pl-3">
                  <p className="text-sm font-bold text-white">Frontend Web Developer Intern</p>
                  <p className="text-xs text-cyan-300">Emglitz Technologies</p>
                  <p className="text-xs text-gray-400">July 2024</p>
                </div>
                <div className="border-l-3 border-blue-500 pl-3">
                  <p className="text-sm font-bold text-white">Frontend Developer Intern</p>
                  <p className="text-xs text-cyan-300">Codec Technologies</p>
                  <p className="text-xs text-gray-400">Oct 2025 – Nov 2025</p>
                </div>
              </div>
            </motion.div>

            {/* Skills & Expertise - Full Width */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 glass-morphism p-6 rounded-2xl border border-cyan-500 border-opacity-30 hover:border-opacity-100 transition-all"
              whileHover={{ y: -5, borderColor: 'rgba(34, 211, 238, 0.5)' }}
            >
              <h3 className="text-3xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mb-4">
                Skills & Expertise
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <motion.div 
                  className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 p-3 rounded-lg border border-cyan-500 border-opacity-50 hover:border-opacity-100 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-sm text-white">
                    <span className="font-black text-cyan-300">Frontend:</span>
                    <br />
                    <span className="text-xs text-gray-200">React, Next.js, TypeScript, TailwindCSS, JavaScript</span>
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-3 rounded-lg border border-blue-500 border-opacity-50 hover:border-opacity-100 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-sm text-white">
                    <span className="font-black text-blue-300">Backend:</span>
                    <br />
                    <span className="text-xs text-gray-200">Node.js, Express.js, Firebase, PHP, Python</span>
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-3 rounded-lg border border-purple-500 border-opacity-50 hover:border-opacity-100 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-sm text-white">
                    <span className="font-black text-purple-300">Databases:</span>
                    <br />
                    <span className="text-xs text-gray-200">MongoDB, MySQL, Firebase Firestore</span>
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-r from-pink-900/40 to-cyan-900/40 p-3 rounded-lg border border-pink-500 border-opacity-50 hover:border-opacity-100 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-sm text-white">
                    <span className="font-black text-pink-300">Tools:</span>
                    <br />
                    <span className="text-xs text-gray-200">Git, GitHub, VS Code, Vercel, Netlify</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
