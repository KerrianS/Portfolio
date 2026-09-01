import { Project, SkillCategory } from '../models/portfolio.models';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Espace Client Microservices & Keycloak',
    description: 'Développement de l\'espace client d\'entreprise en React.js et Node.js avec architecture microservices et auth OAuth Keycloak.',
    longDescription: 'Mise en place d\'une architecture microservices pour l\'espace client d\'AITEC SERVICE. Intégration de Keycloak (OAuth), connexion à l\'ERP Odoo, écriture de tests unitaires, documentation technique et collections Postman.',
    technologies: ['React.js', 'Node.js', 'Keycloak', 'OAuth', 'Odoo', 'Postman', 'Microservices'],
    category: ['Full-Stack', 'React', 'Backend'],
    imageUrl: 'assets/images/project-gestion.jpg',
    githubUrl: 'https://github.com/KerrianS',
    liveUrl: '',
    featured: true,
    year: 2024
  },
  {
    id: 2,
    title: 'Plateforme Web Commandes & Requêtes SQL Récursives',
    description: 'Plateforme React.js / Node.js dédiée à la centralisation des commandes avec gestion des nomenclatures complexes imbriquées.',
    longDescription: 'Conception d\'une plateforme web permettant de centraliser les commandes et approvisionnements. Traitement de nomenclatures complexes et articles imbriqués grâce à des requêtes SQL récursives optimisées.',
    technologies: ['React.js', 'Node.js', 'SQL', 'PostgreSQL', 'Express'],
    category: ['Full-Stack', 'React', 'Backend'],
    imageUrl: 'assets/images/project-portfolio.jpg',
    githubUrl: 'https://github.com/KerrianS',
    liveUrl: '',
    featured: true,
    year: 2024
  },
  {
    id: 3,
    title: 'Workflow Support client IA & n8n',
    description: 'Système d\'automatisation n8n et webhooks : transcription automatique d\'appels et assignation de tickets par agents IA (+30% d\'efficacité).',
    longDescription: 'Conception et mise en œuvre d\'un workflow d\'automatisation avec n8n et webhooks pour le support client. Transcription automatique des appels, création et assignation des tickets par des agents IA, améliorant la satisfaction client et l\'efficacité opérationnelle de 30%.',
    technologies: ['n8n', 'IA', 'Webhooks', 'Python', 'LLM', 'Automation'],
    category: ['IA & Automation', 'Backend'],
    imageUrl: 'assets/images/project-api.jpg',
    githubUrl: 'https://github.com/KerrianS',
    liveUrl: '',
    featured: true,
    year: 2025
  },
  {
    id: 4,
    title: 'Serveur MCP Python FastMCP & IA ERP',
    description: 'Serveur MCP en Python connecté à l\'ERP et à l\'IA interne facilitant l\'accès à la documentation et la gestion des tickets urgents.',
    longDescription: 'Développement d\'un serveur Model Context Protocol (MCP) en Python avec FastMCP. Connecté à l\'ERP et à l\'IA interne, il facilite l\'accès à la documentation, aux plannings et à la gestion des tickets urgents via des outils IA, permettant un gain de temps de 20%.',
    technologies: ['Python', 'FastMCP', 'MCP Protocol', 'IA', 'ERP'],
    category: ['IA & Automation', 'Python', 'Backend'],
    imageUrl: 'assets/images/project-dashboard.jpg',
    githubUrl: 'https://github.com/KerrianS',
    liveUrl: '',
    featured: true,
    year: 2025
  },
  {
    id: 5,
    title: 'App Desktop Retranscription Réunions (Whisper & Mistral)',
    description: 'Application Electron.js et Python de retranscription en temps réel des réunions MS Teams avec comptes rendus Mistral LLM.',
    longDescription: 'Création d\'une application interne en Electron.js et Python permettant la retranscription en temps réel des réunions Microsoft Teams et la génération automatique de comptes rendus structurés grâce aux modèles Whisper et Mistral LLM.',
    technologies: ['Electron.js', 'Python', 'Whisper', 'Mistral LLM', 'AI'],
    category: ['Full-Stack', 'IA & Automation', 'Python'],
    imageUrl: 'assets/images/project-mobile.jpg',
    githubUrl: 'https://github.com/KerrianS',
    liveUrl: '',
    featured: false,
    year: 2025
  },
  {
    id: 6,
    title: 'Application Mobile Chauffeurs Flutter & Odoo',
    description: 'App Flutter connectée à l\'API Odoo pour chauffeurs de bennes : bons de livraison, GPS Waze/Maps et gestion des tournées.',
    longDescription: 'Développement d\'une application mobile en Flutter connectée à l\'API Odoo pour les chauffeurs de bennes. Inclut la gestion des commandes, la navigation guidée via Waze et Google Maps, la génération automatique des bons de livraison, la planification des tournées et le suivi des incidents.',
    technologies: ['Flutter', 'Dart', 'Odoo API', 'Waze/Maps API', 'Mobile'],
    category: ['Mobile', 'ERP'],
    imageUrl: 'assets/images/project-odoo.jpg',
    githubUrl: 'https://github.com/KerrianS',
    liveUrl: '',
    featured: false,
    year: 2024
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend & UI',
    icon: 'frontend',
    skills: [
      { name: 'React.js', level: 90, icon: 'react' },
      { name: 'Angular', level: 85, icon: 'angular' },
      { name: 'TypeScript', level: 90, icon: 'typescript' },
      { name: 'Node.js', level: 88, icon: 'nodejs' },
      { name: 'Electron.js', level: 80, icon: 'javascript' },
      { name: 'Flutter', level: 80, icon: 'flutter' }
    ]
  },
  {
    name: 'Backend & Frameworks',
    icon: 'backend',
    skills: [
      { name: 'Python', level: 90, icon: 'python' },
      { name: 'Java (SpringBoot)', level: 82, icon: 'java' },
      { name: 'PHP (Symfony, CakePHP)', level: 85, icon: 'php' },
      { name: 'C++ / C# (.NET)', level: 75, icon: 'csharp' },
      { name: 'Microservices', level: 85, icon: 'docker' }
    ]
  },
  {
    name: 'IA & Automatisation',
    icon: 'ai',
    skills: [
      { name: 'Protocole MCP (FastMCP)', level: 92, icon: 'python' },
      { name: 'n8n & Webhooks', level: 90, icon: 'n8n' },
      { name: 'LLM (Mistral, Whisper)', level: 88, icon: 'ai' },
      { name: 'PyTorch', level: 75, icon: 'pytorch' }
    ]
  },
  {
    name: 'ERP & Bases de données',
    icon: 'database',
    skills: [
      { name: 'ERP Odoo (Modules custom)', level: 90, icon: 'odoo' },
      { name: 'PostgreSQL', level: 88, icon: 'postgresql' },
      { name: 'MySQL / Oracle', level: 85, icon: 'mysql' },
      { name: 'MongoDB', level: 80, icon: 'mongodb' }
    ]
  },
  {
    name: 'DevOps & Qualité',
    icon: 'devops',
    skills: [
      { name: 'OAuth Keycloak', level: 88, icon: 'keycloak' },
      { name: 'Docker', level: 82, icon: 'docker' },
      { name: 'CI/CD (GitHub / GitLab)', level: 85, icon: 'git' },
      { name: 'Jest / JUnit / E2E', level: 85, icon: 'jest' },
      { name: 'Agile & Lead Technique', level: 90, icon: 'agile' }
    ]
  }
];

export const TECH_FILTERS = ['Tous', 'Full-Stack', 'React', 'Angular', 'IA & Automation', 'Backend', 'Python', 'Mobile', 'ERP'];

