import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent],
  template: `
    <div class="page-enter">
      <section class="about-page section">
        <div class="bg-grid"></div>
        <div class="container">
          <!-- Header (Reusable Component) -->
          <app-section-header
            label="Qui suis-je ?"
            title="À"
            highlight="propos"
          ></app-section-header>

          <!-- Content grid -->
          <div class="about-grid">
            <!-- Avatar -->
            <div class="about-visual">
              <div class="avatar-wrapper">
                <div class="avatar-ring"></div>
                <div class="avatar-placeholder">
                  <img src="assets/kerrian.jpg" alt="Kerrian Salaün" class="avatar-img" />
                </div>
              </div>

              <!-- Quick facts -->
              <div class="quick-facts">
                @for (fact of facts; track fact.id) {
                  <div class="fact-item">
                    <span class="fact-icon">
                      @switch (fact.id) {
                        @case ('location') {
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        }
                        @case ('job') {
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        }
                        @case ('education') {
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                        }
                        @case ('languages') {
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        }
                      }
                    </span>
                    <div>
                      <span class="fact-label">{{ fact.label }}</span>
                      <span class="fact-value">{{ fact.value }}</span>
                    </div>
                  </div>
                }
              </div>
            </div>

            <!-- Bio -->
            <div class="about-content">
              <h2>Ingénieur en <span class="text-gold">développement logiciel</span></h2>
              <p>
                Ingénieur diplômé de l'école <strong>IMT Mines Alès</strong>, je suis spécialisé en développement logiciel avec <strong>3 ans d'expérience</strong> en alternance fullstack chez AITEC Service.
              </p>
              <p>
                Je conçois des applications web, mobiles, frontend/backend avec un intérêt particulier pour l'automatisation, les architectures de microservices et les outils d'IA (FastMCP, n8n, Whisper, RAG, NLP, Yolo).
              </p>
              <p>
                Autonome, rigoureux, j'aime concevoir des solutions innovantes répondant à des besoins métier concrets.
              </p>

              <div class="about-actions">
                <a href="assets/CV_SALAUN_Kerrian.pdf" download="CV_SALAUN_Kerrian.pdf" class="btn-primary">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                  Télécharger mon CV (PDF)
                </a>
                <a routerLink="/cv" class="btn-outline">
                  Consulter le CV en ligne
                </a>
              </div>
            </div>
          </div>

          <!-- Timeline -->
          <div class="timeline-section">
            <h2 class="timeline-title">Mon <span class="text-gold">parcours</span></h2>
            <div class="timeline">
              @for (item of timeline; track item.year) {
                <div class="timeline-item" [class.right]="$even">
                  <div class="timeline-content">
                    <div class="timeline-header">
                      <div class="timeline-meta">
                        <span class="type-badge" [class.type-entreprise]="item.type === 'Entreprise'" [class.type-formation]="item.type === 'Formation'">
                          @if (item.type === 'Entreprise') {
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            Entreprise
                          } @else {
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                            Formation
                          }
                        </span>
                        <span class="timeline-year">{{ item.year }}</span>
                      </div>

                      @if (item.logo) {
                        <div class="timeline-logo-badge" [title]="item.org">
                          <img [src]="item.logo" [alt]="item.org" loading="lazy" />
                        </div>
                      }
                    </div>

                    <h3>{{ item.title }}</h3>
                    <span class="timeline-org">{{ item.org }}</span>
                    <p>{{ item.description }}</p>
                  </div>
                  <div class="timeline-dot"></div>
                </div>
              }
              <div class="timeline-line"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  facts = [
    {
      id: 'location',
      label: 'Localisation',
      value: 'Perpignan, France'
    },
    {
      id: 'job',
      label: 'Poste actuel',
      value: 'Alternant Dev Logiciel (AITEC Service)'
    },
    {
      id: 'education',
      label: 'Diplôme',
      value: 'IMT Mines Alès (Ingénieur logiciel)'
    },
    {
      id: 'languages',
      label: 'Langues',
      value: 'Anglais TOEIC B2 / Espagnol B1'
    },
  ];

  timeline = [
    {
      year: '09/2023 - 09/2026',
      title: 'Alternance Développement Logiciel',
      org: 'AITEC SERVICE — Alès',
      logo: 'assets/aitecservice.png',
      type: 'Entreprise',
      description: 'Architecture microservices React/Node, OAuth Keycloak, workflows IA n8n (+30% efficacité), serveur MCP Python, app mobile Flutter Odoo, migration d\'un site PHP 5 à 8 et encadrement de 2 alternants.'
    },
    {
      year: '2023 - 2026',
      title: 'Diplôme d\'Ingénieur en Développement Logiciel',
      org: 'IMT Mines Alès',
      logo: 'assets/Logo-IMT-Mines-Ales.jpg',
      type: 'Formation',
      description: 'Formation d\'ingénieur spécialisée en conception logicielle, architectures distribuées, automatisation et IA.'
    },
    {
      year: '2022 - 2023',
      title: 'Prépa ATS',
      org: 'Lycée Jean-Moulin — Béziers',
      logo: 'assets/jeanmoulin.png',
      type: 'Formation',
      description: 'Classe préparatoire aux grandes écoles d\'ingénieurs (mathématiques, physique, sciences de l\'ingénieur).'
    },
    {
      year: '05/2021 - 06/2021',
      title: 'Stagiaire Développeur Web',
      org: 'IFREMER — Brest',
      logo: 'assets/Ifremer.webp',
      type: 'Entreprise',
      description: 'Réalisation du site web interne avec CakePHP et requêtes SQL optimisées sous Oracle pour la gestion des 1500 salariés.'
    },
    {
      year: '2021 - 2022',
      title: 'BTS SNIR (Systèmes Numériques Option IR)',
      org: 'Lycée Pablo Picasso — Perpignan',
      logo: 'assets/picasso.png',
      type: 'Formation',
      description: 'Spécialisation informatique et réseaux. Projets de développement logiciel, réseaux et IoT.'
    },
    {
      year: '2019 - 2020',
      title: 'BAC S Option SI — Mention Bien',
      org: 'Lycée Notre Dame de Bon Secours — Perpignan',
      logo: 'assets/bonsecours.webp',
      type: 'Formation',
      description: 'Baccalauréat Scientifique option Sciences de l\'Ingénieur.'
    }
  ];
}
