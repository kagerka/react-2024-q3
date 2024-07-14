import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Card from '../components/Card/Card';

const animal = {
  avian: true,
  canine: false,
  earthAnimal: false,
  earthInsect: false,
  feline: false,
  name: 'Dunghill bird',
  uid: 'ANMA0000079699',
};

describe('Card', () => {
  test('renders the Card component', () => {
    render(<Card animal={animal} onClick={() => {}} />);
    expect(screen.getByText('Dunghill bird')).toBeDefined();
    expect(screen.getByText('ID: ANMA0000079699')).toBeDefined();
  });
});
