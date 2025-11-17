import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addFarmToProducer,
  addProducer,
  deleteFarmFromProducer,
  deleteProducer,
  selectProducers,
  updateFarmFromProducer,
  updateProducer,
} from '@producers/store/producers';
import type { Farm, Producer } from '@/types';

export const useProducers = () => {
  const dispatch = useAppDispatch();
  const producers = useAppSelector(selectProducers);

  const handleAddProducer = useCallback(
    (producer: Producer) => {
      dispatch(addProducer(producer));
    },
    [dispatch]
  );

  const handleUpdateProducer = useCallback(
    (producer: Producer) => {
      dispatch(updateProducer(producer));
    },
    [dispatch]
  );

  const handleDeleteProducer = useCallback(
    (id: string) => {
      dispatch(deleteProducer(id));
    },
    [dispatch]
  );

  const handleAddFarm = useCallback(
    (producerId: string, farm: Farm) => {
      dispatch(addFarmToProducer({ producerId, farm }));
    },
    [dispatch]
  );

  const handleUpdateFarm = useCallback(
    (producerId: string, farm: Farm) => {
      dispatch(updateFarmFromProducer({ producerId, farm }));
    },
    [dispatch]
  );

  const handleDeleteFarm = useCallback(
    (producerId: string, farmId: string) => {
      dispatch(deleteFarmFromProducer({ producerId, farmId }));
    },
    [dispatch]
  );

  const getProducerById = useCallback(
    (id: string) => {
      return producers.find((p) => p.id === id);
    },
    [producers]
  );

  return {
    producers,
    addProducer: handleAddProducer,
    updateProducer: handleUpdateProducer,
    deleteProducer: handleDeleteProducer,
    addFarm: handleAddFarm,
    updateFarm: handleUpdateFarm,
    deleteFarm: handleDeleteFarm,
    getProducerById,
  };
};
