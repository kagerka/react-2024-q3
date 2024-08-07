import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, Mock, test, vi } from 'vitest';
import { store } from '../store/store';
import Content from '../views/Content/Content';

vi.mock('', () => ({
  Loader: () => <div data-testId="loaderId" />,
}));

describe('Content', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  test('Loading', () => {
    (fetch as Mock).mockResolvedValue({ json: () => Promise.resolve() });
    render(
      <Provider store={store}>
        <Content />
      </Provider>,
    );
    const loader = screen.queryByTestId('loaderId');
    expect(loader).toBe(null);
  });

  test('renders the Content component', () => {
    render(
      <Provider store={store}>
        <Content />
      </Provider>,
    );
    expect(screen.getByText('Nothing was found')).toBeDefined();
    expect(
      screen.getByText('You can search any animal you want'),
    ).toBeDefined();
  });
});
