import formatCpf, { LENGTH } from '.';

describe('formatCpf', () => {
  it('should format CPF with mask', () => {
    expect(formatCpf('')).toBe('');
    expect(formatCpf('9')).toBe('9');
    expect(formatCpf('94')).toBe('94');
    expect(formatCpf('943')).toBe('943');
    expect(formatCpf('9438')).toBe('943.8');
    expect(formatCpf('94389')).toBe('943.89');
    expect(formatCpf('943895')).toBe('943.895');
    expect(formatCpf('9438957')).toBe('943.895.7');
    expect(formatCpf('94389575')).toBe('943.895.75');
    expect(formatCpf('943895751')).toBe('943.895.751');
    expect(formatCpf('9438957510')).toBe('943.895.751-0');
    expect(formatCpf('94389575104')).toBe('943.895.751-04');
  });

  it('should format number CPF with mask', () => {
    expect(formatCpf(9)).toBe('9');
    expect(formatCpf(94)).toBe('94');
    expect(formatCpf(943)).toBe('943');
    expect(formatCpf(9438)).toBe('943.8');
    expect(formatCpf(94389)).toBe('943.89');
    expect(formatCpf(943895)).toBe('943.895');
    expect(formatCpf(9438957)).toBe('943.895.7');
    expect(formatCpf(94389575)).toBe('943.895.75');
    expect(formatCpf(943895751)).toBe('943.895.751');
    expect(formatCpf(9438957510)).toBe('943.895.751-0');
    expect(formatCpf(94389575104)).toBe('943.895.751-04');
  });

  it('should format CPF with mask filling zeroes', () => {
    expect(formatCpf('', { pad: true })).toBe('000.000.000-00');
    expect(formatCpf('9', { pad: true })).toBe('000.000.000-09');
    expect(formatCpf('94', { pad: true })).toBe('000.000.000-94');
    expect(formatCpf('943', { pad: true })).toBe('000.000.009-43');
    expect(formatCpf('9438', { pad: true })).toBe('000.000.094-38');
    expect(formatCpf('94389', { pad: true })).toBe('000.000.943-89');
    expect(formatCpf('943895', { pad: true })).toBe('000.009.438-95');
    expect(formatCpf('9438957', { pad: true })).toBe('000.094.389-57');
    expect(formatCpf('94389575', { pad: true })).toBe('000.943.895-75');
    expect(formatCpf('943895751', { pad: true })).toBe('009.438.957-51');
    expect(formatCpf('9438957510', { pad: true })).toBe('094.389.575-10');
    expect(formatCpf('94389575104', { pad: true })).toBe('943.895.751-04');
  });

  it('should format number CPF with mask filling zeroes', () => {
    expect(formatCpf(9, { pad: true })).toBe('000.000.000-09');
    expect(formatCpf(94, { pad: true })).toBe('000.000.000-94');
    expect(formatCpf(943, { pad: true })).toBe('000.000.009-43');
    expect(formatCpf(9438, { pad: true })).toBe('000.000.094-38');
    expect(formatCpf(94389, { pad: true })).toBe('000.000.943-89');
    expect(formatCpf(943895, { pad: true })).toBe('000.009.438-95');
    expect(formatCpf(9438957, { pad: true })).toBe('000.094.389-57');
    expect(formatCpf(94389575, { pad: true })).toBe('000.943.895-75');
    expect(formatCpf(943895751, { pad: true })).toBe('009.438.957-51');
    expect(formatCpf(9438957510, { pad: true })).toBe('094.389.575-10');
    expect(formatCpf(94389575104, { pad: true })).toBe('943.895.751-04');
  });

});
