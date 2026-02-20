import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { profile } from '../data/profile';

interface NavbarProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const navItems = [
  { label: 'À propos', href: '#about' },
  { label: 'Formation', href: '#education' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Expériences', href: '#experience' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = ({ isDark, onThemeToggle }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#hero');
            }}
            className="text-xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            JB
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                whileHover={{ y: -2 }}
                className="px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle + CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onThemeToggle}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-neutral-400" />
              ) : (
                <Moon className="w-5 h-5 text-neutral-600" />
              )}
            </motion.button>

            <motion.a
              href={`mailto:${profile.identity.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Me contacter
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 space-y-2"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                whileHover={{ x: 4 }}
                className="block w-full text-left px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              href={`mailto:${profile.identity.email}`}
              whileHover={{ scale: 1.05 }}
              className="block mt-4 px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg text-center hover:bg-pink-700 transition-colors"
            >
              Me contacter
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
