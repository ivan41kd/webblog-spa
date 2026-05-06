import { useState } from 'react';

type FormDataType = { [key: string]: string };

type ErrorsType = { [key: string]: string };

export const useForm = ({ defaultValues }: { defaultValues: FormDataType }) => {
  const [formData, setFormData] = useState(defaultValues);
  const [errors, setErrors] = useState<ErrorsType>({});

  const getFieldError = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return !value.trim() ? 'Name is required' : '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!value.includes('@')) return 'Invalid email';
        return '';
      case 'password':
        if (!value.trim()) return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters';
        return '';
      case 'comment':
        return !value.trim() ? 'Comment is required' : '';
      default:
        return '';
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((formData) => ({ ...formData, [name]: value }));
    if (errors[name]) {
      setErrors((errors) => ({ ...errors, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    Object.keys(formData).forEach((key) => {
      const error = getFieldError(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const resetField = (name: string) => {
    setFormData((prev) => ({ ...prev, [name]: '' }));
  };

  return {
    formData,
    errors,
    handleChange,
    validateForm,
    setErrors,
    resetField,
  };
};
