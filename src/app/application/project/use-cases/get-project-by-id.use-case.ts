import { Injectable, Inject } from '@angular/core';
import { ProjectEntity } from '../../../domain/project/entities/project.entity';
import { ProjectId } from '../../../domain/project/value-objects/project-id.vo';
import { IProjectRepository } from '../../../domain/project/repositories/project.repository';
import { Result } from '../../../shared-kernel/types/result.type';
import { PROJECT_REPOSITORY_TOKEN } from '../../tokens/injection-tokens';

/**
 * Use Case — Récupère un projet par son identifiant.
 * Retourne un Result pour forcer la gestion du cas "non trouvé".
 */
@Injectable({ providedIn: 'root' })
export class GetProjectByIdUseCase {
  constructor(
    @Inject(PROJECT_REPOSITORY_TOKEN)
    private readonly projectRepository: IProjectRepository
  ) {}

  execute(id: ProjectId): Result<ProjectEntity> {
    const project = this.projectRepository.findById(id);

    if (!project) {
      return Result.fail(
        new Error(`Aucun projet trouvé avec l'identifiant ${id}.`)
      );
    }

    return Result.ok(project);
  }
}
