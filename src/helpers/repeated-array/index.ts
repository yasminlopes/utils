/**
 * Verifica se todos os elementos de um array são iguais.
 * 
 * @param items O array a ser verificado.
 * @returns Um booleano indicando se todos os elementos são iguais (true) ou não (false).
 */
export const isRepeatedArray = <T>(items: Array<T>): boolean => items.every((item) => items[0] === item);

// Exemplo de uso:
// console.log(isRepeatedArray([1, 1, 1, 1])); // true
// console.log(isRepeatedArray([1, 2, 3, 4])); // false
// console.log(isRepeatedArray(['a', 'a', 'a'])); // true
// console.log(isRepeatedArray(['apple', 'banana', 'apple'])); // false
