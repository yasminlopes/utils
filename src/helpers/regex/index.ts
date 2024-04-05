// Verifica se a senha possui ao menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial
const passwordStrength = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

// Valida se é um CPF ou um CNPJ válido, independente da máscara
const cpfCnpj = /^(\d{3})\.?(\d{3})\.?(\d{3})\-?(\d{2}$)$|^(\d{2})\.?(\d{3})\.?(\d{3})\/?([0-1]{4})\-?(\d{2})$/; 

// Valida se é um CNPJ válido, independente da máscara
const cnpj = /^[0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2}$/;

// Valida se é um CPF válido, independente da máscara || /^(\d{11}|\d{3}\.\d{3}\.\d{3}\-\d{2})$/
const cpf = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;

// Valida se é um telefone válido, tendo o digíto 9 como opcional
const phone = /^\(?([0-9]{2})\)? ?9([0-9]{4})-([0-9]{4})$/;

// Valida se é uma string base64
const base64 = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/;

// Busca por todos os espaços em branco
const matchAllSpaces = /\s/g;

// Busca o primeiro caractere de uma string
const beginCharacter = /^./;
 
// Busca por todos os caracteres que não são dígitos || /\D/g
const nonDigit = /[^\d]/g;


// Busca por todos os caracteres que não são dígitos, A, B ou X
const nonDigitABX = /[^\dABX]/g;


/* Máscaras */

const cpfMask = [/(\d{3})(\d)/, /(\d{3})(\d)/, /(\d{3})(\d)/]; // CPF: 123.456.789-00

const cnpjMask = [/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/]; // CNPJ: 12.345.678/0001-12

const zipCodeMask = [/^(\d{5})(\d)/]; // CEP: 12345-678

const phoneMask = [/(\d{2})(\d{5})(\d{4})/]; // Telefone: (12) 34567-8901

export const RegExHelper = {
  passwordStrength,
  cnpj,
  cpf,
  cpfCnpj,
  phone,
  base64,
  nonDigit,
  nonDigitABX,
  matchAllSpaces,
  beginCharacter,
  cnpjMask,
  cpfMask,
  zipCodeMask,
  phoneMask
};
