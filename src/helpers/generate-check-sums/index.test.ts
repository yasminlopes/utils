import { generateCheckSums } from '.';

describe('generateCheckSums', () => {
  it('should generate the right checksum', () => {
    expect(generateCheckSums(12, 10)).toBe(28);
  });

  it('should generate the right checksum', () => {
    expect(generateCheckSums(12, [10, 9])).toBe(28);
  });
});