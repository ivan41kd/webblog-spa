import { type FC, memo, useMemo } from 'react';

import { CalendarIcon, ClockIcon, ViewsIcon } from '@shared/icons';
import { Image, Text, Title } from '@shared/ui';
import { calculateReadingTime } from '@shared/utils/calculateReadingTime';
import { formatDate } from '@shared/utils/formatDate';

import type { PostDetailsPropsType } from '../type';
import styles from './post-details.module.scss';

export const PostDetails: FC<PostDetailsPropsType> = memo(
  ({ title, description, content, views, img, date }) => {
    const displayDate = useMemo(() => formatDate(date), [date]);
    const readingTime = useMemo(() => {
      const text = content?.map((b) => b.text).join('') || '';
      return calculateReadingTime(text);
    }, [content]);

    return (
      <div className={styles['post-details']}>
        <Image src={img} className={styles['post-details-img']} />
        <div className={styles['post-details-header']}>
          <Title className={styles['post-details-title']}>{title}</Title>
          <div className={styles['post-details-info']}>
            <div className={styles['post-details-info-item']}>
              <ViewsIcon className={styles['post-details-info-icon']} />{' '}
              <Text>{views}</Text>
            </div>
            <div className={styles['post-details-info-item']}>
              <CalendarIcon className={styles['post-details-info-icon']} />{' '}
              <Text>{displayDate}</Text>
            </div>
            <div className={styles['post-details-info-item']}>
              <ClockIcon className={styles['post-details-info-icon']} />
              <Text>{readingTime} min read</Text>
            </div>
          </div>
          <Text className={styles['post-details-description']}>
            {description}
          </Text>
        </div>
        {content.map((content, index) => {
          return (
            <div className={styles['post-details-content']} key={index}>
              {content.text.map((text: string, index: number) => {
                return <Text key={`text-${index}`}>{text}</Text>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
);
