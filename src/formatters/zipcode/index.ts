import { isLastChar, onlyNumbers } from 'helpers';

/**
 * O comprimento padrão de um CEP.
 */
export const CEP_LENGTH = 8;

/**
 * Índices onde hífens devem ser inseridos ao formatar um CEP.
 */
export const HYPHEN_INDEXES = [4];

/**
 * Formata um CEP no formato padrão.
 */
export function formatZipCode(cep: string): string {
  const digits = onlyNumbers(cep);

  return digits
    .slice(0, 8)
    .split('')
    .reduce((acc, digit, i) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(i, digits)) {
        if (HYPHEN_INDEXES.indexOf(i) >= 0) return `${result}-`;
      }

      return result;
    }, '');
}

// // Exemplo de uso:
// console.log(formatZipCode('12345678')); // '12345-678'