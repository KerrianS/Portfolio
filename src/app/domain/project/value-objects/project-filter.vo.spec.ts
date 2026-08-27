import { ProjectFilter } from './project-filter.vo';
import { ALL_FILTER_LABEL } from '../../../shared-kernel/constants/filter.constants';

describe('ProjectFilter', () => {
  describe('createDefault()', () => {
    it('doit créer un filtre "Tous" par défaut', () => {
      const filter = ProjectFilter.createDefault();

      expect(filter.label).toBe(ALL_FILTER_LABEL);
      expect(filter.isAll()).toBeTrue();
    });
  });

  describe('create()', () => {
    it('doit accepter un label de filtre valide', () => {
      const result = ProjectFilter.create('Frontend');

      expect(result.ok).toBeTrue();
      if (result.ok) {
        expect(result.value.label).toBe('Frontend');
        expect(result.value.isAll()).toBeFalse();
      }
    });

    it('doit accepter le label "Tous"', () => {
      const result = ProjectFilter.create(ALL_FILTER_LABEL);

      expect(result.ok).toBeTrue();
      if (result.ok) {
        expect(result.value.isAll()).toBeTrue();
      }
    });

    it('doit rejeter un label inconnu', () => {
      const result = ProjectFilter.create('UnknownFilter');

      expect(result.ok).toBeFalse();
      if (!result.ok) {
        expect(result.error.message).toContain('"UnknownFilter"');
      }
    });

    it('doit rejeter une chaîne vide', () => {
      const result = ProjectFilter.create('');

      expect(result.ok).toBeFalse();
    });
  });

  describe('equals()', () => {
    it('doit considérer deux filtres avec le même label comme égaux', () => {
      const filterA = ProjectFilter.createDefault();
      const filterB = ProjectFilter.createDefault();

      expect(filterA.equals(filterB)).toBeTrue();
    });

    it('doit distinguer deux filtres différents', () => {
      const defaultFilter = ProjectFilter.createDefault();
      const frontendResult = ProjectFilter.create('Frontend');

      expect(frontendResult.ok).toBeTrue();
      if (frontendResult.ok) {
        expect(defaultFilter.equals(frontendResult.value)).toBeFalse();
      }
    });
  });

  describe('toString()', () => {
    it('doit retourner le label du filtre', () => {
      const filter = ProjectFilter.createDefault();
      expect(filter.toString()).toBe(ALL_FILTER_LABEL);
    });
  });
});
