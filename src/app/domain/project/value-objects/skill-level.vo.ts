import { Result } from '../../../shared-kernel/types/result.type';

const MIN_LEVEL = 0;
const MAX_LEVEL = 100;

/**
 * Value Object — Niveau de maîtrise d'une compétence.
 * Invariant : entier compris entre 0 et 100 inclus.
 */
export class SkillLevel {
  private constructor(private readonly _value: number) {}

  static create(value: number): Result<SkillLevel> {
    if (!Number.isInteger(value) || value < MIN_LEVEL || value > MAX_LEVEL) {
      return Result.fail(
        new Error(
          `SkillLevel invalide : "${value}" doit être un entier entre ${MIN_LEVEL} et ${MAX_LEVEL}.`
        )
      );
    }
    return Result.ok(new SkillLevel(value));
  }

  get value(): number {
    return this._value;
  }

  get percentage(): string {
    return `${this._value}%`;
  }

  isProficient(): boolean {
    return this._value >= 70;
  }

  isExpert(): boolean {
    return this._value >= 90;
  }

  equals(other: SkillLevel): boolean {
    return this._value === other._value;
  }

  toString(): string {
    return this.percentage;
  }
}
