import { formatZipCode, CEP_LENGTH } from '.';

describe('formatZipCode', () => {
  it('should format CEP with mask', () => {
    expect(formatZipCode('')).toBe('');
    expect(formatZipCode('0')).toBe('0');
    expect(formatZipCode('01')).toBe('01');
    expect(formatZipCode('010')).toBe('010');
    expect(formatZipCode('0100')).toBe('0100');
    expect(formatZipCode('01001')).toBe('01001');
    expect(formatZipCode('010010')).toBe('01001-0');
    expect(formatZipCode('0100100')).toBe('01001-00');
    expect(formatZipCode('01001000')).toBe('01001-000');
  });

  it(`should NOT add digits after the CEP length (${CEP_LENGTH})`, () => {
    expect(formatZipCode('01001000000000')).toBe('01001-000');
  });

});