import { RegExHelper } from '../../helpers/regex';

export const mobilePhoneMask = (value: string) => {
  const cleaned = `${value}`.replace(RegExHelper.nonDigit, '');
  
  const match = cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);

  if (match) {
    return `(${match[2]}) ${match[3]}-${match[4]}`;
  }

  return value;
}

// mobilePhoneMask('5511987654321'); // (11) 98765-4321
