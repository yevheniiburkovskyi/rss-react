import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import formReducer from './formSlice';
import { rickAndMortyApi } from '../service/rickAndMortyApi';

const reducer = combineReducers({
  search: searchReducer,
  form: formReducer,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
});

export type ReducerType = ReturnType<typeof reducer>;

export const initStore = (preloadedState?: PreloadedState<ReducerType>) =>
  configureStore({
    preloadedState,
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = initStore();
