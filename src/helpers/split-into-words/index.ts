/**
 * Divide um texto em palavras, considerando espaços em branco como delimitadores.
 * 
 * @param text O texto a ser dividido em palavras.
 * @returns Um array contendo as palavras resultantes da divisão do texto.
 */
const splitIntoWords = (text: string): string[] => text ? text.split(/\s+/) : [];

export default splitIntoWords;

// Exemplo de uso:
// console.log(splitIntoWords('Olá mundo! Este é um exemplo')); // ['Olá', 'mundo!', 'Este', 'é', 'um', 'exemplo.']
