/**
 * Result<T, E> pattern — alternative propre aux exceptions.
 * Rend explicite le succès ou l'échec d'une opération.
 */

export type Result<T, E = Error> = Success<T> | Failure<E>;

export interface Success<T> {
  readonly ok: true;
  readonly value: T;
}

export interface Failure<E> {
  readonly ok: false;
  readonly error: E;
}

export const Result = {
  ok<T>(value: T): Success<T> {
    return { ok: true, value };
  },

  fail<E>(error: E): Failure<E> {
    return { ok: false, error };
  },

  isSuccess<T, E>(result: Result<T, E>): result is Success<T> {
    return result.ok;
  },

  isFailure<T, E>(result: Result<T, E>): result is Failure<E> {
    return !result.ok;
  },
};
