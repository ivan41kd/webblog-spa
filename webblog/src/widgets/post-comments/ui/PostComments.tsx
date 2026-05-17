import { useCallback, useRef, type FC, type RefObject } from 'react';

import { useAppDispatch, useAppSelector } from '@app/store/rootReducer';

import { LoginPrompt, Pagination, PostComment } from '@features';

import { CommentCard, CommentCardSkeleton, likeComment } from '@entities';

import { useLocalStorage, usePagination } from '@shared/lib';
import { Text, Title } from '@shared/ui';

import styles from './post-comments.module.scss';

export const PostComments: FC = () => {
  const dispatch = useAppDispatch();

  const comments = useAppSelector((state) => state.posts.post?.comments);
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const isCommentLoading = useAppSelector(
    (state) => state.posts.isCommentLoading
  );
  const { getItem } = useLocalStorage();
  const commentListRef = useRef<HTMLDivElement>(null);
  const commentRef = useRef<HTMLDivElement>(null);
  const {
    visibleData,
    setCurrentPage,
    currentPage,
    dataPerPage,
    totalPages,
    pageNumbers,
  } = usePagination(comments || [], 2);

  const commentSkeletons = Array.from({ length: 3 }, (_, i) => (
    <CommentCardSkeleton key={`skeleton-${i}`} />
  ));

  const handleLike = useCallback(
    (id: number) => {
      if (getItem('user')) {
        dispatch(
          likeComment({
            id,
          })
        );
      }
    },
    [dispatch, getItem]
  );

  const handleScroll = (ref: RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  if (isLoading) {
    return (
      <div className={styles['post-comments']} id="post-comments">
        <Title tag="h2" fontSize="md" className={styles['post-comments-title']}>
          Comments
        </Title>
        {commentSkeletons}
      </div>
    );
  }
  return (
    comments && (
      <div
        className={styles['post-comments']}
        ref={commentListRef}
        id="post-comments">
        <Title tag="h2" fontSize="md" className={styles['post-comments-title']}>
          Comments
          <span className={styles['post-comments-value']}>
            {comments.length}
          </span>
        </Title>
        <div className={styles['post-comments-list']}>
          {isCommentLoading && <CommentCardSkeleton key={`skeleton-${1}`} />}
          {!visibleData.length && !isCommentLoading && <Text>No comments</Text>}

          {visibleData.map((comment, index) => {
            return (
              <CommentCard
                key={`comment-${index}-${comment.name}`}
                ref={commentRef}
                comment={comment.text}
                user={comment.name}
                likes={comment.likes}
                avatar={comment.avatar}
                isLiked={comment.isLiked}
                date={comment.date}
                onLike={() => {
                  handleLike(index);
                }}
              />
            );
          })}
        </div>
        {comments.length > visibleData.length && (
          <Pagination
            pages={pageNumbers}
            totalPages={totalPages}
            dataPerPage={dataPerPage}
            onPageChange={(number) => {
              setCurrentPage(number);
              handleScroll(commentRef);
            }}
            currentPage={currentPage}
            type="loadMore"
          />
        )}

        {getItem('user') ? (
          <PostComment
            onCommentAdded={() => {
              handleScroll(commentListRef);
            }}
          />
        ) : (
          <div className={styles['post-comments-login-prompt']}>
            <LoginPrompt
              text="Please log in to leave a comment."
              anchor="post-comments"
            />
          </div>
        )}
      </div>
    )
  );
};
