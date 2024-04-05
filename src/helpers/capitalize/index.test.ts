import { capitalizeHelper } from '.';
describe('capitalizeHelper', () => {
    it('should capitalize when the value does not contain preposition', () => {
      expect(capitalizeHelper('esponja vegetal')).toBe('Esponja Vegetal');
      expect(capitalizeHelper('refrigerante 1L')).toBe('Refrigerante 1l');
      expect(capitalizeHelper('JOAQUIM JOSÉ')).toBe('Joaquim José');
    });

    it('should capitalize when the value does contain preposition', () => {
      expect(capitalizeHelper('esponja DE aço 60G')).toBe('Esponja de Aço 60g');
      expect(capitalizeHelper('fulano de tal')).toBe('Fulano de Tal');
      expect(capitalizeHelper('pão com manteiga')).toBe('Pão com Manteiga');
    });

    it('should capitalize when the value does contain short words', () => {
      expect(capitalizeHelper('a')).toBe('A');
      expect(capitalizeHelper('A B C')).toBe('A B C');
    });

    it('should capitalize when the value does contain empty spaces', () => {
      expect(capitalizeHelper('')).toBe('');
      expect(capitalizeHelper(' ')).toBe('');
      expect(capitalizeHelper('esponja de    aço 60G')).toBe('Esponja de Aço 60g');
      expect(capitalizeHelper('  refrigerante 1l')).toBe('Refrigerante 1l');
    });

    it('should capitalize when the value does contain upper case words', () => {
      expect(capitalizeHelper('doc da empresa ab', { upperCaseWords: ['DOC', 'AB'] })).toBe('DOC da Empresa AB');
      expect(capitalizeHelper('doc inválido', { upperCaseWords: ['DOC'] })).toBe('DOC Inválido');
    });
    it('should capitalize when the value does contain lower case words', () => {
      expect(capitalizeHelper('josé Ama MARIA', { lowerCaseWords: ['ama'] })).toBe('José ama Maria');
      expect(capitalizeHelper('josé Não Ama MARIA', { lowerCaseWords: ['não', 'ama'] })).toBe('José não ama Maria');
    });
});