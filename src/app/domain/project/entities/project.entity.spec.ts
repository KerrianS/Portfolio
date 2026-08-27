import { ProjectEntity } from './project.entity';
import { ProjectId } from '../value-objects/project-id.vo';

/** Fabrique un ProjectId valide pour les tests. */
function makeId(value: number): ProjectId {
  const result = ProjectId.create(value);
  if (!result.ok) throw new Error(`ID de test invalide : ${value}`);
  return result.value;
}

/** Fabrique une entité projet minimale valide. */
function makeProject(overrides: Partial<ConstructorParameters<typeof ProjectEntity>[0]> = {}): ProjectEntity {
  return new ProjectEntity(
    makeId(1),
    'Portfolio Angular',
    'Un portfolio élégant construit avec Angular 17.',
    ['Angular', 'TypeScript', 'SCSS'],
    ['Frontend', 'Angular'],
    'assets/images/portfolio.jpg',
    2025,
    false,
    'https://github.com/KerrianS/portfolio',
    undefined
  );
}

describe('ProjectEntity', () => {
  describe('isFeatured()', () => {
    it('doit retourner false pour un projet non mis en vedette', () => {
      const project = new ProjectEntity(
        makeId(1), 'Titre', 'Description', [], [], '', 2025, false
      );
      expect(project.isFeatured()).toBeFalse();
    });

    it('doit retourner true pour un projet mis en vedette', () => {
      const project = new ProjectEntity(
        makeId(2), 'Titre', 'Description', [], [], '', 2025, true
      );
      expect(project.isFeatured()).toBeTrue();
    });
  });

  describe('belongsToCategory()', () => {
    it('doit retourner true si le projet appartient à la catégorie', () => {
      const project = new ProjectEntity(
        makeId(1), 'Titre', 'Description', [], ['Frontend', 'Angular'], '', 2025, false
      );
      expect(project.belongsToCategory('Frontend')).toBeTrue();
    });

    it('doit retourner false si le projet n\'appartient pas à la catégorie', () => {
      const project = new ProjectEntity(
        makeId(1), 'Titre', 'Description', [], ['Frontend'], '', 2025, false
      );
      expect(project.belongsToCategory('Backend')).toBeFalse();
    });
  });

  describe('hasLiveDemo()', () => {
    it('doit retourner true si une URL de démo est présente', () => {
      const project = new ProjectEntity(
        makeId(1), 'Titre', 'Description', [], [], '', 2025, false,
        undefined, 'https://demo.example.com'
      );
      expect(project.hasLiveDemo()).toBeTrue();
    });

    it('doit retourner false si aucune URL de démo n\'est présente', () => {
      const project = makeProject();
      expect(project.hasLiveDemo()).toBeFalse();
    });
  });

  describe('hasSourceCode()', () => {
    it('doit retourner true si un lien GitHub est présent', () => {
      const project = makeProject();
      expect(project.hasSourceCode()).toBeTrue();
    });

    it('doit retourner false si aucun lien GitHub n\'est présent', () => {
      const project = new ProjectEntity(
        makeId(1), 'Titre', 'Description', [], [], '', 2025, false
      );
      expect(project.hasSourceCode()).toBeFalse();
    });
  });

  describe('hasTechnology()', () => {
    it('doit trouver une technologie (insensible à la casse)', () => {
      const project = makeProject();
      expect(project.hasTechnology('angular')).toBeTrue();
      expect(project.hasTechnology('TYPESCRIPT')).toBeTrue();
    });

    it('doit retourner false pour une technologie absente', () => {
      const project = makeProject();
      expect(project.hasTechnology('Vue.js')).toBeFalse();
    });
  });

  describe('equals()', () => {
    it('doit considérer deux projets avec le même ID comme égaux', () => {
      const projectA = new ProjectEntity(makeId(1), 'A', 'Desc', [], [], '', 2025, false);
      const projectB = new ProjectEntity(makeId(1), 'B', 'Autre desc', [], [], '', 2024, true);
      expect(projectA.equals(projectB)).toBeTrue();
    });

    it('doit distinguer deux projets avec des IDs différents', () => {
      const projectA = new ProjectEntity(makeId(1), 'Titre', 'Desc', [], [], '', 2025, false);
      const projectB = new ProjectEntity(makeId(2), 'Titre', 'Desc', [], [], '', 2025, false);
      expect(projectA.equals(projectB)).toBeFalse();
    });
  });

  describe('toString()', () => {
    it('doit inclure l\'ID et le titre', () => {
      const project = makeProject();
      expect(project.toString()).toContain('Portfolio Angular');
    });
  });
});
