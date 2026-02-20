export interface Profile {
  identity: {
    fullName: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
  };
  availability: {
    startDate: string;
    schedule: string;
    mobility: string;
  };
  highlights: Array<{
    icon: string;
    label: string;
    description: string;
  }>;
  education: Array<{
    period: string;
    school: string;
    degree: string;
    details?: string[];
  }>;
  skills: Array<{
    category: string;
    items: string[];
  }>;
  experience: Array<{
    period: string;
    company: string;
    position: string;
    location: string;
    description: string;
    highlights: string[];
  }>;
  projects: Array<{
    title: string;
    period: string;
    company: string;
    description: string;
    results: string[];
    tools: string[];
  }>;
  languages: Array<{
    language: string;
    level: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
  }>;
  engagements: {
    roles: Array<{
      organization: string;
      role: string;
    }>;
    volunteer: Array<{
      organization: string;
      role: string;
    }>;
  };
  valueProposition: string[];
}

export const profile: Profile = {
  identity: {
    fullName: 'Jawahir Bejjaoui',
    title: 'Candidate alternance – Audit financier & Analyse des comptes',
    email: 'bejjaouijawahir@gmail.com',
    phone: '+33 7 56 97 38 92',
    location: 'Rennes / Paris – France',
    linkedin: 'https://www.linkedin.com/in/jawahir-bejjaoui-71446b215/',
  },
  availability: {
    startDate: 'Septembre 2026',
    schedule: '1 semaine école / 3 semaines entreprise',
    mobility: 'France entière',
  },
  highlights: [
    {
      icon: 'TrendingUp',
      label: 'Analyse financière',
      description: 'Lecture, interprétation et analyse d\'écarts des états financiers',
    },
    {
      icon: 'CheckCircle',
      label: 'Audit & Contrôle',
      description: 'Audit, contrôle interne, gestion des risques, conformité',
    },
    {
      icon: 'BarChart3',
      label: 'Outils métier',
      description: 'Excel, Power BI, SAP FI, Sage ERP – dashboards et reporting',
    },
    {
      icon: 'Award',
      label: 'Rigueur & fiabilité',
      description: 'Structuration, esprit critique, environnement international',
    },
  ],
  education: [
    {
      period: '2026–2027',
      school: 'Rennes Business School',
      degree: 'Master 2 Finance Internationale',
      details: [
        'Double diplôme ENCG × Rennes Business School',
      ],
    },
    {
      period: '2023–2026',
      school: 'École Nationale de Commerce et de Gestion (ENCG) – Fès',
      degree: 'Cycle Master – Spécialité Finance',
      details: [
        'Transfer from ENCG Kénitra',
      ],
    },
    {
      period: '2021–2023',
      school: 'École Nationale de Commerce et de Gestion (ENCG) – Kénitra',
      degree: 'Cycle préparatoire en Gestion',
    },
    {
      period: '2021',
      school: 'Lycée One Sigma',
      degree: 'Baccalauréat Sciences Économiques',
      details: [
        'Mention: Bien',
        'Élève majorante',
      ],
    },
  ],
  skills: [
    {
      category: 'Analyse & Comptabilité',
      items: [
        'Analyse financière avancée',
        'Comptabilité générale',
        'Lecture & interprétation de comptes',
        'Analyse d\'écarts',
      ],
    },
    {
      category: 'Audit & Conformité',
      items: [
        'Audit interne & externe',
        'Contrôle interne',
        'Gestion des risques',
        'Conformité réglementaire',
      ],
    },
    {
      category: 'Outils IT',
      items: [
        'Excel (avancé – tableaux croisés, VBA)',
        'Power BI (dashboards, DAX)',
        'SAP FI (objectif S/4HANA FI/CO)',
        'Sage ERP',
        'Douanes (déclarations électroniques)',
      ],
    },
    {
      category: 'Soft Skills',
      items: [
        'Rigueur & structuration',
        'Esprit critique & analyse',
        'Autonomie & fiabilité',
        'Apprentissage continu',
        'Communication clear reporting',
      ],
    },
  ],
  experience: [
    {
      period: 'Août – Septembre 2025',
      company: 'Administration des Douanes et Impôts Indirects',
      position: 'Assistante en contrôle douanier et fiscal',
      location: 'Maroc',
      description: 'Assistance aux opérations de contrôle douanier et fiscal, suivi des déclarations, support administratif.',
      highlights: [
        'Dashboard Excel suivi des déclarations douanières',
        'Analyse des anomalies et écarts de conformité',
        'Respect strict des délais réglementaires',
      ],
    },
    {
      period: 'Juin – Juillet 2025',
      company: 'Banque CIH',
      position: 'Analyste junior en opérations bancaires',
      location: 'Fès',
      description: 'Assistance aux opérations de change, virements, suivi de flux financiers.',
      highlights: [
        'Traitement des opérations de change quotidiennement',
        'Contrôle de conformité des dossiers clients',
        'Support à l\'équipe back-office',
      ],
    },
    {
      period: 'Mars – Juin 2024',
      company: 'Office National des Chemins de Fer (ONCF)',
      position: 'Assistante administrative et financière',
      location: 'Maroc',
      description: 'Support administratif et financier, gestion de dossiers, suivi budgétaire.',
      highlights: [
        'Gestion des dossiers administratifs',
        'Suivi des engagements budgétaires',
        'Coordination avec différents départements',
      ],
    },
    {
      period: 'Octobre – Novembre 2023',
      company: 'Trésorerie Générale du Royaume du Maroc',
      position: 'Assistante en fiscalité et comptabilité',
      location: 'Maroc',
      description: 'Assistance en matière fiscale, comptabilité analytique, reporting financier.',
      highlights: [
        'Dashboards Excel/Power BI suivi des entreprises',
        'Consolidation de données financières',
        'Analyse des déclarations fiscales',
      ],
    },
    {
      period: 'Juillet 2023',
      company: 'Bureau Fiduciaire',
      position: 'Stagiaire en audit et gestion des risques',
      location: 'Maroc',
      description: 'Support en audit, vérification des comptes, conformité réglementaire.',
      highlights: [
        'Analyse détaillée des états financiers',
        'Vérification de la conformité comptable',
        'Documentation et working papers d\'audit',
      ],
    },
    {
      period: 'Juillet 2022',
      company: 'Agence d\'Assurance Sanlam',
      position: 'Stagiaire en audit et gestion des risques',
      location: 'Maroc',
      description: 'Observation des processus d\'audit interne et gestion des risques.',
      highlights: [
        'Sensibilisation aux risques d\'assurance',
        'Suivi des processus de contrôle interne',
        'Documentation des procédures',
      ],
    },
  ],
  projects: [
    {
      title: 'Dashboard Excel Suivi Déclarations Douanières',
      period: '2025',
      company: 'Douanes & Impôts Indirects',
      description: 'Conception et maintenance d\'un dashboard Excel pour le suivi en temps réel des déclarations douanières.',
      results: [
        'Réduction du temps de reporting de 40%',
        'Automatisation des vérifications de conformité',
        'Amélioration de la traçabilité des dossiers',
      ],
      tools: ['Excel (tableaux croisés, formules avancées)', 'VBA', 'Automatisation'],
    },
    {
      title: 'Dashboards Excel/Power BI Suivi Entreprises',
      period: '2024–2025',
      company: 'Trésorerie Générale',
      description: 'Création de dashboards pour le suivi des données financières de multiples entreprises.',
      results: [
        'Consolidation de +50 sources de données',
        'Reporting mensuel automatisé',
        'Visualisations intuitives pour décideurs',
      ],
      tools: ['Excel', 'Power BI', 'DAX', 'SQL basics'],
    },
    {
      title: 'Analyse États Financiers & Conformité',
      period: '2023',
      company: 'Cabinet Fiduciaire',
      description: 'Analyse complète des états financiers, vérification de conformité réglementaire et IFRS.',
      results: [
        'Identification de 15+ écarts de conformité',
        'Documentation précise des ajustements',
        'Rapport d\'audit détaillé pour clients',
      ],
      tools: ['Analyse comptable', 'Normes IFRS', 'Documentation audit'],
    },
  ],
  languages: [
    { language: 'Français', level: 'Bilingue' },
    { language: 'Anglais', level: 'Bilingue' },
    { language: 'Arabe', level: 'Natif' },
    { language: 'Espagnol', level: 'A2' },
  ],
  certifications: [
    { name: 'Microsoft Power BI & Fabric Lakehouse', issuer: 'Microsoft' },
    { name: 'IBM Data Fundamentals', issuer: 'IBM' },
  ],
  engagements: {
    roles: [
      { 
        organization: 'AIESEC',
        role: 'Présidente du processus de recrutement • Team Leader Marketing (2 mandats consécutifs) • KPI recruitment tracking • CRM reporting • Coordination d\'équipes en transversalité • Organisation de réunions O2O • Suivi individuel des objectifs'
      },
      { 
        organization: 'ADE ENCG Fès',
        role: 'Négociation et formalisation de 25 contrats sponsors • Coordination avec les partenaires • Suivi du respect des engagements contractuels'
      },
      { 
        organization: 'TEDxENCG Fès',
        role: 'Gestion des partenariats et négociation sponsors • Suivi de la performance des partenariats'
      },
      { 
        organization: 'Junior Consulting ENCG Kénitra',
        role: 'Prospection commerciale • Développement du portefeuille clients • Contribution à la structuration des offres'
      },
    ],
    volunteer: [
      { 
        organization: 'Bassma Club ENCG Fès',
        role: 'Pilotage de projets à impact social • Coordination d\'équipes bénévoles'
      },
      { 
        organization: 'Lions Club',
        role: 'Développement de partenariats • Mobilisation de ressources • Appui à l\'organisation d\'actions caritatives'
      },
    ],
  },
  valueProposition: [
    'Reporting clair et fiable pour décideurs exigeants',
    'Conformité & contrôle interne maîtrisés',
    'Autonomie démontrée + fiabilité reconnue',
    'Apprentissage continu et adaptabilité',
  ],
};
