import { type FC, memo } from 'react';
import Skeleton from 'react-loading-skeleton';

import classNames from 'classnames';

import { Text, Title } from '@shared/ui';

import styles from './post-details.module.scss';

export const PostDetailsSkeleton: FC = memo(() => {
  return (
    <div className={styles['post-details']}>
      <Skeleton className={styles['post-details-img']} />
      <div className={styles['post-details-header']}>
        <Title>
          <Skeleton height={50} style={{ maxWidth: 300 }} />
        </Title>
        <div className={styles['post-details-info']}>
          <Skeleton
            width={50}
            count={3}
            containerClassName={styles['post-details-info']}
          />
        </div>
        <Text>
          <Skeleton style={{ maxWidth: 300 }} />
        </Text>
      </div>
      <div className={classNames(styles['post-details-content'])}>
        <Skeleton height={30} count={10} style={{ maxWidth: 500 }} />
      </div>
    </div>
  );
});
