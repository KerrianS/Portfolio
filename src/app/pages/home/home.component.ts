import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectStateService } from '../../presentation/services/project-state.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-page">
      <!-- Grid background -->
      <div class="bg-grid"></div>

      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-bg-blur"></div>
        <div class="container">
          <div class="hero-content">
            <!-- Badge -->
            <div class="hero-badge animate-fade-up">
              <span class="badge-dot"></span>
              Disponible pour de nouveaux projets
            </div>

            <!-- Greeting -->
            <p class="hero-greeting animate-fade-up delay-1">Bonjour, je suis</p>

            <!-- Name -->
            <h1 class="hero-name animate-fade-up delay-2">
              <span class="name-first">Kerrian</span>
            </h1>

            <!-- Role avec typewriter -->
            <div class="hero-role animate-fade-up delay-3">
              <span class="role-prefix">— </span>
              <span class="role-text">{{ displayedRole() }}</span>
              <span class="cursor" [class.blink]="cursorBlink()">|</span>
            </div>

            <!-- Description -->
            <p class="hero-description animate-fade-up delay-4">
              Je conçois et développe des applications web <span class="text-gold">élégantes</span> et <span class="text-gold">performantes</span>,
              du frontend Angular/React jusqu'au backend Node.js, Java & Python.
            </p>

            <!-- CTAs -->
            <div class="hero-actions animate-fade-up delay-5">
              <a routerLink="/projects" class="btn-primary">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                Voir mes projets
              </a>
              <a routerLink="/contact" class="btn-outline">
                Me contacter
              </a>
            </div>

            <!-- Stack badges -->
            <div class="hero-stack animate-fade-up delay-6">
              <span class="stack-label">Stack principale :</span>
              <div class="stack-badges">
                @for (tech of mainTechs; track tech) {
                  <span class="stack-badge">{{ tech }}</span>
                }
              </div>
            </div>
          </div>

          <!-- Hero visual -->
          <div class="hero-visual animate-fade-up delay-3">
            <div class="code-card">
              <div class="code-header">
                <span class="code-dot red"></span>
                <span class="code-dot yellow"></span>
                <span class="code-dot green"></span>
                <span class="code-filename">kerrian.ts</span>
              </div>
              <pre class="code-body"><code><span class="kw">const</span> <span class="var">developer</span> = &#123;
  <span class="prop">name</span>: <span class="str">'Kerrian'</span>,
  <span class="prop">role</span>: <span class="str">'Software Engineer'</span>,
  <span class="prop">location</span>: <span class="str">'France 🇫🇷'</span>,
  <span class="prop">skills</span>: [
    <span class="str">'Angular'</span>, <span class="str">'React'</span>,
    <span class="str">'Node.js'</span>, <span class="str">'Java'</span>,
    <span class="str">'Python'</span>, <span class="str">'Docker'</span>
  ],
  <span class="prop">passion</span>: <span class="str">'Clean code ✨'</span>,
  <span class="prop">available</span>: <span class="bool">true</span>
&#125;;</code></pre>
            </div>

            <!-- Floating badges -->
            <div class="floating-badge badge-1">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              6+ projets
            </div>
            <div class="floating-badge badge-2">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
              Full-Stack
            </div>
            <div class="floating-badge badge-3">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16"><path d="M20 6H4V4h16v2zm-2 10H6v-2h12v2zm-4-5H8V9h6v2z"/></svg>
              TypeScript
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="scroll-indicator">
          <span>Scroll</span>
          <div class="scroll-line"></div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats-section">
        <div class="container">
          <div class="stats-grid">
            @for (stat of stats; track stat.label) {
              <div class="stat-card">
                <span class="stat-value">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Featured projects preview -->
      <section class="featured-section section">
        <div class="container">
          <div class="section-header">
            <h2>Projets <span>en vedette</span></h2>
            <div class="section-line"></div>
            <p>Une sélection de mes réalisations les plus récentes</p>
          </div>

          <div class="projects-preview">
            @for (project of featuredProjects(); track project.id) {
              <div class="project-preview-card">
                <div class="project-number">0{{ $index + 1 }}</div>
                <div class="project-info">
                  <h3>{{ project.title }}</h3>
                  <p>{{ project.description }}</p>
                  <div class="project-techs">
                    @for (tech of project.technologies.slice(0, 3); track tech) {
                      <span class="tag">{{ tech }}</span>
                    }
                  </div>
                </div>
                <div class="project-links">
                  @if (project.githubUrl) {
                    <a [href]="project.githubUrl" target="_blank" class="project-link">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.137 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                    </a>
                  }
                  <a routerLink="/projects" class="project-link arrow">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                  </a>
                </div>
              </div>
            }
          </div>

          <div class="see-all-wrapper">
            <a routerLink="/projects" class="btn-outline">
              Voir tous les projets
              <svg viewBox="0 0 24 24" fill="currentColor" width="16"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  displayedRole = signal('');
  cursorBlink = signal(true);

  featuredProjects = this.projectStateService.featuredProjects;

  mainTechs = ['Angular', 'React', 'TypeScript', 'Node.js', 'C#', 'Python'];

  stats = [
    { value: '6+', label: 'Projets réalisés' },
    { value: '10+', label: 'Technologies maîtrisées' },
    { value: '3+', label: "Années d'expérience" },
    { value: '100%', label: 'Passion & engagement' },
  ];

  private roles = [
    'Software Engineer',
    'Développeur Full-Stack',
    'Passionné ReactJS',
    'Problem Solver',
  ];

  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeTimer?: ReturnType<typeof setTimeout>;

  constructor(private readonly projectStateService: ProjectStateService) { }

  ngOnInit() {
    this.typeRole();
  }

  ngOnDestroy() {
    if (this.typeTimer) clearTimeout(this.typeTimer);
  }

  private typeRole() {
    const currentRole = this.roles[this.roleIndex];

    if (!this.isDeleting) {
      this.displayedRole.set(currentRole.slice(0, this.charIndex));
      this.charIndex++;

      if (this.charIndex > currentRole.length) {
        // Pausa de 2 segundos una vez la palabra esté completa
        this.isDeleting = true;
        this.typeTimer = setTimeout(() => this.typeRole(), 2000);
        return;
      }
      this.typeTimer = setTimeout(() => this.typeRole(), 100);
    } else {
      this.displayedRole.set(currentRole.slice(0, this.charIndex));
      this.charIndex--;

      if (this.charIndex < 0) {
        // Pasar a la siguiente palabra
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        this.charIndex = 0;
        this.typeTimer = setTimeout(() => this.typeRole(), 300);
        return;
      }
      this.typeTimer = setTimeout(() => this.typeRole(), 50);
    }
  }
}
