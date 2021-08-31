/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import styled from 'styled-components/macro';
import { theme } from 'Styles/Theme';

const TodoItem = () => {
  const [done, setDone] = useState(false);

  return (
    <Wrapper done={done}>
      <CloseBtn>
        <img src="Assets/delete.png" alt="" style={{ width: '12px' }} />
      </CloseBtn>
      <TodoContents>
        <div>
          <TaskName>
            할일할일할일할일할일할일할일할일할일할일할일할일할일할일할일
          </TaskName>
          <DueDateBox>언제부터 언제까지</DueDateBox>
        </div>
        <CheckBtnContainer>
          {done ? (
            <CheckBtn
              src="Assets/checked.png"
              alt=""
              onClick={() => setDone((prev) => !prev)}
            />
          ) : (
            <CheckBtn
              src="Assets/not_checked.png"
              alt=""
              onClick={() => setDone((prev) => !prev)}
            />
          )}
        </CheckBtnContainer>
      </TodoContents>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ done: boolean }>`
  background-color: ${theme.color.white};
  border-radius: 10px;
  color: ${theme.color.black};
  padding: 10px;
  margin-bottom: 20px;
  ${({ done }) =>
    done &&
    ` {
      background-color: ${theme.color.grey};
      color: ${theme.color.deepGrey};
    }
  `};
`;

const CloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TodoContents = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 15px 10px 15px;
  font-size: 18px;
`;

const CheckBtnContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 30px;
`;

const CheckBtn = styled.img`
  width: 30px;
`;

const TaskName = styled.div`
  word-break: break-all;
  max-width: 300px;
  margin-right: 10px;
`;

const DueDateBox = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;

export default TodoItem;
