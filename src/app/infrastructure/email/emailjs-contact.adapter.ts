import { Injectable } from '@angular/core';
import { ContactMessage } from '../../domain/contact/value-objects/contact-message.vo';
import { Result } from '../../shared-kernel/types/result.type';
import { IContactAdapter } from '../../application/contact/use-cases/send-contact-message.use-case';

/**
 * Adaptateur EmailJS pour l'envoi de messages de contact.
 *
 * Configuration requise :
 *  1. Créer un compte sur https://www.emailjs.com/
 *  2. Remplacer les constantes ci-dessous par vos identifiants
 *  3. Installer : npm install @emailjs/browser
 */
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

@Injectable()
export class EmailJSContactAdapter implements IContactAdapter {
  async send(message: ContactMessage): Promise<Result<void>> {
    try {
      // Décommentez après avoir installé EmailJS et configuré les constantes :
      // const emailjs = await import('@emailjs/browser');
      // await emailjs.send(
      //   EMAILJS_SERVICE_ID,
      //   EMAILJS_TEMPLATE_ID,
      //   {
      //     from_name:    message.name,
      //     from_email:   message.email,
      //     subject:      message.subject,
      //     message:      message.message,
      //   },
      //   EMAILJS_PUBLIC_KEY
      // );

      // Simulation pour la démo (à supprimer en production) :
      await this.simulateDelay();
      console.info('EmailJS simulation — message reçu :', message.toString());

      return Result.ok(undefined);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Erreur inconnue lors de l\'envoi.';
      return Result.fail(new Error(errorMessage));
    }
  }

  private simulateDelay(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 1200));
  }
}
