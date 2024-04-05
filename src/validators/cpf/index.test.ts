import { validateCpf, RESERVED_NUMBERS } from '.';
describe('validateCpf', () => {
    describe('should return false', () => {
      test('when it is on the RESERVED_WORDS', () => {
        RESERVED_NUMBERS.forEach((cpf) => expect(validateCpf(cpf)).toBe(false));
      });
  
      test('when it is an empty string', () => {
        expect(validateCpf('')).toBe(false);
      });
  
      test('when it is null', () => {
        expect(validateCpf(null as any)).toBe(false);
      });
  
      test('when it is undefined', () => {
        expect(validateCpf(undefined as any)).toBe(false);
      });
  
      test('when it is a boolean', () => {
        expect(validateCpf(true as any)).toBe(false);
        expect(validateCpf(false as any)).toBe(false);
      });
  
      test('when it is an object', () => {
        expect(validateCpf({} as any)).toBe(false);
      });
  
      test('when it is an array', () => {
        expect(validateCpf([] as any)).toBe(false);
      });
  
      test(`when dont match with CPF length (11)`, () => {
        expect(validateCpf('123456')).toBe(false);
      });
  
      test('when contains only letters or special characters', () => {
        expect(validateCpf('abcabcabcde')).toBe(false);
      });
  
      test('when is a CPF invalid', () => {
        expect(validateCpf('11257245286')).toBe(false);
      });
  
      test('when is a CPF invalid test numbers with letters', () => {
        expect(validateCpf('foo391.838.38test0-66')).toBe(false);
      });
    });
  
    describe('should return true', () => {
      test('when is a CPF valid without mask', () => {
        expect(validateCpf('40364478829')).toBe(true);
      });
  
      test('when is a CPF valid with mask', () => {
        expect(validateCpf('962.718.458-60')).toBe(true);
      });
    });
  });