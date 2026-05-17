import { memo, type FC } from 'react';

import Skeleton from 'react-loading-skeleton';

import cn from 'classnames';

import { LikeIcon, ViewsIcon } from '@shared/icons';

import styles from './post-card.module.scss';

export const PostCardSkeleton: FC = memo(() => {
  return (
    <div className={cn(styles['post-card'], styles['skeleton'])}>
      <div className={styles['post-card-header']}>
        <Skeleton
          className={styles['post-card-img']}
          height={600}
          style={{ display: 'block' }}
        />
      </div>
      <div className={styles['post-card-body']}>
        <div className="">
          <Skeleton width={200} />
        </div>

        <div className={styles['post-card-info']}>
          <div className={styles['post-card-stats']}>
            <div className={styles['post-card-stats-item']}>
              <ViewsIcon className={styles['post-card-stats-icon']} />
              <Skeleton width={30} />
            </div>
            <div className={styles['post-card-stats-item']}>
              <LikeIcon className={styles['post-card-stats-icon']} />
              <Skeleton width={30} />
            </div>
          </div>
          <Skeleton width={70} />
        </div>
      </div>
    </div>
  );
});
