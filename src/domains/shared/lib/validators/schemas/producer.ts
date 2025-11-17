import * as yup from 'yup';
import { isValidDocument } from '../document';

export const producerSchema = yup.object().shape({
  document: yup
    .string()
    .required('CPF/CNPJ é obrigatório')
    .test('valid-document', 'CPF/CNPJ inválido', (value) => {
      if (!value) return false;
      return isValidDocument(value);
    }),
  documentType: yup
    .string()
    .oneOf(['CPF', 'CNPJ'], 'Tipo de documento inválido')
    .required('Tipo de documento é obrigatório'),
  name: yup
    .string()
    .required('Nome do produtor é obrigatório')
    .min(3, 'Nome deve ter no mínimo 3 caracteres'),
});
