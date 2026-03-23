import { useMemo, useState } from 'react';

export const usePagination = <T>(data: T[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 12;

  const totalPages = Math.ceil(data.length / dataPerPage);
  const effectivePage = Math.max(1, Math.min(currentPage, totalPages));

  const currentData = useMemo(() => {
    const indexOfLast = effectivePage * dataPerPage;
    const indexOfFirst = indexOfLast - dataPerPage;
    return data.slice(indexOfFirst, indexOfLast);
  }, [data, effectivePage]);

  const generatePages = (current: number, total: number): (number | string)[] => {
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
  };

  return {
    currentData,
    currentPage: effectivePage,
    setCurrentPage,
    totalPages,
    dataPerPage,
    generatePages,
  };
};
