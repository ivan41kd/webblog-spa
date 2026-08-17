import { type FC } from 'react';

import { useAppDispatch } from '@app/hooks';

import { useForm } from '@shared/lib';
import { Button, Input } from '@shared/ui';

import { login } from '../../../../model';
import styles from './login-form.module.scss';

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch();

  const { handleChange, formData, errors, validateForm } = useForm({
    defaultValues: { name: '', password: '' },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (validateForm()) {
      dispatch(login(formData));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']} noValidate>
      <Input
        size="lg"
        type="text"
        onChange={handleChange}
        value={formData.name}
        error={errors.name}
        placeholder="Name"
        name="name"
        variant="default"
        isRequired
      />
      <Input
        size="lg"
        type="password"
        onChange={handleChange}
        value={formData.password}
        error={errors.password}
        placeholder="Password"
        name="password"
        variant="default"
        isRequired
      />

      <Button isSubmit>Login</Button>
    </form>
  );
};
