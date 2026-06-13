import cn from 'classnames';
import { type FC, memo } from 'react';

import { Button } from '@shared/ui';

import styles from './pagination.module.scss';
import type { PaginationPropsType } from './type';

export const Pagination: FC<PaginationPropsType> = memo(
  ({ onPageChange, currentPage, pages, totalPages, type = 'base' }) => {
    const paginationClassName = cn(styles.pagination, styles[type]);

    return (
      <div className={paginationClassName}>
        {type === 'base' ? (
          <>
            <Button
              className={styles['pagination-item']}
              onClick={() => onPageChange(1)}
              isDisabled={currentPage === 1}>
              {'<<'}
            </Button>
            <Button
              className={styles['pagination-item']}
              onClick={() => onPageChange(currentPage - 1)}
              isDisabled={currentPage === 1}>
              {'<'}
            </Button>
            {pages.map((page, index) =>
              typeof page === 'number' ? (
                <Button
                  className={cn(
                    styles['pagination-item'],
                    page === currentPage && styles['active']
                  )}
                  key={page}
                  onClick={() => onPageChange(page)}>
                  {page}
                </Button>
              ) : (
                <Button
                  className={cn(
                    styles['pagination-item'],
                    typeof page !== 'number' && styles['ellipsis']
                  )}
                  key={`ellipsis-${index}`}>
                  {page}
                </Button>
              )
            )}
            <Button
              className={styles['pagination-item']}
              onClick={() => onPageChange(currentPage + 1)}
              isDisabled={currentPage === totalPages}>
              {'>'}
            </Button>
            <Button
              className={styles['pagination-item']}
              onClick={() => onPageChange(totalPages)}
              isDisabled={currentPage === totalPages}>
              {'>>'}
            </Button>
          </>
        ) : (
          <Button onClick={() => onPageChange(currentPage + 1)}>
            Load more
          </Button>
        )}
      </div>
    );
  }
);
