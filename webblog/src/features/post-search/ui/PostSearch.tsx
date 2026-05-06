import { memo, useEffect, useState, type FC } from 'react';

import { useDebounce } from 'use-debounce';

import { useAppDispatch, useAppSelector } from '@app/store/rootReducer';

import { clearSearch, fetchPostSearch } from '@entities';

import { Input } from '@shared/ui';

export const PostSearch: FC = memo(() => {
  const dispatch = useAppDispatch();
  const { posts, isFound } = useAppSelector((state) => state.posts);
  const [text, setText] = useState('');
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) {
      dispatch(fetchPostSearch(debouncedValue));
    } else {
      dispatch(clearSearch());
    }
  }, [debouncedValue, dispatch]);

  return (
    <>
      <Input
        value={text}
        type="search"
        size="lg"
        placeholder="Search"
        onChange={(e) => setText(e.target.value)}
        onReset={() => {
          setText('');
          dispatch(clearSearch());
        }}
      />
      {posts && posts.length >= 1 && isFound && `Found ${posts.length} `}
    </>
  );
});
