import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { animalApi } from '../services/api';
import appReducer from './appSlice';
import checkedReducer from './checkedSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    checked: checkedReducer,
    [animalApi.reducerPath]: animalApi.reducer,
    currentTheme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animalApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
