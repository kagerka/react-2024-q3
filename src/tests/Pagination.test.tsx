import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import Pagination from '../components/Pagination/Pagination';
import { store } from '../store/store';

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('Pagination', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>,
    );
  });

  test('Render Pagination component', () => {
    expect(screen.getByText('1')).toBeDefined();
    expect(screen.getAllByRole('button')).toBeDefined();
  });
});
