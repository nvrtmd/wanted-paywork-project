import { useState } from 'react';
import styled from 'styled-components/macro';
import { theme } from 'Styles/Theme';
import { Button } from './TodoForm';

const TodoSort = () => {
  const [sortBy, setSortBy] = useState({ status: false, createdAt: false });
  return (
    <Wrapper>
      <SortContainer>
        <Title>SORT by</Title>
        <SortBtn
          clicked={sortBy.status}
          onClick={() =>
            setSortBy((prev) => ({ ...prev, status: !prev.status }))
          }
        >
          <BtnText>Status</BtnText>
        </SortBtn>
        <SortBtn
          clicked={sortBy.createdAt}
          onClick={() =>
            setSortBy((prev) => ({ ...prev, createdAt: !prev.createdAt }))
          }
        >
          <BtnText>Created date</BtnText>
        </SortBtn>
      </SortContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 30px;
  font-size: 12px;
  @media screen and ${theme.device.tablet} {
    font-size: 10px;
  }
`;

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 460px;
  @media screen and ${theme.device.tablet} {
    min-width: 275px;
  }
`;

const Title = styled.div`
  color: ${theme.color.white};
  display: flex;
  align-items: center;
  margin-right: 9px;
`;

const SortBtn = styled(Button)<{ clicked: boolean }>`
  padding: 6px;
  border-radius: 10px;

  color: ${theme.color.white};
  background-color: ${theme.color.lightPurple};

  ${({ clicked }) =>
    clicked &&
    ` {
      background-color: ${theme.color.primary};
    }
  `};
`;

const BtnText = styled.div`
  margin-top: 3px;
`;

export default TodoSort;
