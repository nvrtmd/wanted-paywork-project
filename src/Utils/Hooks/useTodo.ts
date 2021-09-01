import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateTodo,
  deleteTodo,
  toggleTodo,
  addTodo,
  sortTodoByStatus,
  sortTodoByCreatedDate,
  editContent,
} from 'Store/ActionCreator/index';
import { BASE_URL } from 'Config';
import { RootState } from 'Store/Reducers';
import { dateFormat } from 'Utils/DateFormat';
import { DELETE, INITIAL_ID } from 'Constants';

export type Itodo = {
  id: string;
  content: string;
  isComplete: boolean;
  createdAt: string;
};

const useTodo = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state: RootState) => {
    return state.todo;
  });

  const loadData = () => {
    try {
      axios.get(BASE_URL).then((res) => {
        dispatch(updateTodo(res.data));
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const toggleItem = (id: string) => {
    console.log(DELETE);
    dispatch(toggleTodo(id));
  };

  const addItem = (todo: Itodo) => {
    const createdDate = dateFormat(new Date().toISOString());
    todo.createdAt = createdDate;
    const lastIdIdx = todoList.length;

    if (lastIdIdx < 1) {
      todo.id = INITIAL_ID;
      dispatch(addTodo(todo));
      return;
    }

    const nextId = todoList[lastIdIdx - 1].id + 1;
    todo.id = nextId;
    dispatch(addTodo(todo));
  };

  const sortByStatus = (toggle: boolean) => {
    dispatch(sortTodoByStatus(toggle));
  };

  const sortByCreatedDate = (toggle: boolean) => {
    dispatch(sortTodoByCreatedDate(toggle));
  };

  const editItemContent = (id: string, content: string) => {
    dispatch(editContent(id, content));
  };

  return {
    loadData,
    deleteItem,
    toggleItem,
    addItem,
    sortByStatus,
    sortByCreatedDate,
    editItemContent,
  };
};

export default useTodo;
