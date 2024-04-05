import { validateZipCode } from '.';

describe('validateZipCode', () => {
    describe('should return false', () => {
      it('when it is an empty string', () => {
        expect(validateZipCode('')).toBe(false);
      });
      it('when it is null', () => {
        expect(validateZipCode(null as any)).toBe(false);
      });
      it('when it is undefined', () => {
        expect(validateZipCode(undefined as any)).toBe(false);
      });
      it(`when length is greater than 8`, () => {
        expect(validateZipCode('123456789')).toBe(false);
      });
      it('when is array', () => {
        expect(validateZipCode([] as any)).toBe(false);
      });
      it('when is object', () => {
        expect(validateZipCode({} as any)).toBe(false);
      });
      it('when is boolean', () => {
        expect(validateZipCode(true as any)).toBe(false);
        expect(validateZipCode(false as any)).toBe(false);
      });
    });
  });