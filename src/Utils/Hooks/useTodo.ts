import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateTodo,
  deleteTodo,
  toggleTodo,
  addTodo,
  sortTodoByStatus,
  sortTodoByCreatedDate,
} from 'Store/ActionCreator/index';
import { RootState } from 'Store/Reducers';
import { dateFormat } from 'Utils/DateFormat';

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
      axios.get(`http://localhost:4000/todoList`).then((res) => {
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
    console.log('detele');
    dispatch(toggleTodo(id));
  };

  const addItem = (todo: Itodo) => {
    const createdDate = dateFormat(new Date().toISOString());
    todo.createdAt = createdDate;
    const lastIdIdx = todoList.length;

    if (lastIdIdx < 1) {
      todo.id = '1';
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

  return {
    loadData,
    deleteItem,
    toggleItem,
    addItem,
    sortByStatus,
    sortByCreatedDate,
  };
};

export default useTodo;
