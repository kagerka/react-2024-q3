import '@testing-library/jest-dom/vitest';
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

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

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
    expect(screen.findAllByText('Dunghill bird')).toBeDefined();
    expect(screen.findAllByText('ID: ANMA0000079699')).toBeDefined();
    expect(screen.getAllByAltText('Dunghill bird')).toBeDefined();
    expect(screen.getAllByLabelText('Close button')).toBeDefined();
  });

  test('renders the DetailedCard component', () => {
    render(
      <DetailedCard animal={animalUndefined} onClick={() => handleSubmit} />,
    );
    expect(screen.findAllByText('Dunghill bird')).toBeDefined();
    expect(screen.findAllByText('ID: ANMA0000079699')).toBeDefined();
    expect(screen.getAllByAltText('Dunghill bird')).toBeDefined();
    expect(screen.getAllByTitle('Dunghill bird')).toBeDefined();
    expect(screen.getAllByLabelText('Close button')).toBeDefined();
  });
});
