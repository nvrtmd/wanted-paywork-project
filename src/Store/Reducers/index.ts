/* eslint-disable import/no-unresolved */
import { combineReducers } from 'redux';
import todoReducer from 'Store/Reducers/todoReducer';

const reducers = combineReducers({
  todo: todoReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
