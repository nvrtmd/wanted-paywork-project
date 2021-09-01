import { ActionType } from 'Store/ActionTypes';
import { Itodo } from 'Utils/Hooks/useTodo';

export const updateTodo = (data: Itodo[]) => {
  return {
    type: ActionType.UPDATE,
    payload: data,
  };
};

export const deleteTodo = (data: string) => {
  return {
    type: ActionType.DELETE,
    payload: data,
  };
};

export const toggleTodo = (id: string) => {
  return {
    type: ActionType.TOGGLE,
    payload: id,
  };
};
