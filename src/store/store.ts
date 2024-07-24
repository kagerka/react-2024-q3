import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { animalApi } from '../services/api';
import appReducer from './appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    [animalApi.reducerPath]: animalApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animalApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
