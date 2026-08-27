/**
 * Constantes partagées pour les filtres de projets.
 * Élimine les magic strings dans toute l'application.
 */
export const ALL_FILTER_LABEL = 'Tous' as const;

export const PROJECT_FILTER_LABELS = [
  ALL_FILTER_LABEL,
  'Frontend',
  'Backend',
  'Full-Stack',
  'ERP',
  'Mobile',
  'React',
  'Angular',
  'Java',
  'Python',
] as const;

export type ProjectFilterLabel = (typeof PROJECT_FILTER_LABELS)[number];
