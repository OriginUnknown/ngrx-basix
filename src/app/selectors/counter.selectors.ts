import { CounterState } from '../models/counter.model';
import { createFeatureSelector } from '@ngrx/store';

export const getCounterState = createFeatureSelector<CounterState>('counter');

// Create helper methods to help get data from counter state domain
export const getCounterValue = (state: CounterState): number => state.counter;
export const getMetadataValue = (state: CounterState): string => state.metadata;
