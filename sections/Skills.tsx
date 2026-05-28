'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React.js', level: 92 },
  { name: 'Next.js', level: 90 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'TypeScript', level: 88 },
  { name: 'Node.js', level: 85 },
  { name: 'Firebase', level: 85 },
  { name: 'MongoDB', level: 85 },
  { name: 'Express.js', level: 85 },
  { name: 'TailwindCSS', level: 95 },
  { name: 'HTML5 & CSS3', level: 92 },
  { name: 'Git & GitHub', level: 90 },
  { name: 'Python', level: 75 },
  { name: 'Java', level: 80 },
  { name: 'MySQL', level: 82 },
  { name: 'PHP', level: 78 },
  { name: 'Responsive Design', level: 93 },
];

const SkillCard = ({ name, level, index }: { name: string; level: number; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          ease: 'power2.out',
        }
      );
    }
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group glass-morphism p-6 rounded-lg border border-cyan-500 border-opacity-30 hover:border-opacity-100 transition-all hover:shadow-lg hover:shadow-cyan-500/50"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <span className="text-sm font-semibold text-cyan-400">{level}%</span>
      </div>

      {/* Skill Bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.1 }}
      />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Technical </span>
            <span className="text-gradient">Skills</span>
          </h2>
          <motion.div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} {...skill} index={index} />
          ))}
        </motion.div>

        {/* Floating Background Elements */}
        <motion.div
          className="absolute top-1/2 -left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-5"
          animate={{
            y: [0, -50, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-5"
          animate={{
            y: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
};

export default Skills;
