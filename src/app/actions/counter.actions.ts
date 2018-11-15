// Actions
import { Action } from '@ngrx/store';

export interface ActionWithPayload extends Action {
    payload?: any;
}
// Action APIs
export const INCREMENT_COUNTER: string = '[Counter] Increment counter';
export const DECREMENT_COUNTER: string = '[Counter] Decrement counter';

// Action helper functions - use NGRX Action class which return a new Action instance with type and payload
export class IncrementCounter implements ActionWithPayload {
    readonly type = INCREMENT_COUNTER;
    constructor(public payload: number) {}
}

export class DecrementCounter implements ActionWithPayload {
    readonly type = DECREMENT_COUNTER;
    constructor() {}
}

// Export helper functions under the CounterActions alias. Use pipe symbol to chain them together
// export type Actions = IncrementCounter | DecrementCounter;
