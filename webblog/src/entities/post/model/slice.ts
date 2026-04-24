import { createSlice } from '@reduxjs/toolkit';

import { mocks as posts } from '../mocks';
import type { PostCardPropsType } from '../type';

const initialState: {
  posts: PostCardPropsType[];
} = {
  posts,
};

export const PostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});
