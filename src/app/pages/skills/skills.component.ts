import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectStateService } from '../../presentation/services/project-state.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <div class="page-enter">
      <section class="skills-page section">
        <div class="bg-grid"></div>
        <div class="container">
          <!-- Header (Reusable Component) -->
          <app-section-header
            label="Stack technique"
            title="Mes"
            highlight="Compétences"
            subtitle="Un aperçu des technologies et outils que j'utilise pour concevoir des solutions fiables et performantes."
          ></app-section-header>

          <!-- Skills categories -->
          <div class="skills-container">
            @for (category of stateService.skillCategories(); track category.name; let i = $index) {
              <div class="skill-category">
                <div class="category-header">
                  <span class="category-icon">
                    @switch (category.icon) {
                      @case ('frontend') {
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                      }
                      @case ('backend') {
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                      }
                      @case ('database') {
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                      }
                      @case ('devops') {
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                      }
                      @case ('erp') {
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                      }
                      @case ('ai') {
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                      }
                      @default {
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                      }
                    }
                  </span>
                  <h2>{{ category.name }}</h2>
                  <div class="category-line"></div>
                </div>

                <div class="skills-grid">
                  @for (skill of category.skills; track skill.name) {
                    <div class="skill-item" #skillItem>
                      <div class="skill-header">
                        <span class="skill-name">{{ skill.name }}</span>
                        <span class="skill-level">{{ skill.level.percentage }}</span>
                      </div>
                      <div class="skill-bar">
                        <div
                          class="skill-fill"
                          [style.width.%]="skill.level.value"
                          [style.--level]="skill.level.percentage"
                        ></div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            }
          </div>

          <!-- Tech badges cloud -->
          <div class="tech-cloud-section">
            <h2 class="cloud-title">Toutes mes <span class="text-gold">technologies</span></h2>
            <div class="tech-cloud">
              @for (tech of allTechs; track tech.name) {
                <span class="tech-cloud-badge" [class]="'tier-' + tech.tier">
                  {{ tech.name }}
                </span>
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  constructor(public readonly stateService: ProjectStateService) {}

  allTechs = [
    { name: 'Angular', tier: 1 },
    { name: 'React', tier: 1 },
    { name: 'TypeScript', tier: 1 },
    { name: 'JavaScript', tier: 1 },
    { name: 'Node.js', tier: 1 },
    { name: 'NestJS', tier: 2 },
    { name: 'Python', tier: 2 },
    { name: 'Java', tier: 2 },
    { name: 'Spring Boot', tier: 2 },
    { name: 'PHP', tier: 2 },
    { name: 'Symfony', tier: 3 },
    { name: 'Laravel', tier: 3 },
    { name: 'PostgreSQL', tier: 2 },
    { name: 'MySQL', tier: 2 },
    { name: 'MongoDB', tier: 2 },
    { name: 'Docker', tier: 2 },
    { name: 'Git', tier: 1 },
    { name: 'GitHub', tier: 1 },
    { name: 'SCSS', tier: 2 },
    { name: 'REST API', tier: 2 },
    { name: 'Odoo', tier: 2 },
    { name: 'Vue.js', tier: 3 },
    { name: 'Redux', tier: 3 },
    { name: 'Linux', tier: 3 },
    { name: 'Swagger', tier: 3 },
  ];
}
