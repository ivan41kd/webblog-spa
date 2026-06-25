import { type FC, useEffect } from 'react';
import { Navigate, useParams } from 'react-router';

import { useAppDispatch, useAppSelector } from '@app/store/rootReducer';

import { PostLike } from '@features';

import {
  AuthorCard,
  PostDetails,
  PostDetailsSkeleton,
  clearPost,
  fetchPost,
} from '@entities';

import { CommentsIcon, LikeIcon } from '@shared/icons';
import { Text } from '@shared/ui';

import styles from './post-article.module.scss';

export const PostArticle: FC = () => {
  const { id } = useParams();

  const { isAuth } = useAppSelector((state) => state.auth);
  const post = useAppSelector((state) => state.posts.post);
  const error = useAppSelector((state) => state.posts.error);
  const isLoading = useAppSelector((state) => state.posts.isLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchPost(id));
    }
    return () => {
      dispatch(clearPost());
    };
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className={styles['post-article']}>
        <PostDetailsSkeleton />
      </div>
    );
  }

  if (error) return <Navigate to="/404" replace />;

  return (
    post && (
      <div className={styles['post-article']}>
        <PostDetails
          title={post.title}
          description={post.description}
          content={post.content}
          views={post.views}
          date={post.date}
        />
        {post.author.name && (
          <div className={styles['post-article-author']}>
            <AuthorCard name={post.author.name} avatar={post.author.avatar} />
          </div>
        )}

        <div className={styles['post-article-actions']}>
          <div className={styles['post-article-action']}>
            <LikeIcon className={styles['post-article-action-icon']} />
            <Text>{post.likes}</Text>
            {isAuth && <PostLike isLiked={post.isLiked} />}
          </div>
          <div className={styles['post-article-action']}>
            <CommentsIcon className={styles['post-article-action-icon']} />
            <Text>{post.comments.length}</Text>
          </div>
        </div>
      </div>
    )
  );
};
