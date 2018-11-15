export interface CounterState {
    counter: number;
    metadata: string;
}

export const initialState: CounterState = {
    counter: 0,
    metadata: 'Test string'
};
