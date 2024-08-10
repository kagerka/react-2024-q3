import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, test, vi } from 'vitest';
import App from '../App';
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

describe('_app.tsx', () => {
  test('renders the App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('Submit')).toBeDefined();
    expect(
      screen.getByText('You can search any animal you want'),
    ).toBeDefined();
    expect(screen.getByPlaceholderText('Search...')).toBeDefined();
  });
});
