import { useNavigate } from 'react-router';

import { Form } from '@/shared/ui';
import { FormInput } from '@/shared/ui';

import { useCookies } from '@/shared/lib';
import { useForm } from '@/shared/lib/useForm';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { addCookie } = useCookies();
  const { handleChange, formData, errors, setErrors, validateForm } = useForm({
    defaultValues: { name: '', password: '' },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      addCookie('user', JSON.stringify(formData), {
        path: '/',
        maxAge: 3600,
      });
      navigate('/');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  const inputs = [
    {
      input: (
        <FormInput
          type="text"
          onChange={handleInputChange}
          error={errors.name}
          placeholder="Name"
          name="name"
        />
      ),

      type: 'text',
    },
    {
      input: (
        <FormInput
          type="password"
          onChange={handleInputChange}
          error={errors.password}
          placeholder="Password"
          name="password"
        />
      ),
      type: 'password',
    },
  ];

  return <Form onSubmit={handleSubmit} inputs={inputs} buttonText="Login" />;
};
