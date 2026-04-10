import { memo, type FC } from 'react';
import cn from 'classnames';
import Skeleton from 'react-loading-skeleton';

import styles from './post-card.module.scss';

export const PostCardSkeleton: FC = memo(() => {
  return (
    <div className={cn(styles['post-card'], styles['skeleton'])}>
      <div className={styles['post-card-header']}>
        <Skeleton className={styles['post-card-img']} style={{ display: 'block' }} />
      </div>
      <div className={styles['post-card-body']}>
        <div className="">
          <Skeleton width={200} />
        </div>

        <div className={styles['post-card-description']}>
          <Skeleton width={200} />
        </div>

        <div className={styles['post-card-info']}>
          <div className={styles['post-card-stats']}>
            <Skeleton width={30} />
            <Skeleton width={30} />
          </div>
          <Skeleton width={70} />
        </div>
      </div>
    </div>
  );
});
