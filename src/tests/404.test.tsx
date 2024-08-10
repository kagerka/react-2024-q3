import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import NotFoundPage from '../pages/404';

describe('NotFound', () => {
  test('renders the NotFound component', () => {
    render(<NotFoundPage />);
    expect(screen.getByText('Home page')).toBeDefined();
  });
});
