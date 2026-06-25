import { type FC, useCallback, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@app/store/rootReducer';

import { LoginModal, Pagination } from '@features';
import { CommentLike } from '@features/comment';

import { CommentCard, CommentCardSkeleton, likeComment } from '@entities';

import { usePagination } from '@shared/lib';
import { Text } from '@shared/ui';
import { scrollToRefElement } from '@shared/utils/scrollToRefElement';

import styles from '../../post-comments.module.scss';

export const CommentList: FC = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const comments = useAppSelector((state) => state.posts.post?.comments);
  const isLoading = useAppSelector((state) => state.posts.isLoading);
  const isCommentLoading = useAppSelector(
    (state) => state.posts.isCommentLoading
  );

  const dispatch = useAppDispatch();

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
      if (isAuth) {
        dispatch(
          likeComment({
            id,
          })
        );
      }
    },
    [dispatch, isAuth]
  );

  if (isLoading) {
    return commentSkeletons;
  }

  return (
    comments && (
      <>
        <div className={styles['post-comments-list']}>
          {isCommentLoading && <CommentCardSkeleton key={'skeleton'} />}
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
                likeSlot={
                  !isAuth ? (
                    <LoginModal
                      handler={
                        <CommentLike
                          likes={comment.likes}
                          isLiked={comment.isLiked}
                          onLike={() => handleLike(index)}
                        />
                      }
                    />
                  ) : (
                    <CommentLike
                      likes={comment.likes}
                      isLiked={comment.isLiked}
                      onLike={() => handleLike(index)}
                    />
                  )
                }
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
              scrollToRefElement(commentRef);
            }}
            currentPage={currentPage}
            type="loadMore"
          />
        )}
      </>
    )
  );
};
