import { GetFeaturedProjectsUseCase } from './get-featured-projects.use-case';
import { IProjectRepository } from '../../../domain/project/repositories/project.repository';
import { ProjectEntity } from '../../../domain/project/entities/project.entity';
import { ProjectId } from '../../../domain/project/value-objects/project-id.vo';

function makeTestProject(id: number, featured: boolean): ProjectEntity {
  const idResult = ProjectId.create(id);
  if (!idResult.ok) throw new Error('ID invalide dans le test');

  return new ProjectEntity(
    idResult.value,
    `Projet ${id}`,
    'Description',
    [],
    [],
    '',
    2025,
    featured
  );
}

class MockProjectRepository implements IProjectRepository {
  constructor(private readonly projects: ProjectEntity[]) {}

  findAll(): ProjectEntity[] { return this.projects; }
  findById(id: ProjectId): ProjectEntity | undefined {
    return this.projects.find(p => p.id.equals(id));
  }
  findFeatured(): ProjectEntity[] {
    return this.projects.filter(p => p.isFeatured());
  }
  findByCategory(): ProjectEntity[] { return []; }
}

describe('GetFeaturedProjectsUseCase', () => {
  it('doit retourner uniquement les projets featured', () => {
    const projects = [
      makeTestProject(1, true),
      makeTestProject(2, false),
      makeTestProject(3, true),
    ];
    const useCase = new GetFeaturedProjectsUseCase(new MockProjectRepository(projects));

    const result = useCase.execute();

    expect(result.length).toBe(2);
    expect(result.every(p => p.isFeatured())).toBeTrue();
  });

  it('doit retourner une liste vide s\'il n\'y a aucun projet featured', () => {
    const useCase = new GetFeaturedProjectsUseCase(
      new MockProjectRepository([makeTestProject(1, false)])
    );
    expect(useCase.execute()).toEqual([]);
  });

  it('doit retourner une liste vide si le repository est vide', () => {
    const useCase = new GetFeaturedProjectsUseCase(new MockProjectRepository([]));
    expect(useCase.execute()).toEqual([]);
  });
});
