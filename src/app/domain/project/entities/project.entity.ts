import { ProjectId } from '../value-objects/project-id.vo';
import { ProjectFilterLabel } from '../../../shared-kernel/constants/filter.constants';

/**
 * Entité Projet — contient l'identité et le comportement métier.
 * Immutable après construction (toutes les propriétés sont readonly).
 */
export class ProjectEntity {
  constructor(
    public readonly id: ProjectId,
    public readonly title: string,
    public readonly description: string,
    public readonly technologies: readonly string[],
    public readonly categories: readonly ProjectFilterLabel[],
    public readonly imageUrl: string,
    public readonly year: number,
    public readonly featured: boolean,
    public readonly githubUrl?: string,
    public readonly liveUrl?: string,
    public readonly longDescription?: string
  ) {}

  isFeatured(): boolean {
    return this.featured;
  }

  belongsToCategory(category: ProjectFilterLabel): boolean {
    return this.categories.includes(category);
  }

  hasLiveDemo(): boolean {
    return !!this.liveUrl && this.liveUrl.length > 0;
  }

  hasSourceCode(): boolean {
    return !!this.githubUrl && this.githubUrl.length > 0;
  }

  hasTechnology(tech: string): boolean {
    return this.technologies
      .map(t => t.toLowerCase())
      .includes(tech.toLowerCase());
  }

  equals(other: ProjectEntity): boolean {
    return this.id.equals(other.id);
  }

  toString(): string {
    return `Project(${this.id}) — "${this.title}"`;
  }
}
