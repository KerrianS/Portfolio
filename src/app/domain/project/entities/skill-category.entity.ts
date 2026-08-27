import { SkillLevel } from '../value-objects/skill-level.vo';

/**
 * Entité Compétence individuelle.
 */
export class SkillEntity {
  constructor(
    public readonly name: string,
    public readonly level: SkillLevel,
    public readonly icon?: string
  ) {}

  isProficient(): boolean {
    return this.level.isProficient();
  }

  isExpert(): boolean {
    return this.level.isExpert();
  }

  equals(other: SkillEntity): boolean {
    return this.name.toLowerCase() === other.name.toLowerCase();
  }

  toString(): string {
    return `Skill("${this.name}", ${this.level})`;
  }
}

/**
 * Entité Catégorie de compétences.
 * Agrège plusieurs SkillEntity sous un libellé.
 */
export class SkillCategoryEntity {
  constructor(
    public readonly name: string,
    public readonly icon: string,
    public readonly skills: readonly SkillEntity[]
  ) {}

  get proficientSkills(): readonly SkillEntity[] {
    return this.skills.filter(skill => skill.isProficient());
  }

  get expertSkills(): readonly SkillEntity[] {
    return this.skills.filter(skill => skill.isExpert());
  }

  containsSkill(skillName: string): boolean {
    return this.skills.some(
      skill => skill.name.toLowerCase() === skillName.toLowerCase()
    );
  }

  toString(): string {
    return `SkillCategory("${this.name}", ${this.skills.length} compétences)`;
  }
}
