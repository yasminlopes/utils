/**
 * Utiliza a nova API Intl.NumberFormat para formatar um número para o formato monetário brasileiro (BRL).
 * 
 * @param value O valor numérico a ser formatado.
 * @returns O valor formatado em BRL.
 */
export default function formatToBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

// Exemplos de uso:
// console.log(formatToBRL(1000)); // R$ 1.000,00
// console.log(formatToBRL(9898654554.8845)); // R$ 9.898.654.554,88
// console.log(formatToBRL(0.9)); // R$ 0,90
// console.log(formatToBRL(-99.99)); // -R$ 99,99
