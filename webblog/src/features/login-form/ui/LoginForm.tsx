import { type FC } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

import { useForm, useLocalStorage } from '@shared/lib';
import { Button, Input } from '@shared/ui';

export const LoginForm: FC = () => {
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
      const continuePath = searchParams.get('continue') || '/';
      const cleanHash = window.location.hash.replace('#', '');

      navigate({
        pathname: continuePath,
        hash: cleanHash,
      });
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

      <Button onClick={() => {}} isSubmit>
        Login
      </Button>
    </form>
  );
};
