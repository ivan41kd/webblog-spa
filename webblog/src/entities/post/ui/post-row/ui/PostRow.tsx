import type { FC } from 'react';

import { ViewsIcon } from '@shared/icons';
import { Image, Text } from '@shared/ui';
import { formatDate } from '@shared/utils/formatDate';

import type { PostRowPropsType } from '../type';
import styles from './post-row.module.scss';

export const PostRow: FC<PostRowPropsType> = ({
  img,
  title,
  description,
  authorName,
  authorImg,
  views,
  date,
}) => {
  return (
    <div className={styles['post-row']}>
      <Image src={img} className={styles['post-row-img']} />

      <div className={styles['post-row-content']}>
        <div className={styles['post-row-author']}>
          <Image src={authorImg} className={styles['post-row-author-avatar']} />
          <div className="post-row-author-info">
            <Text>{authorName}</Text>
            <div className={styles['post-row-info']}>
              <div className={styles['post-row-info-item']}>
                <ViewsIcon className={styles['post-row-info-item-icon']} />
                <Text>{views}</Text>
              </div>
              <div className={styles['post-row-info-item']}>
                <Text>{formatDate(date)}</Text>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['post-row-body']}>
          <Text className={styles['post-row-title']}>{title}</Text>
          <Text className={styles['post-row-description']}>{description}</Text>
        </div>
      </div>
    </div>
  );
};
