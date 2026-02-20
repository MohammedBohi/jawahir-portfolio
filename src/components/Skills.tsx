import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Section } from './Section';
import { MotionInView } from './MotionInView';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <Section
      id="skills"
      title="Compétences"
      subtitle="Expertise en audit, finance et outils métier"
      className="bg-white dark:bg-neutral-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {profile.skills.map((skillGroup, idx) => (
          <MotionInView key={idx} delay={idx * 0.1}>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/20 border border-pink-200 dark:border-pink-800 h-full space-y-4"
            >
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                {skillGroup.category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-2 sm:space-y-3"
              >
                {skillGroup.items.map((skill, sidx) => (
                  <motion.div
                    key={sidx}
                    variants={itemVariants}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink-600 dark:bg-pink-400 flex-shrink-0 mt-2 sm:mt-2.5" />
                    <span className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </MotionInView>
        ))}
      </div>
    </Section>
  );
};
