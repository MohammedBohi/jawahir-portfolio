import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Section } from './Section';
import { MotionInView } from './MotionInView';

export const EducationTimeline = () => {
  return (
    <Section
      id="education"
      title="Formation"
      subtitle="Parcours académique et certifications"
      className="bg-neutral-50 dark:bg-neutral-800"
    >
      <div className="space-y-6 sm:space-y-8">
        {profile.education.map((edu, idx) => (
          <MotionInView key={idx} delay={idx * 0.1}>
            <motion.div
              whileHover={{ x: 4 }}
              className="relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-primary-600 dark:border-primary-400"
              style={{
                borderLeftColor: idx === 0 ? 'rgb(37, 99, 235)' : idx === 1 ? 'rgb(59, 130, 246)' : 'rgb(96, 165, 250)',
              }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 sm:-left-3.5 top-0 w-6 h-6 bg-primary-600 dark:bg-primary-500 rounded-full border-4 border-white dark:border-neutral-800" />

              {/* Content */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 px-2 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full w-fit">
                    {edu.period}
                  </span>
                </div>

                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-semibold">
                  {edu.school}
                </p>

                {edu.details && (
                  <ul className="space-y-1.5 sm:space-y-2 mt-3">
                    {edu.details.map((detail, didx) => (
                      <li key={didx} className="flex items-start gap-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                        <span className="text-primary-500 dark:text-primary-400 font-bold mt-1">·</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </MotionInView>
        ))}
      </div>
    </Section>
  );
};
