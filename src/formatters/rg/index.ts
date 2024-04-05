import { RegExHelper } from '../../helpers/regex';

/**
 * Formata um número de Registro Geral (RG) de acordo com as especificações do Estado.
 * Se o estado for 'RJ' ou 'SP', o número do RG será formatado no padrão XX.XXX.XXX-X.
 * Caso contrário, o número do RG será retornado sem formatação.
 *
 * @param value O número do RG a ser formatado.
 * @param state O Estado do RG (opcional).
 * @returns O número do RG formatado de acordo com as regras do Estado, ou o número original se o Estado não for 'RJ' ou 'SP'.
 */
export default function formatToRG(value: string, state?: string) {
  if (state !== 'RJ' && state !== 'SP') {
    return value;
  } else {
    return value
      .toUpperCase()
      .replace(RegExHelper.nonDigitABX, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})([ABX]{1})$/, '$1-$2');
  }
}

// Exemplos de uso:
// console.log(formatToRG('00000000A', 'SP')); //  '00.000.000-A'
// console.log(formatToRG('00.00.0000-0', 'RJ')); // '00.000.000-0'
// console.log(formatToRG('MG-14.808.688', 'MG')); // 'MG-14.808.688'
