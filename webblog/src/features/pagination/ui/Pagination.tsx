import { Button } from '@/shared/ui';

import type { PaginationTypeProps } from '../type';
import styles from './pagination.module.scss';
import { useEffect } from 'react';

export const Pagination = ({
  data,
  dataPerPage,
  onPageChange,
  currentPage,
}: PaginationTypeProps) => {
  useEffect(() => {
    if (currentPage > Math.ceil(data.length / dataPerPage)) {
      onPageChange(Math.ceil(data.length / dataPerPage));
    }
  });
  const totalData = data.length;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number, e: React.MouseEvent) => {
    e.preventDefault();
    onPageChange(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.pagination}>
      <Button
        onClick={(e) => paginate(currentPage - 1, e)}
        className="page-item"
        isDisabled={currentPage === 1}
      >
        {'<'}
      </Button>
      {pageNumbers.map((number) => (
        <Button
          className={
            number === currentPage ? styles['pagination-item-active'] : styles['pagination-item']
          }
          key={number}
          onClick={(e) => paginate(number, e)}
        >
          {number}
        </Button>
      ))}
      <Button
        className="page-item"
        onClick={(e) => paginate(currentPage + 1, e)}
        isDisabled={currentPage === pageNumbers.length}
      >
        {'>'}
      </Button>
    </div>
  );
};
