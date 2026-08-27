import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-enter">
      <section class="cv-page section">
        <div class="bg-grid"></div>
        <div class="container">
          <!-- Section Header -->
          <div class="section-header">
            <span class="page-label">Curriculum Vitae</span>
            <h1>Mon <span>CV</span></h1>
            <div class="section-line"></div>
            <p class="subtitle">Consultez mon CV directement en ligne ou téléchargez-le au format PDF.</p>
          </div>

          <!-- Actions Toolbar -->
          <div class="cv-toolbar">
            <div class="cv-info">
              <span class="cv-filename">📄 Kerrian_SALAUN_CV_Ingenieur_Logiciel.pdf</span>
              <span class="cv-updated">Mis à jour • 2026</span>
            </div>
            <div class="cv-actions">
              <a href="assets/cv/kerrian-salaun-cv.pdf" target="_blank" class="btn-outline">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                Ouvrir plein écran
              </a>
              <a href="assets/cv/kerrian-salaun-cv.pdf" download="Kerrian_Salaun_CV.pdf" class="btn-primary">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                Télécharger le PDF
              </a>
            </div>
          </div>

          <!-- PDF Viewer Frame & Fallback -->
          <div class="cv-viewer-card">
            <object data="assets/cv/kerrian-salaun-cv.pdf" type="application/pdf" width="100%" height="850px" class="pdf-object">
              <div class="pdf-fallback">
                <div class="fallback-icon">📄</div>
                <h3>Aperçu du PDF indisponible dans ce navigateur</h3>
                <p>Vous pouvez consulter les détails ci-dessous ou télécharger directement le fichier PDF.</p>
                <a href="assets/cv/kerrian-salaun-cv.pdf" download="Kerrian_Salaun_CV.pdf" class="btn-primary">
                  Télécharger le CV PDF
                </a>
              </div>
            </object>
          </div>

          <!-- HTML Interactive Resume Summary -->
          <div class="cv-resume-details">
            <div class="resume-block">
              <h2> Profil & Résumé</h2>
              <p>
                Futur Ingénieur diplômé de l'école IMT Mines Alès, spécialisé en développement logiciel, avec 3 ans d'expérience dans le développement fullstack.
                Conception d'applications web, mobiles, frontend/backend avec un intérêt particulier pour l'automatisation, les architectures de services et les outils d'IA (FastMCP, n8n, Whisper, Mistral LLM).
              </p>
            </div>

            <div class="resume-grid">
              <div class="resume-column">
                <h2> Expériences Professionnelles</h2>
                
                <div class="experience-card">
                  <div class="exp-header">
                    <h3>Alternance Développement Logiciel</h3>
                    <span class="exp-date">09/2023 - 09/2026</span>
                  </div>
                  <span class="exp-company">AITEC SERVICE — Alès, France</span>
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
                    <h3>Stagiaire Développeur Web</h3>
                    <span class="exp-date">05/2021 - 06/2021</span>
                  </div>
                  <span class="exp-company">IFREMER — Brest, France</span>
                  <ul class="exp-tasks">
                    <li>Site web interne CakePHP et requêtes SQL optimisées sous Oracle (1500 salariés).</li>
                  </ul>
                </div>
              </div>

              <div class="resume-column">
                <h2> Formations & Diplômes</h2>
                
                <div class="edu-card">
                  <h3>Ingénieur Développement Logiciel</h3>
                  <span class="edu-school">IMT Mines Alès</span>
                  <span class="edu-date">2023 - 2026 • Alès</span>
                </div>

                <div class="edu-card">
                  <h3>Prépa ATS</h3>
                  <span class="edu-school">Lycée Jean-Moulin</span>
                  <span class="edu-date">2022 - 2023 • Béziers</span>
                </div>

                <div class="edu-card">
                  <h3>BTS SNIR (Option IR)</h3>
                  <span class="edu-school">Lycée Pablo Picasso</span>
                  <span class="edu-date">2021 - 2022 • Perpignan</span>
                </div>

                <div class="edu-card">
                  <h3>BAC S Option SI (Mention Bien)</h3>
                  <span class="edu-school">Lycée Notre Dame de Bon Secours</span>
                  <span class="edu-date">2019 - 2020 • Perpignan</span>
                </div>

                <h2 class="skills-title"> Langues</h2>
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
