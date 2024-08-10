import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { Router } from 'next/router';
import App from '../App';
import AppPage from '../pages/_app';
import { store } from '../store/store';

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

vi.mock('next/font/google', () => ({
  Roboto: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
}));

let component: React.FC;
let pageProps: object;
let router: Router;

beforeEach(() => {
  component = vi.fn(() => <App />);
  pageProps = {};
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('App', () => {
  test('renders the App component', () => {
    render(
      <Provider store={store}>
        <AppPage Component={component} pageProps={pageProps} router={router} />
      </Provider>,
    );
    expect(screen.getAllByText('Submit')).toBeDefined();
    expect(
      screen.getAllByText('You can search any animal you want'),
    ).toBeDefined();
    expect(screen.getByPlaceholderText('Search...')).toBeDefined();
    expect(document.title).toBe(``);
  });
});
