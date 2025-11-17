import type { Producer } from '@/types';

export const mockProducers: Producer[] = [
  {
    id: '1',
    document: '12345678901',
    documentType: 'CPF',
    name: 'João da Silva',
    farms: [
      {
        id: 'f1',
        name: 'Fazenda Boa Vista',
        city: 'Uberlândia',
        state: 'MG',
        totalArea: 1000,
        arableArea: 600,
        vegetationArea: 400,
        crops: [
          { id: 'c1', name: 'Soja', harvest: '2023' },
          { id: 'c2', name: 'Milho', harvest: '2023' },
        ],
      },
      {
        id: 'f2',
        name: 'Fazenda Esperança',
        city: 'Uberaba',
        state: 'MG',
        totalArea: 500,
        arableArea: 300,
        vegetationArea: 200,
        crops: [{ id: 'c3', name: 'Café', harvest: '2024' }],
      },
    ],
    createdAt: '2023-01-15T00:00:00.000Z',
    updatedAt: '2023-01-15T00:00:00.000Z',
  },
  {
    id: '2',
    document: '12345678000190',
    documentType: 'CNPJ',
    name: 'Agropecuária Brasil S.A.',
    farms: [
      {
        id: 'f3',
        name: 'Fazenda São José',
        city: 'Campinas',
        state: 'SP',
        totalArea: 2000,
        arableArea: 1500,
        vegetationArea: 500,
        crops: [
          { id: 'c4', name: 'Cana de Açúcar', harvest: '2023' },
          { id: 'c5', name: 'Laranja', harvest: '2023' },
        ],
      },
    ],
    createdAt: '2023-02-20T00:00:00.000Z',
    updatedAt: '2023-02-20T00:00:00.000Z',
  },
  {
    id: '3',
    document: '98765432109',
    documentType: 'CPF',
    name: 'Maria Oliveira',
    farms: [
      {
        id: 'f4',
        name: 'Sítio Recanto Verde',
        city: 'Curitiba',
        state: 'PR',
        totalArea: 300,
        arableArea: 180,
        vegetationArea: 120,
        crops: [{ id: 'c6', name: 'Feijão', harvest: '2024' }],
      },
    ],
    createdAt: '2023-03-10T00:00:00.000Z',
    updatedAt: '2023-03-10T00:00:00.000Z',
  },
];
