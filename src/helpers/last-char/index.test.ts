import { isLastChar } from '.';

describe('isLastChar', () => {
  it('should return true when index is the same as last index of the string', () => {
    expect(isLastChar(2, '123')).toBe(true);
  });

});