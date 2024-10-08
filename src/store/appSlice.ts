import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_ANIMAL } from '../utils/constants';
import { IAnimal } from '../utils/interfaces';

const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    loading: false,
    pageNumber: 0,
    totalPages: 1,
    searchString: '',
    currentAnimalData: DEFAULT_ANIMAL as IAnimal,
    searchResult: [] as IAnimal[],
  },
  reducers: {
    loading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    pageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
    totalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    searchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
    currentAnimalData: (state, action: PayloadAction<IAnimal>) => {
      state.currentAnimalData = action.payload;
    },
    searchResult: (state, action: PayloadAction<IAnimal[]>) => {
      state.searchResult = action.payload;
    },
  },
});

export const {
  loading,
  pageNumber,
  totalPages,
  searchString,
  currentAnimalData,
  searchResult,
} = appSlice.actions;

export default appSlice.reducer;
