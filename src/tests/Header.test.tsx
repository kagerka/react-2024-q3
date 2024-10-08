import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, test, vi } from 'vitest';
import { store } from '../store/store';
import Header from '../views/Header/Header';

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('Header', () => {
  test('renders the Header component', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    expect(screen.getByDisplayValue('')).toBeDefined();
    expect(screen.getByText('Submit')).toBeDefined();
    expect(screen.getByPlaceholderText('Search...')).toBeDefined();
  });
});
