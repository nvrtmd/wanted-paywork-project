import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo, deleteTodo, toggleTodo } from 'Store/ActionCreator/index';

export type Itodo = {
  id: string;
  content: string;
  isComplete: boolean;
  createdAt: string;
};

const useTodo = () => {
  const dispatch = useDispatch();
  // const todoList = useSelector((state: RootState) => {
  //   return state.todo;
  // });

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

  return {
    loadData,
    deleteItem,
    toggleItem,
  };
};

export default useTodo;
