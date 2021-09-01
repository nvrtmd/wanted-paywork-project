import { Action } from 'Store/Actions';
import { ActionType } from 'Store/ActionTypes';
import { Itodo } from 'Utils/Hooks/useTodo';

const initialState: Itodo[] = [];

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

    case ActionType.ADD:
      return state.concat(action.payload);

    case ActionType.SORT_BY_STATUS:
      if (action.payload) {
        return [...state]
          .filter((item) => item.isComplete === action.payload)
          .concat(state.filter((item) => item.isComplete !== action.payload));
      } else {
        return [...state].sort((a, b) => a.id.localeCompare(b.id));
      }

    case ActionType.SORT_BY_CREATED_DATE:
      if (action.payload) {
        return [...state].sort((a, b) =>
          a.createdAt.localeCompare(b.createdAt),
        );
      } else {
        return [...state].sort((a, b) => a.id.localeCompare(b.id));
      }

    case ActionType.EDIT_CONTENT:
      if (action.payload.content) {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            item.content = action.payload.content;
          }
          return item;
        });
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default todoReducer;
