import { generateCheckSums } from 'helpers';

const CHECK_DIGITS_INDEXES = [9, 10];

export function isValidCheckSum(cpf: string): boolean {
  return CHECK_DIGITS_INDEXES.every((i) => {
    const mod =
      generateCheckSums(cpf
          .slice(0, i)
          .split('')
          .reduce((acc, digit) => acc + digit, ''),
        i + 1
      ) % 11;

    return cpf[i] === String(mod < 2 ? 0 : 11 - mod);
  });
}
