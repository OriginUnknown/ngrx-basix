import { ActionReducerMap } from '@ngrx/store';
import { CounterState } from '../models/counter.model';
import * as fromCounterReducer from './counter.reducer';

// AppState interface is a consolidation of each of the domain state's interfaces
export interface AppState {
    readonly counter: CounterState;
}

// the AppReducer is maps the relevant reducers to the domain states
export const AppReducers: ActionReducerMap<AppState> = {
    counter: fromCounterReducer.reducer
};

