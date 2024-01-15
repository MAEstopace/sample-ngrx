import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';
import { initialState, type TCounter } from './counter.state';

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, actions) => ({
    ...state,
    counter: state.counter + actions.payload,
  })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset, (state) => ({ ...state, ...initialState }))
);
