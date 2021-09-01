import { Action } from 'Store/Actions';
import { ActionType } from 'Store/ActionTypes';
import { Itodo } from 'Utils/Hooks/useTodo';

const initialState = [
  { id: '', content: '', isComplete: false, createdAt: '' },
];

const todoReducer = (state: Itodo[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE:
      return action.payload;
    case ActionType.DELETE:
      return state.filter((item) => item.id !== action.payload);
    case ActionType.TOGGLE:
      return state.map((item) => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete;
        }
        return item;
      });
    default:
      return state;
  }
};

export default todoReducer;
