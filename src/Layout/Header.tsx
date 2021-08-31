import styled from 'styled-components/macro';
import { theme } from 'Styles/Theme';
import { clock } from 'Utils/Clock';
import { useState, useEffect } from 'react';

const Header = () => {
  const [time, setTime] = useState<string>('');
  useEffect(() => {
    clock(setTime);
  }, []);

  setInterval(() => {
    clock(setTime);
  }, 60000);

  return (
    <>
      <Wrapper>
        <div>
          <Title>TODO LIST</Title>
          <Timer>{time}</Timer>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 20px;
  color: ${theme.color.white};
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  @media screen and ${theme.device.tablet} {
    font-size: 20px;
  }
`;

const Timer = styled(Title)`
  font-size: 18px;
  @media screen and ${theme.device.tablet} {
    font-size: 15px;
  }
`;

export default Header;
