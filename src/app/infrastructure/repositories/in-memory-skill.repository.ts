import { Injectable } from '@angular/core';
import { SkillCategoryEntity } from '../../domain/project/entities/skill-category.entity';
import { ISkillRepository } from '../../domain/skill/repositories/skill.repository';
import { SEEDED_SKILL_CATEGORIES } from './project-data.seed';

/**
 * Adaptateur — Implémentation in-memory du ISkillRepository.
 */
@Injectable()
export class InMemorySkillRepository implements ISkillRepository {
  private readonly categories: SkillCategoryEntity[] = SEEDED_SKILL_CATEGORIES;

  findAllCategories(): SkillCategoryEntity[] {
    return [...this.categories];
  }
}
