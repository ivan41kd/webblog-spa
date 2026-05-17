import { memo, type FC } from 'react';

import Skeleton from 'react-loading-skeleton';

import classNames from 'classnames';

import { CalendarIcon, ClockIcon, ViewsIcon } from '@shared/icons';
import { Text, Title } from '@shared/ui';

import styles from './post-details.module.scss';

export const PostDetailsSkeleton: FC = memo(() => {
  return (
    <div className={styles['post-details']}>
      <Skeleton className={styles['post-details-img']} />
      <div className={styles['post-details-header']}>
        <Title>
          <Skeleton height={30} style={{ maxWidth: 300 }} />
        </Title>
        <div className={styles['post-details-info']}>
          <div className={styles['post-details-info-item']}>
            <ViewsIcon className={styles['post-details-info-icon']} />
            <Skeleton width={50} />
          </div>
          <div className={styles['post-details-info-item']}>
            <CalendarIcon className={styles['post-details-info-icon']} />
            <Skeleton width={50} />
          </div>
          <div className={styles['post-details-info-item']}>
            <ClockIcon className={styles['post-details-info-icon']} />
            <Skeleton width={50} />
          </div>
        </div>
        <Text>
          <Skeleton style={{ maxWidth: 300 }} />
        </Text>
      </div>
      <div className={classNames(styles['post-details-content'])}>
        <Skeleton
          height={30}
          count={10}
          inline
          containerClassName={styles['post-details-content']}
        />
      </div>
    </div>
  );
});
