import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import Pagination from '../components/Pagination/Pagination';

describe('Pagination', () => {
  beforeEach(() => {
    render(<Pagination totalPages={10} onClick={() => {}} />);
  });

  test('renders the Search component', () => {
    expect(screen.getByText('1')).toBeDefined();
    expect(screen.getAllByRole('button')).toBeDefined();
  });
});
