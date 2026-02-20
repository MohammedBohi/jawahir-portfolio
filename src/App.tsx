import './globals.css';
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { EducationTimeline } from './components/EducationTimeline';
import { Skills } from './components/Skills';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Projects } from './components/Projects';
import { Languages } from './components/Languages';
import { Certifications } from './components/Certifications';
import { Engagements } from './components/Engagements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  // Check for system preference on mount
  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isDarkMode);
    updateTheme(isDarkMode);
  }, []);

  const updateTheme = (dark: boolean) => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  };

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    updateTheme(!isDark);
  };

  return (
    <div className="bg-white dark:bg-neutral-900 transition-colors duration-300">
      <Navbar isDark={isDark} onThemeToggle={handleThemeToggle} />
      <main>
        <Hero />
        <About />
        <EducationTimeline />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <Languages />
        <Certifications />
        <Engagements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
