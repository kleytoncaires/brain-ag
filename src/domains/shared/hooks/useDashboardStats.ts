import { useMemo } from 'react';
import { ProducerService } from '@/services/api/producerService';
import type { Producer } from '@/types';

interface ChartData {
  name: string;
  value: number;
  [key: string]: string | number;
}

export const useDashboardStats = (producers: Producer[]) => {
  const stats = useMemo(() => ProducerService.getDashboardStats(producers), [producers]);

  const farmsByStateData = useMemo<ChartData[]>(
    () => Object.entries(stats.farmsByState).map(([name, value]) => ({ name, value })),
    [stats.farmsByState]
  );

  const farmsByCropData = useMemo<ChartData[]>(
    () => Object.entries(stats.farmsByCrop).map(([name, value]) => ({ name, value })),
    [stats.farmsByCrop]
  );

  const landUseData = useMemo<ChartData[]>(
    () => [
      { name: 'Área Agricultável', value: stats.landUse.arableArea },
      { name: 'Área de Vegetação', value: stats.landUse.vegetationArea },
    ],
    [stats.landUse]
  );

  return {
    stats,
    farmsByStateData,
    farmsByCropData,
    landUseData,
  };
};
