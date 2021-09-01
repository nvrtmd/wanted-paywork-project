/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import styled from 'styled-components/macro';
import { theme } from 'Styles/Theme';
import useTodo from 'Utils/Hooks/useTodo';
import { ADD_ICON } from 'Constants';

const TodoForm = () => {
  const [content, setContent] = useState<string>('');
  const { addItem } = useTodo();

  // content state에 input으로 받는 todo item content를 저장
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  // 추가 버튼을 클릭할 시 새로운 todo item이 추가될 수 있도록
  // addItem 함수에 인자로 넘기기
  // 이때, 작성일과 id는 addItem 함수 내에서 처리 후 삽입할 예정이므로 빈 값을 삽입함
  // input의 내용물은 추가 버튼 클릭 시 clear 될 수 있도록 처리
  const handleAddItem = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    addItem({ id: '', content: content, createdAt: '', isComplete: false });
    setContent('');
  };

  return (
    <Wrapper>
      <InputBox
        value={content}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)}
      />
      <AddBtn onClick={(e: React.MouseEvent<HTMLElement>) => handleAddItem(e)}>
        <img src={ADD_ICON} alt="" style={{ width: '25px' }}></img>
      </AddBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${theme.color.white};
`;

const InputBox = styled.input`
  min-width: 410px;
  border: 2px solid #ccc;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  font-family: 'GmarketSansMedium';
  font-size: 16px;
  background-color: white;
  background-image: url('https://ifh.cc/g/FbHETn.jpg');
  background-size: 35px;
  background-position: 8px 9px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 47px;
  transition: all 0.3s ease 0s;
  @media screen and ${theme.device.tablet} {
    max-width: 220px;
    min-width: 90px;
  }

  &:focus {
    outline: none;
    border: 2px solid ${theme.color.primary};
  }
`;

export const Button = styled.div`
  text-transform: uppercase;
  text-decoration: none;
  background: ${theme.color.primary};
  padding: 13.5px 17px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  }
`;

const AddBtn = styled(Button)``;

export default TodoForm;
