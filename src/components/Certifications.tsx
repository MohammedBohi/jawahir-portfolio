import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Section } from './Section';
import { MotionInView } from './MotionInView';

export const Certifications = () => {
  return (
    <Section
      id="certifications"
      title="Certifications"
      className="bg-white dark:bg-neutral-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {profile.certifications.map((cert, idx) => (
          <MotionInView key={idx} delay={idx * 0.1}>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="p-4 sm:p-6 rounded-xl border-2 border-primary-200 dark:border-primary-800 bg-gradient-to-r from-primary-50 to-transparent dark:from-primary-900/20 dark:to-transparent space-y-2"
            >
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                {cert.name}
              </h3>
              <p className="text-sm sm:text-base text-primary-600 dark:text-primary-400 font-semibold">
                {cert.issuer}
              </p>
            </motion.div>
          </MotionInView>
        ))}
      </div>
    </Section>
  );
};
