import { isValidCNPJ, isValidCPF, isValidDocument } from './document';

describe('isValidCPF', () => {
  it('deve validar CPF correto', () => {
    expect(isValidCPF('12345678909')).toBe(true);
  });

  it('deve rejeitar CPF com menos de 11 dígitos', () => {
    expect(isValidCPF('123456789')).toBe(false);
  });

  it('deve rejeitar CPF com mais de 11 dígitos', () => {
    expect(isValidCPF('123456789012')).toBe(false);
  });

  it('deve rejeitar CPF vazio', () => {
    expect(isValidCPF('')).toBe(false);
  });

  it('deve rejeitar CPF com todos os dígitos iguais', () => {
    expect(isValidCPF('11111111111')).toBe(false);
  });
});

describe('isValidCNPJ', () => {
  it('deve validar CNPJ correto', () => {
    expect(isValidCNPJ('11222333000181')).toBe(true);
  });

  it('deve rejeitar CNPJ com menos de 14 dígitos', () => {
    expect(isValidCNPJ('1234567800019')).toBe(false);
  });

  it('deve rejeitar CNPJ com mais de 14 dígitos', () => {
    expect(isValidCNPJ('123456780001901')).toBe(false);
  });

  it('deve rejeitar CNPJ vazio', () => {
    expect(isValidCNPJ('')).toBe(false);
  });

  it('deve rejeitar CNPJ com todos os dígitos iguais', () => {
    expect(isValidCNPJ('11111111111111')).toBe(false);
  });
});

describe('isValidDocument', () => {
  it('deve validar CPF', () => {
    expect(isValidDocument('12345678909')).toBe(true);
  });

  it('deve validar CNPJ', () => {
    expect(isValidDocument('11222333000181')).toBe(true);
  });

  it('deve rejeitar tamanho inválido', () => {
    expect(isValidDocument('123')).toBe(false);
  });
});
