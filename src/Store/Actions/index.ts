import { Itodo } from 'Utils/Hooks/useTodo';
import { ActionType } from 'Store/ActionTypes';

interface UpdateAction {
  type: ActionType.UPDATE;
  payload: Itodo[];
}

interface DeleteAction {
  type: ActionType.DELETE;
  payload: string;
}

interface ToggleAction {
  type: ActionType.TOGGLE;
  payload: string;
}

interface AddAction {
  type: ActionType.ADD;
  payload: Itodo;
}

interface SortByStatusAction {
  type: ActionType.SORT_BY_STATUS;
  payload: boolean;
}

interface SortByCreatedDate {
  type: ActionType.SORT_BY_CREATED_DATE;
  payload: boolean;
}

export type Action =
  | UpdateAction
  | DeleteAction
  | ToggleAction
  | AddAction
  | SortByStatusAction
  | SortByCreatedDate;
