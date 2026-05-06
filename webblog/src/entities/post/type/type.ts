export interface PostContentType {
  text: string[];
}

export interface PostAuthorType {
  name: string;
  avatar: string;
}

export interface PostCommentsType {
  name: string;
  avatar: string;
  text: string;
  likes: number;
  isLiked?: boolean;
}
export interface PostType {
  id?: string;
  img: string;
  title: string;
  description: string;
  author: PostAuthorType;
  content: PostContentType[];
  isLiked?: boolean;
  views: number;
  likes: number;
  comments: PostCommentsType[];
  date: string;
}
