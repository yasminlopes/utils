import { RegExHelper } from '.'; 

describe('RegExHelper', () => {
  it('should validate password strength', () => {
    expect(RegExHelper.passwordStrength.test('Password1!')).toBe(true);
    expect(RegExHelper.passwordStrength.test('password')).toBe(false);
  });

  it('should validate CPF or CNPJ', () => {
    expect(RegExHelper.cpfCnpj.test('123.456.789-00')).toBe(true);
    expect(RegExHelper.cpfCnpj.test('12.345.678/0001-12')).toBe(true);
    expect(RegExHelper.cpfCnpj.test('12345678900')).toBe(true);
  });

  it('should validate CNPJ', () => {
    expect(RegExHelper.cnpj.test('12.345.678/0001-12')).toBe(true);
    expect(RegExHelper.cnpj.test('12345678000112')).toBe(true);
  });

  it('should validate CPF', () => {
    expect(RegExHelper.cpf.test('123.456.789-00')).toBe(true);
    expect(RegExHelper.cpf.test('12345678900')).toBe(true);
  });

  it('should validate phone number', () => {
    expect(RegExHelper.phone.test('(12) 93456-7890')).toBe(true);
    expect(RegExHelper.phone.test('1234567890')).toBe(false);
  });

  it('should validate base64 string', () => {
    const base64String = Buffer.from('Hello, world!').toString('base64');
    
    expect(RegExHelper.base64.test(base64String)).toBe(true);
    expect(RegExHelper.base64.test('Hello, world!')).toBe(false);
  });

  it('should match all spaces', () => {
    expect('Hello, world!'.replace(RegExHelper.matchAllSpaces, '')).toBe('Hello,world!');
  });

  it('should match the first character', () => {
    expect('Hello, world!'.replace(RegExHelper.beginCharacter, '')).toBe('ello, world!');
  });

  it('should match all non-digit characters', () => {
    expect('Hello, world!'.replace(RegExHelper.nonDigit, '')).toBe('');
  });

  it('should match all non-digit and non-ABX characters', () => {
    expect('Hello, world!'.replace(RegExHelper.nonDigitABX, '')).toBe('');
  });
});