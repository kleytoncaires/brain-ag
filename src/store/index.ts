import { configureStore } from '@reduxjs/toolkit';
import producersReducer from '@producers/store/producers';

export const store = configureStore({
  reducer: {
    producers: producersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
