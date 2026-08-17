import { configureStore } from '@reduxjs/toolkit';

import { headerReducer } from '@widgets/header';

import { authReducer } from '@features/auth';

import { postReducer } from '@entities/post';

export const makeStore = () => {
  return configureStore({
    reducer: {
      posts: postReducer,
      header: headerReducer,
      auth: authReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
