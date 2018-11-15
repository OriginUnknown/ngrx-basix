import { CounterState, initialState } from '../models/counter.model';
import * as counterActions from '../actions/counter.actions';

export function reducer (state: CounterState = initialState, action: counterActions.ActionWithPayload): CounterState {
    switch (action.type) {
        case counterActions.INCREMENT_COUNTER:
            return Object.assign(state, {
                counter: action.payload,
                metadata: 'Counter incremented'
            });
        case counterActions.DECREMENT_COUNTER:
            return {
                ...state,
                counter: action.payload,
                metadata: 'Counter incremented'
            };

        default:
            return state;
    }
}
