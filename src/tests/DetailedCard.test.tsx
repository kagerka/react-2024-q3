import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import DetailedCard from '../views/DetailedCard/DetailedCard';

const animal = {
  avian: true,
  canine: false,
  earthAnimal: false,
  earthInsect: false,
  feline: false,
  name: 'Dunghill bird',
  uid: 'ANMA0000079699',
};

const animalUndefined = {
  avian: false,
  canine: false,
  earthAnimal: false,
  earthInsect: false,
  feline: false,
  name: 'Dunghill bird',
  uid: 'ANMA0000079699',
};

const handleSubmit = (e: Event) => {
  e.preventDefault();
};

describe('Search', () => {
  test('renders the Search component', () => {
    render(<DetailedCard animal={animal} onClick={() => handleSubmit} />);
    expect(screen.getByText('Dunghill bird')).toBeDefined();
    expect(screen.getByText('ID: ANMA0000079699')).toBeDefined();
    expect(screen.getByAltText('Dunghill bird')).toBeDefined();
    expect(screen.getByLabelText('Close button')).toBeDefined();
  });

  test('renders the Search component', () => {
    render(
      <DetailedCard animal={animalUndefined} onClick={() => handleSubmit} />,
    );
    expect(screen.getByText('Dunghill bird')).toBeDefined();
    expect(screen.getByText('ID: ANMA0000079699')).toBeDefined();
    expect(screen.getByAltText('Dunghill bird')).toBeDefined();
    expect(screen.getByTitle('Dunghill bird')).toBeDefined();
    expect(screen.getByLabelText('Close button')).toBeDefined();
  });
});
