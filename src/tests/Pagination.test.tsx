import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, test } from 'vitest';
import Pagination from '../components/Pagination/Pagination';
import { store } from '../store/store';

describe('Pagination', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>,
    );
  });

  test('renders the Search component', () => {
    expect(screen.getByText('1')).toBeDefined();
    expect(screen.getAllByRole('button')).toBeDefined();
  });
});
