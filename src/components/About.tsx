import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Section } from './Section';
import { MotionInView } from './MotionInView';

export const About = () => {
  return (
    <Section id="about" title="À propos de moi" className="bg-white dark:bg-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left: Profile Info */}
        <MotionInView className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
              Qui suis-je ?
            </h3>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Je suis une candidate en alternance passionnée par l'audit financier et l'analyse des comptes.
              Titulaire d'un diplôme de gestion de l'ENCG avec spécialité finance, je poursuis une formation
              de haut niveau en Master 2 Finance Internationale à Rennes Business School.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
              Mon parcours
            </h3>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              J'ai acquis une expérience pratique solide à travers plusieurs stages et alternances dans des
              environnements variés : administration douanière, audit, comptabilité, et opérations bancaires.
              Chaque expérience m'a permis de développer une rigueur sans compromis et une maîtrise des outils
              financiers essentiels (Excel, Power BI, SAP FI).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
              Ma vision
            </h3>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Je cherche une alternance longue durée (12 mois) où je peux contribuer à des projets d'audit,
              consolider ma maîtrise de SAP S/4HANA FI/CO, et devenir une collaboratrice fiable dans un
              environnement exigeant et professionnel.
            </p>
          </div>
        </MotionInView>

        {/* Right: Key Facts */}
        <MotionInView delay={0.2} className="space-y-4">
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/20 border border-pink-200 dark:border-pink-800 space-y-2"
          >
            <h4 className="text-sm font-semibold text-pink-700 dark:text-pink-300">Rythme d'alternance</h4>
            <p className="text-base font-semibold text-neutral-900 dark:text-white">
              1 semaine école / 3 semaines entreprise
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Disponible à partir de septembre 2026
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 space-y-2"
          >
            <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-300">Localisation</h4>
            <p className="text-base font-semibold text-neutral-900 dark:text-white">
              {profile.identity.location}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Mobilité France entière
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 space-y-2"
          >
            <h4 className="text-sm font-semibold text-purple-700 dark:text-purple-300">Contact</h4>
            <p className="text-base font-semibold text-neutral-900 dark:text-white break-all">
              {profile.identity.email}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {profile.identity.phone}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/20 border border-amber-200 dark:border-amber-800 space-y-2"
          >
            <h4 className="text-sm font-semibold text-amber-700 dark:text-amber-300">Scolarité actuelle</h4>
            <p className="text-base font-semibold text-neutral-900 dark:text-white">
              Master 2 Finance Internationale
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Rennes Business School × ENCG
            </p>
          </motion.div>

          {/* Value Proposition */}
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">Ce que je vous apporte</h4>
            <div className="space-y-2">
              {profile.valueProposition.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">✓</span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">{value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </MotionInView>
      </div>
    </Section>
  );
};
