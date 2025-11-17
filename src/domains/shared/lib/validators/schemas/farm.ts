import * as yup from 'yup';

export const farmSchema = yup.object().shape({
  name: yup
    .string()
    .required('Nome da fazenda é obrigatório')
    .min(3, 'Nome deve ter no mínimo 3 caracteres'),
  city: yup.string().required('Cidade é obrigatória'),
  state: yup.string().required('Estado é obrigatório').length(2, 'Estado deve ter 2 caracteres'),
  totalArea: yup
    .number()
    .required('Área total é obrigatória')
    .positive('Área total deve ser maior que zero')
    .typeError('Área total deve ser um número'),
  arableArea: yup
    .number()
    .required('Área agricultável é obrigatória')
    .min(0, 'Área agricultável não pode ser negativa')
    .typeError('Área agricultável deve ser um número')
    .test(
      'area-validation',
      'A soma das áreas agricultável e de vegetação não pode exceder a área total',
      function (value) {
        const { totalArea, vegetationArea } = this.parent;
        if (!value || !totalArea || vegetationArea === undefined) return true;
        return value + vegetationArea <= totalArea;
      }
    ),
  vegetationArea: yup
    .number()
    .required('Área de vegetação é obrigatória')
    .min(0, 'Área de vegetação não pode ser negativa')
    .typeError('Área de vegetação deve ser um número')
    .test(
      'area-validation',
      'A soma das áreas agricultável e de vegetação não pode exceder a área total',
      function (value) {
        const { totalArea, arableArea } = this.parent;
        if (!value || !totalArea || arableArea === undefined) return true;
        return arableArea + value <= totalArea;
      }
    ),
  crops: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().required(),
        name: yup.string().required('Nome da cultura é obrigatório'),
        harvest: yup.string().required('Safra é obrigatória'),
      })
    )
    .min(0, 'Deve haver pelo menos uma cultura'),
});

export const validateFarmAreas = (
  totalArea: number,
  arableArea: number,
  vegetationArea: number
): boolean => {
  return arableArea + vegetationArea <= totalArea;
};
