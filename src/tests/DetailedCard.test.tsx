import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { afterEach, describe, expect, it, test, vi } from 'vitest';
import { store } from '../store/store';
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

describe('DetailedCard', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('handleClick', () => {
    const handleClick = vi.fn();

    render(
      <Provider store={store}>
        <DetailedCard animal={animal} onClick={() => handleClick} />
      </Provider>,
    );

    expect(screen.getAllByTestId('card-info')[0]).toHaveAttribute('role');
    fireEvent.click(screen.getAllByTestId('card-info')[0]);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  test('renders the DetailedCard component', () => {
    render(<DetailedCard animal={animal} onClick={() => handleSubmit} />);
    expect(screen.getByText('Dunghill bird')).toBeDefined();
    expect(screen.getByText('ID: ANMA0000079699')).toBeDefined();
    expect(screen.getByAltText('Dunghill bird')).toBeDefined();
    expect(screen.getByLabelText('Close button')).toBeDefined();
  });

  test('renders the DetailedCard component', () => {
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
