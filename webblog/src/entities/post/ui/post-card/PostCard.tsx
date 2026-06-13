import { type FC, memo } from 'react';

import { LikeIcon, ViewsIcon } from '@shared/icons';
import { Image, Text } from '@shared/ui';

import styles from './post-card.module.scss';
import type { PostCardPropsType } from './type';
import postImg from '/post-img.svg';

export const PostCard: FC<PostCardPropsType> = memo(
  ({ title, description, views, likes, date, tags }) => {
    return (
      <div className={styles['post-card']}>
        <div className={styles['post-card-header']}>
          {tags && (
            <div className={styles['post-card-tags']}>
              {tags.map((tag: string, index: number) => {
                return (
                  <div
                    className={styles['post-card-tag']}
                    key={`${tag}-${index}`}>
                    {tag}
                  </div>
                );
              })}
            </div>
          )}
          <Image
            src={postImg}
            alt={title}
            className={styles['post-card-img']}
          />
        </div>
        <div className={styles['post-card-body']}>
          <Text fontSize="lg" className={styles['post-card-title']}>
            {title}
          </Text>

          <div className={styles['post-card-description']}>
            <Text
              fontSize="md"
              className={styles['post-card-description-text']}>
              {description}
            </Text>
          </div>

          <div className={styles['post-card-info']}>
            <div className={styles['post-card-stats']}>
              <div className={styles['post-card-stats-item']}>
                <ViewsIcon className={styles['post-card-stats-icon']} />
                <Text fontSize="sm" className={styles['post-card-views']}>
                  {views}
                </Text>
              </div>
              <div className={styles['post-card-stats-item']}>
                <LikeIcon className={styles['post-card-stats-icon']} />
                <Text fontSize="sm" className={styles['post-card-likes']}>
                  {likes}
                </Text>
              </div>
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
