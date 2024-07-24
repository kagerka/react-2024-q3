import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Header from '../views/Header/Header';

describe('Header', () => {
  test('renders the Header component', () => {
    render(<Header />);
    expect(screen.getByDisplayValue('bird')).toBeDefined();
    expect(screen.getByText('Submit')).toBeDefined();
    expect(screen.getByPlaceholderText('Search...')).toBeDefined();
  });
});
