import type { FontWeightType } from '../../types';

export interface TextPropsType {
  className?: string;
  fontSize?: 'sm' | 'md' | 'lg';
  fontWeight?: FontWeightType;
  tag?: 'p' | 'span';
  children?: React.ReactNode;
}
