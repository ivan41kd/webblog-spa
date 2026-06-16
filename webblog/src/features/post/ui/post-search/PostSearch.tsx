import { type FC, memo, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';
import { useDebouncedCallback } from 'use-debounce';

import { Input } from '@shared/ui';

export const PostSearch: FC = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [text, setText] = useState(query);

  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  const debouncedSearch = useDebouncedCallback((value: string) => {
    setSearchParams((param) => {
      if (!value) {
        param.delete('q');
      } else {
        param.set('q', value);
      }
      param.delete('p');
      return param;
    });
  }, 700);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    debouncedSearch(value);
  };

  const handleClear = () => {
    setText('');
    debouncedSearch.cancel();
    setSearchParams((param) => {
      param.delete('q');
      param.delete('p');
      return param;
    });
  };

  return (
    <Input
      ref={searchRef}
      value={text}
      type="search"
      size="lg"
      placeholder="Search"
      onChange={handleChange}
      onReset={() => handleClear()}
    />
  );
});
