import type { Crop, FarmFormData } from '@/types';
import { BRAZILIAN_STATES, CROP_TYPES, HARVEST_YEARS } from '@shared/config/constants';
import { FARM_INITIAL_VALUES } from '@shared/config/constants/forms';
import { generateCropId } from '@shared/lib/generators/id';
import { getFieldError } from '@shared/lib/helpers/formik';
import { farmSchema } from '@shared/lib/validators/schemas';
import { Button, Input, Select } from '@shared/ui';
import { useFormik } from 'formik';
import { useState } from 'react';
import {
  CropItem,
  CropsHeader,
  CropsList,
  CropsSection,
  FormActions,
  FormContainer,
  FormRow,
  SectionTitle,
} from './FarmForm.styles';

interface FarmFormProps {
  initialValues?: FarmFormData;
  onSubmit: (values: FarmFormData) => void;
  onCancel: () => void;
}

export const FarmForm: React.FC<FarmFormProps> = ({
  initialValues = FARM_INITIAL_VALUES,
  onSubmit,
  onCancel,
}) => {
  const [newCrop, setNewCrop] = useState({ name: '', harvest: '' });

  const formik = useFormik<FarmFormData>({
    initialValues,
    validationSchema: farmSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const handleAddCrop = () => {
    if (newCrop.name && newCrop.harvest) {
      const crop: Crop = {
        id: generateCropId(),
        name: newCrop.name,
        harvest: newCrop.harvest,
      };
      formik.setFieldValue('crops', [...formik.values.crops, crop]);
      setNewCrop({ name: '', harvest: '' });
    }
  };

  const handleRemoveCrop = (cropId: string) => {
    formik.setFieldValue(
      'crops',
      formik.values.crops.filter((c) => c.id !== cropId)
    );
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormContainer>
        <FormRow>
          <Input
            label="Nome da Fazenda"
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
          <Input
            label="Cidade"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={getFieldError(formik, 'city')}
            fullWidth
            required
          />

          <Select
            label="Estado"
            name="state"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={getFieldError(formik, 'state')}
            options={BRAZILIAN_STATES}
            fullWidth
            required
          />
        </FormRow>

        <FormRow>
          <Input
            label="Área Total (hectares)"
            name="totalArea"
            type="number"
            step="0.01"
            value={formik.values.totalArea}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={getFieldError(formik, 'totalArea')}
            fullWidth
            required
          />

          <Input
            label="Área Agricultável (hectares)"
            name="arableArea"
            type="number"
            step="0.01"
            value={formik.values.arableArea}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={getFieldError(formik, 'arableArea')}
            fullWidth
            required
          />

          <Input
            label="Área de Vegetação (hectares)"
            name="vegetationArea"
            type="number"
            step="0.01"
            value={formik.values.vegetationArea}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={getFieldError(formik, 'vegetationArea')}
            fullWidth
            required
          />
        </FormRow>

        <CropsSection>
          <CropsHeader>
            <SectionTitle>Culturas Plantadas</SectionTitle>
          </CropsHeader>

          {formik.values.crops.length > 0 && (
            <CropsList>
              {formik.values.crops.map((crop) => (
                <CropItem key={crop.id}>
                  <Input label="Cultura" value={crop.name} disabled fullWidth />
                  <Input label="Safra" value={crop.harvest} disabled fullWidth />
                  <Button
                    type="button"
                    variant="danger"
                    size="small"
                    onClick={() => handleRemoveCrop(crop.id)}
                  >
                    Remover
                  </Button>
                </CropItem>
              ))}
            </CropsList>
          )}

          <CropItem>
            <Select
              label="Nova Cultura"
              value={newCrop.name}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setNewCrop({ ...newCrop, name: e.target.value })
              }
              options={CROP_TYPES.map((crop) => ({ value: crop, label: crop }))}
              fullWidth
            />
            <Select
              label="Safra"
              value={newCrop.harvest}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setNewCrop({ ...newCrop, harvest: e.target.value })
              }
              options={HARVEST_YEARS.map((year) => ({ value: year, label: year }))}
              fullWidth
            />
            <Button
              size="small"
              type="button"
              onClick={handleAddCrop}
              disabled={!newCrop.name || !newCrop.harvest}
            >
              Adicionar
            </Button>
          </CropItem>
        </CropsSection>

        <FormActions>
          <Button size="small" type="button" variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
          <Button size="small" type="submit">
            Salvar Fazenda
          </Button>
        </FormActions>
      </FormContainer>
    </form>
  );
};
