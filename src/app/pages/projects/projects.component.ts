import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectStateService } from '../../presentation/services/project-state.service';
import { ProjectFilterLabel } from '../../shared-kernel/constants/filter.constants';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent],
  template: `
    <div class="page-enter">
      <section class="projects-page section">
        <div class="bg-grid"></div>
        <div class="container">
          <!-- Header (Reusable Component) -->
          <app-section-header
            label="Portfolio"
            title="Mes"
            highlight="Projets"
            subtitle="Découvrez une sélection de mes réalisations — du frontend élégant au backend robuste."
          ></app-section-header>

          <!-- Filters -->
          <div class="filters">
            @for (filter of stateService.availableFilters; track filter) {
              <button
                class="filter-btn"
                [class.active]="stateService.currentFilter().label === filter"
                (click)="applyFilter(filter)"
              >
                {{ filter }}
              </button>
            }
          </div>

          <!-- Projects grid -->
          <div class="projects-grid">
            @for (project of stateService.filteredProjects(); track project.id.value) {
              <article class="project-card" [class.featured]="project.isFeatured()">
                <!-- Image placeholder -->
                <div class="project-image">
                  <div class="project-image-placeholder">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10l2.5 3.01L11 10l4 5H6l.01-.99.09-1.01.9-3z"/></svg>
                  </div>
                  @if (project.isFeatured()) {
                    <span class="featured-label">Featured</span>
                  }
                  <div class="project-overlay">
                    <div class="overlay-links">
                      @if (project.githubUrl) {
                        <a [href]="project.githubUrl" target="_blank" rel="noopener" class="overlay-link" title="GitHub">
                          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.137 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                        </a>
                      }
                      @if (project.liveUrl) {
                        <a [href]="project.liveUrl" target="_blank" rel="noopener" class="overlay-link" title="Démo">
                          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                        </a>
                      }
                    </div>
                  </div>
                </div>

                <!-- Card content -->
                <div class="project-content">
                  <div class="project-meta">
                    <span class="project-year">{{ project.year }}</span>
                    @for (cat of project.categories.slice(0, 2); track cat) {
                      <span class="badge">{{ cat }}</span>
                    }
                  </div>
                  <h3>{{ project.title }}</h3>
                  <p>{{ project.description }}</p>
                  <div class="project-tech-stack">
                    @for (tech of project.technologies; track tech) {
                      <span class="tag">{{ tech }}</span>
                    }
                  </div>
                </div>
              </article>
            }
          </div>

          <!-- Empty state -->
          @if (stateService.filteredProjects().length === 0) {
            <div class="empty-state">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>
              <p>Aucun projet dans cette catégorie.</p>
              <button class="btn-outline" (click)="resetFilter()">Voir tous les projets</button>
            </div>
          }
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(public readonly stateService: ProjectStateService) {}

  applyFilter(label: ProjectFilterLabel): void {
    this.stateService.applyFilter(label);
  }

  resetFilter(): void {
    this.stateService.applyFilter('Tous');
  }
}
