import { Injectable, Inject } from '@angular/core';
import { ProjectEntity } from '../../../domain/project/entities/project.entity';
import { IProjectRepository } from '../../../domain/project/repositories/project.repository';
import { PROJECT_REPOSITORY_TOKEN } from '../../tokens/injection-tokens';

/**
 * Use Case — Récupère la liste complète des projets.
 * Responsabilité unique : déléguer la requête au repository.
 */
@Injectable({ providedIn: 'root' })
export class GetAllProjectsUseCase {
  constructor(
    @Inject(PROJECT_REPOSITORY_TOKEN)
    private readonly projectRepository: IProjectRepository
  ) {}

  execute(): ProjectEntity[] {
    return this.projectRepository.findAll();
  }
}
