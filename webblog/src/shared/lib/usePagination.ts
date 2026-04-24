import { useCallback, useMemo, useState } from 'react';

export const usePagination = <T>(data: T[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 12;

  const totalPages = Math.ceil(data.length / dataPerPage);

  const currentData = useMemo(() => {
    const indexOfLast = currentPage * dataPerPage;
    const indexOfFirst = indexOfLast - dataPerPage;
    return data.slice(indexOfFirst, indexOfLast);
  }, [data, currentPage]);

  const generatePages = useCallback((current: number, total: number): (number | string)[] => {
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
  }, []);

  const pageNumbers = useMemo(
    () => generatePages(currentPage, totalPages),
    [currentPage, totalPages, generatePages]
  );

  const resetPagination = useCallback(() => {
    setCurrentPage(1);
  }, []);

  return {
    currentData,
    currentPage,
    setCurrentPage,
    totalPages,
    dataPerPage,
    resetPagination,
    pageNumbers,
  };
};
