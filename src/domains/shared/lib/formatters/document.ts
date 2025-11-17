import type { DocumentType } from '@/types';

export const formatDocument = (document: string, type: DocumentType): string => {
  if (type === 'CPF') {
    return document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
  return document.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
};
