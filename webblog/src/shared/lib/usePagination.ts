'use client';
import { useSearchParams } from 'next/navigation';
import { type Dispatch, type SetStateAction, useMemo, useState } from 'react';

interface UsePaginationReturnType<T> {
  pageData: T[];
  visibleData: T[];
  currentPage: number;
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
  totalPages: number;
  dataPerPage: number;
  pageNumbers: (number | string)[];
}

export const usePagination = <T>(
  data: T[],
  dataPerPage = 12
): UsePaginationReturnType<T> => {
  const searchParams = useSearchParams();

  const [offset, setOffset] = useState(1);

  const currentPage = Number(searchParams.get('p')) || 1;
  const totalPages = Math.ceil(data.length / dataPerPage);

  const pageData = useMemo(() => {
    const indexOfLast = currentPage * dataPerPage;
    const indexOfFirst = indexOfLast - dataPerPage;
    return data.slice(indexOfFirst, indexOfLast);
  }, [currentPage, dataPerPage, data]);

  const visibleData = useMemo(() => {
    const indexOfLast = offset * dataPerPage;
    return data.slice(0, indexOfLast);
  }, [offset, data, dataPerPage]);

  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];
    const siblingCount = 1;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - siblingCount && i <= currentPage + siblingCount) ||
        (i <= 5 && currentPage < 5)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }
    return pages;
  }, [currentPage, totalPages]);

  return {
    pageData,
    visibleData,
    currentPage,
    offset,
    setOffset,
    totalPages,
    dataPerPage,
    pageNumbers,
  };
};
