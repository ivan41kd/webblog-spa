import { type FC } from 'react';

import postImg from '@public/post-img.svg';

import { CalendarIcon, ClockIcon, ViewsIcon } from '@shared/icons';
import { CustomImage, Text, Title } from '@shared/ui';
import { calculateReadingTime, formatDate } from '@shared/utils';

import type { PostContentType } from '../../type';
import { PostDocText } from './PostDocText';
import styles from './post-details.module.scss';
import type { PostDetailsPropsType } from './type';

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

  console.log(content);

  return (
    <div className={styles['post-details']}>
      <CustomImage src={postImg} className={styles['post-details-img']} />
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
          ? content.map((content: PostContentType) =>
              content.text.map((text: string, textIndex: number) => (
                <Text
                  key={`text-${textIndex}`}
                  className={styles['post-details-content-text']}>
                  {text}
                </Text>
              ))
            )
          : content.content?.map((textContent, index) => (
              <PostDocText
                textContent={textContent}
                key={index}
                type={textContent.type}
              />
            ))}
      </div>
    </div>
  );
};
