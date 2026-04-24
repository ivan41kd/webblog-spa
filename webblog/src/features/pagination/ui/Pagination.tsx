import { memo, type FC } from 'react';

import { Button } from '@/shared/ui';

import type { PaginationPropsType } from '../type';
import styles from './pagination.module.scss';

export const Pagination: FC<PaginationPropsType> = memo(
  ({ onPageChange, currentPage, pages, totalPages }) => {
    const handlePageChange = (pageNumber: number | string) => {
      if (pageNumber !== '...' && pageNumber !== currentPage) {
        onPageChange(pageNumber as number);
      }
    };

    const paginationClass = (number: number | string) => {
      return number === currentPage ? styles['pagination-item-active'] : styles['pagination-item'];
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
            className={paginationClass(number)}
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
  }
);
