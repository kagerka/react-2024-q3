import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import { afterAll, afterEach, beforeAll, expect, test, vi } from 'vitest';
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

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      route: '/search',
      pathname: '/search',
      query: '',
      asPath: '',
      replace: () => {
        return '/search';
      },
    };
  },
}));

test('loads and displays Search component', () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>,
  );

  fireEvent.click(screen.getByText('Submit'));

  expect(screen.getByRole('button')).toHaveTextContent('Submit');
});
