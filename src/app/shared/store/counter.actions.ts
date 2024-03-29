import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter] Increment',
  props<{ payload: number }>()
);
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
