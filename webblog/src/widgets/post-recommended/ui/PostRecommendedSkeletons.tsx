import type { FC } from 'react';

import { PostRowSkeleton } from '@entities/post';

import { Title } from '@shared/ui';

import styles from './post-recommended.module.scss';

const skeletons = Array.from({ length: 3 }, (_, i) => (
  <PostRowSkeleton key={i} />
));

export const PostRecommendedSkeletons: FC = () => {
  return (
    <div className={styles['post-recommended']}>
      <Title tag="h2">Recommended</Title>
      <div className={styles['post-recommended-list']}>
        {skeletons.map((item) => {
          return item;
        })}
      </div>
    </div>
  );
};
