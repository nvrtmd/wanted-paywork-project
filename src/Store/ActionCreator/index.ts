import { ActionType } from 'Store/ActionTypes';
import { Itodo } from 'Utils/Hooks/useTodo';

export const updateTodo = (list: Itodo[]) => {
  return {
    type: ActionType.UPDATE,
    payload: list,
  };
};

export const deleteTodo = (id: string) => {
  return {
    type: ActionType.DELETE,
    payload: id,
  };
};

export const toggleTodo = (id: string) => {
  return {
    type: ActionType.TOGGLE,
    payload: id,
  };
};

export const addTodo = (item: Itodo) => {
  return {
    type: ActionType.ADD,
    payload: item,
  };
};

export const sortTodoByStatus = (toggle: boolean) => {
  return {
    type: ActionType.SORT_BY_STATUS,
    payload: toggle,
  };
};

export const sortTodoByCreatedDate = (toggle: boolean) => {
  return {
    type: ActionType.SORT_BY_CREATED_DATE,
    payload: toggle,
  };
};
