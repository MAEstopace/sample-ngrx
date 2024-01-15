import { createAction } from '@ngrx/store';

export const increment = createAction(
  '[Counter] Increment',
  (value: number) => ({
    payload: value,
  })
);
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
