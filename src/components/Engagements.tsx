import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Section } from './Section';
import { MotionInView } from './MotionInView';

export const Engagements = () => {
  return (
    <Section
      id="engagements"
      title="Engagements & Bénévolat"
      subtitle="Leadership et contribution à la communauté"
      className="bg-neutral-50 dark:bg-neutral-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Roles */}
        <MotionInView>
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
              Rôles & Engagements
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {profile.engagements.roles.map((role, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700"
                >
                  <span className="text-primary-600 dark:text-primary-400 font-bold text-lg mt-0.5 flex-shrink-0">
                    ⭐
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white text-sm sm:text-base">
                      {role.organization}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      {role.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </MotionInView>

        {/* Volunteer */}
        <MotionInView delay={0.2}>
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
              Bénévolat
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {profile.engagements.volunteer.map((vol, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700"
                >
                  <span className="text-primary-600 dark:text-primary-400 font-bold text-lg mt-0.5 flex-shrink-0">
                    ❤️
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white text-sm sm:text-base">
                      {vol.organization}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      {vol.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </MotionInView>
      </div>
    </Section>
  );
};
