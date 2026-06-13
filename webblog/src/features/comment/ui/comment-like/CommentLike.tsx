import classNames from 'classnames';
import type { FC } from 'react';

import { LikeIcon } from '@shared/icons';
import { Button, Text } from '@shared/ui';

import styles from './comment-like.module.scss';
import type { CommentLikePropsType } from './type';

export const CommentLike: FC<CommentLikePropsType> = ({
  likes,
  onLike,
  isLiked = false,
}) => {
  const likeClassName = classNames(styles['comment-like'], {
    [styles['active']]: isLiked,
  });

  return (
    <Button className={likeClassName} onClick={onLike}>
      <LikeIcon className={styles['comment-like-icon']} fill="white" />
      <Text>{likes}</Text>
    </Button>
  );
};
