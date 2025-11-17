import type { ProducerFormData } from '@/types';
import { DOCUMENT_TYPES } from '@shared/config/constants';
import { PRODUCER_INITIAL_VALUES } from '@shared/config/constants/forms';
import { getDocumentLabel, getDocumentMask } from '@shared/lib/helpers/document';
import { getFieldError } from '@shared/lib/helpers/formik';
import { producerSchema } from '@shared/lib/validators/schemas';
import { Button, Input, Select } from '@shared/ui';
import { useFormik } from 'formik';
import { useMaskInput } from 'use-mask-input';
import { FormActions, FormContainer, FormRow } from './ProducerForm.styles';

interface ProducerFormProps {
  initialValues?: ProducerFormData;
  onSubmit: (values: ProducerFormData) => void;
  onCancel: () => void;
}

export const ProducerForm: React.FC<ProducerFormProps> = ({
  initialValues = PRODUCER_INITIAL_VALUES,
  onSubmit,
  onCancel,
}) => {
  const formik = useFormik<ProducerFormData>({
    initialValues,
    validationSchema: producerSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const documentMask = getDocumentMask(formik.values.documentType);
  const maskRef = useMaskInput({ mask: documentMask });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormContainer>
        <FormRow>
          <Input
            label="Nome do Produtor"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={getFieldError(formik, 'name')}
            fullWidth
            required
          />
        </FormRow>

        <FormRow>
          <Select
            label="Tipo de Documento"
            name="documentType"
            value={formik.values.documentType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={getFieldError(formik, 'documentType')}
            options={DOCUMENT_TYPES}
            fullWidth
            required
          />

          <Input
            ref={maskRef}
            label={getDocumentLabel(formik.values.documentType)}
            name="document"
            value={formik.values.document}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={getFieldError(formik, 'document')}
            fullWidth
            required
          />
        </FormRow>

        <FormActions>
          <Button size="small" type="button" variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
          <Button size="small" type="submit">
            Salvar
          </Button>
        </FormActions>
      </FormContainer>
    </form>
  );
};
