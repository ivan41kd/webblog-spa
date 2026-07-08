import type { FC } from 'react';

import { useAppDispatch, useAppSelector } from '@app/store/rootReducer';

import { fetchPostComment } from '@entities';

import { useForm } from '@shared/lib';
import { Button, Textarea } from '@shared/ui';

interface CreateCommentPropsType {
  onCommentAdded: () => void;
}

export const CreateComment: FC<CreateCommentPropsType> = ({
  onCommentAdded,
}) => {
  const { name, isAuth } = useAppSelector((state) => state.auth);
  const { handleChange, formData, errors, validateForm, resetField } = useForm({
    defaultValues: { comment: '' },
  });
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm() && isAuth && name) {
      dispatch(
        fetchPostComment({
          name: name && name,
          text: formData.comment,
          date: new Date() + '',
        })
      );
      resetField('comment');
      onCommentAdded();
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Textarea
        isRequired
        name="comment"
        value={formData.comment}
        error={errors.comment}
        onChange={handleChange}
        placeholder="Write your comment"
      />
      <Button isSubmit>Add comment</Button>
    </form>
  );
};
