'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { type ChangeEvent, type FC, memo, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { ResetIcon as CloseIcon } from '@shared/icons';
import { Button, Input } from '@shared/ui';

import styles from './post-search.module.scss';

export const PostSearch: FC = memo(() => {
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const pathname = usePathname();
  const query = searchParams.get('q') || '';
  const typeQuery = searchParams.getAll('type') || '';

  const [text, setText] = useState(query);

  const debouncedSearch = useDebouncedCallback((value: string) => {
    if (!value) {
      params.delete('q');
    } else {
      params.set('q', value);
    }
    params.delete('p');
    router.push(`${pathname}?${params.toString()}`);
  }, 700);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    debouncedSearch(value);
  };

  const handleClear = () => {
    setText('');
    debouncedSearch.cancel();
    params.delete('p');
    params.delete('q');
    router.push(`${pathname}?${params.toString()}`);
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
                onClick={() => {
                  params.delete('type', query);
                  params.delete('p');
                  router.push(`${pathname}?${params.toString()}`);
                }}
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
