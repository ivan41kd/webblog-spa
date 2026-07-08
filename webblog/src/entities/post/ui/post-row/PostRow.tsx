import type { FC } from 'react';

import { CalendarIcon, ViewsIcon } from '@shared/icons';
import { Image, Text } from '@shared/ui';
import { formatDate } from '@shared/utils';

import styles from './post-row.module.scss';
import type { PostRowPropsType } from './type';

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
          <div className={styles['post-row-author-info']}>
            <Text className={styles['post-row-author-name']}>{authorName}</Text>
            <div className={styles['post-row-info']}>
              <div className={styles['post-row-info-item']}>
                <ViewsIcon className={styles['post-row-info-item-icon']} />
                <Text>{views}</Text>
              </div>
              <div className={styles['post-row-info-item']}>
                <CalendarIcon className={styles['post-row-info-item-icon']} />
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
