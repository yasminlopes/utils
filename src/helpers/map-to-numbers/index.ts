import { mapToNumeric } from 'helpers';

/**
 * Mapeia uma string contendo caracteres numéricos para um array de números.
 * 
 * @param value A string contendo caracteres numéricos.
 * @returns Um array de números.
 */
export const mapToNumbers = (value: string): Array<number> => mapToNumeric(value).split('').map(Number);

// Exemplos de uso:
// console.log(mapToNumbers('123456')); // Saída: [1, 2, 3, 4, 5, 6]
// console.log(mapToNumbers('9876')); // Saída: [9, 8, 7, 6]
// console.log(mapToNumbers('')); // Saída: []
// console.log(mapToNumbers('abc123def')); // Saída: [1, 2, 3]
// console.log(mapToNumbers('R$ 1.234,56')); // Saída: [1, 2, 3, 4, 5, 6]

