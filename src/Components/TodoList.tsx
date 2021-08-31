import styled from 'styled-components/macro';
import { theme } from 'Styles/Theme';
import TodoItem from './TodoItem';

const TodoList = () => (
  <Wrapper>
    <TodoItemContainer>
      <TodoItem />
    </TodoItemContainer>
  </Wrapper>
);

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
