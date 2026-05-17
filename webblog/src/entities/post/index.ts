export { mocks } from './mocks';
export type { PostType } from './type';

export {
  clearPost,
  fetchPost,
  fetchPostComment,
  fetchPosts,
  fetchPostSearch,
  likeComment,
  likePost,
  postReducer,
  resetSearch,
} from './model';
export {
  PostCard,
  PostCardSkeleton,
  PostDetails,
  PostDetailsSkeleton,
  PostRow,
  PostRowSkeleton,
} from './ui';
