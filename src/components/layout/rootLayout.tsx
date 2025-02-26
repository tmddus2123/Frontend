import { Outlet } from 'react-router';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    'primary-100': '#D5E9FF',
    'primary-200': '#AAD3FF',
    'primary-300': '#80BDFF',
    'primary-400': '#55A7FF',
    'primary-500': '#2B91FF',
    'primary-600': '#2274CC',
    'primary-700': '#1A5799',
    'primary-800': '#113A66',
    'primary-900': '#091D33',

    'secondary-100': '#FFF4CC',
    'secondary-200': '#FFE999',
    'secondary-300': '#FFDE66',
    'secondary-400': '#FFD333',
    'secondary-500': '#FFC800',
    'secondary-600': '#CCA000',
    'secondary-700': '#997800',
    'secondary-800': '#665000',
    'secondary-900': '#332800',

    'gray-100': '#F2F4F6',
    'gray-200': '#E6EAEE',
    'gray-300': '#D9DFE5',
    'gray-400': '#CCD4DD',
    'gray-500': '#BFC9D4',
    'gray-600': '#99A1AA',
    'gray-700': '#73797F',
    'gray-800': '#4D5155',
    'gray-900': '#26282A',

    'point-100': '#D5E4F1',
    'point-200': '#AACAE6',
    'point-300': '#FFF495',
    'point-400': '#FFE351',
    'point-500': '#2CD2BB',
    'point-600': '#00AAD2',

    error: '#FF4D4D',
    black: '#000000',
    white: '#FFFFFF',
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Outlet />
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.main`
  height: 100%;
  padding: 30px 20px;
`;
