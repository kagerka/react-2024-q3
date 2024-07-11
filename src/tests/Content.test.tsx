import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Content from '../views/Content/Content';

const animal = {
  avian: true,
  canine: false,
  earthAnimal: false,
  earthInsect: false,
  feline: false,
  name: 'Dunghill bird',
  uid: 'ANMA0000079699',
};

describe('Content', () => {
  test('renders the Content component', () => {
    render(
      <Content
        searchValue="bird"
        searchResult={[animal]}
        isSearching={false}
      />,
    );
    expect(screen.getByText('You searched word "bird"')).toBeDefined();
    expect(screen.getByText('This is an avian')).toBeDefined();
    expect(screen.getByAltText('Dunghill bird')).toBeDefined();
  });
});
