import formatToBRL from './index';

describe('formatToBRL', () => {
  it('should format 1000 to "R$ 1.000,00"', () => {
    const value = 1000;

    const result = formatToBRL(value);

    expect(result).toEqual('R$ 1.000,00');
  });

  it('should format 9898654554.8845 to "R$ 9.898.654.554,88"', () => {
    const value = 9898654554.8845;

    const result = formatToBRL(value);

    expect(result).toEqual('R$ 9.898.654.554,88');
  });

  it('should format 0.9 to "R$ 0,90"', () => {
    const value = 0.9;

    const result = formatToBRL(value);

    expect(result).toEqual('R$ 0,90');
  });

  it('should format -99.99 to "-R$ 99,99"', () => {
    const value = -99.99;

    const result = formatToBRL(value);

    expect(result).toEqual('-R$ 99,99');
  });
});
