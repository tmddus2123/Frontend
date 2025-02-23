import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'src/index.css';
import App from 'src/App.tsx';

async function init() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser.ts');

    return worker.start();
  }
}
await init();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
