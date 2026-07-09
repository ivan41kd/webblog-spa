import { type FC } from 'react';
import { useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from '@app/store/rootReducer';

import { type PostType, deletePost } from '@entities/post';

import { BasketIcon } from '@shared/icons';
import { Button } from '@shared/ui';

interface PostDeletePropsType {
  className?: string;
}

export const PostDelete: FC<PostDeletePropsType> = ({ className }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const post = useAppSelector((state) => state.posts.post);
  const user = useAppSelector((state) => state.auth.name);

  const localPost = JSON.parse(localStorage.getItem('post') ?? '[]').find(
    (p: PostType) => p.id === post?.id
  );

  return (
    user &&
    localPost && (
      <Button
        size="md"
        className={className}
        onClick={() => {
          navigate('/', { replace: true });
          dispatch(deletePost(post?.id));
        }}>
        Delete <BasketIcon />
      </Button>
    )
  );
};
