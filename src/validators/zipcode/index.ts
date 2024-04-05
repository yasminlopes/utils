import { CEP_LENGTH } from 'formatters';
import { onlyNumbers } from 'helpers';

function isValidLength(cep: string) {
  return cep.length === CEP_LENGTH;
}

export function validateZipCode(cep: string) {
  if (!cep || typeof cep !== 'string') return false;

  const digits = onlyNumbers(cep);

  return isValidLength(digits);
}

// // Exemplo de uso:
// console.log(validateZipCode('17522540')); // true
// console.log(validateZipCode('1752285')); // false