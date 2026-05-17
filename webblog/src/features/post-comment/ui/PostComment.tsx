import type { FC } from 'react';

import { useAppDispatch } from '@app/store/rootReducer';

import { fetchPostComment } from '@entities';

import { useForm, useLocalStorage } from '@shared/lib';
import { Button, Textarea } from '@shared/ui';

interface PostCommentPropsType {
  onCommentAdded: () => void;
}

export const PostComment: FC<PostCommentPropsType> = ({ onCommentAdded }) => {
  const { getItem } = useLocalStorage();
  const { handleChange, formData, errors, validateForm, resetField } = useForm({
    defaultValues: { comment: '' },
  });
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(
        fetchPostComment({
          name: getItem('user') && JSON.parse(getItem('user') as string).name,
          text: formData.comment,
          date: new Date() + '',
        })
      );
      resetField('comment');
      onCommentAdded();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Textarea
        isRequired
        name="comment"
        value={formData.comment}
        error={errors.comment}
        onChange={handleInputChange}
        placeholder="Write your comment"
      />
      <Button isSubmit>Add comment</Button>
    </form>
  );
};
