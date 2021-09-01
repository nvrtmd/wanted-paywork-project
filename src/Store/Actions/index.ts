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

export type Action = UpdateAction | DeleteAction | ToggleAction;
