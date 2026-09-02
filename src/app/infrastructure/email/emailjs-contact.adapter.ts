import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { ContactMessage } from '../../domain/contact/value-objects/contact-message.vo';
import { Result } from '../../shared-kernel/types/result.type';
import { IContactAdapter } from '../../application/contact/use-cases/send-contact-message.use-case';

@Injectable()
export class EmailJSContactAdapter implements IContactAdapter {
  async send(message: ContactMessage): Promise<Result<void>> {
    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          name:         message.name,
          from_name:    message.name,
          email:        message.email,
          from_email:   message.email,
          reply_to:     message.email,
          subject:      message.subject,
          message:      message.message,
        },
        environment.emailjs.publicKey
      );

      return Result.ok(undefined);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : (typeof error === 'object' && error !== null && 'text' in error ? String((error as any).text) : 'Erreur lors de l\'envoi du message.');
      return Result.fail(new Error(errorMessage));
    }
  }
}

