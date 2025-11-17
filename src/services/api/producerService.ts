import { mockProducers } from '@/data/mockProducers';
import type { DashboardStats, Producer } from '@/types';

export const ProducerService = {
  getAll(): Producer[] {
    return mockProducers;
  },

  getDashboardStats(producers: Producer[]): DashboardStats {
    const allFarms = producers.flatMap((p) => p.farms);

    const totalFarms = allFarms.length;
    const totalHectares = allFarms.reduce((sum, farm) => sum + farm.totalArea, 0);

    const farmsByState = allFarms.reduce(
      (acc, farm) => {
        acc[farm.state] = (acc[farm.state] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    const farmsByCrop = allFarms.reduce(
      (acc, farm) => {
        farm.crops.forEach((crop) => {
          acc[crop.name] = (acc[crop.name] || 0) + 1;
        });
        return acc;
      },
      {} as Record<string, number>
    );

    const landUse = allFarms.reduce(
      (acc, farm) => ({
        arableArea: acc.arableArea + farm.arableArea,
        vegetationArea: acc.vegetationArea + farm.vegetationArea,
      }),
      { arableArea: 0, vegetationArea: 0 }
    );

    return {
      totalFarms,
      totalHectares,
      farmsByState,
      farmsByCrop,
      landUse,
    };
  },
};
