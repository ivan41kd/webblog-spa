import { type FC, memo } from 'react';

import { useAppDispatch } from '@app/hooks';

import { likePost } from '@entities/post';

import { Button } from '@shared/ui';

interface PostLikePropsType {
  isLiked?: boolean;
}

export const PostLike: FC<PostLikePropsType> = memo(({ isLiked = false }) => {
  const dispatch = useAppDispatch();

  return (
    <Button size="md" onClick={() => dispatch(likePost())}>
      {isLiked ? 'Unlike post' : 'Like post'}
    </Button>
  );
});
