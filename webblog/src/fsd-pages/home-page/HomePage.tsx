import { type FC } from 'react';

import { PostListSearch, PromoBanner } from '@widgets';

import { Section } from '@shared/ui';

import styles from './home-page.module.scss';

export const HomePage: FC = () => {
  return (
    <Section className={styles.home}>
      <PostListSearch withSearch />
      <PromoBanner />
    </Section>
  );
};
