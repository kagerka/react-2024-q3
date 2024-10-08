import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import Search from '../components/Search/Search';
import { store } from '../store/store';

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('Search', () => {
  const formId = 'formId';
  let input: HTMLElement | undefined;
  let button: HTMLButtonElement;
  let form: HTMLFormElement | null;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Search data-testid={formId} />
      </Provider>,
    );
    if (input !== null) {
      input = screen.getByPlaceholderText('Search...');
      (input as HTMLInputElement).value = 'cat';
    }
    button = screen.getByText('Submit');
    if (form) form = screen.queryByTestId('formId');
  });

  test('renders the Search component', () => {
    expect(screen.getByText('Submit')).toBeDefined();
    expect(screen.getByPlaceholderText('Search...')).toBeDefined();
    expect(button?.tagName).toBe('BUTTON');
    expect(form?.tagName).toBe(undefined);
  });
});
