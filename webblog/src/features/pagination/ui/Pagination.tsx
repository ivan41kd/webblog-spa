import type { FC } from 'react';

import { Button } from '@/shared/ui';

import type { PaginationPropsType } from '../type';
import styles from './pagination.module.scss';

export const Pagination: FC<PaginationPropsType> = ({
  onPageChange,
  currentPage,
  pages,
  totalPages,
}) => {
  const handlePageChange = (pageNumber: number | string) => {
    if (pageNumber === currentPage || pageNumber !== '...') {
      onPageChange(pageNumber as number);
    }
  };

  return (
    <div className={styles.pagination}>
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        className="page-item"
        isDisabled={currentPage === 1}
      >
        {'<'}
      </Button>
      {pages.map((number, index) => (
        <Button
          className={
            number === currentPage ? styles['pagination-item-active'] : styles['pagination-item']
          }
          key={typeof number === 'number' ? number : `ellipsis-${index}`}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Button>
      ))}
      <Button
        className="page-item"
        onClick={() => handlePageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
      >
        {'>'}
      </Button>
    </div>
  );
};
