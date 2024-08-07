import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: {
    theme: 'light',
  },
  reducers: {
    currentTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { currentTheme } = themeSlice.actions;

export default themeSlice.reducer;
