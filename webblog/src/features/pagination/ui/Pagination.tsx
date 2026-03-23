import type { FC } from 'react';

import { Button } from '@/shared/ui';
import { usePagination } from '@/shared/lib';

import type { PaginationPropsType } from '../type';
import styles from './pagination.module.scss';

export const Pagination: FC<PaginationPropsType> = ({ data, onPageChange, currentPage }) => {
  const { generatePages, totalPages } = usePagination(data);

  const pageNumbers = generatePages(currentPage, totalPages);

  const paginate = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  return (
    <div className={styles.pagination}>
      <Button
        onClick={() => paginate(currentPage - 1)}
        className="page-item"
        isDisabled={currentPage === 1}
      >
        {'<'}
      </Button>
      {pageNumbers.map((number, index) => (
        <Button
          className={
            number === currentPage ? styles['pagination-item-active'] : styles['pagination-item']
          }
          key={typeof number === 'number' ? number : `ellipsis-${index}`}
          onClick={() => number === currentPage || (number !== '...' && paginate(number as number))}
        >
          {number}
        </Button>
      ))}
      <Button
        className="page-item"
        onClick={() => paginate(currentPage + 1)}
        isDisabled={currentPage === totalPages}
      >
        {'>'}
      </Button>
    </div>
  );
};
