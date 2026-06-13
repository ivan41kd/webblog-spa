import { type FC, memo } from 'react';

import { Image, ReadMore, Text } from '@shared/ui';
import { formatDate } from '@shared/utils/formatDate';

import styles from './comment.module.scss';
import type { CommentCardPropsType } from './type';

export const CommentCard: FC<CommentCardPropsType> = memo(
  ({ avatar, user, comment, date, ref, likeSlot }) => {
    return (
      <div className={styles.comment} ref={ref}>
        <div className={styles['comment-info']}>
          <Image className={styles['comment-avatar']} src={avatar} />
          <div className={styles['comment-author']}>
            <Text>{user}</Text>
            <Text className={styles['comment-date']}>{formatDate(date)}</Text>
          </div>
        </div>
        <div className={styles['comment-content']}>
          <ReadMore
            text={comment}
            textClassName={styles['comment-content-text']}
          />

          <div className={styles['comment-actions']}>{likeSlot}</div>
        </div>
      </div>
    );
  }
);
