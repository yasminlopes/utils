import { mapToNumeric } from './index';

describe('mapToNumeric', () => {
  it('should remove all non-numeric characters from a string', () => {
    expect(mapToNumeric('abc123def456')).toBe('123456');
    expect(mapToNumeric('R$ 1.234,56')).toBe('123456');
    expect(mapToNumeric('12-34-5678')).toBe('12345678');
  });

  it('should return an empty string if there are no numeric characters', () => {
    expect(mapToNumeric('abcdef')).toBe('');
  });

  it('should return the same string if it only contains numeric characters', () => {
    expect(mapToNumeric('123456')).toBe('123456');
  });
});