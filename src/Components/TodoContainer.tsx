import styled from 'styled-components/macro';
import { theme } from 'Styles/Theme';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoSort from './TodoSort';

const TodoContainer = () => (
  <Wrapper>
    <TodoForm />
    <TodoSort />
    <TodoList />
  </Wrapper>
);

const Wrapper = styled.div`
  /* color: ${theme.color.white}; */
`;

export default TodoContainer;
