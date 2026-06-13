import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { mocks as posts } from '../mocks';
import type { PostType } from '../type';

const initialState: {
  posts: PostType[] | null;
  post: PostType | null;
  isLoading: boolean;
  isCommentLoading: boolean;
  isFound: boolean;
  error: boolean | null;
} = {
  posts: null,
  post: null,
  isFound: false,
  isLoading: true,
  isCommentLoading: false,
  error: null,
};

export const fetchPostSearch = createAsyncThunk(
  'posts/search',
  async ({ searchTerm, tag }: { searchTerm: string; tag?: string }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (tag) {
      const postsWithTag = posts?.filter((post) =>
        post.tags?.includes(tag.charAt(0).toUpperCase() + tag.slice(1))
      );

      return postsWithTag.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);

export const fetchPost = createAsyncThunk(
  'post/get',
  async (id: string, { rejectWithValue }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const post = posts.find((item) => item.id === id);

    if (!post) {
      return rejectWithValue('Post not found');
    }

    return { ...post, views: post.views + 1 };
  }
);

export const fetchPostComment = createAsyncThunk(
  'post/comment',
  async ({
    name,
    text,
    date,
  }: {
    name: string;
    text: string;
    date: string;
  }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      name,
      avatar: `https://placehold.co/80x80?text=${name.substring(0, 2)}`,
      text,
      date,
    };
  }
);

export const fetchPosts = createAsyncThunk(
  'posts/get',
  async (tag: string | undefined) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!tag) {
      return posts;
    }
    return posts?.filter((post) =>
      post.tags?.includes(tag.charAt(0).toUpperCase() + tag.slice(1))
    );
  }
);

export const resetSearch = createAsyncThunk(
  'posts/resetSearch',
  async (tag: string | undefined) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (!tag) {
      return posts;
    }
    return posts?.filter((post) =>
      post.tags?.includes(tag.charAt(0).toUpperCase() + tag.slice(1))
    );
  }
);

export const PostSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {
    clearPost: (state) => {
      state.post = null;
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostSearch.pending, (state) => {
      state.isFound = false;
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchPostSearch.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isFound = true;
      state.isLoading = false;
    });
    builder.addCase(fetchPostSearch.rejected, (state) => {
      state.isLoading = false;
      state.isFound = false;
      state.error = true;
    });
    builder.addCase(resetSearch.pending, (state) => {
      state.isLoading = true;
      state.isFound = false;
    });
    builder.addCase(resetSearch.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    });
    builder.addCase(resetSearch.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.error = true;
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
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
    builder.addCase(fetchPostComment.pending, (state) => {
      state.error = false;
      state.isCommentLoading = true;
    });
    builder.addCase(fetchPostComment.fulfilled, (state, action) => {
      if (state.post) {
        state.post.comments = [
          {
            name: action.payload.name,
            avatar: action.payload.avatar,
            text: action.payload.text,
            likes: 0,
            date: action.payload.date,
            isLiked: false,
          },
          ...state.post.comments,
        ];
        state.isCommentLoading = false;
      }
    });
  },
});

export const { clearPost, likeComment, likePost } = PostSlice.actions;

export const { reducer: postReducer } = PostSlice;
