import type { FarmFormData, ProducerFormData } from '@/types';

export const PRODUCER_INITIAL_VALUES: ProducerFormData = {
  document: '',
  documentType: 'CPF',
  name: '',
};

export const FARM_INITIAL_VALUES: FarmFormData = {
  name: '',
  city: '',
  state: '',
  totalArea: 0,
  arableArea: 0,
  vegetationArea: 0,
  crops: [],
};
