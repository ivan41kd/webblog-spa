import { useRouter } from 'next/navigation';
import type { FC } from 'react';

import { useAppDispatch, useAppSelector } from '@app/hooks';

import { ConfirmModal } from '@widgets/confirm-modal';

import { type PostType, deletePost } from '@entities';

import { BasketIcon } from '@shared/icons';
import { Button } from '@shared/ui';

import styles from '../../post.module.scss';

export const PostActions: FC = () => {
  const post = useAppSelector((state) => state.posts.post);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const localPost = JSON.parse(localStorage.getItem('post') ?? '[]').find(
    (p: PostType) => p.id === post?.id
  );

  const { isAuth } = useAppSelector((state) => state.auth);
  return (
    isAuth &&
    localPost && (
      <div className={styles['post-actions']}>
        <ConfirmModal
          text="This action is permanent and cannot be undone. All associated data will be removed."
          onConfirm={() => {
            dispatch(deletePost(post?.id));
            router.push('/');
          }}
          confirmText="Delete">
          <Button size="md" className={styles['post-delete-button']}>
            Delete <BasketIcon />
          </Button>
        </ConfirmModal>
      </div>
    )
  );
};
