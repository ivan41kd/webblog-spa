import { useState, useCallback, useMemo } from 'react';

export const useSearch = <T extends { title: string }>(data: T[]) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return data;

    const lowerQuery = searchQuery.toLowerCase().trim();
    return data.filter((item) => item.title.toLowerCase().includes(lowerQuery));
  }, [data, searchQuery]);

  const showResults = useMemo(
    () => searchQuery.trim() !== '' && filteredData.length > 0,
    [searchQuery, filteredData.length]
  );

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return {
    filteredData,
    showResults,
    handleSearch,
    count: filteredData.length,
  };
};
