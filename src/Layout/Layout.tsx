import styled from 'styled-components/macro';
import Header from './Header';
import { theme } from 'Styles/Theme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => (
  <>
    <Body>
      <Main>
        <Header />
        {props.children}
      </Main>
    </Body>
  </>
);

const Body = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Main = styled.main`
  background-color: #4c4eb7;
  max-width: 650px;
  max-height: 900px;
  width: 45%;
  border-radius: 30px;
  @media screen and ${theme.device.tablet} {
    min-width: 300px;
    min-height: 450px;
  }
`;

export default Layout;
