import type { PostContentDocType, PostContentType } from '@entities/post/type';

export interface PostDetailsPropsType {
  title: string;
  description?: string;
  content: PostContentType[] | PostContentDocType;
  views: number;
  date: string;
}
