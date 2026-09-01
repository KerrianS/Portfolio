import { ProjectEntity } from '../../domain/project/entities/project.entity';
import { SkillCategoryEntity, SkillEntity } from '../../domain/project/entities/skill-category.entity';
import { ProjectId } from '../../domain/project/value-objects/project-id.vo';
import { SkillLevel } from '../../domain/project/value-objects/skill-level.vo';
import { ProjectFilterLabel } from '../../shared-kernel/constants/filter.constants';

/**
 * Jeu de données de démarrage — Infrastructure.
 * Seule responsabilité : construire les entités depuis des données brutes.
 */

function buildProjectId(value: number): ProjectId {
  const result = ProjectId.create(value);
  if (!result.ok) throw new Error(`Seed invalide — ProjectId(${value}): ${result.error.message}`);
  return result.value;
}

function buildSkillLevel(value: number): SkillLevel {
  const result = SkillLevel.create(value);
  if (!result.ok) throw new Error(`Seed invalide — SkillLevel(${value}): ${result.error.message}`);
  return result.value;
}

export const SEEDED_PROJECTS: ProjectEntity[] = [
  new ProjectEntity(
    buildProjectId(1),
    'Portfolio Personnel',
    'Portfolio Angular 17 élégant avec animations SCSS, design system custom et formulaire de contact EmailJS.',
    ['Angular', 'TypeScript', 'SCSS', 'EmailJS'],
    ['Frontend', 'Angular'] satisfies ProjectFilterLabel[],
    'assets/images/project-portfolio.jpg',
    2025,
    true,
    'https://github.com/KerrianS/portfolio',
    undefined,
    'Portfolio moderne développé avec Angular 17 (standalone components), TypeScript et SCSS custom.'
  ),
  new ProjectEntity(
    buildProjectId(2),
    'Application de Gestion',
    'Application full-stack de gestion avec Angular, NestJS et PostgreSQL. Authentification JWT, CRUD complet.',
    ['Angular', 'NestJS', 'PostgreSQL', 'TypeScript', 'Docker'],
    ['Full-Stack', 'Angular', 'Backend'] satisfies ProjectFilterLabel[],
    'assets/images/project-gestion.jpg',
    2024,
    true,
    'https://github.com/KerrianS',
  ),
  new ProjectEntity(
    buildProjectId(3),
    'API REST Spring Boot',
    'API REST robuste avec Spring Boot, sécurisée par Spring Security + JWT. Documentation Swagger intégrée.',
    ['Java', 'Spring Boot', 'MySQL', 'Docker', 'Swagger'],
    ['Backend', 'Java'] satisfies ProjectFilterLabel[],
    'assets/images/project-api.jpg',
    2024,
    true,
    'https://github.com/KerrianS',
  ),
  new ProjectEntity(
    buildProjectId(4),
    'Dashboard Analytics',
    'Tableau de bord analytics React avec charts interactifs, filtres dynamiques et export de données.',
    ['React', 'TypeScript', 'Chart.js', 'Node.js', 'MongoDB'],
    ['Full-Stack', 'React'] satisfies ProjectFilterLabel[],
    'assets/images/project-dashboard.jpg',
    2024,
    false,
    'https://github.com/KerrianS',
  ),
  new ProjectEntity(
    buildProjectId(5),
    'Module Odoo Custom',
    'Module Odoo personnalisé pour la gestion de processus métier spécifiques.',
    ['Odoo', 'Python', 'XML', 'PostgreSQL'],
    ['Backend', 'ERP', 'Python'] satisfies ProjectFilterLabel[],
    'assets/images/project-odoo.jpg',
    2025,
    false,
    'https://github.com/KerrianS',
  ),
  new ProjectEntity(
    buildProjectId(6),
    'Application Mobile React Native',
    'Application mobile cross-platform avec React Native, gestion d\'état Redux et navigation fluide.',
    ['React Native', 'TypeScript', 'Redux', 'Node.js'],
    ['Mobile', 'React'] satisfies ProjectFilterLabel[],
    'assets/images/project-mobile.jpg',
    2023,
    false,
    'https://github.com/KerrianS',
  ),
];

export const SEEDED_SKILL_CATEGORIES: SkillCategoryEntity[] = [
  new SkillCategoryEntity('Frontend', 'frontend', [
    new SkillEntity('Angular',     buildSkillLevel(90), 'angular'),
    new SkillEntity('React',       buildSkillLevel(80), 'react'),
    new SkillEntity('TypeScript',  buildSkillLevel(88), 'typescript'),
    new SkillEntity('JavaScript',  buildSkillLevel(90), 'javascript'),
    new SkillEntity('SCSS / CSS',  buildSkillLevel(85), 'css'),
    new SkillEntity('Vue.js',      buildSkillLevel(60), 'vue'),
  ]),
  new SkillCategoryEntity('Backend', 'backend', [
    new SkillEntity('Node.js',       buildSkillLevel(82), 'nodejs'),
    new SkillEntity('Python',        buildSkillLevel(78), 'python'),
    new SkillEntity('Java / Spring', buildSkillLevel(75), 'java'),
    new SkillEntity('PHP / Symfony', buildSkillLevel(70), 'php'),
    new SkillEntity('NestJS',        buildSkillLevel(72), 'nestjs'),
    new SkillEntity('Laravel',       buildSkillLevel(65), 'laravel'),
  ]),
  new SkillCategoryEntity('Bases de données', 'database', [
    new SkillEntity('PostgreSQL',    buildSkillLevel(80), 'postgresql'),
    new SkillEntity('MySQL / MariaDB', buildSkillLevel(82), 'mysql'),
    new SkillEntity('MongoDB',       buildSkillLevel(72), 'mongodb'),
  ]),
  new SkillCategoryEntity('DevOps & Outils', 'devops', [
    new SkillEntity('Git / GitHub', buildSkillLevel(88), 'git'),
    new SkillEntity('Docker',       buildSkillLevel(75), 'docker'),
    new SkillEntity('Linux',        buildSkillLevel(70), 'linux'),
  ]),
  new SkillCategoryEntity('ERP & Métier', 'erp', [
    new SkillEntity('Odoo',         buildSkillLevel(82), 'odoo'),
    new SkillEntity('Python (Odoo)', buildSkillLevel(78), 'python'),
  ]),
];
