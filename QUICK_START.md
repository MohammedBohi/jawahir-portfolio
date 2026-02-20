# 🚀 QUICK START - Portfolio Jawahir Bejjaoui

## ✅ Installation complète (Déjà fait!)

```bash
npm install
```

## 🎯 Démarrer le projet

```bash
npm run dev
```

Ouvre automatiquement: **http://localhost:5173**

## 📦 Builder pour production

```bash
npm run build
```

Crée le dossier `dist/` optimisé.

---

## 📂 Structure complète

```
Portfolio_jiji/
├── src/
│   ├── components/              ✅ 14 composants
│   │   ├── Navbar.tsx           (Navigation + Dark mode)
│   │   ├── Hero.tsx             (Accueil + Avatar)
│   │   ├── About.tsx            
│   │   ├── EducationTimeline.tsx (Formation - timeline)
│   │   ├── Skills.tsx           (4 catégories de skills)
│   │   ├── ExperienceTimeline.tsx (6 expériences)
│   │   ├── Projects.tsx         (3 projets)
│   │   ├── Languages.tsx        (4 langues)
│   │   ├── Certifications.tsx   (2 certs)
│   │   ├── Engagements.tsx      (Rôles + Bénévolat)
│   │   ├── Contact.tsx          (Email + Copy + Phone)
│   │   ├── Footer.tsx           
│   │   ├── Section.tsx          (Wrapper réutilisable)
│   │   └── MotionInView.tsx     (Animations au scroll)
│   ├── data/
│   │   └── profile.ts           ✅ Contenu typé (100% configurable)
│   ├── App.tsx                  ✅ App principal
│   ├── main.tsx                 ✅ Entry point
│   ├── index.css                ✅ Styles globaux
│   ├── globals.css              ✅ Tailwind imports
│   └── vite-env.d.ts
├── public/
│   ├── avatar.jpg               ⚠️ À ajouter (votre photo)
│   ├── cv.pdf                   ⚠️ À ajouter (votre CV)
│   └── favicon.svg              ✅ Favicon gradient
├── index.html                   ✅ HTML + meta tags + OG
├── package.json                 ✅ Dépendances (React, Vite, Tailwind, Framer Motion, Lucide)
├── tsconfig.json                ✅ TypeScript config
├── tailwind.config.ts           ✅ Thème premium (couleurs, fonts, spacing)
├── postcss.config.js            ✅ PostCSS + autoprefixer
├── vite.config.ts               ✅ Vite config
├── README.md                    ✅ Documentation complète
└── .gitignore                   ✅

```

---

## 🎨 Caractéristiques clés

### ✨ Design
- **Thème Premium**: Bleu profond (#2563eb) + gris neutre + blanc
- **Dark Mode**: Activable via toggle, bien travaillé
- **Responsive**: Mobile-first, tablette, desktop optimisés
- **Hiérarchie typo**: 5xl down to xs sizes

### 🎬 Animations (Framer Motion)
- Fade-in au scroll `(0-20px y + opacity)`
- Hover effects subtils `(scale 1.02-1.05, y-2 to y-4)`
- Stagger sur listes
- **Respect prefers-reduced-motion** ✅

### 🛠️ Tech Stack
- ✅ React 18 + TypeScript (strict mode)
- ✅ Vite (build ultrarapide)
- ✅ Tailwind CSS 3 (utility-first)
- ✅ Framer Motion 10 (animations)
- ✅ Lucide React (icônes)
- ✅ React Intersection Observer (lazy animations)

---

## 📝 IMPORTANT: Ajouter vos fichiers

### 1. **Photo professionnelle**
   - Placez `public/avatar.jpg` (640x640 min, .jpg)
   - Sinon, un placeholder "JB" s'affiche
   
### 2. **CV téléchargeable**
   - Placez `public/cv.pdf`
   - Le bouton "Télécharger CV" pointera vers ce fichier

### 3. **Personnaliser le contenu**
   - Éditez `src/data/profile.ts`
   - Tous les textes, dates, listes sont là
   - Contenu **100% typé TypeScript**

---

## 🎯 Commandes principales

| Commande | Action |
|----------|--------|
| `npm run dev` | 🔥 Serveur dev (hot reload) |
| `npm run build` | 📦 Build production |
| `npm run preview` | 👀 Aperçu du build |
| `npm install` | 📥 Installer dépendances |

---

## 🌐 Sections du portfolio

1. **Hero** - Accueil + avatar + highlights
2. **About** - Qui suis-je + infos clés
3. **Education** - Formation (timeline visuelle)
4. **Skills** - Compétences (4 catégories)
5. **Experience** - Expériences (6 stages/alternances)
6. **Projects** - 3 projets avec résultats
7. **Languages** - 4 langues avec niveaux
8. **Certifications** - 2 certifications
9. **Engagements** - Rôles + bénévolat
10. **Contact** - Email + phone + copy email + LinkedIn
11. **Footer** - Copyright + liens rapides

---

## 🚀 Déployer facilement

### Option 1: Vercel (recommandé)
```bash
npm i -g vercel
vercel
```

### Option 2: Netlify
- Build: `npm run build`
- Upload dossier `dist/`

### Option 3: GitHub Pages
- Push sur GitHub
- Activer Pages sur branche `gh-pages`

---

## ✅ Checklist avant déploiement

- [ ] Remplacer `public/avatar.jpg` par votre photo
- [ ] Ajouter `public/cv.pdf`
- [ ] Vérifier que `profile.ts` contient les bonnes infos
- [ ] Tester en local: `npm run dev`
- [ ] Builder: `npm run build` (sans erreurs)
- [ ] Tester le build: `npm run preview`
- [ ] Vérifier dark mode (toggle en haut)
- [ ] Tester sur mobile
- [ ] Tester liens (scroll, email, LinkedIn)

---

## 🔧 Support & Modifications

### Changer les couleurs
Éditez `tailwind.config.ts` → section `colors`

### Changer les animations
Éditez `src/components/MotionInView.tsx` → duration/delay

### Ajouter une nouvelle section
1. Créer `src/components/NewSection.tsx`
2. Importer dans `src/App.tsx`
3. Ajouter données dans `src/data/profile.ts`

---

## 📞 Contact

- **Email**: bejjaouijawahir@gmail.com
- **Phone**: +212 629531814
- **LinkedIn**: [jawahir-bejjaoui](https://linkedin.com/in/jawahir-bejjaoui)

---

## 📊 Performance

- ✅ Lighthouse Ready (performance, accessibility, SEO)
- ✅ Core Web Vitals optimisés
- ✅ Vite pour bundle ultra rapide
- ✅ Tailwind purged CSS (seulement les styles utilisés)
- ✅ Images lazy loaded

---

**Bon développement! 🚀**

Made with ❤️ using React + Vite + Tailwind CSS + Framer Motion
