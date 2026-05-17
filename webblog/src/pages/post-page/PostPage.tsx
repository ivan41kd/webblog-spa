import { type FC } from 'react';

import { useAppSelector } from '@app/store/rootReducer';

import {
  Breadcrumbs,
  PostArticle,
  PostComments,
  PostRecommended,
  PostRecommendedSkeletons,
  PromoBanner,
} from '@widgets';

import { Section } from '@shared/ui';

import styles from './post.module.scss';

export const PostPage: FC = () => {
  const isLoading = useAppSelector((state) => state.posts.isLoading);

  return (
    <Section className={styles.post}>
      <Breadcrumbs />
      <PostArticle />
      <PostComments />
      {isLoading ? <PostRecommendedSkeletons /> : <PostRecommended />}
      {!isLoading && <PromoBanner />}
    </Section>
  );
};
