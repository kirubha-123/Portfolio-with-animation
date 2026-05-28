'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll('.char');
      gsap.fromTo(
        chars,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  // Preload and autoplay video with better loading strategy
  useEffect(() => {
    if (videoRef.current) {
      // Attempt to autoplay immediately
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If autoplay fails, it will play on user interaction or when visible
          console.log('Autoplay prevented, will play on user interaction');
        });
      }

      // Also setup Intersection Observer for better performance
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (videoRef.current) {
              if (entry.isIntersecting) {
                videoRef.current.play().catch(() => {
                  // Silently handle if video can't play
                });
              }
            }
          });
        },
        { threshold: 0.1 } // Reduced threshold for earlier detection
      );

      observer.observe(videoRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, idx) => (
      <span key={idx} className="char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="metadata"
          autoPlay
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay - Increased transparency */}
        <div className="absolute inset-0 bg-black/10" />
        {/* Gradient Lighting Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20" />
        {/* Gradient Glow */}
        <motion.div
          className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [-50, 50, -50],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto" ref={containerRef}>
        {/* Main Heading */}
        <motion.h1
          ref={textRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-white mb-2">
            {splitText('HI, I\'M KIRUBHAKARAN')}
          </div>
          <div className="text-gradient">
            {splitText('Full Stack Developer')}
          </div>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Full Stack Developer skilled in React.js, Node.js, and MongoDB (MERN stack), with experience in building scalable web applications and REST APIs. Strong in UI development, debugging, and performance optimization.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm sm:text-base font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all premium-shadow cursor-pointer inline-block"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 rounded-full text-sm sm:text-base font-semibold hover:bg-cyan-400 hover:bg-opacity-10 transition-all cursor-pointer inline-block"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center hidden sm:flex"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="p-2 rounded-full border-2 border-cyan-400 border-opacity-50"
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown className="text-cyan-400" size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Mouse Interaction Effect */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default Hero;
