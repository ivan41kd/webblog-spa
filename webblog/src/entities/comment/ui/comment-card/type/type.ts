import type { Ref } from 'react';

export interface CommentCardPropsType {
  comment: string;
  user: string;
  avatar: string;
  likes: number;
  isLiked?: boolean;
  date: string;
  onLike: () => void;
  ref?: Ref<HTMLDivElement>;
}
