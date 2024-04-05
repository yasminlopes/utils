import { BR_STATES_DATA, STATES, State } from 'common/brasil-states';
import { generateCheckSums, generateRandomNumber } from 'helpers';

export const CPF_LENGTH = 11;
/**
 * Gera um número de CPF válido.
 * 
 * @param state Opcional. O estado a ser associado ao CPF. Se não fornecido, um estado aleatório será selecionado.
 * @returns Um número de CPF válido.
 */
export const generateCpf = (state?: State): string => {
    const stateCode = state && STATES.includes(state) ? BR_STATES_DATA[state].code : generateRandomNumber(1);
    const baseCPF = generateRandomNumber(CPF_LENGTH - 3) + stateCode;
  
    const firstCheckDigitMod = generateCheckSums(baseCPF, 10) % 11;
    const firstCheckDigit = (firstCheckDigitMod < 2 ? 0 : 11 - firstCheckDigitMod).toString();
  
    const secondCheckDigitMod = generateCheckSums(baseCPF + firstCheckDigit, 11) % 11;
    const secondCheckDigit = (secondCheckDigitMod < 2 ? 0 : 11 - secondCheckDigitMod).toString();
  
    return `${baseCPF}${firstCheckDigit.toString()}${secondCheckDigit.toString()}`;
  }

// Exemplo de uso:
// console.log(generateCpf()); // 82142450105 (um exemplo de CPF gerado)
// console.log(generateCpf('SP')); // 82142450105 (um exemplo de CPF gerado com estado associado