import { SkillCategoryEntity } from '../../project/entities/skill-category.entity';

/**
 * Port (interface) — Repository des catégories de compétences.
 */
export interface ISkillRepository {
  findAllCategories(): SkillCategoryEntity[];
}
