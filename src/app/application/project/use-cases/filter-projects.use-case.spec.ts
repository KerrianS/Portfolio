import { FilterProjectsUseCase } from './filter-projects.use-case';
import { IProjectRepository } from '../../../domain/project/repositories/project.repository';
import { ProjectEntity } from '../../../domain/project/entities/project.entity';
import { ProjectFilter } from '../../../domain/project/value-objects/project-filter.vo';
import { ProjectId } from '../../../domain/project/value-objects/project-id.vo';

/** Fabrique un projet de test. */
function makeTestProject(id: number, categories: string[], featured = false): ProjectEntity {
  const idResult = ProjectId.create(id);
  if (!idResult.ok) throw new Error('ID invalide dans le test');

  return new ProjectEntity(
    idResult.value,
    `Projet ${id}`,
    'Description de test',
    ['Angular'],
    categories as any,
    '',
    2025,
    featured
  );
}

/** Mock du repository — injecté à la place de l'implémentation réelle. */
class MockProjectRepository implements IProjectRepository {
  private readonly projects: ProjectEntity[];

  constructor(projects: ProjectEntity[]) {
    this.projects = projects;
  }

  findAll(): ProjectEntity[] {
    return this.projects;
  }

  findById(id: ProjectId): ProjectEntity | undefined {
    return this.projects.find(p => p.id.equals(id));
  }

  findFeatured(): ProjectEntity[] {
    return this.projects.filter(p => p.isFeatured());
  }

  findByCategory(category: any): ProjectEntity[] {
    return this.projects.filter(p => p.belongsToCategory(category));
  }
}

describe('FilterProjectsUseCase', () => {
  let useCase: FilterProjectsUseCase;
  let repository: MockProjectRepository;

  const projectFrontend = makeTestProject(1, ['Frontend', 'Angular']);
  const projectBackend  = makeTestProject(2, ['Backend']);
  const projectFullStack = makeTestProject(3, ['Full-Stack', 'Frontend']);

  beforeEach(() => {
    repository = new MockProjectRepository([projectFrontend, projectBackend, projectFullStack]);
    useCase = new FilterProjectsUseCase(repository);
  });

  describe('execute() — filtre "Tous"', () => {
    it('doit retourner tous les projets', () => {
      const filter = ProjectFilter.createDefault();
      const result = useCase.execute(filter);
      expect(result.length).toBe(3);
    });
  });

  describe('execute() — filtre par catégorie', () => {
    it('doit retourner uniquement les projets Frontend', () => {
      const filterResult = ProjectFilter.create('Frontend');
      expect(filterResult.ok).toBeTrue();
      if (!filterResult.ok) return;

      const result = useCase.execute(filterResult.value);
      expect(result.length).toBe(2);
      expect(result.every(p => p.belongsToCategory('Frontend'))).toBeTrue();
    });

    it('doit retourner uniquement les projets Backend', () => {
      const filterResult = ProjectFilter.create('Backend');
      expect(filterResult.ok).toBeTrue();
      if (!filterResult.ok) return;

      const result = useCase.execute(filterResult.value);
      expect(result.length).toBe(1);
      expect(result[0]).toEqual(projectBackend);
    });

    it('doit retourner une liste vide si aucun projet ne correspond', () => {
      const filterResult = ProjectFilter.create('Mobile');
      expect(filterResult.ok).toBeTrue();
      if (!filterResult.ok) return;

      const result = useCase.execute(filterResult.value);
      expect(result).toEqual([]);
    });
  });
});
