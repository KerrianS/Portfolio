import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent],
  template: `
    <div class="page-enter">
      <section class="cv-page section">
        <div class="bg-grid"></div>
        <div class="container">
          <!-- Section Header (Reusable Component) -->
          <app-section-header
            label="Curriculum Vitae"
            title="Mon"
            highlight="CV"
            subtitle="Consultez mon CV directement en ligne ou téléchargez-le au format PDF."
          ></app-section-header>

          <!-- Actions Toolbar -->
          <div class="cv-toolbar">
            <div class="cv-info">
              <span class="cv-filename">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" class="cv-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                CV_SALAUN_Kerrian.pdf
              </span>
              <span class="cv-updated">Mis à jour • 2026</span>
            </div>
            <div class="cv-actions">
              <a href="assets/CV_SALAUN_Kerrian.pdf" target="_blank" class="btn-outline">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                Ouvrir plein écran
              </a>
              <a href="assets/CV_SALAUN_Kerrian.pdf" download="CV_SALAUN_Kerrian.pdf" class="btn-primary">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                Télécharger le PDF
              </a>
            </div>
          </div>

          <!-- PDF Viewer Frame -->
          <div class="cv-viewer-card">
            <iframe
              src="assets/CV_SALAUN_Kerrian.pdf"
              class="pdf-frame"
              title="CV de Kerrian Salaün"
            ></iframe>
          </div>

          <!-- HTML Interactive Resume Summary -->
          <div class="cv-resume-details">
            <div class="resume-block">
              <h2>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                Profil & Résumé
              </h2>
              <p>
                Futur Ingénieur diplômé de l'école IMT Mines Alès, spécialisé en développement logiciel, avec 3 ans d'expérience dans le développement fullstack.
                Conception d'applications web, mobiles, frontend/backend avec un intérêt particulier pour l'automatisation, les architectures de services et les outils d'IA (FastMCP, n8n, Whisper, Mistral LLM).
              </p>
            </div>

            <div class="resume-grid">
              <div class="resume-column">
                <h2>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                  Expériences Professionnelles
                </h2>
                
                <div class="experience-card">
                  <div class="exp-header">
                    <div class="exp-title-group">
                      <div class="card-logo-badge">
                        <img src="assets/aitecservice.png" alt="AITEC Service" />
                      </div>
                      <div>
                        <h3>Alternance Développement Logiciel</h3>
                        <span class="exp-company">AITEC SERVICE — Alès, France</span>
                      </div>
                    </div>
                    <span class="exp-date">09/2023 - 09/2026</span>
                  </div>
                  <ul class="exp-tasks">
                    <li>Développement de l'espace client React.js / Node.js : microservices, Keycloak (OAuth), Odoo, tests unitaires et collections Postman.</li>
                    <li>Plateforme web de centralisation des commandes : gestion de nomenclatures complexes et requêtes SQL récursives.</li>
                    <li>Workflow support client IA n8n & webhooks : transcription d'appels et tickets IA (gain d'efficacité +30%).</li>
                    <li>Serveur MCP Python FastMCP connecté à l'ERP et IA interne (gain de temps 20%).</li>
                    <li>App Electron.js & Python : retranscription en temps réel MS Teams avec Whisper et comptes rendus Mistral LLM.</li>
                    <li>App Mobile Flutter connectée à l'API Odoo pour chauffeurs (GPS Waze/Maps, bons de livraison, plannings).</li>
                    <li>Migration site web historique PHP 5 vers PHP 8 natif (+100 utilisateurs).</li>
                    <li>Lead technique : pilotage projets, encadrement de 3 alternants.</li>
                  </ul>
                </div>

                <div class="experience-card">
                  <div class="exp-header">
                    <div class="exp-title-group">
                      <div class="card-logo-badge">
                        <img src="assets/Ifremer.webp" alt="IFREMER" />
                      </div>
                      <div>
                        <h3>Stagiaire Développeur Web</h3>
                        <span class="exp-company">IFREMER — Brest, France</span>
                      </div>
                    </div>
                    <span class="exp-date">05/2021 - 06/2021</span>
                  </div>
                  <ul class="exp-tasks">
                    <li>Site web interne CakePHP et requêtes SQL optimisées sous Oracle (1500 salariés).</li>
                  </ul>
                </div>
              </div>

              <div class="resume-column">
                <h2>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                  Formations & Diplômes
                </h2>
                
                <div class="edu-card">
                  <div class="edu-header">
                    <div class="card-logo-badge">
                      <img src="assets/Logo-IMT-Mines-Ales.jpg" alt="IMT Mines Alès" />
                    </div>
                    <div>
                      <h3>Ingénieur Développement Logiciel</h3>
                      <span class="edu-school">IMT Mines Alès</span>
                      <span class="edu-date">2023 - 2026 • Alès</span>
                    </div>
                  </div>
                </div>

                <div class="edu-card">
                  <div class="edu-header">
                    <div class="card-logo-badge">
                      <img src="assets/jeanmoulin.png" alt="Lycée Jean-Moulin" />
                    </div>
                    <div>
                      <h3>Prépa ATS</h3>
                      <span class="edu-school">Lycée Jean-Moulin</span>
                      <span class="edu-date">2022 - 2023 • Béziers</span>
                    </div>
                  </div>
                </div>

                <div class="edu-card">
                  <div class="edu-header">
                    <div class="card-logo-badge">
                      <img src="assets/picasso.png" alt="Lycée Pablo Picasso" />
                    </div>
                    <div>
                      <h3>BTS SNIR (Option IR)</h3>
                      <span class="edu-school">Lycée Pablo Picasso</span>
                      <span class="edu-date">2021 - 2022 • Perpignan</span>
                    </div>
                  </div>
                </div>

                <div class="edu-card">
                  <div class="edu-header">
                    <div class="card-logo-badge">
                      <img src="assets/bonsecours.webp" alt="Lycée Notre Dame de Bon Secours" />
                    </div>
                    <div>
                      <h3>BAC S Option SI (Mention Bien)</h3>
                      <span class="edu-school">Lycée Notre Dame de Bon Secours</span>
                      <span class="edu-date">2019 - 2020 • Perpignan</span>
                    </div>
                  </div>
                </div>

                <h2 class="skills-title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  Langues
                </h2>
                <div class="languages-box">
                  <div class="lang-item">
                    <span>Anglais : <strong>TOEIC (B2)</strong></span>
                  </div>
                  <div class="lang-item">
                    <span>Espagnol : <strong>B1</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  `,
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {}
