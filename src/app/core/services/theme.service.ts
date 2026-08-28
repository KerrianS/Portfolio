import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio-theme';

  /** true = dark, false = light. Default: dark */
  isDark = signal<boolean>(this.loadTheme());

  constructor() {
    // Apply theme immediately on startup
    this.applyTheme(this.isDark());

    // React to changes
    effect(() => {
      const dark = this.isDark();
      this.applyTheme(dark);
      localStorage.setItem(this.STORAGE_KEY, dark ? 'dark' : 'light');
    });
  }

  toggle() {
    this.isDark.update(v => !v);
  }

  private loadTheme(): boolean {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) return saved === 'dark';
    // Default: dark mode
    return true;
  }

  private applyTheme(dark: boolean) {
    const body = document.body;
    if (dark) {
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode');
    }
  }
}
