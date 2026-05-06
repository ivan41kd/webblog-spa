import type { FC } from 'react';

import classNames from 'classnames';

import { LikeIcon } from '@shared/icons';
import { Image, ReadMore, Text } from '@shared/ui';

import type { CommentCardPropsType } from '../type';
import styles from './comment.module.scss';

export const CommentCard: FC<CommentCardPropsType> = ({
  avatar,
  user,
  comment,
  likes,
  onLike,
  isLiked,
}) => {
  const likeClassName = classNames(styles['comment-like'], {
    [styles['active']]: isLiked,
  });
  return (
    <div className={styles.comment}>
      <div className={styles['comment-info']}>
        <Image className={styles['comment-avatar']} src={avatar} />{' '}
        <Text>{user}</Text>
      </div>
      <div className={styles['comment-content']}>
        <ReadMore text={comment} />

        <div className={likeClassName}>
          <LikeIcon className={styles['comment-like-icon']} onClick={onLike} />
          <Text>{likes}</Text>
        </div>
      </div>
    </div>
  );
};
