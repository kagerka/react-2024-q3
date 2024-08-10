import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it, vi } from 'vitest';
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
  const onClick = vi.fn();

  it('Render Card component with checkbox', () => {
    render(
      <Provider store={store}>
        <Card animal={animal} onClick={onClick} />
      </Provider>,
    );

    expect(screen.getAllByText('Dunghill bird')).toBeDefined();
    expect(screen.getAllByText('ID: ANMA0000079699')).toBeDefined();

    const checkboxElement = screen.getAllByRole('checkbox')[0];
    expect(checkboxElement).toBeDefined();
  });
});
