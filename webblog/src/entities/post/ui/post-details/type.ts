import type { PostContentType } from '@/entities/post/type/type';

export interface PostDetailsPropsType {
  title: string;
  description: string;
  content: PostContentType[];
  views: number;
  date: string;
}
