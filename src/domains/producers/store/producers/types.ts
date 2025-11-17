import type { Producer } from '@/types';

export interface ProducersState {
  producers: Producer[];
  loading: boolean;
  error: string | null;
}
