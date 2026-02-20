import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 dark:bg-black text-neutral-100 border-t border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">
              Jawahir Bejjaoui
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Candidate alternance – Audit financier & Analyse des comptes
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <h4 className="font-semibold text-neutral-100 text-sm sm:text-base">Liens rapides</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { label: 'À propos', href: '#about' },
                { label: 'Expériences', href: '#experience' },
                { label: 'Projets', href: '#projects' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            <h4 className="font-semibold text-neutral-100 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <a
                  href="mailto:bejjaouijawahir@gmail.com"
                  className="text-neutral-400 hover:text-primary-400 transition-colors break-all"
                >
                  bejjaouijawahir@gmail.com
                </a>
              </li>
              <li className="text-neutral-400">+212 629531814</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-6 sm:pt-8">
          <p className="text-center text-xs sm:text-sm text-neutral-400">
            © {currentYear} Jawahir Bejjaoui. Tous droits réservés. | Conçu avec React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
