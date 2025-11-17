import type { DocumentType } from '@/types';

export const getDocumentMask = (documentType: DocumentType): string => {
  return documentType === 'CPF' ? '999.999.999-99' : '99.999.999/9999-99';
};

export const getDocumentLabel = (documentType: DocumentType): string => {
  return documentType === 'CPF' ? 'CPF' : 'CNPJ';
};
