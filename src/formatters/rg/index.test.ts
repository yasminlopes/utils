import formatToRG from './index';

describe('formatToRG', () => {
  it('should format "00000000A" to "00.000.000-A" for "SP" state', () => {
    const value = '00000000A';
    const state = 'SP';

    const result = formatToRG(value, state);

    expect(result).toBe('00.000.000-A');
  });

  it('should format "00.00.0000-0" to "00.000.000-0" for "RJ" state', () => {
    const value = '00.00.0000-0';
    const state = 'RJ';

    const result = formatToRG(value, state);

    expect(result).toBe('00.000.0000');
  });

  it('should return "MG-14.808.688" as is for "MG" state', () => {
    const value = 'MG-14.808.688';
    const state = 'MG';

    const result = formatToRG(value, state);

    expect(result).toBe('MG-14.808.688');
  });
});