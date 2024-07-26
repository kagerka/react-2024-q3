import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { afterAll, afterEach, beforeAll, expect, test } from 'vitest';
import Search from '../components/Search/Search';
import { store } from '../store/store';

const server = setupServer(
  http.get('https://stapi.co/api/v1/rest/animal', ({ request }) => {
    const url = new URL(request.url);
    const uid = url.searchParams.get('uid');
    let result;
    if (uid === 'ANMA0000079699') {
      result = HttpResponse.json({
        animal: {
          uid: 'ANMA0000079699',
          name: 'Dunghill bird',
          earthAnimal: false,
          earthInsect: false,
          avian: true,
          canine: false,
          feline: false,
        },
      });
    }
    return result;
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays Search component', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </Provider>,
  );

  fireEvent.click(screen.getByText('Submit'));

  expect(screen.getByRole('button')).toHaveTextContent('Submit');
});
