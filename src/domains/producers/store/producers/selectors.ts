import type { RootState } from '@/store';

export const selectProducers = (state: RootState) => state.producers.producers;
export const selectProducersLoading = (state: RootState) => state.producers.loading;
export const selectProducersError = (state: RootState) => state.producers.error;
export const selectProducerById = (state: RootState, id: string) =>
  state.producers.producers.find((p) => p.id === id);
