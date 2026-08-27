import { Injectable, Inject } from '@angular/core';
import { ProjectEntity } from '../../../domain/project/entities/project.entity';
import { IProjectRepository } from '../../../domain/project/repositories/project.repository';
import { PROJECT_REPOSITORY_TOKEN } from '../../tokens/injection-tokens';

/**
 * Use Case — Récupère uniquement les projets mis en vedette.
 */
@Injectable({ providedIn: 'root' })
export class GetFeaturedProjectsUseCase {
  constructor(
    @Inject(PROJECT_REPOSITORY_TOKEN)
    private readonly projectRepository: IProjectRepository
  ) {}

  execute(): ProjectEntity[] {
    return this.projectRepository.findFeatured();
  }
}
