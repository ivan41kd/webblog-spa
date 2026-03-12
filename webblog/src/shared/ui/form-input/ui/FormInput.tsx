import { Input } from '@shared/ui';

interface FormInputProps {
  type: 'email' | 'password' | 'text';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  placeholder: string;
  name: string;
}

export const FormInput = ({ type, onChange, error, placeholder, name }: FormInputProps) => {
  return (
    <Input
      type={type}
      variant="lined"
      onChange={onChange}
      error={error}
      name={name}
      placeholder={placeholder}
      isRequired
    />
  );
};
