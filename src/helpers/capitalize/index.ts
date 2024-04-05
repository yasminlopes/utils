/**
 * Lista de siglas comuns em português que devem ser mantidas em caixa alta durante a capitalização.
 */
export const ACRONYMS = ['cia', 'cnpj', 'cpf', 'ltda', 'me', 'rg'];

/**
 * Lista de preposições em português que devem ser mantidas em caixa baixa durante a capitalização.
 */
export const PREPOSITIONS = [
  'a',
  'com',
  'da',
  'das',
  'de',
  'do',
  'dos',
  'e',
  'em',
  'na',
  'nas',
  'no',
  'nos',
  'o',
  'por',
  'sem',
];

/**
 * Opções para a função de capitalização `capitalizeHelper`.
 */
type CapitalizeOptions = {
  /** Lista de palavras que devem ser mantidas em caixa baixa durante a capitalização. */
  lowerCaseWords?: string[];
  /** Lista de siglas que devem ser mantidas em caixa alta durante a capitalização. */
  upperCaseWords?: string[];
};

/**
 * Capitaliza uma string, mantendo em caixa alta as siglas especificadas e em caixa baixa as preposições.
 *
 * @param value A string a ser capitalizada.
 * @param lowerCaseWords Uma lista opcional de palavras que devem ser mantidas em caixa baixa.
 * @param upperCaseWords Uma lista opcional de siglas que devem ser mantidas em caixa alta.
 * @returns A string capitalizada.
 */
export function capitalizeHelper(value: string, { lowerCaseWords = PREPOSITIONS, upperCaseWords = ACRONYMS }: CapitalizeOptions = {}): string {
  return value
    .split(' ')
    .filter((word) => !!word)
    .map((word, index) => {
      const lowerCaseWord = word.toLocaleLowerCase();

      if (index > 0 && lowerCaseWords.indexOf(lowerCaseWord) !== -1)
        return lowerCaseWord;

      const upperCaseWord = word.toLocaleUpperCase();

      if (upperCaseWords.indexOf(upperCaseWord) !== -1) return upperCaseWord;

      return upperCaseWord.charAt(0) + lowerCaseWord.substr(1);
    })
    .join(' ');
}

// Exemplos de uso
// console.log(capitalizeHelper('yasmin lopes')); // 'Yasmin Lopes'
// console.log(capitalizeHelper('r. das flores, 123')); // Saída: 'R. das Flores, 123'
// console.log(capitalizeHelper('ltda')); // 'Ltda'
// console.log(capitalizeHelper('empresa cia ltda')); // 'Empresa Cia Ltda'
// console.log(capitalizeHelper('empresa ltda me')); // 'Empresa Ltda ME'
