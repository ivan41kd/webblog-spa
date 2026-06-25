import { type FC, useRef } from 'react';

import { useAppSelector } from '@app/store/rootReducer';

import { LoginModal } from '@features';

import { Button, Text, Title } from '@shared/ui';
import { scrollToRefElement } from '@shared/utils/scrollToRefElement';

import styles from './post-comments.module.scss';
import { CommentList } from './ui/comment-list';
import { CreateComment } from './ui/create-comment';

export const CommentSection: FC = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  const commentListRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={styles['post-comments']}
      id="post-comments"
      ref={commentListRef}>
      <Title tag="h2" fontSize="md" className={styles['post-comments-title']}>
        Comments
      </Title>
      <CommentList />
      {isAuth ? (
        <CreateComment
          onCommentAdded={() => {
            scrollToRefElement(commentListRef);
          }}
        />
      ) : (
        <div className={styles['post-comments-login-prompt']}>
          <Text>Please log in to leave a comment.</Text>
          <LoginModal handler={<Button>Login</Button>} />
        </div>
      )}
    </div>
  );
};
