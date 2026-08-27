import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectStateService } from '../../presentation/services/project-state.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-enter">
      <section class="skills-page section">
        <div class="bg-grid"></div>
        <div class="container">
          <!-- Header -->
          <div class="section-header">
            <span class="page-label">Expertise</span>
            <h1>Mes <span>Compétences</span></h1>
            <div class="section-line"></div>
            <p>Un aperçu des technologies et outils que je maîtrise pour concevoir des solutions robustes.</p>
          </div>

          <!-- Skills categories -->
          <div class="skills-container">
            @for (category of stateService.skillCategories(); track category.name; let i = $index) {
              <div class="skill-category">
                <div class="category-header">
                  <span class="category-icon">{{ category.icon }}</span>
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
