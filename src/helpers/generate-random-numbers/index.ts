/**
 * Gera um número aleatório com o comprimento especificado.
 * 
 * @param length O comprimento do número aleatório a ser gerado.
 * @returns Uma string representando o número aleatório gerado.
 */

export const generateRandomNumber = (length: number): string => {
  return Array(length)
    .fill(1)
    .reduce(
      (acc, number) => `${acc}${Math.random().toString().substr(2, number)}`,
      ''
    );
};

// Exemplo de uso:
// console.log(generateRandomNumber(3)); // '123'
// console.log(generateRandomNumber(5)); // '12345'
// console.log(generateRandomNumber(10)); // 1234567890