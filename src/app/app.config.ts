import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { PROJECT_REPOSITORY_TOKEN, SKILL_REPOSITORY_TOKEN, CONTACT_ADAPTER_TOKEN } from './application/tokens/injection-tokens';
import { InMemoryProjectRepository } from './infrastructure/repositories/in-memory-project.repository';
import { InMemorySkillRepository } from './infrastructure/repositories/in-memory-skill.repository';
import { EmailJSContactAdapter } from './infrastructure/email/emailjs-contact.adapter';

/**
 * Configuration de l'application Angular.
 * Point central où les interfaces sont liées à leurs implémentations (DIP).
 * Pour changer d'implémentation (ex: HTTP, mock de test), on modifie uniquement ici.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),

    // Infrastructure — Repositories
    {
      provide: PROJECT_REPOSITORY_TOKEN,
      useClass: InMemoryProjectRepository,
    },
    {
      provide: SKILL_REPOSITORY_TOKEN,
      useClass: InMemorySkillRepository,
    },

    // Infrastructure — Adapters
    {
      provide: CONTACT_ADAPTER_TOKEN,
      useClass: EmailJSContactAdapter,
    },
  ],
};
