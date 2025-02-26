import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import App from '@/App.tsx';
import GlobalStyle from '@/style/GlobalStyle.tsx';
import RootLayout from '@/components/layout/rootLayout.tsx';

async function init() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser.ts');

    return worker.start();
  }
}
await init();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
