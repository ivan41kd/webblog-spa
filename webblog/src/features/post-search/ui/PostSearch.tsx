import { memo, useEffect, useState, type FC } from 'react';

import { useSearchParams } from 'react-router';

import { useDebouncedCallback } from 'use-debounce';

import { useAppSelector } from '@app/store/rootReducer';

import { Input } from '@shared/ui';

export const PostSearch: FC = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading } = useAppSelector((state) => state.posts);
  const query = searchParams.get('q') || '';

  const [text, setText] = useState(query);

  useEffect(() => {
    setText(query);
  }, [query]);

  const debouncedSearch = useDebouncedCallback((value: string) => {
    setSearchParams((param) => {
      param.set('q', value);
      param.delete('p');
      return param;
    });
  }, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    debouncedSearch(value);
  };

  const handleClear = () => {
    setText('');
    setSearchParams((param) => {
      param.delete('q');
      param.delete('p');
      return param;
    });
  };

  return (
    <Input
      value={text}
      type="search"
      size="lg"
      placeholder="Search"
      onChange={handleChange}
      onReset={() => !isLoading && handleClear()}
      isDisabled={isLoading}
    />
  );
});
