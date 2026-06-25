import { type FC, useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { useAppDispatch } from '@app/store/rootReducer';

import { fetchPostSearch, fetchPosts } from '@entities';

import { Button } from '@shared/ui';

import { PostList, PostSearch } from './ui';

export const PostListSearch: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const typeQuery = searchParams.get('type') || '';
  const searchQuery = searchParams.get('q') || '';

  useEffect(() => {
    if (searchQuery) {
      dispatch(
        fetchPostSearch({
          searchTerm: searchQuery,
          tag: typeQuery,
        })
      );
    } else {
      dispatch(fetchPosts(typeQuery));
    }
  }, [dispatch, searchQuery, typeQuery]);
  return (
    <>
      <PostSearch />
      {typeQuery && (
        <Button
          onClick={() =>
            setSearchParams((params) => {
              params.delete('type');
              return params;
            })
          }>
          Reset filters
        </Button>
      )}
      <PostList />
    </>
  );
};
