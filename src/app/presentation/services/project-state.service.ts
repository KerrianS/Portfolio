import { Injectable, signal, computed, inject } from '@angular/core';
import { ProjectFilter } from '../../domain/project/value-objects/project-filter.vo';
import { ProjectEntity } from '../../domain/project/entities/project.entity';
import { GetAllProjectsUseCase } from '../../application/project/use-cases/get-all-projects.use-case';
import { GetFeaturedProjectsUseCase } from '../../application/project/use-cases/get-featured-projects.use-case';
import { FilterProjectsUseCase } from '../../application/project/use-cases/filter-projects.use-case';
import { GetProjectByIdUseCase } from '../../application/project/use-cases/get-project-by-id.use-case';
import { ISkillRepository } from '../../domain/skill/repositories/skill.repository';
import { SkillCategoryEntity } from '../../domain/project/entities/skill-category.entity';
import { PROJECT_FILTER_LABELS, ProjectFilterLabel } from '../../shared-kernel/constants/filter.constants';
import { SKILL_REPOSITORY_TOKEN } from '../../application/tokens/injection-tokens';
import { ProjectId } from '../../domain/project/value-objects/project-id.vo';
import { Result } from '../../shared-kernel/types/result.type';

/**
 * Service d'état UI — Couche Présentation.
 * Responsabilité unique : gérer l'état réactif de l'UI via Angular Signals.
 * Délègue toute logique métier aux Use Cases.
 */
@Injectable({ providedIn: 'root' })
export class ProjectStateService {
  private readonly skillRepository = inject<ISkillRepository>(SKILL_REPOSITORY_TOKEN);

  private readonly activeFilter = signal<ProjectFilter>(ProjectFilter.createDefault());

  readonly availableFilters: readonly ProjectFilterLabel[] = PROJECT_FILTER_LABELS;

  readonly currentFilter = this.activeFilter.asReadonly();

  readonly filteredProjects = computed<ProjectEntity[]>(() =>
    this.filterProjectsUseCase.execute(this.activeFilter())
  );

  readonly featuredProjects = computed<ProjectEntity[]>(() =>
    this.getFeaturedProjectsUseCase.execute()
  );

  readonly skillCategories = computed<SkillCategoryEntity[]>(() =>
    this.skillRepository.findAllCategories()
  );

  constructor(
    private readonly getAllProjectsUseCase: GetAllProjectsUseCase,
    private readonly getFeaturedProjectsUseCase: GetFeaturedProjectsUseCase,
    private readonly filterProjectsUseCase: FilterProjectsUseCase,
    private readonly getProjectByIdUseCase: GetProjectByIdUseCase
  ) {}

  applyFilter(label: ProjectFilterLabel): void {
    const filterResult = ProjectFilter.create(label);
    if (filterResult.ok) {
      this.activeFilter.set(filterResult.value);
    }
  }

  findProjectById(id: number): Result<ProjectEntity> {
    const idResult = ProjectId.create(id);
    if (!idResult.ok) return Result.fail(idResult.error);

    return this.getProjectByIdUseCase.execute(idResult.value);
  }
}
