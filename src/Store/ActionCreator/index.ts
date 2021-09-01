import { ActionType } from 'Store/ActionTypes';
import { Itodo } from 'Utils/Hooks/useTodo';

// 처음 API 호출을 통해 초기 값을 update할 때의 action
export const updateTodo = (list: Itodo[]) => {
  return {
    type: ActionType.UPDATE,
    payload: list,
  };
};

// todo item 삭제를 위한 action
export const deleteTodo = (id: string) => {
  return {
    type: ActionType.DELETE,
    payload: id,
  };
};

// todo item의 완료 상태 toggle 기능을 위한 action
export const toggleTodo = (id: string) => {
  return {
    type: ActionType.TOGGLE,
    payload: id,
  };
};

// todo item 추가를 위한 action
export const addTodo = (item: Itodo) => {
  return {
    type: ActionType.ADD,
    payload: item,
  };
};

// 완료 상태를 기준으로 todo item을 정렬하기 위한 action
export const sortTodoByStatus = (toggle: boolean) => {
  return {
    type: ActionType.SORT_BY_STATUS,
    payload: toggle,
  };
};

// 작성일을 기준으로 todo item을 정렬하기 위한 action
export const sortTodoByCreatedDate = (toggle: boolean) => {
  return {
    type: ActionType.SORT_BY_CREATED_DATE,
    payload: toggle,
  };
};

// todo item의 content(할일 내용)을 수정하기 위한 action
export const editContent = (id: string, content: string) => {
  return {
    type: ActionType.EDIT_CONTENT,
    payload: { id, content },
  };
};
