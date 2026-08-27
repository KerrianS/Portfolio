import { SkillLevel } from './skill-level.vo';

describe('SkillLevel', () => {
  describe('create()', () => {
    it('doit accepter 0 (limite basse)', () => {
      const result = SkillLevel.create(0);
      expect(result.ok).toBeTrue();
      if (result.ok) expect(result.value.value).toBe(0);
    });

    it('doit accepter 100 (limite haute)', () => {
      const result = SkillLevel.create(100);
      expect(result.ok).toBeTrue();
      if (result.ok) expect(result.value.value).toBe(100);
    });

    it('doit accepter une valeur intermédiaire', () => {
      const result = SkillLevel.create(75);
      expect(result.ok).toBeTrue();
    });

    it('doit rejeter une valeur négative', () => {
      const result = SkillLevel.create(-1);
      expect(result.ok).toBeFalse();
      if (!result.ok) expect(result.error.message).toContain('"-1"');
    });

    it('doit rejeter une valeur supérieure à 100', () => {
      const result = SkillLevel.create(101);
      expect(result.ok).toBeFalse();
    });

    it('doit rejeter un nombre décimal', () => {
      const result = SkillLevel.create(75.5);
      expect(result.ok).toBeFalse();
    });
  });

  describe('isProficient()', () => {
    it('doit retourner true pour un niveau >= 70', () => {
      const result = SkillLevel.create(70);
      expect(result.ok).toBeTrue();
      if (result.ok) expect(result.value.isProficient()).toBeTrue();
    });

    it('doit retourner false pour un niveau < 70', () => {
      const result = SkillLevel.create(69);
      expect(result.ok).toBeTrue();
      if (result.ok) expect(result.value.isProficient()).toBeFalse();
    });
  });

  describe('isExpert()', () => {
    it('doit retourner true pour un niveau >= 90', () => {
      const result = SkillLevel.create(90);
      expect(result.ok).toBeTrue();
      if (result.ok) expect(result.value.isExpert()).toBeTrue();
    });

    it('doit retourner false pour un niveau < 90', () => {
      const result = SkillLevel.create(89);
      expect(result.ok).toBeTrue();
      if (result.ok) expect(result.value.isExpert()).toBeFalse();
    });
  });

  describe('percentage', () => {
    it('doit retourner la valeur au format pourcentage', () => {
      const result = SkillLevel.create(85);
      expect(result.ok).toBeTrue();
      if (result.ok) expect(result.value.percentage).toBe('85%');
    });
  });

  describe('equals()', () => {
    it('doit considérer deux niveaux identiques comme égaux', () => {
      const levelA = SkillLevel.create(80);
      const levelB = SkillLevel.create(80);
      if (levelA.ok && levelB.ok) {
        expect(levelA.value.equals(levelB.value)).toBeTrue();
      }
    });

    it('doit distinguer deux niveaux différents', () => {
      const levelA = SkillLevel.create(80);
      const levelB = SkillLevel.create(90);
      if (levelA.ok && levelB.ok) {
        expect(levelA.value.equals(levelB.value)).toBeFalse();
      }
    });
  });
});
