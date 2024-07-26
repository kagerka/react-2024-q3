import { expect, test } from 'vitest';
import reducer from '../store/checkedSlice';
import { IAnimal } from '../utils/interfaces';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: 'unknown' })).toEqual({
    checkedItems: [] as IAnimal[],
  });
});
