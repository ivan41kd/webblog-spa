import { type FC } from 'react';

import { Search, PostList, Results } from '@/widgets';

import { mocks } from '@/entities/post';

import { useSearch } from '@/shared/lib';
import { Section } from '@/shared/ui';

import styles from './home-page.module.scss';

export const HomePage: FC = () => {
  const { filteredData, showResults, handleSearch, count } = useSearch(mocks);

  return (
    <Section className={styles.home}>
      <Search onChange={handleSearch} />
      {showResults && <Results count={count} />}
      <PostList posts={filteredData} />
    </Section>
  );
};
