import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAnimal } from '../utils/interfaces';

const checkedSlice = createSlice({
  name: 'checkedItems',
  initialState: {
    checkedItems: [] as IAnimal[],
  },
  reducers: {
    addItem(state, action: PayloadAction<IAnimal>) {
      state.checkedItems.push({
        avian: action.payload.avian,
        canine: action.payload.canine,
        earthAnimal: action.payload.earthAnimal,
        earthInsect: action.payload.earthInsect,
        feline: action.payload.feline,
        name: action.payload.name,
        uid: action.payload.uid,
      });
    },
    removeItem(state, action: PayloadAction<IAnimal>) {
      state.checkedItems = state.checkedItems.filter((item) => item.uid !== action.payload.uid);
    },
  },
});

export const { addItem, removeItem } = checkedSlice.actions;

export default checkedSlice.reducer;
