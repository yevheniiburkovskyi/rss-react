import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import detailsReducer from './detailsSlice';
import formReducer from './formSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    details: detailsReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
