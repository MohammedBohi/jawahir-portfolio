import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Section } from './Section';
import { MotionInView } from './MotionInView';

export const Projects = () => {
  return (
    <Section
      id="projects"
      title="Projets & Réalisations"
      subtitle="Dashboards, analyses et automatisations"
      className="bg-white dark:bg-neutral-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {profile.projects.map((project, idx) => (
          <MotionInView key={idx} delay={idx * 0.1}>
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-700 space-y-4 sm:space-y-5 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col"
            >
              {/* Header */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                  {project.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full w-fit">
                    {project.period}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    {project.company}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              {/* Results */}
              <div className="space-y-2 sm:space-y-2.5 pt-2 sm:pt-3 border-t border-neutral-200 dark:border-neutral-700">
                <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wide">
                  Résultats clés
                </h4>
                <div className="space-y-1.5 sm:space-y-2">
                  {project.results.map((result, ridx) => (
                    <motion.div
                      key={ridx}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: ridx * 0.05 }}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <span className="text-primary-600 dark:text-primary-400 font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5">
                        ▸
                      </span>
                      <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                        {result}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="space-y-2 sm:space-y-2.5 pt-2 sm:pt-3 border-t border-neutral-200 dark:border-neutral-700 mt-auto">
                <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wide">
                  Outils & technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, tidx) => (
                    <motion.span
                      key={tidx}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs px-2.5 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium border border-primary-200 dark:border-primary-700"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </MotionInView>
        ))}
      </div>
    </Section>
  );
};
