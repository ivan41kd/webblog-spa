import type { FontSizeType, FontWeightType } from '../../types';

export interface ButtonPropsType {
  children: React.ReactNode;
  className?: string;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  isDisabled?: boolean;
}
