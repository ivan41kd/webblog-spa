import { type FC } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '@/app/store/rootReducer';

import { Search, PostList, Results } from '@/widgets';

import { useSearch } from '@/shared/lib';
import { Section } from '@/shared/ui';

import styles from './home-page.module.scss';

export const HomePage: FC = () => {
  const postsSelector = useSelector((state: RootState) => state.posts.posts);

  const { filteredData, showResults, handleSearch, count } = useSearch(postsSelector);

  return (
    <Section className={styles.home}>
      <Search onChange={handleSearch} />
      {showResults && <Results count={count} />}
      <PostList posts={filteredData} />
    </Section>
  );
};
