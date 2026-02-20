# 📋 ARBORESCENCE COMPLÈTE - Portfolio Jawahir Bejjaoui

## 📦 Structure du projet

```
Portfolio_jiji/
│
├── 📄 Configuration & Manifest
│   ├── package.json                    (Dépendances + scripts npm)
│   ├── package-lock.json               (Lock file)
│   ├── tsconfig.json                   (TypeScript config - strict mode)
│   ├── tsconfig.node.json              (TypeScript pour Vite)
│   ├── vite.config.ts                  (Vite build config)
│   ├── tailwind.config.ts              (Thème Tailwind + design tokens)
│   ├── postcss.config.js               (PostCSS + autoprefixer)
│   ├── .gitignore                      (Git ignore rules)
│
├── 📄 Documentation
│   ├── README.md                       (Documentation complète)
│   ├── QUICK_START.md                  (Guide de démarrage rapide)
│   └── PROJECT_STRUCTURE.md            (Ce fichier)
│
├── 📁 public/                          (Fichiers statiques)
│   ├── avatar.jpg                      ⚠️ À AJOUTER (votre photo - 640x640)
│   ├── cv.pdf                          ⚠️ À AJOUTER (votre CV)
│   ├── favicon.svg                     ✅ Favicon gradient JB
│   └── og-image.png                    (Optionnel - image OpenGraph)
│
├── 📁 src/                             (Code source)
│   │
│   ├── 📁 components/                  (14 composants React + TypeScript)
│   │   ├── Navbar.tsx                  (🔝 Navigation sticky + dark mode toggle + mobile menu)
│   │   │                                └─ Lien: #hero, #about, #skills, etc. + CTA email
│   │   │
│   │   ├── Hero.tsx                    (🎬 Section d'accueil)
│   │   │                                ├─ Avatar + placeholder JB
│   │   │                                ├─ Titre + availability badge
│   │   │                                ├─ 4 highlights (icônes lucide-react)
│   │   │                                ├─ 2 CTAs (Download CV + LinkedIn)
│   │   │                                └─ Animations Framer Motion (fade + scale)
│   │   │
│   │   ├── About.tsx                   (📝 À propos)
│   │   │                                ├─ 3 blocs texte (Qui, Parcours, Vision)
│   │   │                                ├─ 4 cartes (Rythme, Localisation, Contact, Scolarité)
│   │   │                                └─ Valeur proposition (4 points)
│   │   │
│   │   ├── EducationTimeline.tsx       (🎓 Formation - Timeline)
│   │   │                                ├─ 3 entrées (Master 2, Diplôme ENCG, Bac)
│   │   │                                ├─ Timeline visuelle avec dots
│   │   │                                └─ Détails & badges de période
│   │   │
│   │   ├── Skills.tsx                  (🛠️ Compétences - 4 catégories)
│   │   │                                ├─ Analyse & Comptabilité
│   │   │                                ├─ Audit & Conformité
│   │   │                                ├─ Outils IT (Excel, Power BI, SAP FI)
│   │   │                                └─ Soft Skills
│   │   │
│   │   ├── ExperienceTimeline.tsx      (💼 Expériences - Timeline)
│   │   │                                ├─ 6 expériences (2022-2025)
│   │   │                                ├─ Pour chaque: position, company, lieu, description
│   │   │                                ├─ Highlights (3-4 bullet points)
│   │   │                                └─ Timeline visuelle
│   │   │
│   │   ├── Projects.tsx                (🚀 Projets & Réalisations)
│   │   │                                ├─ 3 projets
│   │   │                                ├─ Pour chaque: titre, description, résultats, tools
│   │   │                                └─ Badges technologie
│   │   │
│   │   ├── Languages.tsx               (🌍 Langues)
│   │   │                                ├─ 4 langues (Français, Anglais, Arabe, Espagnol)
│   │   │                                ├─ Niveaux colorés (Bilingue, Natif, A2)
│   │   │                                └─ Cartes colorées avec gradient
│   │   │
│   │   ├── Certifications.tsx          (🏆 Certifications)
│   │   │                                ├─ Microsoft Power BI & Fabric
│   │   │                                └─ IBM Data Fundamentals
│   │   │
│   │   ├── Engagements.tsx             (💡 Engagements & Bénévolat)
│   │   │                                ├─ Rôles (5): ADE ENCG, AIESEC, TEDx, Junior Consulting, SWE
│   │   │                                └─ Bénévolat (2): Bassma Club, Lions Club
│   │   │
│   │   ├── Contact.tsx                 (📞 Contact)
│   │   │                                ├─ Email (bejjaouijawahir@gmail.com)
│   │   │                                ├─ Bouton "Envoyer email"
│   │   │                                ├─ Bouton "Copier email" (feedback visuel)
│   │   │                                ├─ Téléphone (+212 629531814)
│   │   │                                ├─ LinkedIn link
│   │   │                                └─ Disponibilité badge (✓ Ouvert aux alternances)
│   │   │
│   │   ├── Footer.tsx                  (🦶 Footer)
│   │   │                                ├─ Brand + description
│   │   │                                ├─ Quick links (#about, #experience, #projects)
│   │   │                                ├─ Contact info
│   │   │                                └─ Copyright © 2026
│   │   │
│   │   ├── Section.tsx                 (🎨 Wrapper réutilisable)
│   │   │                                ├─ Props: id, title, subtitle, children, className
│   │   │                                ├─ Section header avec underline gradient
│   │   │                                └─ Max-width 6xl + spacing standard
│   │   │
│   │   └── MotionInView.tsx            (🎬 Wrapper Framer Motion)
│   │                                    ├─ useInView hook (Intersection Observer)
│   │                                    ├─ Animation: fade-in + slide-up (y: 0-20px)
│   │                                    └─ Props: duration, delay, children, className
│   │
│   ├── 📁 data/
│   │   └── profile.ts                  (📋 Contenu typé - Source de vérité)
│   │                                    ├─ Interface Profile (TypeScript strict)
│   │                                    ├─ Identity (name, email, phone, location, LinkedIn)
│   │                                    ├─ Availability (startDate, schedule, mobility)
│   │                                    ├─ Highlights (4 points clés)
│   │                                    ├─ Education (3 entrées)
│   │                                    ├─ Skills (4 catégories × 4-5 items)
│   │                                    ├─ Experience (6 expériences)
│   │                                    ├─ Projects (3 projets)
│   │                                    ├─ Languages (4 langues)
│   │                                    ├─ Certifications (2)
│   │                                    ├─ Engagements (roles + volunteer)
│   │                                    └─ ValueProposition (4 points)
│   │
│   ├── App.tsx                         (🏢 App principal)
│   │                                    ├─ Import de tous les composants
│   │                                    ├─ État dark mode (useState)
│   │                                    ├─ Détection préférence système (useEffect)
│   │                                    └─ Passage props theme toggle à Navbar
│   │
│   ├── main.tsx                        (🚀 Entry point)
│   │                                    ├─ React.StrictMode
│   │                                    └─ ReactDOM.createRoot(#root)
│   │
│   ├── index.css                       (🎨 Styles globaux)
│   │                                    ├─ Tailwind imports (@layer)
│   │                                    ├─ Animations personnalisées
│   │                                    ├─ Scrollbar custom
│   │                                    └─ Selection colors
│   │
│   ├── globals.css                     (🌐 Tailwind directives)
│   │                                    ├─ @tailwind base
│   │                                    ├─ @tailwind components
│   │                                    └─ @tailwind utilities
│   │
│   └── vite-env.d.ts                   (📝 Types Vite)
│
└── 📄 index.html                       (🌐 HTML principal)
                                        ├─ Meta tags (viewport, charset, description)
                                        ├─ OpenGraph tags (og:title, og:description, og:image)
                                        ├─ Favicon
                                        └─ <div id="root"></div> + script main.tsx

```

---

## 📊 Statistiques du projet

| Catégorie | Nombre |
|-----------|--------|
| Composants React | 14 |
| Sections | 11 |
| Expériences | 6 |
| Projets | 3 |
| Skills (catégories) | 4 |
| Skills (items) | 15+ |
| Langues | 4 |
| Certifications | 2 |
| Engagements | 7 |
| Lignes de code TypeScript | ~2000+ |
| Lignes Tailwind config | ~150 |

---

## 🛠️ Dépendances installées

### Production
- `react@^18.2.0` - Framework UI
- `react-dom@^18.2.0` - Rendu DOM
- `framer-motion@^10.16.4` - Animations
- `lucide-react@^0.308.0` - Icônes
- `clsx@^2.0.0` - Utility classNames
- `tailwind-merge@^2.2.0` - Merge Tailwind classes
- `react-intersection-observer@^9.8.1` - Detect scroll visibility

### Dev
- `@vitejs/plugin-react@^4.2.0` - Vite React plugin
- `typescript@^5.2.2` - TypeScript compiler
- `vite@^5.0.8` - Build tool
- `tailwindcss@^3.3.6` - CSS framework
- `postcss@^8.4.31` - CSS processing
- `autoprefixer@^10.4.16` - CSS vendor prefixes
- `@types/react@^18.2.37` - React TypeScript types
- `@types/react-dom@^18.2.15` - ReactDOM types

---

## 🎨 Design Tokens (Tailwind Config)

### Couleurs principales
- Primary Blue: `#2563eb` (deep blue)
- Neutral: 50-900 (white to dark gray)
- Secondary colors: gradient variants

### Typographie
- Font: Inter sans-serif
- Sizes: xs (0.75rem) → 5xl (3rem)
- Weights: 400 (normal), 600 (semibold), 700 (bold)

### Spacing
- xs: 0.25rem, sm: 0.5rem, md: 1rem, lg: 1.5rem, xl: 2rem, 2xl: 3rem, 3xl: 4rem, 4xl: 6rem

### Border Radius
- xs: 0.25rem → full (9999px)
- Cards: lg/xl (1rem-1.5rem)

### Shadows
- xs (light) → xl (heavy) + premium (blue-tinted)

---

## 🎬 Animations configurées

1. **Fade In** - opacity 0→1 (0.6s)
2. **Slide Up** - y: 20px→0 + opacity fade (0.6s)
3. **Scale In** - scale 0.95→1 + opacity (0.4s)
4. **Stagger** - délais progressifs sur listes
5. **Hover Effects** - scale 1.02-1.05, y -2 to -4
6. **Scroll Animation** - Intersection Observer trigger

---

## 📱 Responsive Breakpoints

- **Mobile First** (default: <768px)
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

Tous les composants utilisent:
- `text-sm sm:text-base` pour typo
- `px-4 sm:px-6 lg:px-8` pour padding
- `grid-cols-1 md:grid-cols-2` pour layouts

---

## ✅ Checklist intégration

- ✅ TypeScript strict (`strict: true`)
- ✅ Dark mode class strategy
- ✅ Tailwind purge CSS (seulement styles utilisés)
- ✅ Framer Motion pour animations
- ✅ React Intersection Observer pour lazy animations
- ✅ SEO meta tags + OpenGraph
- ✅ Favicon gradient SVG
- ✅ Responsive mobile-first
- ✅ Lighthouse optimized
- ✅ Prefers reduced motion respected

---

## 🚀 Commandes utiles

```bash
# Installation
npm install

# Développement
npm run dev          # http://localhost:5173

# Production
npm run build        # Crée dist/
npm run preview      # Préview du build

# Linting/Types
npm list             # Dépendances installées
```

---

## 📝 Notes importantes

1. **Avatar**: Placer `public/avatar.jpg` pour afficher votre photo
2. **CV**: Placer `public/cv.pdf` pour téléchargement
3. **Content**: Tout texte est dans `src/data/profile.ts` (typé)
4. **Animations**: Configurable dans composants individuels + tailwind.config
5. **Dark Mode**: Automatique (détection système) + toggle manuel
6. **Mobile**: Totalement responsive, testé sur tous les breakpoints

---

## 🎯 Prochaines étapes

1. ✅ Ajouter votre photo → `public/avatar.jpg`
2. ✅ Ajouter votre CV → `public/cv.pdf`
3. ✅ Vérifier `src/data/profile.ts` (informations)
4. ✅ Tester localement: `npm run dev`
5. ✅ Builder: `npm run build` (check dist/)
6. ✅ Déployer sur Vercel/Netlify

---

Made with ❤️ using **React + Vite + Tailwind CSS + Framer Motion**
