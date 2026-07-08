import { type FC, useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { useAppDispatch } from '@app/store/rootReducer';

import { fetchPostSearch, fetchPosts } from '@entities';

import { PostList, PostSearch } from './ui';

interface PostListSearchPropsType {
  withSearch?: boolean;
}

export const PostListSearch: FC<PostListSearchPropsType> = ({
  withSearch = false,
}) => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const searchQuery = searchParams.get('q');
  const typeQuery = searchParams.getAll('type');

  useEffect(() => {
    if (searchQuery) {
      dispatch(
        fetchPostSearch({
          searchTerm: searchQuery,
          tags: typeQuery,
        })
      );
    } else {
      dispatch(fetchPosts(typeQuery));
    }
  }, [dispatch, searchQuery, typeQuery]);

  return (
    <>
      {withSearch && <PostSearch />}
      <PostList />
    </>
  );
};
