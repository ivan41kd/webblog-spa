import { type FC, useCallback, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@app/hooks';

import { LoginModal, Pagination } from '@features';
import { CommentLike } from '@features/comment';

import { CommentCard, CommentCardSkeleton, likeComment } from '@entities';

import { usePagination } from '@shared/lib';
import { Text } from '@shared/ui';
import { scrollToRefElement } from '@shared/utils';

import styles from '../../post-comments.module.scss';

const commentSkeletons = Array.from({ length: 3 }, (_, i) => (
  <CommentCardSkeleton key={`skeleton-${i}`} />
));

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
    dataPerPage,
    totalPages,
    pageNumbers,
    setOffset,
    offset,
  } = usePagination(comments || [], 2);

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
            const isLast = index === visibleData.length - 1;
            return (
              <CommentCard
                key={`comment-${index}-${comment.name}`}
                ref={isLast ? commentRef : null}
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
                    <LoginModal>
                      <CommentLike
                        likes={comment.likes}
                        isLiked={comment.isLiked}
                      />
                    </LoginModal>
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
              setOffset(number);
              scrollToRefElement(commentRef);
            }}
            currentPage={offset}
            type="loadMore"
          />
        )}
      </>
    )
  );
};
