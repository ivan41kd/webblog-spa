import type { FontSizeType, FontWeightType } from '../../types/index';
export interface InputPropsType {
  label?: string;
  name?: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  type?: 'text' | 'email' | 'password';
  isDisabled?: boolean;
  readOnly?: boolean;
  isRequired?: boolean;
  icon?: React.ReactNode | null;
  iconPlace?: 'left' | 'right';
  variant: 'default' | 'lined';
  isError?: boolean;
}
