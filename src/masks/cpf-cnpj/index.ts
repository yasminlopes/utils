/**
 * @returns Aplica máscara de CPF
 */
export const cpfMask = (value: string) => {
    if (!value) return '';
  
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };
  
  /**
   * @returns Aplica máscara de CNPJ
   */
  export const cnpjMask = (value: string) => {
    if (!value) return '';
  
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };
  
  /**
   * @returns Aplica a máscara de CPF ou CNPJ de acordo com o tamanho da string
   */
  export const cpfCnpjMask = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
  
    return cleaned.length <= 11 ? cpfMask(cleaned) : cnpjMask(cleaned);
  };
  