import type { FC } from 'react';

import Skeleton from 'react-loading-skeleton';

import styles from './comment.module.scss';

export const CommentCardSkeleton: FC = () => {
  return (
    <>
      <div className={styles['comment-info']}>
        <Skeleton className={styles['comment-avatar']} />
        <Skeleton height={20} width={200} />
      </div>
      <div className={styles['comment-content']}>
        <Skeleton height={20} style={{ maxWidth: 500 }} />
      </div>
    </>
  );
};
