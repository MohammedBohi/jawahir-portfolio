import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Section } from './Section';
import { MotionInView } from './MotionInView';

export const ExperienceTimeline = () => {
  return (
    <Section
      id="experience"
      title="Expériences professionnelles"
      subtitle="Stages et alternances en audit, finance et comptabilité"
      className="bg-neutral-50 dark:bg-neutral-800"
    >
      <div className="space-y-6 sm:space-y-8">
        {profile.experience.map((exp, idx) => (
          <MotionInView key={idx} delay={idx * 0.1}>
            <motion.div
              whileHover={{ scale: 1.01, y: -2 }}
              className="p-4 sm:p-6 rounded-xl border-2 border-primary-200 dark:border-primary-800 bg-white dark:bg-neutral-900 space-y-4 sm:space-y-5 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <p className="text-base sm:text-lg text-primary-600 dark:text-primary-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                  📍 {exp.location}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 sm:space-y-2.5 pt-2 sm:pt-3 border-t border-neutral-200 dark:border-neutral-700">
                {exp.highlights.map((highlight, hidx) => (
                  <motion.div
                    key={hidx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: hidx * 0.05 }}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <span className="text-primary-600 dark:text-primary-400 font-bold text-sm sm:text-base flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </MotionInView>
        ))}
      </div>
    </Section>
  );
};
