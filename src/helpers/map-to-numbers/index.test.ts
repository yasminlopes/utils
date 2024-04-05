import { mapToNumbers } from './index';

describe('mapToNumbers', () => {
  it('should map a string containing numeric characters to an array of numbers', () => {
    expect(mapToNumbers('123456')).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mapToNumbers('9876')).toEqual([9, 8, 7, 6]);
    expect(mapToNumbers('')).toEqual([]);
    expect(mapToNumbers('abc123def')).toEqual([1, 2, 3]);
    expect(mapToNumbers('R$ 1.234,56')).toEqual([1, 2, 3, 4, 5, 6]);
  });
});