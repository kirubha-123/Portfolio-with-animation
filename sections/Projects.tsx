'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveDemo: string;
  github: string;
}

const projects: Project[] = [
  {
    title: 'StartupVerse – Startup Idea Validator Platform',
    description:
      'Developed a full-stack web platform for startup idea submission and validation. Users can submit their innovative ideas, engage with community voting, and receive real-time feedback with comment features.',
    image: '/images/project-startupverse.jpg',
    tech: ['Next.js', 'Firebase', 'Firestore', 'TypeScript', 'TailwindCSS'],
    liveDemo: 'https://startup-ten-tawny.vercel.app/',
    github: '#',
  },
  {
    title: 'Direct Market Access for Farmers',
    description:
      'Built a comprehensive farmers market platform connecting farmers directly with buyers for product sales. Features include secure authentication, product listing management, order processing, and seamless farmer-buyer interactions.',
    image: '/images/project-farmers.jpg',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    liveDemo: 'https://farmers-market-rho.vercel.app/',
    github: '#',
  },
  {
    title: 'Billing System',
    description:
      'Complete billing and invoicing solution with payment integration, reporting, and customer management. Generate professional invoices, track payments, and manage financial records efficiently.',
    image: '/images/project-billing.jpg',
    tech: ['Next.js', 'Node.js', 'Firebase', 'TailwindCSS', 'MongoDB'],
    liveDemo: 'https://billing-web-kappa.vercel.app/',
    github: '#',
  },
  {
    title: 'InterviewAce - Interview Preparation Platform',
    description:
      'Interactive platform for interview preparation with coding challenges, interview questions, and real-time feedback. Practice coding problems, behavioral questions, and technical assessments.',
    image: '/images/project-interview.jpg',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    liveDemo: 'https://kirubha-123.github.io/InterviewAce/index.html',
    github: '#',
  },
  {
    title: 'Flight Management System',
    description:
      'Enterprise-level flight booking and management system with real-time availability, seat selection, payment processing, and booking confirmation. Comprehensive system for flight operations.',
    image: '/images/project-flight.jpg',
    tech: ['Java', 'React', 'Node.js', 'Firebase', 'MongoDB'],
    liveDemo: 'https://flight-management-system-xi.vercel.app/',
    github: '#',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          ease: 'power2.out',
        }
      );
    }

    if (imageRef.current) {
      imageRef.current.addEventListener('mouseenter', () => {
        gsap.to(imageRef.current, {
          scale: 1.1,
          duration: 0.4,
          ease: 'power2.out',
        });
      });

      imageRef.current.addEventListener('mouseleave', () => {
        gsap.to(imageRef.current, {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      });
    }
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      className="group relative h-64 sm:h-80 md:h-96 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer"
      whileHover={{ y: -10 }}
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0 w-full h-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dynamic Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 0.9 }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-xl md:rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      {/* Content - Bottom positioned */}
      <div className="absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end">
        {/* Tech Stack - Top right */}
        <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 flex flex-wrap gap-1 sm:gap-2 justify-end max-h-20 overflow-y-auto">
          {project.tech.map((tech: string) => (
            <motion.span
              key={tech}
              className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-bold text-white bg-cyan-500 bg-opacity-80 rounded-full backdrop-blur-md border border-cyan-300 border-opacity-50 whitespace-nowrap"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 211, 238, 1)' }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-200 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 group-hover:line-clamp-3 transition-all duration-300">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-2 sm:gap-3 w-full">
          <motion.a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg md:rounded-xl font-bold text-xs sm:text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/50"
          >
            <ExternalLink size={14} className="hidden sm:block" />
            <span>Live</span>
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center px-2 sm:px-4 py-1.5 sm:py-2 bg-white/10 text-white rounded-lg md:rounded-xl font-bold border-2 border-white/30 hover:bg-white/20 transition-all backdrop-blur-md"
          >
            <Code size={16} className="sm:size-5" />
          </motion.a>
        </div>
      </div>

      {/* Shine Effect on Hover */}
      <motion.div
        className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-8 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <motion.div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Background Elements - Hidden on mobile */}
        <motion.div
          className="absolute top-1/3 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500 rounded-full blur-3xl opacity-5 hidden sm:block"
          animate={{
            y: [0, -50, 0],
            x: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
};

export default Projects;
