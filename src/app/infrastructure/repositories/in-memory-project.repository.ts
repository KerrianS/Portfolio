import { Injectable } from '@angular/core';
import { ProjectEntity } from '../../domain/project/entities/project.entity';
import { ProjectId } from '../../domain/project/value-objects/project-id.vo';
import { ProjectFilterLabel } from '../../shared-kernel/constants/filter.constants';
import { IProjectRepository } from '../../domain/project/repositories/project.repository';
import { SEEDED_PROJECTS } from './project-data.seed';

/**
 * Adaptateur — Implémentation in-memory du IProjectRepository.
 * Utilisé en production sans backend.
 * Facilement remplaçable par une implémentation HTTP.
 */
@Injectable()
export class InMemoryProjectRepository implements IProjectRepository {
  private readonly projects: ProjectEntity[] = SEEDED_PROJECTS;

  findAll(): ProjectEntity[] {
    return [...this.projects];
  }

  findById(id: ProjectId): ProjectEntity | undefined {
    return this.projects.find(project => project.id.equals(id));
  }

  findFeatured(): ProjectEntity[] {
    return this.projects.filter(project => project.isFeatured());
  }

  findByCategory(category: ProjectFilterLabel): ProjectEntity[] {
    return this.projects.filter(project => project.belongsToCategory(category));
  }
}
