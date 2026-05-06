import { type FC, memo } from 'react';
import Skeleton from 'react-loading-skeleton';

import cn from 'classnames';

import { Text } from '@shared/ui';

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
          <Text fontSize="lg" className={styles['post-card-title']}>
            <Skeleton width={200} />
          </Text>
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
