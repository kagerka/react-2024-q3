import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import Search from '../components/Search/Search';

const handleSubmit = (e: Event) => {
  e.preventDefault();
};

describe('Search', () => {
  const inputId = 'animalId';
  const inputValue = 'cat';
  let input: HTMLInputElement;
  let button: HTMLButtonElement;
  let form: HTMLFormElement;

  beforeEach(() => {
    render(
      <Search
        data-testid={inputId}
        placeholder="Search"
        searchValue={inputValue}
        onSubmit={() => handleSubmit}
      />,
    );
    input = screen.getByPlaceholderText('Search')!;
    button = screen.getByText('Submit')!;
    form = screen.queryByTestId('animalId')!;
  });

  test('renders the Search component', () => {
    expect(screen.getByDisplayValue('cat')).toBeDefined();
    expect(screen.getByText('Submit')).toBeDefined();
    expect(screen.getByPlaceholderText('Search')).toBeDefined();
    expect(input?.tagName).toBe('INPUT');
    expect(button?.tagName).toBe('BUTTON');
    expect(form?.tagName).toBe(undefined);
  });
});
