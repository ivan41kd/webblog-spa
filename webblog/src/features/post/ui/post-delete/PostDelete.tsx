import { type FC } from 'react';
import { useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from '@app/store/rootReducer';

import { deletePost } from '@entities/post';

import { BasketIcon } from '@shared/icons';
import { Button } from '@shared/ui';

interface PostDeletePropsType {
  className?: string;
}

export const PostDelete: FC<PostDeletePropsType> = ({ className }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const post = useAppSelector((state) => state.posts.post);

  return (
    <Button
      size="md"
      className={className}
      onClick={() => {
        navigate('/', { replace: true });
        dispatch(deletePost(post?.id));
      }}>
      Delete <BasketIcon />
    </Button>
  );
};
