import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { mocks as posts } from '../mocks';
import type { PostType } from '../type';

const initialState: {
  posts: PostType[] | null;
  post: PostType | null;
  isLoading: boolean;
  isFound: boolean;
  error: boolean | null;
} = {
  posts: null,
  post: null,
  isFound: false,
  isLoading: true,
  error: null,
};

export const fetchPostSearch = createAsyncThunk(
  'posts/search',
  async (searchTerm: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredPosts;
  }
);

export const fetchPost = createAsyncThunk(
  'post/get',
  async (id: string, { rejectWithValue }) => {
    const post = posts.find((item) => item.id === id);

    if (!post) {
      return rejectWithValue('Post not found');
    }
    if (post) await new Promise((resolve) => setTimeout(resolve, 1000));
    return post;
  }
);

export const fetchPosts = createAsyncThunk('posts/get', async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return posts;
});

export const PostSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {
    clearPost: (state) => {
      state.post = null;
    },
    clearSearch: (state) => {
      state.posts = posts;
      state.isFound = false;
    },
    likeComment: (state, action) => {
      if (state.post) {
        const post = state.post.comments[action.payload.id];
        if (!post.isLiked) {
          post.likes++;
          post.isLiked = true;
        } else {
          post.likes--;
          post.isLiked = false;
        }
      }
    },
    likePost: (state) => {
      if (state.post) {
        if (!state.post.isLiked) {
          state.post.likes++;
          state.post.isLiked = true;
        } else {
          state.post.likes--;
          state.post.isLiked = false;
        }
      }
    },
    addComment: (state, action) => {
      if (state.post && action.payload.comment) {
        state.post.comments = [
          {
            name: action.payload.name,
            avatar: `https://placehold.co/80x80?text=${action.payload.name.substring(0, 2)}`,
            text: action.payload.comment,
            likes: 0,
          },
          ...state.post.comments,
        ];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostSearch.pending, (state) => {
      state.isFound = false;
      state.isLoading = true;
    });
    builder.addCase(fetchPostSearch.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isFound = true;
      state.isLoading = false;
    });
    builder.addCase(fetchPostSearch.rejected, (state) => {
      state.isLoading = false;
      state.isFound = false;
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });

    builder.addCase(fetchPost.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.post = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPost.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });
  },
});

export const { clearPost, likeComment, likePost, addComment, clearSearch } =
  PostSlice.actions;

export const { reducer: postReducer } = PostSlice;
