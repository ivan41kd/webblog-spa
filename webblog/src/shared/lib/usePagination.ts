import { useCallback, useMemo, useState } from 'react';

import { useSearchParams } from 'react-router';

interface UsePaginationReturnType<T> {
  pageData: T[];
  visibleData: T[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  dataPerPage: number;
  resetPagination: () => void;
  pageNumbers: (number | string)[];
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

export const usePagination = <T>(
  data: T[],
  dataPerPage = 12
): UsePaginationReturnType<T> => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('p')) || 1
  );

  const [offset, setOffset] = useState<number>(0);

  const totalPages = Math.ceil(data.length / dataPerPage);

  const pageData = useMemo(() => {
    const indexOfLast = currentPage * dataPerPage;
    const indexOfFirst = indexOfLast - dataPerPage;
    return data.slice(indexOfFirst, indexOfLast);
  }, [currentPage, dataPerPage, data]);

  const visibleData = useMemo(() => {
    const indexOfLast = currentPage * dataPerPage;
    return data.slice(0, indexOfLast);
  }, [currentPage, data, dataPerPage, offset]);

  const generatePages = useCallback(
    (current: number, total: number): (number | string)[] => {
      const pages: (number | string)[] = [];
      const siblingCount = 1;

      for (let i = 1; i <= total; i++) {
        if (
          i === 1 ||
          i === total ||
          (i >= current - siblingCount && i <= current + siblingCount) ||
          (i <= 5 && current < 5)
        ) {
          pages.push(i);
        } else if (pages[pages.length - 1] !== '...') {
          pages.push('...');
        }
      }
      return pages;
    },
    []
  );

  const pageNumbers = useMemo(
    () => generatePages(currentPage, totalPages),
    [currentPage, totalPages, generatePages]
  );

  const resetPagination = useCallback(() => {
    setCurrentPage(1);
    setOffset(0);
  }, []);

  return {
    pageData,
    visibleData,
    currentPage,
    setCurrentPage,
    totalPages,
    dataPerPage,
    resetPagination,
    pageNumbers,
    offset,
    setOffset,
  };
};
