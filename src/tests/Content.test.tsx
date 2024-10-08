import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, Mock, test, vi } from 'vitest';
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

const handleDetails = (uid: string) => {
  return uid;
};

vi.mock('', () => ({
  Loader: () => <div data-testId="loaderId" />,
}));

describe('Content', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  test('Loading', () => {
    (fetch as Mock).mockResolvedValue({ json: () => Promise.resolve() });
    render(
      <Content
        searchValue="bird"
        searchResult={[animal]}
        isSearching={false}
        totalPages={5}
        onClick={() => {}}
        handleDetails={() => handleDetails('ANMA0000079699')}
      />,
    );
    const loader = screen.queryByTestId('loaderId');
    expect(loader).toBe(null);
  });

  test('renders the Content component', () => {
    render(
      <Content
        searchValue="bird"
        searchResult={[animal]}
        isSearching={false}
        totalPages={5}
        onClick={() => {}}
        handleDetails={() => handleDetails('ANMA0000079699')}
      />,
    );
    expect(screen.getByText('You searched word "bird"')).toBeDefined();
    expect(screen.getByText('Dunghill bird')).toBeDefined();
  });
});
