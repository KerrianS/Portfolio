import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-enter">
      <section class="about-page section">
        <div class="bg-grid"></div>
        <div class="container">
          <!-- Header -->
          <div class="section-header">
            <span class="page-label">Qui suis-je ?</span>
            <h1>À <span>propos</span></h1>
            <div class="section-line"></div>
          </div>

          <!-- Content grid -->
          <div class="about-grid">
            <!-- Avatar -->
            <div class="about-visual">
              <div class="avatar-wrapper">
                <div class="avatar-ring"></div>
                <div class="avatar-placeholder">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                </div>
                <div class="avatar-badge">
                  <span>✨ Open to work</span>
                </div>
              </div>

              <!-- Quick facts -->
              <div class="quick-facts">
                @for (fact of facts; track fact.label) {
                  <div class="fact-item">
                    <span class="fact-icon">{{ fact.icon }}</span>
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
                Futur Ingénieur diplômé de l'école <strong>IMT Mines Alès</strong>, je suis spécialisé en développement logiciel avec <strong>3 ans d'expérience</strong> en alternance fullstack chez AITEC Service.
              </p>
              <p>
                Je conçois des applications web, mobiles, frontend/backend avec un intérêt particulier pour l'automatisation, les architectures de microservices et les outils d'IA (FastMCP, n8n, Whisper, Mistral LLM).
              </p>
              <p>
                Autonome, rigoureux et adepte du Lead Technique, j'aime concevoir des solutions innovantes répondant à des besoins métier concrets.
              </p>

              <div class="about-actions">
                <a href="assets/cv/kerrian-salaun-cv.pdf" download="Kerrian_Salaun_CV.pdf" class="btn-primary">
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
                    <span class="timeline-year">{{ item.year }}</span>
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
    { icon: '📍', label: 'Localisation', value: 'Perpignan / Alès, France' },
    { icon: '💼', label: 'Poste actuel', value: 'Alternant Dev Logiciel (AITEC Service)' },
    { icon: '🎓', label: 'Diplôme', value: 'IMT Mines Alès (Ingénieur 2026)' },
    { icon: '🌐', label: 'Langues', value: 'Anglais TOEIC B2 / Espagnol B1' },
  ];

  timeline = [
    {
      year: '09/2023 - 09/2026',
      title: 'Alternance Développement Logiciel & Lead Technique',
      org: 'AITEC SERVICE — Alès',
      description: 'Architecture microservices React/Node, OAuth Keycloak, workflows IA n8n (+30% efficacité), serveur MCP Python, apps Electron.js (Whisper & Mistral LLM), app mobile Flutter Odoo, migration PHP 5 à 8 et encadrement de 3 alternants.'
    },
    {
      year: '2023 - 2026',
      title: 'Diplôme d\'Ingénieur en Développement Logiciel',
      org: 'IMT Mines Alès',
      description: 'Formation d\'ingénieur spécialisée en conception logicielle, architectures distribuées, automatisation et IA.'
    },
    {
      year: '2022 - 2023',
      title: 'Prépa ATS',
      org: 'Lycée Jean-Moulin — Béziers',
      description: 'Classe préparatoire aux grandes écoles d\'ingénieurs (mathématiques, physique, sciences de l\'ingénieur).'
    },
    {
      year: '2021 - 2022',
      title: 'BTS SNIR (Systèmes Numériques Option IR)',
      org: 'Lycée Pablo Picasso — Perpignan',
      description: 'Spécialisation informatique et réseaux. Projets de développement logiciel et réseaux.'
    },
    {
      year: '05/2021 - 06/2021',
      title: 'Stagiaire Développeur Web',
      org: 'IFREMER — Brest',
      description: 'Réalisation du site web interne avec CakePHP et requêtes SQL optimisées sous Oracle pour 1500 salariés.'
    },
    {
      year: '2019 - 2020',
      title: 'BAC S Option SI — Mention Bien',
      org: 'Lycée Notre Dame de Bon Secours — Perpignan',
      description: 'Baccalauréat Scientifique option Sciences de l\'Ingénieur.'
    }
  ];
}
