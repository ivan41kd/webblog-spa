import Skeleton from 'react-loading-skeleton';

import { Text } from '@/shared/ui';
import { useLoading } from '@/shared/lib';

import type { PostCardPropsType } from '../type';
import styles from './post-card.module.scss';

export const PostCard = ({ img, title, description, views, likes, date }: PostCardPropsType) => {
  const { isLoading } = useLoading();
  return (
    <div className={styles['post-card']}>
      <div className={styles['post-card-header']}>
        {isLoading ? (
          <Skeleton height={200} className={styles['post-card-img']} style={{ display: 'block' }} />
        ) : (
          <img className={styles['post-card-img']} src={img} alt={title} loading="lazy" />
        )}
      </div>
      <div className={styles['post-card-body']}>
        {isLoading ? (
          <Skeleton width={200} />
        ) : (
          <Text fontSize="lg" className={styles['post-card-title']}>
            {title}
          </Text>
        )}

        {isLoading ? (
          <Skeleton width={200} />
        ) : (
          <div className={styles['post-card-description']}>
            <Text fontSize="md" className={styles['post-card-description-text']}>
              {description}
            </Text>
          </div>
        )}
        <div className={styles['post-card-info']}>
          <div className={styles['post-card-stats']}>
            {isLoading ? (
              <Skeleton width={30} />
            ) : (
              <Text fontSize="sm" className={styles['post-card-views']}>
                👁 {views}
              </Text>
            )}
            {isLoading ? (
              <Skeleton width={30} />
            ) : (
              <Text fontSize="sm" className={styles['post-card-likes']}>
                ❤ {likes}
              </Text>
            )}
          </div>
          {isLoading ? (
            <Skeleton width={70} />
          ) : (
            <Text fontSize="sm" className={styles['post-card-date']}>
              {date}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};
