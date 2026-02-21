import type { FontSizeType, FontWeightType } from '../../types/index';

export interface TitlePropsType {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: React.ReactNode;
  className?: string;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
}
