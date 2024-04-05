import { onlyNumbers } from 'helpers';

/**
 * Gera somas de verificação. Multiplica números por validadores e soma-os para gerar
 * somas de verificação, que são usadas para verificar se os números são válidos.
 * 
 * @param base O número ou string contendo os números usados para gerar os verificadores.
 * @param weight Os validadores usados para gerar os verificadores. Pode ser um único número ou um array de números.
 * @returns A soma de verificação gerada.
 */
export const generateCheckSums = (base: string | number, weight: number | number[]): number => {
  const digits = onlyNumbers(base);

  const weights =
    typeof weight === 'number' ? Array(digits.length).fill(0).map((_, i) => weight - i) : weight;

  return digits.split('').reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0);
}

