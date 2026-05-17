import { useEffect, type FC } from 'react';

import { useSearchParams } from 'react-router';

import { useAppDispatch, useAppSelector } from '@app/store/rootReducer';

import { PostList, PromoBanner } from '@widgets';

import { PostSearch } from '@features';

import { fetchPostSearch, fetchPosts } from '@entities';

import { Section } from '@shared/ui';

import styles from './home-page.module.scss';

export const HomePage: FC = () => {
  const { isLoading } = useAppSelector((state) => state.posts);

  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const typeQuery = searchParams.get('type') || '';
  const searchQuery = searchParams.get('q') || '';

  useEffect(() => {
    if (searchQuery) {
      dispatch(
        fetchPostSearch({
          searchTerm: searchQuery,
          tag: typeQuery,
        })
      );
    } else {
      dispatch(fetchPosts(typeQuery));
    }
  }, [searchQuery, typeQuery]);

  return (
    <Section className={styles.home}>
      <PostSearch />
      <PostList />
      {!isLoading && <PromoBanner />}
    </Section>
  );
};
