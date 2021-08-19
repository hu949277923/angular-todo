import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '..';
import { todoFeatureKey, State, adapter } from '../reducers/todo.reducer';

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors()

export const selectTodo = createFeatureSelector<AppState, State>(todoFeatureKey)

export const selectTodos = createSelector(selectTodo, selectAll)