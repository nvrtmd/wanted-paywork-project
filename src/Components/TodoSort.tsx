import { useState } from 'react';
import styled from 'styled-components/macro';
import { theme } from 'Styles/Theme';
import useTodo from 'Utils/Hooks/useTodo';
import { Button } from './TodoForm';
import { DATA_TYPE } from 'Constants';

const TodoSort = () => {
  const [sortBy, setSortBy] = useState({ status: false, createdAt: false });
  const { sortByStatus, sortByCreatedDate } = useTodo();

  // 두 개의 정렬 버튼 중 하나를 클릭했을 때,
  // 해당 버튼의 타입(상태 기준 정렬인지, 작성일 기준 정렬인지)을 기준으로 분기
  // 타입이 status일 경우 sortByStatus 함수의 인자로 toggle(!sortBy.status)값을 삽입
  // sortBy state값을 toggle값으로 업데이트
  // 만약 다른 버튼이 클릭된 후 해당 버튼이 눌린 것일수도 있으니 다른 버튼의 state 값은 false로 변경
  // 타입이 createdAt인 경우도 동일하게 작동
  const handleClick = (type: string, toggle: boolean) => {
    if (type === STATUS) {
      sortByStatus(toggle);
      setSortBy({ status: toggle, createdAt: false });
      return;
    }
    sortByCreatedDate(toggle);
    setSortBy({ status: false, createdAt: toggle });
  };

  return (
    <Wrapper>
      <SortContainer>
        <Title>SORT by</Title>
        <SortBtn
          clicked={sortBy.status}
          onClick={() => handleClick(STATUS, !sortBy.status)}
        >
          <BtnText>Status</BtnText>
        </SortBtn>
        <SortBtn
          clicked={sortBy.createdAt}
          onClick={() => handleClick(CREATED_AT, !sortBy.createdAt)}
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
const { STATUS, CREATED_AT } = DATA_TYPE;
