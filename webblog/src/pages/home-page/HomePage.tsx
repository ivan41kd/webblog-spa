import { type FC } from 'react';

import { PostList, PromoBanner } from '@widgets';

import { PostSearch } from '@features';

import { Section } from '@shared/ui';

import styles from './home-page.module.scss';

export const HomePage: FC = () => {
  return (
    <Section className={styles.home}>
      <PostSearch />
      <PostList />
      <PromoBanner />
    </Section>
  );
};
