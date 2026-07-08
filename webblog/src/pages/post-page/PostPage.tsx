import { type FC } from 'react';

import { useAppSelector } from '@app/store/rootReducer';

import {
  Breadcrumbs,
  PostRecommended,
  PostRecommendedSkeletons,
  PromoBanner,
} from '@widgets';

import { PostDelete } from '@features/post/ui/post-delete/PostDelete';

import { Section } from '@shared/ui';

import styles from './post.module.scss';
import { CommentSection } from './ui/comment-section';
import { PostArticle } from './ui/post-article';

export const PostPage: FC = () => {
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const user = useAppSelector((state) => state.auth.name);

  return (
    <Section className={styles.post}>
      <div className={styles['post-header']}>
        <Breadcrumbs />
        {user && <PostDelete className={styles['post-delete-button']} />}
      </div>
      <PostArticle />
      <CommentSection />
      {isLoading ? <PostRecommendedSkeletons /> : <PostRecommended />}
      <PromoBanner />
    </Section>
  );
};
