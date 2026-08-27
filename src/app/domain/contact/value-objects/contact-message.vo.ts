import { Result } from '../../../shared-kernel/types/result.type';

const MIN_MESSAGE_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Value Object — Message de contact validé.
 * Invariants :
 *  - name     : non vide, min 2 caractères
 *  - email    : format valide
 *  - subject  : non vide, min 3 caractères
 *  - message  : entre 20 et 2000 caractères
 */
export class ContactMessage {
  private constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly subject: string,
    public readonly message: string
  ) {}

  static create(
    name: string,
    email: string,
    subject: string,
    message: string
  ): Result<ContactMessage> {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      return Result.fail(new Error('Le nom doit comporter au moins 2 caractères.'));
    }

    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      return Result.fail(new Error(`"${trimmedEmail}" n'est pas un email valide.`));
    }

    if (trimmedSubject.length < 3) {
      return Result.fail(new Error('Le sujet doit comporter au moins 3 caractères.'));
    }

    if (
      trimmedMessage.length < MIN_MESSAGE_LENGTH ||
      trimmedMessage.length > MAX_MESSAGE_LENGTH
    ) {
      return Result.fail(
        new Error(
          `Le message doit contenir entre ${MIN_MESSAGE_LENGTH} et ${MAX_MESSAGE_LENGTH} caractères.`
        )
      );
    }

    return Result.ok(
      new ContactMessage(trimmedName, trimmedEmail, trimmedSubject, trimmedMessage)
    );
  }

  toString(): string {
    return `ContactMessage(from: ${this.email}, subject: ${this.subject})`;
  }
}
