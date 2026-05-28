'use client';

import { motion } from 'framer-motion';
import { Mail, Code, Link as LinkIcon, Heart } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      icon: Code,
      link: '#',
      label: 'GitHub',
      color: 'hover:text-white',
    },
    {
      icon: LinkIcon,
      link: 'https://www.linkedin.com/in/kirubhakaran-c-0a485336b/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: Heart,
      link: '#',
      label: 'Instagram',
      color: 'hover:text-pink-400',
    },
    {
      icon: Mail,
      link: 'mailto:kirubhakirubha92@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-8 min-h-screen relative overflow-hidden flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Get In </span>
            <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-4">
            Feel free to reach out. I'm always open to new opportunities and interesting projects.
          </p>
        </motion.div>

        {/* Contact Content Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-cyan-400 mb-2 sm:mb-3">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 text-white text-sm border border-cyan-500 border-opacity-30 rounded-lg focus:border-opacity-100 focus:outline-none transition-all glass-morphism"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-cyan-400 mb-2 sm:mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 text-white text-sm border border-cyan-500 border-opacity-30 rounded-lg focus:border-opacity-100 focus:outline-none transition-all glass-morphism"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-cyan-400 mb-2 sm:mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 text-white text-sm border border-cyan-500 border-opacity-30 rounded-lg focus:border-opacity-100 focus:outline-none transition-all glass-morphism resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm sm:text-base rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>

          {/* Contact Info & Social Links */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Info */}
            <motion.div
              className="glass-morphism p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl border border-cyan-500 border-opacity-30"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-4">
                Contact Information
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
                <p>
                  <span className="font-semibold text-white">Email:</span>
                  <br className="sm:hidden" />
                  <span className="hidden sm:inline"> </span>
                  kirubhakirubha92@gmail.com
                </p>
                <p>
                  <span className="font-semibold text-white">Phone:</span>
                  <br className="sm:hidden" />
                  <span className="hidden sm:inline"> </span>
                  +91 8148198241
                </p>
                <p>
                  <span className="font-semibold text-white">Location:</span>
                  <br className="sm:hidden" />
                  <span className="hidden sm:inline"> </span>
                  Perambalur, Tamil Nadu, India
                </p>
                <p>
                  <span className="font-semibold text-white">Status:</span>
                  <br className="sm:hidden" />
                  <span className="hidden sm:inline"> </span>
                  <span className="text-green-400">Available for projects</span>
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-4">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`glass-morphism p-3 sm:p-4 rounded-lg border border-cyan-500 border-opacity-30 hover:border-opacity-100 transition-all flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-300 text-xs sm:text-sm ${social.color} font-semibold`}
                    >
                      <Icon size={18} className="sm:size-5" />
                      {social.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Background Elements - Hidden on mobile */}
      <motion.div
        className="absolute top-0 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500 rounded-full blur-3xl opacity-5 hidden sm:block"
        animate={{
          y: [0, -50, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600 rounded-full blur-3xl opacity-5 hidden sm:block"
        animate={{
          y: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
};

export default Contact;
