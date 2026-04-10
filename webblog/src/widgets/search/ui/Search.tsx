import { useState, useEffect, memo, type FC } from 'react';
import { useDebounce } from 'use-debounce';

import { Input } from '@/shared/ui';

interface SearchPropsType {
  onChange: (query: string) => void;
}

export const Search: FC<SearchPropsType> = memo(({ onChange }) => {
  const [text, setText] = useState('');
  const [debouncedValue] = useDebounce(text, 500);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  return (
    <Input
      variant="default"
      type="search"
      size="lg"
      placeholder="Search"
      onChange={(e) => setText(e.target.value)}
    />
  );
});
