import { splitOnLastHelper } from 'helpers';

export default function formatToList(value: string[]): string {
  if (value.length === 0) return '';

  if (value.length === 1) return value[0];

  const [everyButLast, last] = splitOnLastHelper(value);

  return everyButLast.join(', ') + ' e ' + last;

}
// Exemplos de uso :
// console.log(formatToList(['Yasmin', 'Maria'])); // 'Yasmin e Maria'
// console.log(formatToList(['Yasmin', 'Maria', 'João'])); // 'Yasmin, Maria e João'
// console.log(formatToList(['Yasmin'])); // 'Yasmin'

