import { expect, test } from 'vitest';
import reducer from '../store/appSlice';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: 'unknown' })).toEqual({
    currentAnimalData: {
      avian: false,
      canine: false,
      earthAnimal: false,
      earthInsect: false,
      feline: false,
      name: '',
      uid: '',
    },
    loading: false,
    pageNumber: 0,
    searchResult: [],
    searchString: '',
    totalPages: 1,
  });
});
