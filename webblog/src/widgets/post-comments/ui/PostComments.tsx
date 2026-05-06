import { type FC } from 'react';

import { useAppDispatch, useAppSelector } from '@app/store/rootReducer';

import { LoginPrompt, Pagination, PostComment } from '@features';

import { CommentCard, CommentCardSkeleton, likeComment } from '@entities';

import { useLocalStorage, usePagination } from '@shared/lib';
import { Text, Title } from '@shared/ui';

import styles from './post-comments.module.scss';

export const PostComments: FC = () => {
  const dispatch = useAppDispatch();
  const { post, isLoading } = useAppSelector((state) => state.posts);
  const { getItem } = useLocalStorage();
  const {
    visibleData,
    setCurrentPage,
    currentPage,
    dataPerPage,
    totalPages,
    pageNumbers,
    setOffset,
  } = usePagination(post?.comments || [], 2);

  const commentSkeletons = Array.from({ length: 3 }, (_, i) => (
    <CommentCardSkeleton key={`skeleton-${i}`} />
  ));

  if (isLoading) {
    return commentSkeletons;
  }

  return (
    post && (
      <div className={styles['post-comments']}>
        <Title tag="h2" fontSize="md">
          Comments
        </Title>

        {visibleData.length ? (
          <div className={styles['post-comments-list']}>
            {visibleData.map((comment, index) => {
              return (
                <CommentCard
                  key={`comment-${index}-${comment.name}`}
                  comment={comment.text}
                  user={comment.name}
                  likes={comment.likes}
                  avatar={comment.avatar}
                  isLiked={comment.isLiked}
                  onLike={() =>
                    getItem('user') &&
                    dispatch(
                      likeComment({
                        id: index,
                      })
                    )
                  }
                />
              );
            })}
          </div>
        ) : (
          <Text>No comments</Text>
        )}
        {post?.comments.length > visibleData.length && (
          <Pagination
            pages={pageNumbers}
            totalPages={totalPages}
            dataPerPage={dataPerPage}
            onPageChange={setCurrentPage}
            currentPage={currentPage}
            type="loadMore"
          />
        )}

        {getItem('user') ? (
          <PostComment
            onCommentAdded={() => setOffset((prev: number) => prev + 1)}
          />
        ) : (
          <div className={styles['post-comments-login-prompt']}>
            <LoginPrompt text="Please log in to leave a comment." />
          </div>
        )}
      </div>
    )
  );
};
