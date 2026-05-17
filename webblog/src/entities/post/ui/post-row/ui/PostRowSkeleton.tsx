import type { FC } from 'react';

import Skeleton from 'react-loading-skeleton';

import { CalendarIcon, ViewsIcon } from '@shared/icons';

import styles from './post-row.module.scss';

export const PostRowSkeleton: FC = () => {
  return (
    <div className={styles['post-row']}>
      <div className="">
        <Skeleton className={styles['post-row-img']} inline height={'100%'} />
      </div>

      <div className={styles['post-row-content']}>
        <div className={styles['post-row-author']}>
          <Skeleton className={styles['post-row-author-avatar']} />
          <div className={styles['post-row-author-info']}>
            <Skeleton className={styles['post-row-author-name']} />
            <div className={styles['post-row-info']}>
              <div className={styles['post-row-info-item']}>
                <ViewsIcon className={styles['post-row-info-item-icon']} />
                <Skeleton width={30} />
              </div>
              <div className={styles['post-row-info-item']}>
                <CalendarIcon className={styles['post-row-info-item-icon']} />
                <Skeleton width={30} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles['post-row-body']}>
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </div>
  );
};
