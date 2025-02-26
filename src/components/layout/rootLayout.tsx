import { Outlet } from 'react-router';
import styled from 'styled-components';

export default function RootLayout() {
  return (
    <Main>
      <Outlet />
    </Main>
  );
}

const Main = styled.main`
  height: 100%;
  padding: 30px 20px;
`;
