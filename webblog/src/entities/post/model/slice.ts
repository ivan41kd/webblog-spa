import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { mocks as posts } from '../mocks';
import type {
  PostAuthorType,
  PostContentDocType,
  PostContentType,
  PostType,
} from '../type';

const initialState: {
  posts: PostType[];
  post: PostType | null;
  isLoading: boolean;
  isCommentLoading: boolean;
  isFound: boolean;
  error: boolean | null;
} = {
  posts: posts.concat(
    localStorage.getItem('post')
      ? JSON.parse(localStorage.getItem('post') ?? '')
      : []
  ),
  post: null,
  isFound: false,
  isLoading: false,
  isCommentLoading: false,
  error: null,
};

export const fetchPostSearch = createAsyncThunk(
  'posts/search',
  async ({ searchTerm, tags }: { searchTerm: string; tags?: string[] }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const allPosts = posts.concat(
      localStorage.getItem('post')
        ? JSON.parse(localStorage.getItem('post') ?? '')
        : []
    );

    if (tags && tags.length) {
      const postsWithTag = allPosts.filter((post) =>
        tags.some((tag) => post.tags?.includes(tag))
      );

      return postsWithTag.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);

export const fetchPost = createAsyncThunk(
  'post/get',
  async (id: string, { rejectWithValue }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const allPosts = posts.concat(
      localStorage.getItem('post')
        ? JSON.parse(localStorage.getItem('post') ?? '')
        : []
    );
    const post = allPosts.find((item) => item.id === id);

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
  async (tags: string[], { rejectWithValue }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const allPosts = posts.concat(
      localStorage.getItem('post')
        ? JSON.parse(localStorage.getItem('post') ?? '')
        : []
    );
    if (!tags.length) {
      return allPosts;
    }

    if (!posts) {
      return rejectWithValue('Post not found');
    }

    return allPosts.filter((post) =>
      tags.some((tag) => post.tags?.includes(tag))
    );
  }
);

export const fetchCreatePost = createAsyncThunk(
  'posts/create',
  async ({
    id,
    title,
    description,
    author,
    content,
  }: {
    id: string | number;
    title: string;
    description: string;
    author: PostAuthorType;
    content: PostContentType[] | PostContentDocType;
  }) => {
    return {
      id,
      title,
      description,
      author,
      tags: [],
      content,
      views: 0,
      likes: 0,
      comments: [],
      date: new Date() + '',
    };
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
        if (localStorage.getItem('post')) {
          const localPosts = JSON.parse(localStorage.getItem('post') ?? '[]');
          const index = localPosts.findIndex(
            (post: PostType) => post.id === state?.post?.id
          );
          if (index !== -1) {
            localPosts[index] = state.post;
            localStorage.setItem('post', JSON.stringify(localPosts));
          }
        }
      }
    },
    deletePost: (state, action) => {
      const deletedPost = state.posts.find(
        (post) => post.id === action.payload
      );

      const localPosts = JSON.parse(localStorage.getItem('post') ?? '[]');

      if (deletedPost) {
        state.posts = state.posts.filter(
          (post: PostType) => post.id !== action.payload
        );
        localStorage.setItem(
          'post',
          JSON.stringify(
            localPosts.filter((post: PostType) => post.id !== action.payload)
          )
        );
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
        if (localStorage.getItem('post')) {
          const localPosts = JSON.parse(localStorage.getItem('post') ?? '[]');
          const index = localPosts.findIndex(
            (post: PostType) => post.id === state?.post?.id
          );
          if (index !== -1) {
            localPosts[index] = state.post;
            localStorage.setItem('post', JSON.stringify(localPosts));
          }
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

    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
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
    builder.addCase(fetchCreatePost.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchCreatePost.fulfilled, (state, action) => {
      const localPosts = JSON.parse(localStorage.getItem('post') ?? '[]');

      state.posts = [...state.posts, action.payload];
      localStorage.setItem(
        'post',
        JSON.stringify([...localPosts, action.payload])
      );
      state.isLoading = false;
    });
    builder.addCase(fetchCreatePost.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });
    builder.addCase(fetchPostComment.pending, (state) => {
      state.error = false;
      state.isCommentLoading = true;
    });
    builder.addCase(fetchPostComment.fulfilled, (state, action) => {
      if (state.post) {
        const comment = {
          name: action.payload.name,
          avatar: action.payload.avatar,
          text: action.payload.text,
          likes: 0,
          date: action.payload.date,
          isLiked: false,
        };
        state.post.comments.unshift(comment);
        if (localStorage.getItem('post')) {
          const localPosts = JSON.parse(localStorage.getItem('post') ?? '[]');
          const index = localPosts.findIndex(
            (post: PostType) => post.id === state?.post?.id
          );
          if (index !== -1) {
            localPosts[index] = state.post;
            localStorage.setItem('post', JSON.stringify(localPosts));
          }
        }

        state.isCommentLoading = false;
      }
    });
  },
});

export const { clearPost, likeComment, likePost, deletePost } =
  PostSlice.actions;

export const { reducer: postReducer } = PostSlice;
