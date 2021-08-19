import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment } from '../actions/counter.actions';

// 状态名称
export const counterFeatureKey = 'counter';
// 状态类型接口
export interface State {
  count: number
}

export const initialState: State = {
  count: 0
};


export const reducer = createReducer(
  initialState,
  on(increment, state => ({ count: state.count + 1 })),
  on(decrement, state => ({ count: state.count - 1 }))
);

