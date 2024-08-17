import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';
import { store } from './store/store.ts';
import Cards from './views/Cards/Cards.tsx';
import FormOne from './views/Forms/FormOne/FormOne.tsx';
import FormTwo from './views/Forms/FormTwo/FormTwo.tsx';
import NotFound from './views/NotFound/NotFound.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Cards />,
      },
      {
        path: '/form-one',
        element: <FormOne />,
      },
      {
        path: '/form-two',
        element: <FormTwo />,
      },
    ],
  },

  // {
  //   path: '/form-one',
  //   element: <FormOne />,
  // },
  // {
  //   path: '/form-two',
  //   element: <FormTwo />,
  // },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
