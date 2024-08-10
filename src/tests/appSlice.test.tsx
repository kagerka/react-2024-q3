import { expect, test } from 'vitest';
import reducer from '../store/appSlice';

test('App slice', () => {
  expect(reducer(undefined, { type: 'string' })).toEqual({
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
