import { isLastChar, onlyNumbers } from 'helpers';

export const LENGTH = 11;

const DOT_INDEXES = [2, 5];

const HYPHEN_INDEXES = [8];

interface FormatCpfOptions { pad?: boolean }

/**
 * Formata um número de CPF no formato padrão com pontos e hífens.
 * 
 * @param cpf O número de CPF a ser formatado.
 * @param options Opções para formatar o CPF (opcional)
 * @returns O número de CPF formatado no formato padrão com pontos e hífens.
 */
export default function formatCpf(cpf: string | number, options: FormatCpfOptions = {}): string {
  let digits = onlyNumbers(cpf);

  if (options.pad) {
    digits = digits.padStart(LENGTH, '0');
  }

  return digits
    .slice(0, LENGTH)
    .split('')
    .reduce((acc, digit, i) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(i, digits)) {
        if (DOT_INDEXES.indexOf(i) >= 0) return `${result}.`;
        if (HYPHEN_INDEXES.indexOf(i) >= 0) return `${result}-`;
      }

      return result;
    }, '');
}

// Exemplo de uso:
// const cpf = '12345678901';
// const formattedCpf = formatCpf(cpf, { pad: true });
// console.log(formattedCpf); //001.234.567-89