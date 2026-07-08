import type { JSONContent } from '@tiptap/react';

export interface PostContentType {
  text: string[];
}

export type PostContentDocType = JSONContent;

export interface PostAuthorType {
  name?: string;
  avatar?: string;
}

export interface PostCommentsType {
  name: string;
  avatar: string;
  text: string;
  likes: number;
  isLiked?: boolean;
  date: string;
}
export interface PostType {
  id: string | number;
  img?: string;
  title: string;
  tags?: string[];
  description?: string;
  author: PostAuthorType;
  content: PostContentType[] | PostContentDocType;
  isLiked?: boolean;
  views: number;
  likes: number;
  comments: PostCommentsType[];
  date: string;
}
