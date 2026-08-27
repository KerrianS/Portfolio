import { Result } from '../../../shared-kernel/types/result.type';

/**
 * Value Object — Identifiant d'un projet.
 * Invariant : doit être un entier strictement positif.
 */
export class ProjectId {
  private constructor(private readonly _value: number) {}

  static create(value: number): Result<ProjectId> {
    if (!Number.isInteger(value) || value <= 0) {
      return Result.fail(
        new Error(`ProjectId invalide : "${value}" doit être un entier positif.`)
      );
    }
    return Result.ok(new ProjectId(value));
  }

  get value(): number {
    return this._value;
  }

  equals(other: ProjectId): boolean {
    return this._value === other._value;
  }

  toString(): string {
    return `ProjectId(${this._value})`;
  }
}
