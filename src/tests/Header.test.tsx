import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Header from '../views/Header/Header';

const handleSubmit = (e: Event) => {
  e.preventDefault();
};

describe('Header', () => {
  test('renders the Header component', () => {
    render(<Header searchValue="bird" onSubmit={() => handleSubmit} />);
    expect(screen.getByDisplayValue('bird')).toBeDefined();
    expect(screen.getByText('Submit')).toBeDefined();
    expect(screen.getByPlaceholderText('Search...')).toBeDefined();
  });
});
