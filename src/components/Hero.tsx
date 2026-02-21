import { motion } from 'framer-motion';
import { ChevronDown, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';
import { MotionInView } from './MotionInView';
import jijiImage from '../image/jiji.jpg';

export const Hero = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10" />
        <div className="absolute -bottom-32 left-32 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <MotionInView className="space-y-6 sm:space-y-8">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-pink-100 dark:bg-pink-900/30 rounded-full border border-pink-200 dark:border-pink-800"
            >
              <span className="w-2 h-2 rounded-full bg-pink-600 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-pink-700 dark:text-pink-300">
                Disponible {profile.availability.startDate}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="space-y-3 sm:space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
                {profile.identity.fullName}
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-pink-600 dark:text-pink-400 font-semibold">
                {profile.identity.title}
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="space-y-3 sm:space-y-4"
            >
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
                Master 2 Finance Internationale | Spécialité Audit Financier
              </p>
              <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
                {profile.identity.location} • Rythme: {profile.availability.schedule}
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-neutral-200 dark:border-neutral-700"
            >
              {profile.highlights.map((highlight, idx) => (
                <div key={idx} className="space-y-1">
                  <h3 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">
                    {highlight.label}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8"
            >
              <motion.a
                href={profile.identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-pink-600 text-pink-600 dark:text-pink-400 dark:border-pink-400 font-semibold rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.a>
            </motion.div>
          </MotionInView>

          {/* Right: Avatar */}
          <MotionInView delay={0.2} className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              {/* Avatar Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                {/* Decorative Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-pink-600 via-pink-400 to-pink-600 opacity-30"
                />

                {/* Avatar */}
                <img
                  src={jijiImage}
                  alt={profile.identity.fullName}
                  className="absolute inset-2 rounded-full object-cover shadow-2xl border-4 border-white dark:border-neutral-800"
                />
              </div>

              {/* Status Badge */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Ouverte aux alternances
              </motion.div>
            </motion.div>
          </MotionInView>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => handleScroll('#about')}
            className="flex flex-col items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <span className="text-xs font-semibold">Découvrez plus</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
