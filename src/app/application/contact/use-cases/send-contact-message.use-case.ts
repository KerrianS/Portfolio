import { Injectable, Inject } from '@angular/core';
import { ContactMessage } from '../../../domain/contact/value-objects/contact-message.vo';
import { Result } from '../../../shared-kernel/types/result.type';
import { CONTACT_ADAPTER_TOKEN } from '../../tokens/injection-tokens';

/**
 * Port (interface) — Adaptateur d'envoi de message de contact.
 * Permet de swapper EmailJS par n'importe quel autre service.
 */
export interface IContactAdapter {
  send(message: ContactMessage): Promise<Result<void>>;
}

/**
 * Use Case — Envoie un message de contact validé.
 * Délègue l'envoi effectif à l'adaptateur injecté.
 */
@Injectable({ providedIn: 'root' })
export class SendContactMessageUseCase {
  constructor(
    @Inject(CONTACT_ADAPTER_TOKEN)
    private readonly contactAdapter: IContactAdapter
  ) {}

  async execute(
    name: string,
    email: string,
    subject: string,
    message: string
  ): Promise<Result<void>> {
    const messageResult = ContactMessage.create(name, email, subject, message);

    if (!messageResult.ok) {
      return Result.fail(messageResult.error);
    }

    return this.contactAdapter.send(messageResult.value);
  }
}
