import { memo, type FC } from 'react';

import classNames from 'classnames';

import { LikeIcon } from '@shared/icons';
import { Button, Image, ReadMore, Text } from '@shared/ui';
import { formatDate } from '@shared/utils/formatDate';

import type { CommentCardPropsType } from '../type';
import styles from './comment.module.scss';

export const CommentCard: FC<CommentCardPropsType> = memo(
  ({ avatar, user, comment, likes, date, onLike, isLiked, ref }) => {
    const likeClassName = classNames(styles['comment-like'], {
      [styles['active']]: isLiked,
    });

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

          <div className={styles['comment-actions']}>
            <Button onClick={onLike} className={likeClassName}>
              <LikeIcon className={styles['comment-like-icon']} fill="white" />
              <Text>{likes}</Text>
            </Button>
          </div>
        </div>
      </div>
    );
  }
);
