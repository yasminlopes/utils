/**
 * Formata uma data para o formato brasileiro (DD/MM/AAAA).
 *
 * Esta função utiliza a API Intl.DateTimeFormat para formatar a data,
 * utilizando o locale 'pt-BR' para garantir a formatação no padrão brasileiro.
 *
 * @param date A data a ser formatada.
 * @returns A data formatada no formato brasileiro (DD/MM/AAAA) com a instancia de Date.
 */

const options: Intl.DateTimeFormatOptions = {
  timeZone: 'America/Sao_Paulo',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
};

export default function formatToBrDate(date: Date): string {
  const dateString = date.toISOString().split('T')[0]; // Captura a data no formato americano (AAAA-MM-DD)

  const adjustedDate = new Date(dateString + 'T00:00:00-03:00'); // Ajusta a data para o fuso horário de Brasília

  return adjustedDate.toLocaleDateString('pt-BR', options);
}

// Exemplo de uso:
// console.log(formatToBrDate(new Date())); // '03/04/2024'
// console.log(formatToBrDate(new Date('2024-12-25'))); // '25/12/2024'
// console.log(formatToBrDate(new Date(2001, 3, 27))); // '27/04/2001'