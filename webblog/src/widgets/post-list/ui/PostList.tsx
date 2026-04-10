import { memo, useEffect, useMemo, type FC } from 'react';

import { Pagination } from '@/features';

import { PostCard, type PostCardPropsType } from '@/entities/post';
import { PostCardSkeleton } from '@/entities/post/ui';

import { useLoading, usePagination } from '@/shared/lib';
import { formatDate } from '@/shared/utils/formatDate';

import styles from './post-list.module.scss';

interface PostListPropsType {
  posts: PostCardPropsType[];
}

export const PostList: FC<PostListPropsType> = memo(({ posts }) => {
  const {
    currentPage,
    setCurrentPage,
    dataPerPage,
    currentData,
    generatePages,
    totalPages,
    resetPagination,
  } = usePagination(posts);
  const pageNumbers = generatePages(currentPage, totalPages);

  const { isLoading } = useLoading();

  useEffect(() => {
    resetPagination();
  }, [resetPagination, totalPages]);

  const renderedPosts = useMemo(
    () =>
      currentData.map((post) => ({
        id: post.id,
        img: post.img,
        title: post.title,
        description: post.description,
        date: formatDate(post.date),
        views: post.views,
        likes: post.likes,
      })),
    [currentData]
  );

  const skeletons = Array.from({ length: 3 }, (_, i) => <PostCardSkeleton key={`skeleton-${i}`} />);

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
          <PostCard key={post.id} {...post} />
        ))}
      </div>

      {posts.length > dataPerPage && (
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
