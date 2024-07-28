import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import NotFound from '../views/NotFound/NotFound';

describe('NotFound', () => {
  test('renders the NotFound component', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );
    expect(screen.getByText('Home page')).toBeDefined();
  });
});
