import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';
import FormOne from './views/FormOne/FormOne.tsx';
import FormTwo from './views/FormTwo/FormTwo.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/form-one',
    element: <FormOne />,
  },
  {
    path: '/form-two',
    element: <FormTwo />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
