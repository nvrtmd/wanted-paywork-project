import styled from 'styled-components/macro';
import { theme } from 'Styles/Theme';

const TodoForm = () => (
  <Wrapper>
    {' '}
    <InputBox />
    <AddBtn>
      <img src="Assets/add.png" alt="" style={{ width: '25px' }}></img>
    </AddBtn>
  </Wrapper>
);

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
