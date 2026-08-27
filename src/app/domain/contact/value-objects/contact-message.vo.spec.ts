import { ContactMessage } from './contact-message.vo';

describe('ContactMessage', () => {
  const validPayload = {
    name: 'Kerrian S.',
    email: 'kerrian@example.com',
    subject: 'Opportunité de collaboration',
    message: 'Bonjour, je souhaite discuter d\'un projet Angular full-stack pour ma startup.',
  };

  describe('create() — cas valides', () => {
    it('doit créer un message avec des données valides', () => {
      const result = ContactMessage.create(
        validPayload.name,
        validPayload.email,
        validPayload.subject,
        validPayload.message
      );

      expect(result.ok).toBeTrue();
      if (result.ok) {
        expect(result.value.name).toBe(validPayload.name.trim());
        expect(result.value.email).toBe(validPayload.email.toLowerCase());
      }
    });

    it('doit normaliser l\'email en minuscules', () => {
      const result = ContactMessage.create(
        validPayload.name,
        'KERRIAN@EXAMPLE.COM',
        validPayload.subject,
        validPayload.message
      );

      expect(result.ok).toBeTrue();
      if (result.ok) expect(result.value.email).toBe('kerrian@example.com');
    });

    it('doit trimmer les espaces superflus', () => {
      const result = ContactMessage.create(
        '  Kerrian  ',
        validPayload.email,
        validPayload.subject,
        validPayload.message
      );

      expect(result.ok).toBeTrue();
      if (result.ok) expect(result.value.name).toBe('Kerrian');
    });
  });

  describe('create() — validations du nom', () => {
    it('doit rejeter un nom vide', () => {
      const result = ContactMessage.create('', validPayload.email, validPayload.subject, validPayload.message);
      expect(result.ok).toBeFalse();
    });

    it('doit rejeter un nom d\'un seul caractère', () => {
      const result = ContactMessage.create('A', validPayload.email, validPayload.subject, validPayload.message);
      expect(result.ok).toBeFalse();
    });
  });

  describe('create() — validations de l\'email', () => {
    it('doit rejeter un email sans @', () => {
      const result = ContactMessage.create(validPayload.name, 'invalidemail', validPayload.subject, validPayload.message);
      expect(result.ok).toBeFalse();
      if (!result.ok) expect(result.error.message).toContain('invalidemail');
    });

    it('doit rejeter un email sans domaine', () => {
      const result = ContactMessage.create(validPayload.name, 'kerrian@', validPayload.subject, validPayload.message);
      expect(result.ok).toBeFalse();
    });
  });

  describe('create() — validations du message', () => {
    it('doit rejeter un message trop court (< 20 caractères)', () => {
      const result = ContactMessage.create(validPayload.name, validPayload.email, validPayload.subject, 'Trop court.');
      expect(result.ok).toBeFalse();
    });

    it('doit accepter un message d\'exactement 20 caractères', () => {
      const result = ContactMessage.create(validPayload.name, validPayload.email, validPayload.subject, 'Bonjour, 20 chars!!.');
      expect(result.ok).toBeTrue();
    });
  });

  describe('toString()', () => {
    it('doit retourner une représentation lisible', () => {
      const result = ContactMessage.create(
        validPayload.name,
        validPayload.email,
        validPayload.subject,
        validPayload.message
      );
      expect(result.ok).toBeTrue();
      if (result.ok) {
        expect(result.value.toString()).toContain(validPayload.email.toLowerCase());
      }
    });
  });
});
