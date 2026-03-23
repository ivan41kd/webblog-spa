import type { FC } from 'react';
import { useNavigate } from 'react-router';

import { Button, Input } from '@/shared/ui';
import { useLocalStorage, useForm } from '@/shared/lib';

export const LoginForm: FC = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage();
  const { handleChange, formData, errors, setErrors, validateForm } = useForm({
    defaultValues: { name: '', password: '' },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setItem('user', JSON.stringify(formData));
      navigate('/');
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
      noValidate
    >
      <Input
        size="lg"
        type="text"
        onChange={handleInputChange}
        error={errors.name}
        placeholder="Name"
        name="name"
        variant="default"
      />
      <Input
        size="lg"
        type="password"
        onChange={handleInputChange}
        error={errors.password}
        placeholder="Password"
        name="password"
        variant="default"
      />
      <Button isSubmit>Login</Button>
    </form>
  );
};
