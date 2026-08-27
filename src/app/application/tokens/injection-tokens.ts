import { InjectionToken } from '@angular/core';
import { IProjectRepository } from '../../domain/project/repositories/project.repository';
import { ISkillRepository } from '../../domain/skill/repositories/skill.repository';
import { IContactAdapter } from '../../application/contact/use-cases/send-contact-message.use-case';

/**
 * Tokens d'injection Angular pour les interfaces DDD.
 * Permet de découpler les use cases des implémentations concrètes.
 */
export const PROJECT_REPOSITORY_TOKEN =
  new InjectionToken<IProjectRepository>('IProjectRepository');

export const SKILL_REPOSITORY_TOKEN =
  new InjectionToken<ISkillRepository>('ISkillRepository');

export const CONTACT_ADAPTER_TOKEN =
  new InjectionToken<IContactAdapter>('IContactAdapter');
