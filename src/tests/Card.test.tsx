import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, test } from 'vitest';
import Card from '../components/Card/Card';
import { store } from '../store/store';

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
    render(
      <Provider store={store}>
        <Card animal={animal} onClick={async () => {}} />
      </Provider>,
    );
    expect(screen.getByText('Dunghill bird')).toBeDefined();
    expect(screen.getByText('ID: ANMA0000079699')).toBeDefined();
  });
});
