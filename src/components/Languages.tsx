import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Section } from './Section';
import { MotionInView } from './MotionInView';

export const Languages = () => {
  const levelColors = {
    'Natif': 'from-primary-600 to-primary-500',
    'Bilingue': 'from-blue-600 to-blue-500',
    'A2': 'from-purple-600 to-purple-500',
  };

  return (
    <Section
      id="languages"
      title="Langues"
      subtitle="Compétences linguistiques"
      className="bg-neutral-50 dark:bg-neutral-800"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {profile.languages.map((lang, idx) => (
          <MotionInView key={idx} delay={idx * 0.1}>
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              className={`p-4 sm:p-6 rounded-xl bg-gradient-to-br ${levelColors[lang.level as keyof typeof levelColors] || 'from-neutral-600 to-neutral-500'} text-white shadow-lg hover:shadow-xl transition-shadow text-center space-y-2 sm:space-y-3`}
            >
              <h3 className="text-lg sm:text-xl font-bold">
                {lang.language}
              </h3>
              <span className="inline-block text-xs sm:text-sm font-semibold px-3 py-1 bg-white/20 rounded-full">
                {lang.level}
              </span>
            </motion.div>
          </MotionInView>
        ))}
      </div>
    </Section>
  );
};
