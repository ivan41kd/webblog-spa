import { useRouter } from 'next/navigation';
import type { FC } from 'react';

import { useAppDispatch, useAppSelector } from '@app/hooks';

import { mocks } from '@entities';
import { fetchCreatePost, fetchEditPost } from '@entities/post/model';
import type { PostContentDocType } from '@entities/post/type';

import { useForm } from '@shared/lib';
import { Button, Input } from '@shared/ui';

import { CreatePostEditor } from '../create-post-editor';

interface CreatePostFormPropsType {
  id?: string | number;
  title?: string;
  description?: string;
  content?: PostContentDocType;
}

export const CreatePostForm: FC<CreatePostFormPropsType> = ({
  id,
  title,
  description,
  content,
}) => {
  const { handleChange, formData, errors, validateForm } = useForm({
    defaultValues: {
      title: title ?? '',
      description: description ?? '',
      content: (content as unknown as string) ?? '',
    },
  });

  const router = useRouter();

  const { name } = useAppSelector((state) => state.auth);

  const posts = mocks.concat(
    localStorage.getItem('post')
      ? JSON.parse(localStorage.getItem('post') ?? '')
      : []
  );

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (title && content && id) {
      const editedPost = {
        id: id,
        title: formData.title || title,
        description: formData.description || (description as string),
        content:
          (formData.content as unknown as PostContentDocType) ||
          (content as unknown as PostContentDocType),
      };
      dispatch(fetchEditPost(editedPost));
      router.push(`/posts/${editedPost.id}`);
    } else {
      if (validateForm()) {
        const newPost = {
          id: Number(posts[posts.length - 1].id) + 1 + '',
          title: formData.title,
          description: formData.description,
          content: formData.content as unknown as PostContentDocType,

          author: {
            name: name ?? '',
            avatar: `https://placehold.co/80x80?text=${name?.substring(0, 2)}`,
          },
        };
        dispatch(fetchCreatePost(newPost));
        router.push(`/posts/${newPost.id}`);
      }
    }
  };

  const handleBlur = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    defaultValue: string = ''
  ) => {
    const valueObj = {
      target: { name: e.target.name, value: e.target.value || defaultValue },
    } as React.ChangeEvent<HTMLTextAreaElement>;
    handleChange(valueObj);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        size="lg"
        type="text"
        onChange={handleChange}
        value={formData.title}
        error={errors.title}
        placeholder="Title"
        name="title"
        variant="default"
        isRequired={!title}
        onBlur={(e) => {
          if (title) handleBlur(e, title);
        }}
      />
      <Input
        size="lg"
        type="text"
        onChange={handleChange}
        name="description"
        value={formData.description}
        error={errors.description}
        placeholder="Description"
        variant="default"
      />
      <CreatePostEditor
        name="content"
        value={formData.content}
        error={errors.content}
        onChange={handleChange}
        defaultValue={content}
      />
      <Button isSubmit> {title && content ? 'Save' : 'Create'}</Button>
    </form>
  );
};
