import { useState } from 'react';

type FormDataType = { [key: string]: string };

export const useForm = ({ defaultValues }: { defaultValues: FormDataType }) => {
  const [formData, setFormData] = useState(defaultValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateInput = (name: string, value: string) => {
    if (name === 'name') {
      if (!value.trim()) {
        setErrors({ ...errors, name: 'Name is required' });
      } else {
        setErrors({ ...errors, name: '' });
      }
    }

    if (name === 'email') {
      if (!value.trim()) {
        setErrors({ ...errors, email: 'Email is required' });
      } else if (!value.includes('@')) {
        setErrors({ ...errors, email: 'Invalid email' });
      } else {
        setErrors({ ...errors, email: '' });
      }
    }

    if (name === 'password') {
      if (!value.trim()) {
        setErrors({ ...errors, password: 'Password is required' });
      } else if (value.length < 8) {
        setErrors({ ...errors, password: 'Password must be at least 8 characters' });
      } else {
        setErrors({ ...errors, password: '' });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateInput(name, value);
  };

  const validateForm = (data: FormDataType) => {
    const errorsObj: { [key: string]: string } = {};
    if (data.name) {
      if (!data.name.trim()) {
        errorsObj.name = 'Name is required';
      }
    }
    if (data.email) {
      if (data.email && !data.email.trim()) {
        errorsObj.email = 'Email is required';
      } else if (!data.email.includes('@')) {
        errorsObj.email = 'Invalid email';
      }
    }

    if (!data.password.trim()) {
      errorsObj.password = 'Password is required';
    } else if (data.password.length < 8) {
      errorsObj.password = 'Password must be at least 8 characters';
    }

    return errorsObj;
  };

  return { formData, errors, handleChange, validateForm, setErrors };
};
