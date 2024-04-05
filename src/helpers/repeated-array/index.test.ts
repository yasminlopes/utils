import { isRepeatedArray } from './index';

describe('isRepeatedArray', () => {
  it('should return true if all elements in the array are the same', () => {
    expect(isRepeatedArray([1, 1, 1, 1])).toBe(true);
    expect(isRepeatedArray(['a', 'a', 'a'])).toBe(true);
  });

  it('should return false if not all elements in the array are the same', () => {
    expect(isRepeatedArray([1, 2, 3, 4])).toBe(false);
    expect(isRepeatedArray(['apple', 'banana', 'apple'])).toBe(false);
  });

  it('should return true for an empty array', () => {
    expect(isRepeatedArray([])).toBe(true);
  });
});