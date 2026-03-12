import { Input } from '@/shared/ui';
import { useState, useEffect, memo } from 'react';
import { useDebounce } from 'use-debounce';

export const Search = memo(({ onChange }: { onChange: (query: string) => void }) => {
  const [text, setText] = useState('');
  const [debouncedValue] = useDebounce(text, 500);
  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  return <Input variant="default" placeholder="Search" onChange={(e) => setText(e.target.value)} />;
});
