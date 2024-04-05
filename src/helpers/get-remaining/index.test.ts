import { getRemaining } from '.';

describe('getRemaining', () => {
  it('should return the remaining check digit to complete a modulo 11 calculation', () => {
    expect(getRemaining(123)).toEqual(9);
    expect(getRemaining(456)).toEqual(6);
    expect(getRemaining(10)).toEqual(1);
    expect(getRemaining(0)).toEqual(0);
  });
});