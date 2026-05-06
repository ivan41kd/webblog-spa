import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import { headerReducer } from '@widgets';

import { postReducer } from '@entities';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    header: headerReducer,
  },
});

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export type RootState = ReturnType<AppStore['getState']>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
