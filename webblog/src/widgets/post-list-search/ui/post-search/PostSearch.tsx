import { ResetIcon as CloseIcon } from '@/shared/icons';
import { type ChangeEvent, type FC, memo, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { useDebouncedCallback } from 'use-debounce';

import { Button, Input } from '@shared/ui';

import styles from './post-search.module.scss';

export const PostSearch: FC = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q') || '';
  const typeQuery = searchParams.getAll('type') || '';

  const [text, setText] = useState(query);

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  useEffect(() => {
    setText(query);
  }, [query]);

  return (
    <div className={styles['post-search']}>
      <Input
        value={text}
        type="search"
        size="lg"
        placeholder="Search"
        onChange={handleChange}
        onReset={handleClear}
      />
      {typeQuery.length >= 1 && (
        <>
          {typeQuery.map((query) => {
            return (
              <Button
                className={styles['post-search-reset-button']}
                onClick={() =>
                  setSearchParams((params) => {
                    params.delete('type', query);
                    params.delete('p');
                    return params;
                  })
                }
                key={`type-${query}`}>
                {query}
                <CloseIcon
                  className={styles['post-search-reset-button-icon']}
                />
              </Button>
            );
          })}
        </>
      )}
    </div>
  );
});
