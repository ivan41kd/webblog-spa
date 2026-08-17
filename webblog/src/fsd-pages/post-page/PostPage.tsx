'use client';
import { type FC } from 'react';

import { useAppSelector } from '@app/hooks';

import {
  Breadcrumbs,
  PostRecommended,
  PostRecommendedSkeletons,
  PromoBanner,
} from '@widgets';

import { Section } from '@shared/ui';

import styles from './post.module.scss';
import { CommentSection } from './ui/comment-section';
import { PostArticle } from './ui/post-article';

export const PostPage: FC = () => {
  const isLoading = useAppSelector((state) => state.posts.isLoading);

  return (
    <Section className={styles.post}>
      <div className={styles['post-header']}>
        <Breadcrumbs />
      </div>
      <PostArticle />
      <CommentSection />
      {isLoading ? <PostRecommendedSkeletons /> : <PostRecommended />}
      <PromoBanner />
    </Section>
  );
};
