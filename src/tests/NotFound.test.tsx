import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import NotFound from '../views/NotFound/NotFound';

describe('NotFound', () => {
  test('Render NotFound component', () => {
    render(<NotFound />);
    expect(screen.getByText('Home page')).toBeDefined();
  });
});
