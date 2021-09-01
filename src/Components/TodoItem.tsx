/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { theme } from 'Styles/Theme';
import useTodo, { Itodo } from 'Utils/Hooks/useTodo';
import { dateFormat } from 'Utils/DateFormat';
import {
  ENTER,
  DELETE_ICON,
  CONFIRM_ICON,
  EDIT_ICON,
  CHECKED_ICON,
  NOT_CHECKED_ICON,
  PLACE_HOLDER,
} from 'Constants';
interface TodoItemProps {
  todo: Itodo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { deleteItem, toggleItem, editItemContent } = useTodo();
  const [contentEditMode, setContentEditMode] = useState<boolean>(false);
  const inputEl = useRef<HTMLInputElement>(null);

  // 수정할 todo item의 id와 input의 내용물(=== 수정할 할일 내용)을
  // editItemContent 함수의 인자로 삽입
  // confirm button을 클릭해 입력을 마쳤으므로 contentEditMode state를 false로 변경
  const handleContentEdit = (id: string) => {
    const newContent = inputEl.current?.value || '';
    editItemContent(id, newContent);
    setContentEditMode(false);
  };

  // Enter key를 눌렀을 때도 수정이 가능하도록 함수 작성
  const handleEnterPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: string,
  ) => {
    if (e.key === ENTER) {
      handleContentEdit(id);
    }
  };

  return (
    <Wrapper done={todo.isComplete}>
      <CloseBtn>
        <img
          src={DELETE_ICON}
          alt=""
          style={{ width: '12px' }}
          onClick={() => {
            deleteItem(todo.id);
          }}
        />
      </CloseBtn>
      <TodoContents>
        <div>
          {contentEditMode ? (
            <input
              placeholder={PLACE_HOLDER}
              onKeyPress={(e) => handleEnterPress(e, todo.id)}
              ref={inputEl}
            />
          ) : (
            <TaskName>{todo.content}</TaskName>
          )}

          <DueDateBox>{dateFormat(todo.createdAt)}</DueDateBox>
        </div>
        <CheckBtnContainer>
          {contentEditMode ? (
            <ConfirmBtn
              src={CONFIRM_ICON}
              onClick={() => handleContentEdit(todo.id)}
            />
          ) : (
            <ContentEditBtn
              src={EDIT_ICON}
              onClick={() => setContentEditMode((prev) => !prev)}
            />
          )}

          {todo.isComplete ? (
            <CheckBtn
              src={CHECKED_ICON}
              alt=""
              onClick={() => toggleItem(todo.id)}
            />
          ) : (
            <CheckBtn
              src={NOT_CHECKED_ICON}
              alt=""
              onClick={() => toggleItem(todo.id)}
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
  cursor: pointer;
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
  cursor: pointer;
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

const Button = styled.img`
  width: 20px;
  margin: 0px 10px;
  cursor: pointer;
`;

const ConfirmBtn = styled(Button)``;
const ContentEditBtn = styled(Button)``;

export default TodoItem;
