import { type FC } from 'react';

import {
  Breadcrumbs,
  PostArticle,
  PostComments,
  PostRecommended,
  PromoBanner,
} from '@widgets';

import { Section } from '@shared/ui';

import styles from './post.module.scss';

export const PostPage: FC = () => {
  return (
    <Section className={styles.post}>
      <Breadcrumbs />
      <PostArticle />
      <PostComments />
      <PostRecommended />
      <PromoBanner />
    </Section>
  );
};
