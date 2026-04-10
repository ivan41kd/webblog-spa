import { createSlice } from '@reduxjs/toolkit';
import { mocks as posts } from '../mocks';

const initialState: {
  posts: typeof posts;
} = {
  posts,
};

export const PostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});
