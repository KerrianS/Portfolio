import { Injectable, signal, computed } from '@angular/core';
import { Project, SkillCategory } from '../models/portfolio.models';
import { PROJECTS, SKILL_CATEGORIES, TECH_FILTERS } from '../data/portfolio.data';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly _projects = signal<Project[]>(PROJECTS);
  private readonly _activeFilter = signal<string>('Tous');
  private readonly _skillCategories = signal<SkillCategory[]>(SKILL_CATEGORIES);

  // Public signals
  readonly projects = this._projects.asReadonly();
  readonly activeFilter = this._activeFilter.asReadonly();
  readonly skillCategories = this._skillCategories.asReadonly();
  readonly filters = TECH_FILTERS;

  readonly filteredProjects = computed(() => {
    const filter = this._activeFilter();
    if (filter === 'Tous') return this._projects();
    return this._projects().filter(p => p.category.includes(filter));
  });

  readonly featuredProjects = computed(() =>
    this._projects().filter(p => p.featured)
  );

  setFilter(filter: string) {
    this._activeFilter.set(filter);
  }

  getProjectById(id: number) {
    return this._projects().find(p => p.id === id);
  }
}
