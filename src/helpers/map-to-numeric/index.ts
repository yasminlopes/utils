import { RegExHelper } from 'helpers/regex';
/**
 * Remove todos os caracteres não numéricos de uma string.
 *
 * @param value A string a ser mapeada para caracteres numéricos.
 * @returns A string resultante contendo apenas caracteres numéricos.
 */
export const mapToNumeric = (value: string) => value.replace(RegExHelper.nonDigit, '');

// Exemplos de uso:
// console.log(mapToNumeric('abc123def456')); // '123456'
// console.log(mapToNumeric('R$ 1.234,56')); // '123456'
// console.log(mapToNumeric('12-34-5678')); // '12345678'
