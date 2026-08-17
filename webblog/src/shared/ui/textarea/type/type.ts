import type { FontSizeType, FontWeightType } from '../../types';

export interface TextareaPropsType {
  label?: string;
  name?: string;
  className?: string;
  value?: string;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  isDisabled?: boolean;
  readOnly?: boolean;
  isRequired?: boolean;
}
