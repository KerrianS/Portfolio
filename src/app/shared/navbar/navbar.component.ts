import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled()" [class.menu-open]="menuOpen()">
      <div class="nav-container">
        <!-- Logo -->
        <a routerLink="/" class="nav-logo" (click)="closeMenu()">
          <span class="logo-k">K</span><span class="logo-dot">.</span>
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

        <!-- CTA button -->
        <a href="/contact" class="nav-cta btn-primary" routerLink="/contact" (click)="closeMenu()">
          Me contacter
        </a>

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
        <a routerLink="/contact" class="btn-primary mobile-cta" (click)="closeMenu()">Me contacter</a>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
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
}
