import type { JSONContent } from '@tiptap/react';
import type { FC } from 'react';
import { useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from '@app/store/rootReducer';

import { mocks as posts } from '@entities';
import { fetchCreatePost } from '@entities/post/model/slice';

import { useForm } from '@shared/lib';
import { Button, Input } from '@shared/ui';

import { CreatePostEditor } from '../create-post-editor';

export const CreatePostForm: FC = () => {
  const { handleChange, formData, errors, validateForm } = useForm({
    defaultValues: { title: '', description: '', content: '' },
  });

  const navigate = useNavigate();

  const { name } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (validateForm()) {
      const post = {
        ...formData,
        id: Number(posts[posts.length - 1].id) + 1 + '',
        title: formData.title,
        description: formData.description,
        content: formData.content as unknown as JSONContent,

        author: {
          name: name ?? '',
          avatar: `https://placehold.co/80x80?text=${name?.substring(0, 2)}`,
        },
      };
      dispatch(fetchCreatePost(post));
      navigate(`/posts/${post.id}`);
    }
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
        isRequired
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
      />
      <Button isSubmit>Create</Button>
    </form>
  );
};
