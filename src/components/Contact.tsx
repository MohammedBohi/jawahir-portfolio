import { motion } from 'framer-motion';
import { Mail, Copy, CheckCircle } from 'lucide-react';
import { profile } from '../data/profile';
import { Section } from './Section';
import { MotionInView } from './MotionInView';
import { useState } from 'react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.identity.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section
      id="contact"
      title="Me contacter"
      subtitle="Discutons de votre projet d'alternance"
      className="bg-white dark:bg-neutral-900"
    >
      <MotionInView className="max-w-2xl mx-auto">
        <div className="space-y-6 sm:space-y-8">
          {/* Email Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border border-primary-200 dark:border-primary-800 space-y-4 sm:space-y-5"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-primary-600 text-white rounded-lg">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                  Email
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                  Contactez-moi directement
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <motion.a
                href={`mailto:${profile.identity.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-center"
              >
                Envoyer un email
              </motion.a>
              <motion.button
                onClick={handleCopyEmail}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 sm:flex-none px-6 py-3 bg-white dark:bg-neutral-800 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Copié!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    <span>Copier</span>
                  </>
                )}
              </motion.button>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 pt-2 border-t border-primary-200 dark:border-primary-800">
              Email: <span className="font-semibold text-neutral-900 dark:text-white break-all">{profile.identity.email}</span>
            </p>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800 space-y-4"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-blue-600 text-white rounded-lg">
                <span className="text-lg sm:text-xl">📱</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                  Téléphone
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                  Appelez ou envoyez un message
                </p>
              </div>
            </div>
            <p className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white">
              {profile.identity.phone}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 space-y-4 sm:space-y-5"
          >
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
              Réseaux sociaux
            </h3>
            <motion.a
              href={profile.identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors group"
            >
              <span className="text-2xl">in</span>
              <div>
                <p className="font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm sm:text-base">
                  LinkedIn
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  Découvrez mon profil professionnel
                </p>
              </div>
            </motion.a>
          </motion.div>

          {/* Availability Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-4 sm:p-6 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center"
          >
            <p className="text-sm sm:text-base text-green-800 dark:text-green-300">
              <span className="font-bold">✓ Je suis disponible</span> pour discuter de votre offre d'alternance dès maintenant!
            </p>
          </motion.div>
        </div>
      </MotionInView>
    </Section>
  );
};
