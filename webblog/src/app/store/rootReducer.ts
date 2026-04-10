import { configureStore } from '@reduxjs/toolkit';

import { PostSlice } from '@/entities/post/model';

export const store = configureStore({
  reducer: {
    posts: PostSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
