import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendContactMessageUseCase } from '../../application/contact/use-cases/send-contact-message.use-case';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="page-enter">
      <section class="contact-page section">
        <div class="bg-grid"></div>
        <div class="container">
          <!-- Header -->
          <div class="section-header">
            <span class="page-label">Parlons-en</span>
            <h1>Me <span>contacter</span></h1>
            <div class="section-line"></div>
            <p>Un projet en tête ? Une question ? N'hésitez pas à me contacter — je réponds sous 24h.</p>
          </div>

          <div class="contact-grid">
            <!-- Contact info -->
            <div class="contact-info">
              @for (item of contactItems; track item.label) {
                <a [href]="item.href" [target]="item.external ? '_blank' : '_self'" class="contact-item" rel="noopener">
                  <div class="contact-icon">
                    <span [innerHTML]="item.icon"></span>
                  </div>
                  <div>
                    <span class="contact-item-label">{{ item.label }}</span>
                    <span class="contact-item-value">{{ item.value }}</span>
                  </div>
                </a>
              }

              <!-- Availability -->
              <div class="availability-card">
                <div class="availability-dot"></div>
                <div>
                  <h4>Disponible pour de nouveaux projets</h4>
                  <p>Ouvert aux opportunités freelance & CDI</p>
                </div>
              </div>
            </div>

            <!-- Form -->
            <div class="contact-form-wrapper">
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form" novalidate>
                <div class="form-row">
                  <div class="form-group">
                    <label for="name">Nom complet *</label>
                    <input
                      id="name"
                      type="text"
                      formControlName="name"
                      placeholder="Votre nom"
                      [class.error]="isFieldInvalid('name')"
                    />
                    @if (isFieldInvalid('name')) {
                      <span class="field-error">Le nom est requis</span>
                    }
                  </div>
                  <div class="form-group">
                    <label for="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      formControlName="email"
                      placeholder="votre@email.com"
                      [class.error]="isFieldInvalid('email')"
                    />
                    @if (isFieldInvalid('email')) {
                      <span class="field-error">Email invalide</span>
                    }
                  </div>
                </div>

                <div class="form-group">
                  <label for="subject">Sujet *</label>
                  <input
                    id="subject"
                    type="text"
                    formControlName="subject"
                    placeholder="Ex: Opportunité freelance, Collaboration..."
                    [class.error]="isFieldInvalid('subject')"
                  />
                  @if (isFieldInvalid('subject')) {
                    <span class="field-error">Le sujet est requis</span>
                  }
                </div>

                <div class="form-group">
                  <label for="message">Message *</label>
                  <textarea
                    id="message"
                    formControlName="message"
                    rows="6"
                    placeholder="Décrivez votre projet ou votre question..."
                    [class.error]="isFieldInvalid('message')"
                  ></textarea>
                  @if (isFieldInvalid('message')) {
                    <span class="field-error">Le message doit faire au moins 20 caractères</span>
                  }
                </div>

                <button
                  type="submit"
                  class="btn-primary submit-btn"
                  [disabled]="isLoading()"
                >
                  @if (isLoading()) {
                    <span class="spinner"></span>
                    Envoi en cours...
                  } @else {
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    Envoyer le message
                  }
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- Toast -->
      @if (toast()) {
        <div class="toast" [class]="'toast-' + toast()!.type">
          {{ toast()!.message }}
        </div>
      }
    </div>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isLoading = signal(false);
  toast = signal<{ type: 'success' | 'error'; message: string } | null>(null);

  contactItems = [
    {
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="20"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',
      label: 'Email',
      value: 'kerrian@email.com',
      href: 'mailto:kerrian@email.com',
      external: false
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="20"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.137 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>',
      label: 'GitHub',
      value: 'github.com/KerrianS',
      href: 'https://github.com/KerrianS',
      external: true
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
      label: 'LinkedIn',
      value: 'linkedin.com/in/kerrian',
      href: 'https://linkedin.com/in/kerrian',
      external: true
    }
  ];

  constructor(private readonly fb: FormBuilder, private readonly sendMessageUseCase: SendContactMessageUseCase) {
    this.contactForm = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && control.touched);
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    const { name, email, subject, message } = this.contactForm.value;

    const result = await this.sendMessageUseCase.execute(name, email, subject, message);

    if (result.ok) {
      this.showToast('success', '✅ Message envoyé avec succès ! Je vous répondrai sous 24h.');
      this.contactForm.reset();
    } else {
      this.showToast('error', `❌ ${result.error.message}`);
    }

    this.isLoading.set(false);
  }

  private showToast(type: 'success' | 'error', message: string) {
    this.toast.set({ type, message });
    setTimeout(() => this.toast.set(null), 5000);
  }
}
