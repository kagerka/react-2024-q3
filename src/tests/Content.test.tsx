import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, Mock, test, vi } from 'vitest';
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
    render(<Content />);
    const loader = screen.queryByTestId('loaderId');
    expect(loader).toBe(null);
  });

  test('renders the Content component', () => {
    render(<Content />);
    expect(screen.getByText('You searched word "bird"')).toBeDefined();
    expect(screen.getByText('Dunghill bird')).toBeDefined();
  });
});
