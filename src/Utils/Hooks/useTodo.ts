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

  // 처음 API 호출을 통해 todo List 데이터를 가져와서 state를 update 하기 위한 함수
  const loadData = () => {
    try {
      axios.get(BASE_URL).then((res) => {
        dispatch(updateTodo(res.data));
      });
    } catch (err) {
      console.log(err);
    }
  };

  // todo item을 삭제하기 위해 삭제할 item의 id를 받아서 deleteTodo에 dispatch
  const deleteItem = (id: string) => {
    dispatch(deleteTodo(id));
  };

  // todo item의 완료 상태를 toggle하기 위해 item의 id를 받아서 toggleTodo에 dispatch
  const toggleItem = (id: string) => {
    console.log(DELETE);
    dispatch(toggleTodo(id));
  };

  // todo item을 추가하기 위해
  // 인자로 받은 content 외 createdAt과 id는 빈 값인 todo에
  // 작성일과 id를 부여한 뒤 addTodo에 dispatch
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

  // todo item을 완료 상태를 기준으로 정렬하기 위해 sortTodoByStatus에 dispatch
  const sortByStatus = (toggle: boolean) => {
    dispatch(sortTodoByStatus(toggle));
  };

  // todo item을 작성일을 기준으로 정렬하기 위해 sortTodoByCreatedDate에 dispatch
  const sortByCreatedDate = (toggle: boolean) => {
    dispatch(sortTodoByCreatedDate(toggle));
  };

  // todo item의 content를 수정하기 위해 editContent에 dispatch
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
