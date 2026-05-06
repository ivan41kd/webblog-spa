import { type FC, memo, useEffect, useMemo } from 'react';
import { Link } from 'react-router';

import { useAppDispatch, useAppSelector } from '@app/store/rootReducer';

import { Pagination } from '@features';

import { PostCard, PostCardSkeleton, fetchPosts } from '@entities';

import { usePagination } from '@shared/lib';
import { formatDate } from '@shared/utils/formatDate';

import styles from './post-list.module.scss';

export const PostList: FC = memo(() => {
  const { posts, isLoading } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const {
    currentPage,
    setCurrentPage,
    dataPerPage,
    pageData,
    totalPages,
    resetPagination,
    pageNumbers,
  } = usePagination(posts || []);

  useEffect(() => {
    resetPagination();
  }, [totalPages]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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
      })),
    [pageData]
  );

  const skeletons = Array.from({ length: 3 }, (_, i) => (
    <PostCardSkeleton key={`skeleton-${i}`} />
  ));

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
              img={post.img}
            />
          </Link>
        ))}
      </div>

      {posts && posts.length > dataPerPage && (
        <Pagination
          pages={pageNumbers}
          totalPages={totalPages}
          dataPerPage={dataPerPage}
          onPageChange={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </>
  );
});
