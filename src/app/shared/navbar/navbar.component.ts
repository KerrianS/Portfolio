import { Component, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled()" [class.menu-open]="menuOpen()">
      <div class="nav-container">
        <!-- Logo -->
        <a routerLink="/" class="nav-logo" (click)="closeMenu()">
          <img src="assets/logo.png" alt="Kerrian Salaün Logo" class="logo-img" />
        </a>

        <!-- Desktop nav links -->
        <ul class="nav-links">
          @for (link of navLinks; track link.path) {
            <li>
              <a
                [routerLink]="link.path"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: link.path === '/' }"
                class="nav-link"
              >
                {{ link.label }}
              </a>
            </li>
          }
        </ul>

        <!-- Right side: theme toggle + CTA -->
        <div class="nav-right">
          <!-- Theme toggle -->
          <button
            class="theme-toggle"
            (click)="toggleTheme()"
            [attr.aria-label]="themeService.isDark() ? 'Passer en mode clair' : 'Passer en mode sombre'"
            [title]="themeService.isDark() ? 'Mode clair' : 'Mode sombre'"
            id="theme-toggle-btn"
          >
            @if (themeService.isDark()) {
              <!-- Sun icon -->
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" class="theme-icon">
                <path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z"/>
              </svg>
            } @else {
              <!-- Moon icon -->
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" class="theme-icon">
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
              </svg>
            }
          </button>

          <!-- CTA button -->
          <a href="/contact" class="nav-cta btn-primary" routerLink="/contact" (click)="closeMenu()">
            Me contacter
          </a>
        </div>

        <!-- Hamburger -->
        <button class="hamburger" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen()">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile menu -->
      <div class="mobile-menu" [class.open]="menuOpen()">
        <ul>
          @for (link of navLinks; track link.path) {
            <li>
              <a
                [routerLink]="link.path"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: link.path === '/' }"
                (click)="closeMenu()"
              >
                {{ link.label }}
              </a>
            </li>
          }
        </ul>
        <div class="mobile-footer-actions">
          <button class="theme-toggle mobile-theme" (click)="toggleTheme()" id="theme-toggle-mobile">
            @if (themeService.isDark()) {
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z"/></svg>
              <span>Mode clair</span>
            } @else {
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
              <span>Mode sombre</span>
            }
          </button>
          <a routerLink="/contact" class="btn-primary mobile-cta" (click)="closeMenu()">Me contacter</a>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  readonly themeService = inject(ThemeService);
  isScrolled = signal(false);
  menuOpen = signal(false);

  navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/about' },
    { label: 'Projets', path: '/projects' },
    { label: 'Compétences', path: '/skills' },
    { label: 'CV', path: '/cv' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  toggleTheme() {
    this.themeService.toggle();
  }
}
