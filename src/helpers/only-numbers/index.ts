import { RegExHelper } from 'helpers';

/**
 * 
 * @param input A string ou número que será verificado.
 * @returns Retorna uma string contendo apenas números.
 */
export const onlyNumbers = (input: string | number): string => String(input).replace(RegExHelper.nonDigit, '');

// Exemplo de uso:
// console.log(onlyNumbers('abc123')); // '123'
// console.log(onlyNumbers('123abc')); // '123'
// console.log(onlyNumbers('45698das')); // '45698'