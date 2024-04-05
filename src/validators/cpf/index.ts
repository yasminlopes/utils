import { RegExHelper, onlyNumbers } from 'helpers';
import { isValidCheckSum } from 'validators';

export const RESERVED_NUMBERS = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
];

/**
 * Verifica se um número de CPF é válido.
 */
export function validateCpf(cpf: string): boolean {
  if (!cpf || typeof cpf !== 'string') return false;

  const digits = onlyNumbers(cpf);

  return (
    isValidFormat(cpf) && !isReservedNumber(digits) && isValidCheckSum(digits)
  );
}

/**
 * Verifica se um número de CPF está na lista de números reservados.
 */
export const isReservedNumber = (cpf: string): boolean => {
  return RESERVED_NUMBERS.indexOf(cpf) >= 0;
};

/**
 * Verifica se um número de CPF está em um formato válido.
 */
export function isValidFormat(cpf: string): boolean {
  return RegExHelper.cpf.test(cpf);
}
