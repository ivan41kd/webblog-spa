import { useState, useCallback } from 'react';

import { Section } from '@/shared/ui';

import styles from './home-page.module.scss';
import { data } from '@/entities/post';
import { Search } from '@/widgets';
import { PostList } from '@/widgets/post-list/ui/PostList';

export const HomePage = () => {
  const [posts, setPosts] = useState(data);

  const handleSearch = useCallback((query: string) => {
    const filteredData = data.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );

    setPosts(filteredData);
  }, []);

  return (
    <Section className={styles.home}>
      <Search onChange={handleSearch} />
      <PostList posts={posts} />
    </Section>
  );
};
