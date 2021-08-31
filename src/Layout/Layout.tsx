import styled from 'styled-components/macro';
import Header from './Header';
import { theme } from 'Styles/Theme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => (
  <Wrapper>
    <Main>
      <Header />
      {props.children}
    </Main>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Main = styled.main`
  background-color: #4c4eb7;
  max-width: 750px;
  max-height: 900px;
  width: 65%;
  border-radius: 30px;
  @media screen and ${theme.device.tablet} {
    min-width: 300px;
    min-height: 450px;
  }
`;

export default Layout;
