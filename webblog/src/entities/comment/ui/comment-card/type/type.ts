export interface CommentCardPropsType {
  comment: string;
  user: string;
  avatar: string;
  likes: number;
  isLiked?: boolean;
  onLike: () => void;
}
