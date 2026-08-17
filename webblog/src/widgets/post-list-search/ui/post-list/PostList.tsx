'use client';
import { useAppSelector } from '@/app/hooks/hooks';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { type FC, memo } from 'react';

import { Pagination } from '@features';

import { PostCard, PostCardSkeleton } from '@entities/post';

import { usePagination } from '@shared/lib';
import { formatDate } from '@shared/utils';

import styles from './post-list.module.scss';

const skeletons = Array.from({ length: 4 }, (_, i) => (
  <PostCardSkeleton key={`skeleton-${i}`} />
));

export const PostList: FC = memo(() => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();

  const { posts, isLoading } = useAppSelector((state) => state.posts);

  const { dataPerPage, pageData, totalPages, pageNumbers, currentPage } =
    usePagination(posts || []);

  if (isLoading) {
    return <div className={styles['post-list']}>{skeletons}</div>;
  }

  if (!pageData.length && !isLoading) {
    return <p>Posts not found</p>;
  }

  return (
    <>
      <div className={styles['post-list']}>
        {pageData.map((post) => (
          <Link key={`post-${post.id}`} href={`/posts/${post.id}`}>
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
            if (number === 1) {
              params.delete('p');
            } else {
              params.set('p', String(number));
            }
            router.push(`${pathname}?${params.toString()}`);
          }}
        />
      )}
    </>
  );
});
