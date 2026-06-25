import { configureStore } from '@reduxjs/toolkit';
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

import { headerReducer } from '@widgets/header';

import { authReducer } from '@features/auth';

import { postReducer } from '@entities/post';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    header: headerReducer,
    auth: authReducer,
  },
});

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export type RootState = ReturnType<AppStore['getState']>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
