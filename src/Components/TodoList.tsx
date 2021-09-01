import styled from 'styled-components/macro';
import { theme } from 'Styles/Theme';
import useTodo, { Itodo } from 'Utils/Hooks/useTodo';
import TodoItem from './TodoItem';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Store/Reducers';

const TodoList = () => {
  const { loadData } = useTodo();

  useEffect(() => {
    loadData();
  }, []);

  const todoList = useSelector((state: RootState) => {
    return state.todo;
  });
  console.log(todoList);

  return (
    <Wrapper>
      <TodoItemContainer>
        {todoList.map((item: Itodo, index: number) => (
          <TodoItem todo={item} key={index} />
        ))}
      </TodoItemContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  overflow: auto;
  max-height: 430px;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.color.lightPurple};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:active {
    background: ${theme.color.primary};
  }
  @media screen and ${theme.device.tablet} {
    max-height: 280px;
  }
`;

const TodoItemContainer = styled.div`
  max-width: 460px;
  width: 100%;
  min-height: 350px;
  @media screen and ${theme.device.tablet} {
    max-width: 275px;
  }
`;

export default TodoList;
