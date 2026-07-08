import { type FC } from 'react';

import { CalendarIcon, ClockIcon, ViewsIcon } from '@shared/icons';
import { Image, Text, Title } from '@shared/ui';
import { calculateReadingTime, formatDate } from '@shared/utils';

import type { PostContentType } from '../../type';
import styles from './post-details.module.scss';
import type { PostDetailsPropsType } from './type';
import postImg from '/post-img.svg';

export const PostDetails: FC<PostDetailsPropsType> = ({
  title,
  description,
  content,
  views,
  date,
}) => {
  const displayDate = formatDate(date);
  const isJSONType = content !== null && 'type' in content;

  const getReadingTime = () => {
    const text = !isJSONType
      ? content?.map((b: PostContentType) => b.text).join('') || ''
      : content.content
          ?.map((content) => {
            return content.content?.map((text) => {
              return text.text;
            });
          })
          .join('');
    return calculateReadingTime(text);
  };

  const readingTime = getReadingTime();

  return (
    <div className={styles['post-details']}>
      <Image src={postImg} className={styles['post-details-img']} />
      <div className={styles['post-details-header']}>
        <Title className={styles['post-details-title']}>{title}</Title>
        <div className={styles['post-details-info']}>
          <div className={styles['post-details-info-item']}>
            <ViewsIcon className={styles['post-details-info-icon']} />
            <Text>{views}</Text>
          </div>
          <div className={styles['post-details-info-item']}>
            <CalendarIcon className={styles['post-details-info-icon']} />
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

      <div className={styles['post-details-content']}>
        {!isJSONType
          ? content.map((content: PostContentType, index: number) => {
              return (
                <div className={styles['post-details-content']} key={index}>
                  {content.text.map((text: string, textIndex: number) => {
                    return (
                      <Text
                        key={`text-${textIndex}`}
                        className={styles['post-details-content-text']}>
                        {text}
                      </Text>
                    );
                  })}
                </div>
              );
            })
          : content.content?.map((content, index) => {
              return content.type === 'paragraph' && content.content ? (
                <Text
                  key={`text-${index}`}
                  className={styles['post-details-content-text']}>
                  {content.content?.map((text, index) => {
                    return text.marks && text.marks[0].type === 'bold' ? (
                      <span key={`${text.marks[0].type}-${index}`}>
                        {text.text}
                      </span>
                    ) : (
                      text.text
                    );
                  })}
                </Text>
              ) : (
                <br />
              );
            })}
      </div>
    </div>
  );
};
