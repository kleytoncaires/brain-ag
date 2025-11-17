import type { Farm, Producer } from '@/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { ProducersState } from './types';

const initialState: ProducersState = {
  producers: [],
  loading: false,
  error: null,
};

const producersSlice = createSlice({
  name: 'producers',
  initialState,
  reducers: {
    loadProducers: (state, action: PayloadAction<Producer[]>) => {
      state.producers = action.payload;
      state.loading = false;
    },
    addProducer: (state, action: PayloadAction<Producer>) => {
      state.producers.push(action.payload);
    },
    updateProducer: (state, action: PayloadAction<Producer>) => {
      const index = state.producers.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.producers[index] = action.payload;
      }
    },
    deleteProducer: (state, action: PayloadAction<string>) => {
      state.producers = state.producers.filter((p) => p.id !== action.payload);
    },
    addFarmToProducer: (state, action: PayloadAction<{ producerId: string; farm: Farm }>) => {
      const producer = state.producers.find((p) => p.id === action.payload.producerId);
      if (producer) {
        producer.farms.push(action.payload.farm);
        producer.updatedAt = new Date().toISOString();
      }
    },
    updateFarmFromProducer: (state, action: PayloadAction<{ producerId: string; farm: Farm }>) => {
      const producer = state.producers.find((p) => p.id === action.payload.producerId);
      if (producer) {
        const farmIndex = producer.farms.findIndex((f) => f.id === action.payload.farm.id);
        if (farmIndex !== -1) {
          producer.farms[farmIndex] = action.payload.farm;
          producer.updatedAt = new Date().toISOString();
        }
      }
    },
    deleteFarmFromProducer: (
      state,
      action: PayloadAction<{ producerId: string; farmId: string }>
    ) => {
      const producer = state.producers.find((p) => p.id === action.payload.producerId);
      if (producer) {
        producer.farms = producer.farms.filter((f) => f.id !== action.payload.farmId);
        producer.updatedAt = new Date().toISOString();
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  loadProducers,
  addProducer,
  updateProducer,
  deleteProducer,
  addFarmToProducer,
  updateFarmFromProducer,
  deleteFarmFromProducer,
  setLoading,
  setError,
} = producersSlice.actions;

export default producersSlice.reducer;
