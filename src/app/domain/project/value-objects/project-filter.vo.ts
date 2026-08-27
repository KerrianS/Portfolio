import { Result } from '../../../shared-kernel/types/result.type';
import {
  ALL_FILTER_LABEL,
  PROJECT_FILTER_LABELS,
  ProjectFilterLabel,
} from '../../../shared-kernel/constants/filter.constants';

/**
 * Value Object — Filtre actif sur la liste des projets.
 * Invariant : la valeur doit appartenir aux labels autorisés.
 */
export class ProjectFilter {
  private constructor(private readonly _label: ProjectFilterLabel) {}

  static createDefault(): ProjectFilter {
    return new ProjectFilter(ALL_FILTER_LABEL);
  }

  static create(label: string): Result<ProjectFilter> {
    const isValid = (PROJECT_FILTER_LABELS as readonly string[]).includes(label);
    if (!isValid) {
      return Result.fail(
        new Error(
          `Filtre invalide : "${label}". Valeurs autorisées : ${PROJECT_FILTER_LABELS.join(', ')}.`
        )
      );
    }
    return Result.ok(new ProjectFilter(label as ProjectFilterLabel));
  }

  get label(): ProjectFilterLabel {
    return this._label;
  }

  isAll(): boolean {
    return this._label === ALL_FILTER_LABEL;
  }

  equals(other: ProjectFilter): boolean {
    return this._label === other._label;
  }

  toString(): string {
    return this._label;
  }
}
