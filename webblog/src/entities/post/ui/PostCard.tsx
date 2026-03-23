import { memo, type FC } from 'react';

import { Text } from '@/shared/ui';

import type { PostCardPropsType } from '../type';
import styles from './post-card.module.scss';

export const PostCard: FC<PostCardPropsType> = memo(
  ({ img, title, description, views, likes, date }) => {
    return (
      <div className={styles['post-card']}>
        <div className={styles['post-card-header']}>
          {img && (
            <img
              className={styles['post-card-img']}
              src={img}
              alt={title}
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
        <div className={styles['post-card-body']}>
          <Text fontSize="lg" className={styles['post-card-title']}>
            {title}
          </Text>

          <div className={styles['post-card-description']}>
            <Text fontSize="md" className={styles['post-card-description-text']}>
              {description}
            </Text>
          </div>

          <div className={styles['post-card-info']}>
            <div className={styles['post-card-stats']}>
              <Text fontSize="sm" className={styles['post-card-views']}>
                👁 {views}
              </Text>

              <Text fontSize="sm" className={styles['post-card-likes']}>
                ❤ {likes}
              </Text>
            </div>
            <Text fontSize="sm" className={styles['post-card-date']}>
              {date}
            </Text>
          </div>
        </div>
      </div>
    );
  }
);
