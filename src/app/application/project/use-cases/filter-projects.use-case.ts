import { Injectable, Inject } from '@angular/core';
import { ProjectEntity } from '../../../domain/project/entities/project.entity';
import { ProjectFilter } from '../../../domain/project/value-objects/project-filter.vo';
import { IProjectRepository } from '../../../domain/project/repositories/project.repository';
import { PROJECT_REPOSITORY_TOKEN } from '../../tokens/injection-tokens';

/**
 * Use Case — Filtre les projets selon un critère de catégorie.
 * Retourne tous les projets si le filtre est "Tous".
 */
@Injectable({ providedIn: 'root' })
export class FilterProjectsUseCase {
  constructor(
    @Inject(PROJECT_REPOSITORY_TOKEN)
    private readonly projectRepository: IProjectRepository
  ) {}

  execute(filter: ProjectFilter): ProjectEntity[] {
    if (filter.isAll()) {
      return this.projectRepository.findAll();
    }
    return this.projectRepository.findByCategory(filter.label);
  }
}
