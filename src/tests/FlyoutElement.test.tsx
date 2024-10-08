import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { afterEach, describe, expect, it, vi } from 'vitest';
import FlyoutElement from '../components/FlyoutElement/FlyoutElement';
import { store } from '../store/store';

describe('FlyoutElement', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the FlyoutElement component', () => {
    render(
      <Provider store={store}>
        <FlyoutElement />
      </Provider>,
    );

    expect(screen.getAllByTestId('download')[0]).toHaveTextContent('Download');
    expect(screen.getByText('Unselect all')).toBeDefined();
    expect(screen.getByText('Download')).toBeDefined();
  });
});
