import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Search from '../components/Search/Search';

const handleSubmit = (e: Event) => {
  e.preventDefault();
};

describe('Search', () => {
  test('renders the Search component', () => {
    render(
      <Search
        placeholder="Search"
        searchValue="fish"
        onSubmit={() => handleSubmit}
      />,
    );
    expect(screen.getByDisplayValue('fish')).toBeDefined();
    expect(screen.getByText('Submit')).toBeDefined();
    expect(screen.getByPlaceholderText('Search')).toBeDefined();
  });
});
