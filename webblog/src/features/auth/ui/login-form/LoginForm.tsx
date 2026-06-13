import { type FC } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

import { useForm, useLocalStorage } from '@shared/lib';
import { Button, Input } from '@shared/ui';

import styles from './login-form.module.scss';

type LoginFormPropsType = {
  isModal?: boolean;
};

export const LoginForm: FC<LoginFormPropsType> = ({ isModal = false }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setItem } = useLocalStorage();
  const { handleChange, formData, errors, validateForm } = useForm({
    defaultValues: { name: '', password: '' },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setItem('user', JSON.stringify(formData));
      const continuePath = searchParams.get('continue');
      const cleanHash = window.location.hash.replace('#', '');
      if (continuePath) {
        navigate({
          pathname: continuePath,
          hash: cleanHash,
        });
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        isModal ? navigate(0) : navigate('/');
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className={styles['login-form']}
      noValidate>
      <Input
        size="lg"
        type="text"
        onChange={handleInputChange}
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
        onChange={handleInputChange}
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
