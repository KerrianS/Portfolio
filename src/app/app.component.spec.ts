import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PROJECT_REPOSITORY_TOKEN, SKILL_REPOSITORY_TOKEN, CONTACT_ADAPTER_TOKEN } from './application/tokens/injection-tokens';
import { InMemoryProjectRepository } from './infrastructure/repositories/in-memory-project.repository';
import { InMemorySkillRepository } from './infrastructure/repositories/in-memory-skill.repository';
import { EmailJSContactAdapter } from './infrastructure/email/emailjs-contact.adapter';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
      providers: [
        { provide: PROJECT_REPOSITORY_TOKEN, useClass: InMemoryProjectRepository },
        { provide: SKILL_REPOSITORY_TOKEN,   useClass: InMemorySkillRepository },
        { provide: CONTACT_ADAPTER_TOKEN,    useClass: EmailJSContactAdapter },
      ],
    }).compileComponents();
  });

  it('doit créer le composant racine', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('doit afficher la barre de navigation', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-navbar')).toBeTruthy();
  });
});
