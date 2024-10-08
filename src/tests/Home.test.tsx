import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, test, vi } from 'vitest';
import { store } from '../store/store';
import Home from '../views/Home/Home';

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('Home', () => {
  test('renders the Home component', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(screen.getByText('Submit')).toBeDefined();
    expect(
      screen.getByText('You can search any animal you want'),
    ).toBeDefined();
    expect(screen.getByPlaceholderText('Search...')).toBeDefined();
  });
});
