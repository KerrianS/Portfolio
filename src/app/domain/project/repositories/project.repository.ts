import { ProjectEntity } from '../entities/project.entity';
import { ProjectId } from '../value-objects/project-id.vo';
import { ProjectFilterLabel } from '../../../shared-kernel/constants/filter.constants';

/**
 * Port (interface) — Repository des projets.
 * Définit le contrat que toute implémentation doit respecter.
 * La couche Application dépend de cette interface, jamais d'une implémentation.
 */
export interface IProjectRepository {
  findAll(): ProjectEntity[];
  findById(id: ProjectId): ProjectEntity | undefined;
  findFeatured(): ProjectEntity[];
  findByCategory(category: ProjectFilterLabel): ProjectEntity[];
}
