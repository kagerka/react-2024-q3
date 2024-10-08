import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import ThemeSelector from '../components/ThemeSelector/ThemeSelector';
import { store } from '../store/store';

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('ThemeSelector', () => {
  const formId = 'formId';
  let input: HTMLElement | undefined;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <ThemeSelector data-testid={formId} />
      </Provider>,
    );
    if (input !== null) {
      input = screen.getByRole('checkbox');
      (input as HTMLInputElement).value = 'cat';
    }
  });

  test('renders the Search component', () => {
    expect(screen.getAllByDisplayValue('cat')).toBeDefined();
  });
});
