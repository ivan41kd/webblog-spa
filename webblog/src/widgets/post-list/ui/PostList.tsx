import { type FC, memo, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router';

import { useAppSelector } from '@app/store/rootReducer';

import { Pagination } from '@features';

import { PostCard, PostCardSkeleton } from '@entities/post';

import { usePagination } from '@shared/lib';
import { formatDate } from '@shared/utils/formatDate';

import styles from './post-list.module.scss';

export const PostList: FC = memo(() => {
  const { posts, isLoading } = useAppSelector((state) => state.posts);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = Number(searchParams.get('p')) || 1;
  const {
    currentPage,
    setCurrentPage,
    dataPerPage,
    pageData,
    totalPages,
    pageNumbers,
    resetPagination,
  } = usePagination(posts || []);

  useEffect(() => {
    if (currentPage !== pageParam) {
      setCurrentPage(pageParam);
    }
  }, [pageParam]);

  const renderedPosts = useMemo(
    () =>
      pageData.map((post) => ({
        id: post.id,
        img: post.img,
        title: post.title,
        description: post.description,
        date: formatDate(post.date),
        views: post.views,
        likes: post.likes,
        tags: post.tags,
      })),
    [pageData]
  );

  const skeletons = Array.from({ length: 4 }, (_, i) => (
    <PostCardSkeleton key={`skeleton-${i}`} />
  ));

  useEffect(() => {
    if (
      (!searchParams.get('q') && !searchParams.get('p')) ||
      searchParams.get('p') === '1' ||
      !searchParams.get('p')
    )
      resetPagination();
  }, [searchParams]);

  if (isLoading) {
    return <div className={styles['post-list']}>{skeletons}</div>;
  }

  if (!renderedPosts.length) {
    return <p>Posts not found</p>;
  }

  return (
    <>
      <div className={styles['post-list']}>
        {renderedPosts.map((post) => (
          <Link key={`post-${post.id}`} to={`/posts/${post.id}`}>
            <PostCard
              title={post.title}
              description={post.description}
              date={post.date}
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
          onPageChange={(number) => {
            setSearchParams((prev) => {
              prev.set('p', String(number));
              return prev;
            });
            setCurrentPage(number);
          }}
          currentPage={currentPage}
        />
      )}
    </>
  );
});
