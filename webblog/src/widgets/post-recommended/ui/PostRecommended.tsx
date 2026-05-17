import type { FC } from 'react';

import { Link } from 'react-router';

import { PostRow } from '@entities';

import { Title } from '@shared/ui';

import { RECOMMENDED_POSTS } from '../model/constant';
import styles from './post-recommended.module.scss';

export const PostRecommended: FC = () => {
  return (
    <div className={styles['post-recommended']}>
      <Title tag="h2">Recommended</Title>
      <div className={styles['post-recommended-list']}>
        {RECOMMENDED_POSTS.map((item) => {
          return (
            <Link to={`/posts/${item.id}`} key={item.id}>
              <PostRow
                img={item.img}
                title={item.title}
                description={item.description}
                authorImg={item.author.avatar}
                authorName={item.author.name}
                views={item.views}
                date={item.date}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
