import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-header">
      @if (label) {
        <span class="page-label">{{ label }}</span>
      }
      <h2>{{ title }} <span>{{ highlight }}</span></h2>
      <div class="section-line"></div>
      @if (subtitle) {
        <p class="section-subtitle">{{ subtitle }}</p>
      }
    </div>
  `,
  styles: [`
    .section-header {
      text-align: center;
      margin-bottom: 3.5rem;
    }

    .page-label {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold-title);
      margin-bottom: 0.75rem;
    }

    h2 {
      font-size: clamp(2rem, 4vw, 2.75rem);
      font-weight: 700;
      color: var(--text);
      line-height: 1.2;
      margin-bottom: 0.5rem;

      span {
        background: linear-gradient(135deg, #C9A84C, #E4C97E);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .section-line {
      width: 60px;
      height: 3px;
      background: linear-gradient(135deg, #C9A84C, #E4C97E);
      margin: 1rem auto 1.25rem;
      border-radius: 9999px;
    }

    .section-subtitle {
      max-width: 600px;
      margin: 0 auto;
      font-size: 1rem;
      color: var(--text-muted);
      font-weight: 500;
      line-height: 1.6;
    }
  `]
})
export class SectionHeaderComponent {
  @Input() label?: string;
  @Input() title: string = '';
  @Input() highlight: string = '';
  @Input() subtitle?: string;
}
