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
    phone: '+212 629531814',
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
      degree: 'Master 2 Finance Internationale (double diplôme ENCG × Rennes BS)',
      details: [
        'Spécialisation finance internationale et audit',
        'Environnement académique prestigieux',
      ],
    },
    {
      period: '2021–2026',
      school: 'ENCG',
      degree: 'Diplôme Gestion – Spécialité Finance',
      details: [
        'Comptabilité générale, audit, finance d\'entreprise',
        'Leadership et environnement multiculturel',
      ],
    },
    {
      period: '2021',
      school: 'Baccalauréat',
      degree: 'Sciences Économiques – Mention Bien',
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
      period: 'Août 2025 – Octobre 2025',
      company: 'Douanes & Impôts Indirects',
      position: 'Assistante Contrôle Douanier & Fiscal',
      location: 'Maroc',
      description: 'Assistance aux opérations de contrôle douanier et fiscal, suivi des déclarations, support administratif.',
      highlights: [
        'Dashboard Excel suivi des déclarations douanières',
        'Analyse des anomalies et écarts de conformité',
        'Respect strict des délais réglementaires',
      ],
    },
    {
      period: 'Juin 2025 – Juillet 2025',
      company: 'Banque CIH',
      position: 'Analyste Junior Opérations Bancaires',
      location: 'Maroc',
      description: 'Assistance aux opérations de change, virements, suivi de flux financiers.',
      highlights: [
        'Traitement des opérations de change quotidiennement',
        'Contrôle de conformité des dossiers clients',
        'Support à l\'équipe back-office',
      ],
    },
    {
      period: 'Octobre 2024 – Novembre 2024',
      company: 'Trésorerie Générale',
      position: 'Assistante Fiscalité & Comptabilité',
      location: 'Maroc',
      description: 'Assistance en matière fiscale, comptabilité analytique, reporting financier.',
      highlights: [
        'Dashboards Excel/Power BI suivi des entreprises',
        'Consolidation de données financières',
        'Analyse des déclarations fiscales',
      ],
    },
    {
      period: 'Mars 2024 – Juin 2024',
      company: 'ONCF',
      position: 'Assistante Administrative & Financière',
      location: 'Maroc',
      description: 'Support administratif et financier, gestion de dossiers, suivi budgétaire.',
      highlights: [
        'Gestion des dossiers administratifs',
        'Suivi des engagements budgétaires',
        'Coordination avec différents départements',
      ],
    },
    {
      period: 'Juin 2023 – Juillet 2023',
      company: 'Bureau Fiduciaire',
      position: 'Assistante Audit & Comptabilité',
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
      company: 'Sanlam Assurance',
      position: 'Stage Observation Audit & Risques',
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
      { organization: 'ADE ENCG Fès', role: 'Sponsoring' },
      { organization: 'AIESEC', role: 'Recrutement' },
      { organization: 'TEDxENCG Fès', role: 'Sponsoring' },
      { organization: 'Junior Consulting ENCG Kénitra', role: 'Prospection' },
      { organization: 'Sit With Entrepreneur', role: 'Certification Organisatrice' },
    ],
    volunteer: [
      { organization: 'Bassma Club', role: 'Présidente' },
      { organization: 'Lions Club', role: 'Prospection' },
    ],
  },
  valueProposition: [
    'Reporting clair et fiable pour décideurs exigeants',
    'Conformité & contrôle interne maîtrisés',
    'Autonomie démontrée + fiabilité reconnue',
    'Apprentissage continu et adaptabilité',
  ],
};
