/**
 * 
 * @param index A posição do caractere a ser verificado.
 * @param input O texto a ser verificado.
 * @returns Retorna true se o caractere for o último do texto.
 */
export const isLastChar = (index: number, input: string): boolean => index === input.length - 1;

// Exemplo de uso:
// console.log(isLastChar(2, '123')); // true
// console.log(isLastChar(1, '123')); // false