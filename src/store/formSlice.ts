import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import COUNTRIES from '../utils/countries';
import { CardType } from '../utils/types';

const formSlice = createSlice({
  name: 'formData',
  initialState: {
    formData: [] as CardType[],
    countries: COUNTRIES,
  },
  reducers: {
    addFormData(state, action: PayloadAction<CardType>) {
      state.formData.unshift({
        name: action.payload.name,
        age: action.payload.age,
        email: action.payload.email,
        password: action.payload.password,
        confirmPassword: action.payload.confirmPassword,
        gender: action.payload.gender,
        terms: action.payload.terms,
        file: action.payload.file,
        country: action.payload.country,
        time: action.payload.time,
      });
    },
  },
});

export const { addFormData } = formSlice.actions;
export default formSlice.reducer;
