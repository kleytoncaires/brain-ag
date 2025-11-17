export type DocumentType = 'CPF' | 'CNPJ';

export interface Address {
  city: string;
  state: string;
}

export interface Crop {
  id: string;
  name: string;
  harvest: string;
}

export interface Farm {
  id: string;
  name: string;
  city: string;
  state: string;
  totalArea: number;
  arableArea: number;
  vegetationArea: number;
  crops: Crop[];
}

export interface Producer {
  id: string;
  document: string;
  documentType: DocumentType;
  name: string;
  farms: Farm[];
  createdAt: string;
  updatedAt: string;
}

export interface DashboardStats {
  totalFarms: number;
  totalHectares: number;
  farmsByState: Record<string, number>;
  farmsByCrop: Record<string, number>;
  landUse: {
    arableArea: number;
    vegetationArea: number;
  };
}

export interface FormErrors {
  [key: string]: string;
}

export interface ProducerFormData {
  document: string;
  documentType: DocumentType;
  name: string;
}

export interface FarmFormData {
  name: string;
  city: string;
  state: string;
  totalArea: number;
  arableArea: number;
  vegetationArea: number;
  crops: Crop[];
}
