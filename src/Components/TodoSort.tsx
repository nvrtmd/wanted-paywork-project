import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { theme } from 'Styles/Theme';
import { Button } from './TodoForm';

const TodoSort = () => {
  const [sortBy, setSortBy] = useState({ status: false, createdAt: false });
  return (
    <Wrapper>
      <SortContainer>
        <Title>SORT by</Title>

        {sortBy.status ? (
          <ActiveBtn
            onClick={() => setSortBy((prev) => ({ ...prev, status: false }))}
          >
            <BtnText>Status</BtnText>
          </ActiveBtn>
        ) : (
          <InactivateBtn
            onClick={() => setSortBy((prev) => ({ ...prev, status: true }))}
          >
            <BtnText>Status</BtnText>
          </InactivateBtn>
        )}

        {sortBy.createdAt ? (
          <ActiveBtn
            onClick={() => setSortBy((prev) => ({ ...prev, createdAt: false }))}
          >
            <BtnText>Created date</BtnText>
          </ActiveBtn>
        ) : (
          <InactivateBtn
            onClick={() => setSortBy((prev) => ({ ...prev, createdAt: true }))}
          >
            <BtnText>Created date</BtnText>
          </InactivateBtn>
        )}
      </SortContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 460px;
  @media screen and ${theme.device.tablet} {
    min-width: 260px;
  }
`;

const Title = styled.div`
  color: ${theme.color.white};
  display: flex;
  align-items: center;
  margin-right: 9px;
`;

const SortBtn = styled(Button)`
  padding: 6px;
  border-radius: 10px;
`;

const ActiveBtn = styled(SortBtn)`
  color: ${theme.color.white};
  background-color: ${theme.color.lightPurple};
`;

const InactivateBtn = styled(SortBtn)`
  color: ${theme.color.primary};
  background-color: ${theme.color.white};
`;

const BtnText = styled.div`
  margin-top: 3px;
`;

export default TodoSort;
