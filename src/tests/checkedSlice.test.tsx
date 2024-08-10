import { describe, expect, it } from 'vitest';
import {
  addItem,
  default as checkedSlice,
  clearAll,
  removeItem,
} from '../store/checkedSlice';
import { IAnimal } from '../utils/interfaces';

describe('Checked items slice', () => {
  const initialState = {
    checkedItems: [] as IAnimal[],
    clearAll: [],
  };

  it('Check animal', () => {
    const animal: IAnimal = {
      avian: true,
      canine: false,
      earthAnimal: false,
      earthInsect: false,
      feline: false,
      name: 'Dunghill bird',
      uid: 'ANMA0000079699',
    };

    const state = checkedSlice(initialState, addItem(animal));
    expect(state.checkedItems.length).toBe(1);
    expect(state.checkedItems[0]).toEqual(animal);
  });

  it('Remove animal', () => {
    const checkedAnimals = {
      checkedItems: [
        {
          avian: true,
          canine: false,
          earthAnimal: false,
          earthInsect: false,
          feline: false,
          name: 'Dunghill bird',
          uid: 'ANMA0000079699',
        },
      ] as IAnimal[],
      clearAll: [],
    };

    const state = checkedSlice(
      checkedAnimals,
      removeItem({ uid: 'ANMA0000079699' } as IAnimal),
    );
    expect(state.checkedItems.length).toBe(0);
  });

  it('Clear all animals', () => {
    const checkedAnimals = {
      checkedItems: [
        {
          avian: true,
          canine: false,
          earthAnimal: false,
          earthInsect: false,
          feline: false,
          name: 'Dunghill bird',
          uid: 'ANMA0000079699',
        },
        {
          avian: true,
          canine: false,
          earthAnimal: true,
          earthInsect: false,
          feline: false,
          name: 'Blackbird',
          uid: 'ANMA0000044752',
        },
      ] as IAnimal[],
      clearAll: [],
    };

    const state = checkedSlice(checkedAnimals, clearAll([]));
    expect(state.checkedItems.length).toBe(0);
  });
});
