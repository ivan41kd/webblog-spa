import { PostCard } from '@/entities/post';
import type { PostCardPropsType } from '@/entities/post';

import styles from './post-list.module.scss';
import { usePagination } from '@/shared/lib';
import { Pagination } from '@/features';

export const PostList = ({ posts }: { posts: PostCardPropsType[] }) => {
  const { currentPage, setCurrentPage, dataPerPage, currentData } = usePagination(posts);

  return (
    <>
      {posts.length ? (
        <div className={styles['post-list']}>
          {currentData.map((post) => (
            <PostCard
              img={post.img}
              title={post.title}
              description={post.description}
              date={post.date}
              views={post.views}
              likes={post.likes}
              key={post.id}
            />
          ))}
        </div>
      ) : (
        <p>Posts not found</p>
      )}

      {posts.length > dataPerPage && (
        <Pagination
          data={posts}
          dataPerPage={dataPerPage}
          onPageChange={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </>
  );
};
