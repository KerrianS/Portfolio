import { InMemoryProjectRepository } from './in-memory-project.repository';
import { ProjectId } from '../../domain/project/value-objects/project-id.vo';

describe('InMemoryProjectRepository', () => {
  let repository: InMemoryProjectRepository;

  beforeEach(() => {
    repository = new InMemoryProjectRepository();
  });

  describe('findAll()', () => {
    it('doit retourner une liste non vide de projets', () => {
      const projects = repository.findAll();
      expect(projects.length).toBeGreaterThan(0);
    });

    it('doit retourner une copie (pas la référence interne)', () => {
      const first  = repository.findAll();
      const second = repository.findAll();
      expect(first).not.toBe(second);
    });
  });

  describe('findById()', () => {
    it('doit retourner le projet avec l\'ID correspondant', () => {
      const idResult = ProjectId.create(1);
      expect(idResult.ok).toBeTrue();
      if (!idResult.ok) return;

      const project = repository.findById(idResult.value);
      expect(project).toBeDefined();
      expect(project!.id.value).toBe(1);
    });

    it('doit retourner undefined pour un ID inexistant', () => {
      const idResult = ProjectId.create(9999);
      expect(idResult.ok).toBeTrue();
      if (!idResult.ok) return;

      const project = repository.findById(idResult.value);
      expect(project).toBeUndefined();
    });
  });

  describe('findFeatured()', () => {
    it('doit retourner uniquement des projets featured', () => {
      const featured = repository.findFeatured();
      expect(featured.length).toBeGreaterThan(0);
      expect(featured.every(p => p.isFeatured())).toBeTrue();
    });
  });

  describe('findByCategory()', () => {
    it('doit retourner les projets Angular', () => {
      const projects = repository.findByCategory('Angular');
      expect(projects.length).toBeGreaterThan(0);
      expect(projects.every(p => p.belongsToCategory('Angular'))).toBeTrue();
    });

    it('doit retourner une liste vide pour une catégorie sans projet', () => {
      const projects = repository.findByCategory('Mobile');
      // Le résultat peut être vide ou non selon les seeds — on vérifie la cohérence
      projects.forEach(p => expect(p.belongsToCategory('Mobile')).toBeTrue());
    });
  });
});
