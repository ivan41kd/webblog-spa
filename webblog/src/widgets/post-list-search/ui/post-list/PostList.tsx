import { type FC, memo } from 'react';
import { Link, useSearchParams } from 'react-router';

import { useAppSelector } from '@app/store/rootReducer';

import { Pagination } from '@features';

import { PostCard, PostCardSkeleton } from '@entities/post';

import { usePagination } from '@shared/lib';
import { formatDate } from '@shared/utils';

import styles from './post-list.module.scss';

const skeletons = Array.from({ length: 4 }, (_, i) => (
  <PostCardSkeleton key={`skeleton-${i}`} />
));

export const PostList: FC = memo(() => {
  const [, setSearchParams] = useSearchParams();

  const { posts, isLoading } = useAppSelector((state) => state.posts);

  const { dataPerPage, pageData, totalPages, pageNumbers, currentPage } =
    usePagination(posts || []);

  if (isLoading) {
    return <div className={styles['post-list']}>{skeletons}</div>;
  }

  if (!pageData.length) {
    return <p>Posts not found</p>;
  }

  return (
    <>
      <div className={styles['post-list']}>
        {pageData.map((post) => (
          <Link key={`post-${post.id}`} to={`/posts/${post.id}`}>
            <PostCard
              title={post.title}
              description={post.description}
              date={formatDate(post.date)}
              views={post.views}
              likes={post.likes}
              tags={post.tags}
            />
          </Link>
        ))}
      </div>

      {posts && posts.length > dataPerPage && (
        <Pagination
          pages={pageNumbers}
          totalPages={totalPages}
          dataPerPage={dataPerPage}
          currentPage={currentPage}
          onPageChange={(number) => {
            setSearchParams((prev) => {
              if (number === 1) {
                prev.delete('p');
              } else {
                prev.set('p', String(number));
              }
              return prev;
            });
          }}
        />
      )}
    </>
  );
});
