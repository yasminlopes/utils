/**
 * Retorna o dígito verificador restante para completar um cálculo de módulo 11.
 * 
 * @param value O valor para o qual o dígito verificador deve ser calculado.
 * @returns O dígito verificador restante.
 */
export const getRemaining = (value: number): number => (value % 11) < 2 ? 0 : 11 - (value % 11);

// Exemplos de uso:
// console.log(getRemaining(123)); // 9
// console.log(getRemaining(456)); // 6
// console.log(getRemaining(10)); // 1
// console.log(getRemaining(0)); // 0

